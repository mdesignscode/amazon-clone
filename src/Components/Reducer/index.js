import { FaRegUserCircle } from 'react-icons/fa';

export const initialState = {
  basket: [],
  user: null,
  username: 'sign in',
  userAvatar: FaRegUserCircle,
  resetUserAvatar () { this.userAvatar = FaRegUserCircle; }
};

// Selector
export const getBasketTotal = (basket) => basket
  ?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case 'REMOVE_FROM_BASKET':

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket];

      index > -1 && newBasket.splice(index, 1);

      return {
        ...state,
        basket: newBasket
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        username: action?.user ? action.user.email.slice(0, action.user.email.indexOf('@')) : 'sign in',
        userAvatar: action.user?.photoURL ? action.user.photoURL : FaRegUserCircle
      };

    default:
      return state;
  }
};

export default reducer;

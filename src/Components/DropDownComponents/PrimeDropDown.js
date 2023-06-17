import './primeDropDown.scss';
import PrimeFooter from '../../assets/Prime-Gateway-Flyout-Non-Member-Ph1-Multi-illustration-1000x1258_v2._CB437406087_.png';
import PrimeLogo from '../../assets/prime_logo_RGB_PRIME_OAT._CB439327201_.png';
import { Button } from 'react-bootstrap';

function PrimeDropDown ({ hidePrime }) {

  return (
    <div
      className="prime__dropdown"
      hidden={hidePrime}
    >
      <div className="prime__dropdownFlyer">
        <img
          src={PrimeLogo}
          alt="Amazon Prime Logo"
          className="prime__logo"
        />

        <span className="prime__slogan">
          Music.<br />Movies. Munchies.
        </span>

        <span className="prime__phrase">
          Shopping and entertainment all in one place.
        </span>

        <Button>Try Prime</Button>

        <span className="prime__footer">
          <img
            src={PrimeFooter}
            alt=""
            className="prime__footer"
          />
        </span>
      </div>
    </div>
  );
}

export default PrimeDropDown;

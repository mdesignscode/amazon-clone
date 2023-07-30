import './home.scss';

import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider';
import GridContainer from './GridContainer';
import { Button } from 'react-bootstrap';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Home () {
  const images = [
    {
      image: "https://m.media-amazon.com/images/I/71PQUvbf0tL._SX3000_.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/StockingStuffers/GW/Heros/DT/HOL22_GW_TallHero4_SSForAll_DT_2x._CB604914714_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/71x+opE1rAL._SX3000_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/61j2UudNFML._SX3000_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/71pg2LnUvKL._SX3000_.jpg",
    }

  ];

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductsList(json));
  }, []);

  const [{ user }] = useStateValue();

  return (
    <div className="home">
      <ImageSlider images={images} />

      {/* first row */}
      <div className="home__row">
        {/* Column */}
        <div className="home__rowColumn">
          <GridContainer
            title="Shop gifts by category"
            images={[
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_1_Sports-GG_1x._SY116_CB605505370_.jpg",
                category: "Sports",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_2_Home-GG_1x._SY116_CB605505370_.jpg",
                category: "Home",
                anchor: "https://www.amazon.com/gcx/Gifts-for-Home/gfhz/events/?categoryId=HGG-main&ref_=hol22_dt_hp_d_qc_hh2_hgg&pf_rd_r=R60T68ED82HDT8S3QEC0&pf_rd_p=dca80ddd-e66f-4592-84f0-01ebca35b982&pd_rd_r=a0fd8a0b-b084-4624-8345-886cf5a2468e&pd_rd_w=ObVCY&pd_rd_wg=w8UaF"
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_3_Electronics-GG_1x._SY116_CB605505370_.jpg",
                category: "Electronics",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_4_Toys-GG_1x._SY116_CB605505370_.jpg",
                category: "Toys",
              }
            ]}
            footer={{
              title: "Shop all gifts",
            }}
          />
        </div>

        {/* Column */}
        <div className="home__rowColumn">
          <GridContainer
            title="Top holiday gift picks"
            images={[
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_1_Shop-SS_1x._SY116_CB620171871_.jpg",
                category: "Stocking Stuffers",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_2_Shop-Toys_1x._SY116_CB619985159_.jpg",
                category: "Toys",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_3_Shop-Deals_1x._SY116_CB620171871_.jpg",
                category: "Holiday Deals",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_4_Shop-CML_1x._SY116_CB620171871_.jpg",
                category: "Most-loved Gifts",
              }
            ]}
            footer={{
              title: "Shop holiday gifts",
            }}
          />
        </div>

        {/* Column */}
        <div className="home__rowColumn last">
          <GridContainer
            title="Most-loved deals this season"
            images={[
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_MostLovedDeals_Version2_MenFashion_GW_QuadCard_Desktop_372x232_NE_1x_Batch3._SY116_CB606636678_.jpg",
                category: "Men's fashion",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_MostLovedDeals_Version2_WomenFashion_GW_QuadCard_Desktop_372x232_NW_1x_Batch3._SY116_CB606636678_.jpg",
                category: "Women's fashion",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_MostLovedDeals_Version2_Beauty_GW_QuadCard_Desktop_372x232_SE_1x_Batch3._SY116_CB620073257_.jpg",
                category: "Beauty",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_3_Shop-Deals_1x._SY116_CB620171871_.jpghttps://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_MostLovedDeals_Version2_Home_GW_QuadCard_Desktop_372x232_SW_1x_Batch3._SY116_CB606636678_.jpg",
                category: "Home",
              }
            ]}
            footer={{
              title: "Shop 4+ star deals",
            }}
          />
        </div>

        {/* Sign In */}
        {
          !user ? (
            <div className="home__rowSignIn grid__container">
              <span className="grid__containerTitle">Sign in for the best experience</span>
              <Link to="/signin">
                <Button>Sign in securely</Button>
              </Link>
            </div>
          ) : (
            <div className="home__rowColumn">
              <GridContainer
                title="The winter style edit"
                images={[
                  {
                    image: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/Premium_Brands/GW/OCT/GW_CATEGORY_QUAD_CARD/05_C1_HolidayPremium_QuadCatCard_Outerwear._SY116_CB608467963_.jpg",
                    category: "Cozy coats",
                  },
                  {
                    image: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/Premium_Brands/GW/OCT/GW_CATEGORY_QUAD_CARD/05_C2_HolidayPremium_QuadCatCard_Sweaters._SY116_CB608467963_.jpg",
                    category: "Sweaters",
                  },
                  {
                    image: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/Premium_Brands/GW/OCT/GW_CATEGORY_QUAD_CARD/05_C3_HolidayPremium_QuadCatCard_Bottoms._SY116_CB608467963_.jpg",
                    category: "Bottoms",
                  },
                  {
                    image: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/Premium_Brands/GW/OCT/GW_CATEGORY_QUAD_CARD/05_C4_HolidayPremium_QuadCatCard_Boots._SY116_CB608467963_.jpg",
                    category: "Boots",
                  }
                ]}
                footer={{
                  title: "Shop Premium Brands Fashion",
                }}
              />
            </div>
          )
        }

        {/* second row */}
        {/* Column */}
        <div className="home__rowColumn">
          <GridContainer
            title="Epic deals on holiday gifts"
            images={[
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W3_Computers_GW_QuadCard_DT_1x._SY116_CB606038001_.jpg",
                category: "Computers & more",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W3_Home_GW_QuadCard_DT_1x._SY116_CB606038001_.jpg",
                category: "Home",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W3_Toys_GW_QuadCard_DT_1x._SY116_CB605860537_.jpg",
                category: "Toys",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W3_PersonalCare_GW_QuadCard_DT_1x._SY116_CB606038001_.jpg",
                category: "Personal care",
              }
            ]}
            footer={{
              title: "Shop all deals",
            }}
          />
        </div>

        {/* Column */}
        <div className="home__rowColumn">
          <div className="grid__container dealOfTheDay">
            <div className="grid__containerTitle">Holiday Deal of the Day</div>

            <div className="grid__containerCategories">
              <div className="grid__containerCategory">
                <img
                  src="https://m.media-amazon.com/images/I/51tgoki2V3L._AC_SY230_.jpg"
                  alt="Book Covers"
                  className="grid__containerCategoryImage"
                />

                <span className="d-block topDeal">
                  <Button variant="danger" size="sm">$4.99 and under</Button>
                  <small className="text-danger">Top deal</small>
                  <span className="d-block">Today only: Pick your next read on Kindle</span>
                </span>
              </div>

              <span className="grid__containerCategoryFooter">
                See all deals
              </span>
            </div>
          </div>
        </div>

        {/* Column */}
        <div className="home__rowColumn">
          <GridContainer
            title="Shop by price"
            images={[
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/HOL22/GW/DQC/DEC/B1_DQC_DEC_AF_W_SBP_SWEATERS_186x116._SY116_CB605092748_.jpg",
                category: "Sweaters under $50",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/HOL22/GW/DQC/DEC/B2_DQC_DEC_AF_W_SBP_DRESSES_186x116._SY116_CB605092748_.jpg",
                category: 'Dresses under $30',
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/HOL22/GW/DQC/DEC/B3_DQC_DEC_AF_W_SBP_COATS_186x116._SY116_CB605092748_.jpg",
                category: 'Coats under $50',
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/HOL22/GW/DQC/DEC/B4_DQC_DEC_AF_W_SBP_SHOES_186x116._SY116_CB605092748_.jpg",
                category: 'Shoes under $50',
              }
            ]}
            footer={{
              title: "Shop women's fashion finds",
            }}
          />
        </div>

        {/* Column */}
        <div className="home__rowColumn">
          <GridContainer
            title="Most-loved holiday finds"
            images={[
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_CMLGifts4_Version2_HolidayDecor_GW_QuadCard_Desktop_372x232_SW_1x_Batch3._SY116_CB606647644_.jpg",
                category: "Cold-weather finds",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_CMLGifts4_Version2_ColdWeatherPicks_GW_QuadCard_Desktop_372x232_SE_1x_Batch3._SY116_CB606647644_.jpg",
                category: "Holiday décor",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_CMLGifts4_Version2_MostLovedDeals_GW_QuadCard_Desktop_372x232_NW_1x_Batch3._SY116_CB620073074_.jpg",
                category: "Deals",
              },
              {
                image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/Holiday/GW/QuadCards/DT/CML_Holiday_CMLGifts4_Version2_CMLGifts_GW_QuadCard_Desktop_372x232_NE_1x_Batch3._SY116_CB606647644_.jpg",
                category: "All links",
              }
            ]}
            footer={{
              title: "Shop all 4+ star gifts",
            }}
          />
        </div>
      </div>


      {
        productsList.length && <>
          <div className="home__products mt-2">
            <Product
              id={productsList[0].id}
              title={productsList[0].title}
              image={productsList[0].image}
              price={Math.floor(productsList[0].price)}
              rating={Math.floor(productsList[0].rating.rate)}
            />
            <Product
              id={productsList[10].id}
              title={productsList[10].title}
              image={productsList[10].image}
              price={Math.floor(productsList[10].price)}
              rating={Math.floor(productsList[10].rating.rate)}
            />
          </div>

          <div className="home__products">
            <Product
              id={productsList[11].id}
              title={productsList[11].title}
              image={productsList[11].image}
              price={Math.floor(productsList[11].price)}
              rating={Math.floor(productsList[11].rating.rate)}
            />
            <Product
              id={productsList[12].id}
              title={productsList[12].title}
              image={productsList[12].image}
              price={Math.floor(productsList[12].price)}
              rating={Math.floor(productsList[12].rating.rate)}
            />
            <Product
              id={productsList[14].id}
              title={productsList[14].title}
              image={productsList[14].image}
              price={Math.floor(productsList[14].price)}
              rating={Math.floor(productsList[14].rating.rate)}
            />
          </div>

          <div className="home__products">
            <Product
              id={productsList[13].id}
              title={productsList[13].title}
              image={productsList[13].image}
              price={Math.floor(productsList[13].price)}
              rating={Math.floor(productsList[13].rating.rate)}
            />
          </div>

          <div className="home__products">
            <Product
              id={productsList[5].id}
              title={productsList[5].title}
              image={productsList[5].image}
              price={Math.floor(productsList[5].price)}
              rating={Math.floor(productsList[5].rating.rate)}
            />
            <Product
              id={productsList[4].id}
              title={productsList[4].title}
              image={productsList[4].image}
              price={Math.floor(productsList[4].price)}
              rating={Math.floor(productsList[4].rating.rate)}
            />
          </div>

          <div className="home__products">
            <Product
              id={productsList[3].id}
              title={productsList[3].title}
              image={productsList[3].image}
              price={Math.floor(productsList[3].price)}
              rating={Math.floor(productsList[3].rating.rate)}
            />
            <Product
              id={productsList[2].id}
              title={productsList[2].title}
              image={productsList[2].image}
              price={Math.floor(productsList[2].price)}
              rating={Math.floor(productsList[2].rating.rate)}
            />
            <Product
              id={productsList[1].id}
              title={productsList[1].title}
              image={productsList[1].image}
              price={Math.floor(productsList[1].price)}
              rating={Math.floor(productsList[1].rating.rate)}
            />
          </div>

          <div className="home__products">
            <Product
              id={productsList[9].id}
              title={productsList[9].title}
              image={productsList[9].image}
              price={Math.floor(productsList[9].price)}
              rating={Math.floor(productsList[9].rating.rate)}
            />
          </div>
        </>}
    </div>
  );
}

export default Home;

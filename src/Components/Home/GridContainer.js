import './gridContainer.scss';

import React from 'react';

function GridContainer ({ title, images, footer: { title: footerTitle} }) {
  return (
    <div className="grid__container">
      <div className="grid__containerTitle">{title}</div>
      <div className="grid__containerCategories">
        {
          images.map(({ image, category }, i) => {
            return (
              <div
              key={`gcc_${i}`}
              className={
                `grid__containerCategory ${(
                  category === 'Stocking Stuffers' && 'stockingStuffers'
                  )}`
              }
            >
                  <img
                    src={image}
                    alt=""
                    className="grid__containerCategoryImage"
                  />
                  <span className="grid__containerCategoryTitle">{category}</span>
              </div>
            );
          })
        }

      </div>
        <span className="grid__containerCategoryFooter">{footerTitle}</span>
    </div>
  );
}

export default GridContainer;

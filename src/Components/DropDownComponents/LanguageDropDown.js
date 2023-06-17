import './languageDropDown.scss';
import React from 'react';

function LanguageDropDown ({ hideLanguages }) {

  return (
    <div
      hidden={hideLanguages}
      className="languages__dropdownMenu"
    >
      <form>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="language"
              value="english"
              checked={true}
              className="form-check-input"
            />
            <span className="languageOption">English - EN</span>
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="language"
              value="español"
              className="form-check-input"
            />
            <span className="spanish">
              <span className="languageOption">español - ES</span>
              <span className="moreOptions">Learn more</span>
            </span>
          </label>
        </div>

      </form>

      <span className="shoppingAt">🇺🇲 You are shopping on Amazon.com</span>
      <span className="moreOptions last">Change country/region.</span>
    </div>
  );
}

export default LanguageDropDown;

import React from 'react';
import i18n from 'i18next';

function LanguageSwitcher() {
  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <>
      <select onChange={changeLanguage}>
        <option value="default">🗺️</option>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </>
  );
}

export default LanguageSwitcher;

import React from 'react';

const Country = ({ country }) => {
  const {
    name,
    capital,
    population,
    languages,
    currencies,
    area,
    subregion,
    continents,
    borders,
    flags,
  } = country;

  // Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${name.common}`;

  // Format languages
  const languageList = languages ? Object.values(languages).join(', ') : 'N/A';

  // Format currencies
  const currencyList = currencies
    ? Object.values(currencies)
        .map((currency) => `${currency.name} (${currency.symbol})`)
        .join(', ')
    : 'N/A';

  // Format borders
  const borderList = borders ? borders.join(', ') : 'None';

  return (
    <div className="country">
      <img src={flags?.png} alt={`${name.common} flag`} />
      <h3>{name.common}</h3>
      
      <p><strong>Official name:</strong> {name.official}</p>
      <p><strong>Capital:</strong> {capital ? capital[0] : 'N/A'}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {languageList}</p>
      <p><strong>Currency:</strong> {currencyList}</p>
      <p><strong>Area (mi²):</strong> {area.toLocaleString()}</p>
      <p><strong>Subregion:</strong> {subregion}</p>
      <p><strong>Continents:</strong> {continents ? continents.join(', ') : 'N/A'}</p>
      <p><strong>Borders:</strong> {borderList}</p>
      
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        Show on Google Maps
      </a>
    </div>
  );
};

export default Country;

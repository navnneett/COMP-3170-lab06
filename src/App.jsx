import React, { useEffect, useState } from 'react';
import Countries from './components/Countries';
import FilterAndSort from './components/FilterAndSort';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [sortAlphabetical, setSortAlphabetical] = useState(false);
  const [top10Option, setTop10Option] = useState('');
  const [continent, setContinent] = useState('');
  const [subRegion, setSubRegion] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const filterCountries = () => {
    let result = [...countries];

    // Filter by continent
    if (continent) {
      result = result.filter(country => country.continents?.[0] === continent);
    }

    // Filter by subregion
    if (subRegion) {
      result = result.filter(country => country.subregion === subRegion);
    }

    // Sorting and top 10 filters
    if (top10Option) {
      result = result
        .sort((a, b) => (top10Option === 'population' ? b.population - a.population : b.area - a.area))
        .slice(0, 10);
    } else if (sortAlphabetical) {
      result.sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    setFilteredCountries(result);
  };

  useEffect(() => {
    filterCountries();
  }, [countries, sortAlphabetical, top10Option, continent, subRegion]);

  return (
    <div className="main-container">
      <h1>Countries of the World</h1>
      <FilterAndSort
        sortAlphabetical={sortAlphabetical}
        setSortAlphabetical={setSortAlphabetical}
        top10Option={top10Option}
        setTop10Option={setTop10Option}
        continent={continent}
        setContinent={setContinent}
        subRegion={subRegion}
        setSubRegion={setSubRegion}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default App;

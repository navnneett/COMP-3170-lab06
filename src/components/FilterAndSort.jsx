import React from 'react';

const FilterAndSort = ({
  sortAlphabetical,
  setSortAlphabetical,
  top10Option,
  setTop10Option,
  continent,
  setContinent,
  subRegion,
  setSubRegion
}) => {
  return (
    <div className="filter-sort-box">
      <h2>Filter and Sort</h2>
      
      <div className="filter-sections">
        {/* Section 1: Alphabetical Sorting */}
        <div className="filter-section">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={sortAlphabetical}
              onChange={() => setSortAlphabetical(!sortAlphabetical)}
            />
            Alphabetical
          </label>
        </div>

        {/* Section 2: Top 10 */}
        <div className="filter-section">
          <label>Top 10</label>
          <div className="checkbox-label">
            <label>
              <input
                type="checkbox"
                checked={top10Option === 'population'}
                onChange={() => setTop10Option(top10Option === 'population' ? '' : 'population')}
              />
              by population
            </label>
            <label>
              <input
                type="checkbox"
                checked={top10Option === 'area'}
                onChange={() => setTop10Option(top10Option === 'area' ? '' : 'area')}
              />
              by area
            </label>
          </div>
        </div>

        {/* Section 3: Filter by Continent */}
        <div className="filter-section">
          <label>
            By continent
            <select
              value={continent}
              onChange={(e) => {
                setContinent(e.target.value);
                setSubRegion(''); 
              }}
            >
              <option value="">All</option>
              <option value="Antarctica">Antarctica</option>
              <option value="North America">North America</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="South America">South America</option>
            </select>
          </label>
        </div>

        {/* Section 4: Filter by Subregion */}
        <div className="filter-section">
          <label>
            By subregion
            <select
              value={subRegion}
              onChange={(e) => {
                setSubRegion(e.target.value);
                setContinent(''); 
              }}
            >
              <option value="">Choose region</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Western Europe">Western Europe</option>
              <option value="Western Africa">Western Africa</option>
              <option value="Central Europe">Central Europe</option>
              <option value="Eastern Asia">Eastern Asia</option>
              <option value="Polynesia">Polynesia</option>
              <option value="Northern Africa">Northern Africa</option>
              <option value="Southern Europe">Southern Europe</option>
              <option value="South-Eastern Asia">South-Eastern Asia</option>
              <option value="Eastern Africa">Eastern Africa</option>
              <option value="Southern Africa">Southern Africa</option>
              <option value="Northern America">Northern America</option>
              <option value="Middle Africa">Middle Africa</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Western Asia">Western Asia</option>
              <option value="Northern Europe">Northern Europe</option>
              <option value="Melanesia">Melanesia</option>
              <option value="Central Asia">Central Asia</option>
              <option value="Southern Asia">Southern Asia</option>
              <option value="South America">South America</option>
              <option value="Australia and New Zealand">Australia and New Zealand</option>
              <option value="Central America">Central America</option>
              <option value="Eastern Europe">Eastern Europe</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSort;

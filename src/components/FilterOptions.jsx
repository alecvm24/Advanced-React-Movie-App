import React from "react";

const FilterOptions = ({ setFilter }) => {
  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        onChange={handleInputChange}
      />
    </div>
  );
};

FilterOptions.propTypes = {};

export default FilterOptions;

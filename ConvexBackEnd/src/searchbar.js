import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User input:', query);
    // You can handle the search logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter the title of your event that you want displayed on your flyer"
        style={{ width: '600px', height: '40px', fontSize: '16px', padding: '10px', textAlign: 'center', verticalAlign: 'middle' }}
      />
      <button type="submit" style={{ height: '40px', fontSize: '16px', padding: '10px 20px', marginLeft: '10px' }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;

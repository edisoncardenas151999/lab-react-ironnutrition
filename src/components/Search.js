import React, { useState } from 'react';
import { Input } from 'antd';

const Search = ({ food, setFood }) => {
  const [name, setName] = useState('');
  function handleChange(e) {
    setName(e.target.value);

    let match = food.filter((product) =>
      product.name.toLowerCase().includes(e.target.value)
    );
    setFood(match);
  }
  return (
    <div>
      <Input value={name} type="text" onChange={handleChange} />
    </div>
  );
};

export default Search;

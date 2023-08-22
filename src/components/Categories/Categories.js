import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categorie = useSelector((state) => state.categorie);

  return (
    <div>{ categorie }</div>
  );
};

export default Categories;

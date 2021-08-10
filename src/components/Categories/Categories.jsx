import React from 'react';
import './Categories.scss';
import { useSelector } from 'react-redux';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { categoriesSelectors } from '../../redux/category';

const Categories = () => {
  const categories = useSelector(categoriesSelectors.getAllUserCategory);

  return (
    <div className="categories-div">
      <button className="categories-btn" type="button">
        Add new category
      </button>
      <table className="categories-table">
        <thead className="categories-head">
          <tr>
            <th>№</th>
            <th>Category</th>
            <th>
              <EditIcon fontSize="small" />
            </th>
            <th>
              <DeleteIcon fontSize="small" />
            </th>
          </tr>
        </thead>

        <tbody className="categories-tbody-desctop">
          {categories.map(({ value, id }) => (
            <tr key={id}>
              <td></td>
              <td>{value}</td>
              <td>Change</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;

//table
// numerations
// all categoties
//icon change
//icon delete

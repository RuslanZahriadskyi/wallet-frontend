import axios from 'axios';
import {
  addNewCategoryRequest,
  addNewCategorySuccess,
  addNewCategoryError,
  getCategoryRequest,
  getCategorySuccess,
  getCategoryError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
} from './category-action';

const getCategories = () => async dispatch => {
  dispatch(getCategoryRequest());

  try {
    const { data } = await axios.get('/api/category');

    dispatch(getCategorySuccess(data.response.categories));
  } catch (error) {
    dispatch(getCategoryError(error.message));
  }
};

const createCategory = category => async dispatch => {
  dispatch(addNewCategoryRequest());
  try {
    const {
      data: {
        response: { newCategory },
      },
    } = await axios.post('/api/category', category);

    dispatch(addNewCategorySuccess(newCategory));
  } catch (error) {
    dispatch(addNewCategoryError(error.message));
  }
};

export { getCategories, createCategory };

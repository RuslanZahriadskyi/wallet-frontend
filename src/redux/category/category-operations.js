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

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWNjMTQ5ODQ4OGRkNjgyYzAwNGJkZCIsImlhdCI6MTYyNjIxMzA1MiwiZXhwIjoxNjI2MjQ5MDUyfQ.RQjQo_t_T057MV13Na1uDPm2nrGp3t7VfxwEszeH9-k';

axios.defaults.baseURL = 'https://own-wallet.herokuapp.com/';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unSet() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

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

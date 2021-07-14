import axios from 'axios';
import {
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
  getOperationsRequest,
  getOperationsSuccess,
  getOperationsError,
} from './operations-action';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZWNjMTQ5ODQ4OGRkNjgyYzAwNGJkZCIsImlhdCI6MTYyNjI3NzY4NiwiZXhwIjoxNjI2MzEzNjg2fQ.Zd4pSUyjV8zxgkDnxlZ0ponMV2_cbzsNyDFDyyQ1O6M';

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

const getOperations = () => async dispatch => {
  dispatch(getOperationsRequest());

  try {
    const {
      data: {
        response: { userOperations },
      },
    } = await axios.get('/api/operations');

    dispatch(getOperationsSuccess(userOperations));
  } catch (error) {
    dispatch(getOperationsError(error.message));
  }
};

const createOperation = category => async dispatch => {
  dispatch(addNewOperationRequest());
  try {
    const {
      data: {
        data: { newOperation },
      },
    } = await axios.post('/api/operations', category);

    dispatch(addNewOperationSuccess(newOperation));
  } catch (error) {
    dispatch(addNewOperationError(error.message));
  }
};

export { getOperations, createOperation };

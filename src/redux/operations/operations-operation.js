import axios from 'axios';
import {
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
  getOperationsRequest,
  getOperationsSuccess,
  getOperationsError,
} from './operations-action';

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

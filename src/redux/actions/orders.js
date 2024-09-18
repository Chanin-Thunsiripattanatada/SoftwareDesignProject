import {
    CREATE_ORDER,
    RETRIEVE_ORDERS,
    UPDATE_ORDER,
    DELETE_ORDER,

    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILURE,
} from "./types";
  
import OrderDataService from "../services/orders.service";

  
// Action for creating a order
export const createOrder = (token,data) => async (dispatch) => {
    try {
        const res = await OrderDataService.create(token,data);
  
        dispatch({
            type: CREATE_ORDER,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

// Action for retrieving all orders
export const retrieveOrders = (token, customerId) => async (dispatch) => {
    try {
        const res = await OrderDataService.getByCustomerId(token, customerId);
        dispatch({
            type: RETRIEVE_ORDERS,
            payload: res.data,  // Array of orders
        });
    } catch (err) {
        // Handle errors in more detail
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error('Error response:', err.response.data);
          console.error('Error status:', err.response.status);
          console.error('Error headers:', err.response.headers);
        } else if (err.request) {
          // Request was made but no response received
          console.error('Request error:', err.request);
        } else {
          // Other errors during request setup
          console.error('Error message:', err.message);
        }
    
        // Optionally, you can dispatch an action to set an error in the Redux store
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: err.message });
      }
};
  
// Action for updating a order
export const updateOrder = (token, id, data) => async (dispatch) => {
    try {
        const res = await OrderDataService.update(token, id, data);
  
        dispatch({
            type: UPDATE_ORDER,
            payload: data,
        });
  
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
  
// Action for deleting a order
export const deleteOrder = (token, id) => async (dispatch) => {
    try {
        await OrderDataService.delete(token, id);
  
        dispatch({
            type: DELETE_ORDER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};




const placeOrderRequest = () => ({
    type: PLACE_ORDER_REQUEST,
});

const placeOrderSuccess = (order) => ({
    type: PLACE_ORDER_SUCCESS,
    payload: order,
});

const placeOrderFailure = (error) => ({
    type: PLACE_ORDER_FAILURE,
    payload: error,
});

export const placeOrder = (token, customerId, orderData) => {
    return async (dispatch) => {
        dispatch(placeOrderRequest());
        try {
            const response = await OrderDataService.placeOrder(token, customerId, orderData);
            dispatch(placeOrderSuccess(response.data));
        } catch (error) {
            dispatch(placeOrderFailure(error.message));
        }
    };
};
  


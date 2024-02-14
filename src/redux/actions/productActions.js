import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

// const URL='http://localhost:8000';
const URL='https://flipkart-backend-wqdh.onrender.com';

export const getProducts=()=>async (dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/products`);
        // console.log(data);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data});
    }
    catch(error){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
        // console.log('Error while calling products api',error.message);
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        
        const { data } = await axios.get(`${URL}/product/${id}`);
        
        // console.log("dhgejdhegdj");
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        console.log('Error while calling get product details api',error.message);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message});
    }
};
import { INPUT_VALUE, ADD_LIST, DELETE_LIST, GET_LIST } from './actionTypes';
import axios from 'axios';
//调用请求方法
export const inputValueAction = (value) => ({ type: INPUT_VALUE, value });  //固定值
export const addListAction = () => ({ type: ADD_LIST });
export const deleteListAction = (value) => ({ type: DELETE_LIST, value });
export const getListAction = (value) => ({ type: GET_LIST, value });

export const getTodoListThunkAction = () => {
    return (dispatch) => {
        axios.get('http://60.205.153.211:3000/api/HomepageCategory')
            .then(res => {
                dispatch(inputValueAction(res.data.data));
                console.log(res)
            })
    }
};

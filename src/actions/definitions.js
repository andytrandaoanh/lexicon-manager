import axios from 'axios';
import { FETCH_DEFINITIONS } from './'
import { API_ROOT } from '../api/'

export const fetchDefinitions = (word) => async dispatch => {

	const response = await axios.get(`${API_ROOT}/definition/${word}`);

	const data = {search: word, items: response.data};
	
  	dispatch({type: FETCH_DEFINITIONS, payload: data});
};




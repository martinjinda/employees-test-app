import axios from 'axios';

export function getUsers() {
	return axios.get('')
		.then(response => response.data);
}
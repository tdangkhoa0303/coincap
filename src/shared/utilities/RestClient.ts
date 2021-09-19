import axios from 'axios';

export interface RestClientStatus {
	timestamp: string,
	error_code: number,
	error_message: string | null,
	elapsed: number,
	credit_count: number,
	notice: string | null,
	total_count: number
}

export interface RestClientResponse<TResponseData> {
	status: RestClientStatus,
	data: TResponseData
}

export default axios.create({
	baseURL: process.env.REACT_APP_PROXY_URL,
	withCredentials: false
});
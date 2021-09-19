import {combineReducers} from 'redux'
import coinsReducer from 'views/CoinDashboard.slice';

const rootReducer = combineReducers({
	coins: coinsReducer
})

export default rootReducer;
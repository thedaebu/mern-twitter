import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import sessionApiReducer from './session_api_reducer';
import currentUserReducer from './session_api_reducer';
import tweetsReducer from './tweets_reducer';
// import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
    session: sessionApiReducer,
    currentUser: currentUserReducer,
    tweets: tweetsReducer,
    errors: errorsReducer
});

export default RootReducer;
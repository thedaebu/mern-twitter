import { RECEIVE_TWEETS, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET } from '../actions/tweet_actions';
  
  const tweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    // let newTweets = {};
    switch(action.type) {
      case RECEIVE_TWEETS:
        newState.all = action.tweets.data;
        // action.tweets.forEach((tweet) => {
        //   newState.all[tweet.id] = tweet
        // })
        return newState;
        
        // action.tweets.forEach(tweet => {
        //   newTweets[tweet.id] = tweet
        // })
        // return Object.assign({}, state, newTweets);


      case RECEIVE_USER_TWEETS:
        newState.user = action.tweets.data;
        // action.tweets.forEach((tweet) => {
        //   newState.user[tweet.id] = tweet
        // })
        return newState;
        
        // action.tweets.forEach(tweet => {
        //   newTweets[tweet.id] = tweet
        // })
        // return Object.assign({}, state, newTweets);
        

        
      case RECEIVE_NEW_TWEET:
        newState.new = action.tweet.data
        // newState.new = action.tweet
        return newState;
        // return Object.assign({}, state, {[action.tweet.id]: action.tweet});
      default:
        return state;
    }
  };
  
  export default tweetsReducer;
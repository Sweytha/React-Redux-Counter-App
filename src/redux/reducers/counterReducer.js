// Our redux/reducers/counterReducer.js contains the code necessary to work the counter, including an increment, a decrement, and a reset. It also has a starting value of 0:
const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "RESET":
        return (state = 0);
      default:
        return state;
    }
  };
  
  export default counterReducer;
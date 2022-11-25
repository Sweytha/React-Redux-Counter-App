// In our redux/actions/index.js file, we define the actions that we will need for our application:
export const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  
  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  
  export const reset = () => {
    return {
      type: "RESET",
    };
  };
  
 
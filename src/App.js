// In src/App.js: 
import "./App.css";

// useSelector and useDispatch are the primary hooks necessary for interaction with the Redux store. See below for more information.
import { useSelector, useDispatch } from "react-redux";

// These are the actions we defined in our actions/index file, including the authorization and counter actions we need:
import { decrement, increment, reset} from "./redux/actions/index";

function App() {
  // These variable declarations call upon useSelector to access the state for the variables they're intended to affect. state.Counter represents the counter we've instantiated, and state.auth represents the boolean value of our authorization:
  const counter = useSelector((state) => state.counter);
  

  // In order to run an action from our reducer, we have to call the useDispatch hook. Setting useDispatch() as a variable makes that process easier, especially with how often it's repeated in a project that uses Redux:
  const dispatch = useDispatch();

  return (
    <div className="App" style={{ marginTop: "5em" }}>
      <h1>
        Here's a Simple Redux Page
        <br /> 
        <br /> 
        Use the buttons below to test the Redux store:
      </h1>
      <h3>Counter</h3>
    {/* As defined above, the counter element here is accessing the state of our project to show us the number currently stored in the counter variable. It will change, both in the store and on the screen, every time we click the buttons that affect it. */}
      <h3>{counter}</h3>
    {/* Here, we dispatch the increment action to add one to the counter. A dispatch call will always take in an action, and run it as a function. For functions that require arguments, we can pass them in the parentheses that follow the action. */}
      <button style={{ marginRight: "1em"}} onClick={() => dispatch(increment())}>+1 to the counter</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    {/* And here we pass decrement in the same way: */}
      <button style={{ marginLeft: "1em" }} onClick={() => dispatch(decrement())}>-1 to the counter</button>


    </div>
  );
}

export default App;
import Home from "./containers/Home";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <>
        <Home />
      </>
    </Provider>
  );
}

export default App;

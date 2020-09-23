import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import "normalize.css";

import rootReducer from "./redux/reducers";
import Theme from "./styled-components/theme";
import GlobalStyle from "./styled-components/GlobalStyle";
import App from "./App";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

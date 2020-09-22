import React from "react";
import { Provider } from "react-redux";
import Theme from "../styled-components/theme";
import GlobalStyle from "../styled-components/GlobalStyle";
import { compose, createStore } from "redux";
import rootReducer from "../redux/reducers";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const Wrapper = (props) => {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        {props.children}
      </Theme>
    </Provider>
  );
};

export default Wrapper;

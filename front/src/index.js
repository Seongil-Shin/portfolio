import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./modules/index.js";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);

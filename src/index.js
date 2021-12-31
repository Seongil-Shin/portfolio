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

const store =
   process.env.NODE_ENV !== "production"
      ? createStore(
           rootReducer,
           composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
        )
      : createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);

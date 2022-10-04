import { devToolsEnhancer } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux"; // just before passing to configure Store

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  /* preloadedState, */
  // old option    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //If you don't have enhancers or middleware in your application, there is a simpler approachn, just do as follow
  devToolsEnhancer() // use devToolsEnhancerLogOnlyInProduction() instead in production
  // Specify custom devTools options
);

export default store;

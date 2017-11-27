
//This component handles the App template used on every page

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HttpRequestInterceptor from 'way2go-httprequestinterceptor';
import * as routes from './routes';
import {projectId} from './Common/Constants/index';
import ListUsers from './ListUsers/ListUsers.js'
const Main = () => (
  <main id={projectId}>
      {routesObj}
  </main>
);
//console.log("routes", Routes);
let routesObj = [];
for (let index = 0; index < routes.routes.length; index++) {
  routesObj.push(
  <Route key={index} exact path={routes.routes[index].path} component={routes.routes[index].component} />
  );
}

export default Main;

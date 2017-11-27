import HomePage from "./Home/HomePage";
import ListUsers from "./ListUsers/ListUsers";
import AddorEditRole from "./AddorEditRole/AddorEditRole";
import EditUser from "./EditUser/EditUser";
import {projectId} from './Common/Constants/index';

const routePrefix = "/"+ projectId;

export const routes = [
    { path: getRouteWithPrefix("/"), component: HomePage },
    { path: getRouteWithPrefix("/ListUsers"), component: ListUsers },
    { path: getRouteWithPrefix("/manageRole/:methodName"), component: AddorEditRole },
    { path: getRouteWithPrefix("/EditUser/:id"),component: EditUser }
];

function getRouteWithPrefix(route) {
    return routePrefix + route;
}

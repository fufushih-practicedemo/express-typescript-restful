import Route from "./route";
import UserRoute from './user.route';
import PostRoute from "./post.route";

export const router: Array<Route> = [
    new UserRoute(),
    new PostRoute(),
];
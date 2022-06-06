import Route from "./route";
import { Request, Response } from "express"
import UserController from "../controllers/user.controller";

class UserRoute extends Route {
  private userController = new UserController();

  constructor() {
    super();
    this.prefix = '/api/v1/users';
    this.setRoutes();
  }

  protected setRoutes(): void {
      // Test API: /api/v1/users
      this.router.get('/', (req: Request, res: Response) => {
        res.send('Hello User');
      });

      this.router.post('/signup', this.userController.signup);
  }
}

export default UserRoute;
import { Request, Response } from "express"
import { IUser, userCreate } from "../services/user.service";

class UserController {
  async signup(req: Request, res: Response) {
    const { name, email, password} = req.body;
    const user: IUser = {name, email, password};

    try {
      await userCreate({name: name, email: email, password: password});
      res.status(200).json({
        "message": "success",
        user
      })
    } catch(err) {
      res.status(400).json({
        "message": "Create User failed",
      })
      console.log(err);
    }
  }
}

export default UserController;
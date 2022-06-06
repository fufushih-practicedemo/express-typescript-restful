import { AppDataSource } from "../../data.source";
import { TblUser } from "../models/entities/user.entities";

export interface IUser {
  name: string,
  email: string,
  password: string,
}

export const userCreate = async(user: IUser) => {
  try {
    const _newUser = new TblUser();
    _newUser['name'] = user['name'];
    _newUser['email'] = user['email'];
    _newUser['password'] = user['password'];

    return await AppDataSource().manager.save(_newUser);
  } catch(err) {
    return err;
  }
}

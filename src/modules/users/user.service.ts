import { UserModel } from '../user.model';
import { TUser } from './user.interface';

const creatUserIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  creatUserIntoDB,
};

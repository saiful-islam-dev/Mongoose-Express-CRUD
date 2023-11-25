import { UserModel } from '../user.model';
import { TUser } from './user.interface';

const creatUserIntoDB = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFormDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleuserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ userId: id });
  return result;
};

export const UserServices = {
  creatUserIntoDB,
  getAllUsersFormDB,
  getSingleuserFromDB,
};

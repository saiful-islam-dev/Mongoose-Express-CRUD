import { Request, Response } from 'express';
import { UserServices } from './user.service';

const user = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.creatUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: error,
    });
    // "error": {
    //     "code": 404,
    //     "description": "User not found!"
    // }
  }
};

const getaAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFormDB();
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleuserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: error,
    });
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteAUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: error,
    });
  }
};

export const UserControllers = {
  user,
  getaAllUsers,
  getSingleUser,
  deleteSingleUser,
};

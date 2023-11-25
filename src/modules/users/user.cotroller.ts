import { Request, Response } from 'express';
import { UserServices } from './user.service';

const user = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.creatUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went worng',
      error: error,
    });
  }
};

export const UserControllers = {
  user,
};

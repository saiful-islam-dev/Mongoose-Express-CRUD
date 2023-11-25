import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const user = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const zodParsedData = userValidationSchema.parse(user);
    const result = await UserServices.creatUserIntoDB(zodParsedData);
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

// const updateSingleUser = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const userIdNum = parseFloat(userId);
//     const updateData = req.body;
//     const checkUserExists = await UserModel.isUserExists(userIdNum);

//     if (!checkUserExists) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found',
//         error: {
//           code: 404,
//           description: 'User not found!',
//         },
//       });
//     }

//     const result = await UserService.updateSingleUserFromDB(
//       userIdNum,
//       updateData,
//     );

//     res.status(200).json({
//       success: true,
//       message: 'User update Successfully',
//       data: result,
//     });
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//       error: err,
//     });
//   }
// };

export const UserControllers = {
  user,
  getaAllUsers,
  getSingleUser,
  deleteSingleUser,
  //   updateSingleUser,
};

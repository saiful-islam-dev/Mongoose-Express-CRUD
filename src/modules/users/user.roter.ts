import express from 'express';
import { UserControllers } from './user.cotroller';

const router = express.Router();

router.post('/users', UserControllers.user);

router.get('/users', UserControllers.getaAllUsers);

router.get('/users/:userId', UserControllers.getSingleUser);

router.delete('/users/:userId', UserControllers.deleteSingleUser);

router.put('/users/:userId', UserControllers.updateSingleUser);

router.put('/users/:userId/orders', UserControllers.addProductToUser);

export const UserRoute = router;

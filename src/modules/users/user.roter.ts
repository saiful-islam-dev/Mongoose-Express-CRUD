import express from 'express';
import { UserControllers } from './user.cotroller';

const router = express.Router();

router.post('/users', UserControllers.user);

router.get('/users', UserControllers.getaAllUsers);

router.get('/users/:userId', UserControllers.getSingleUser);

export const UserRoute = router;

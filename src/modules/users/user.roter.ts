import express from 'express';
import { UserControllers } from './user.cotroller';

const router = express.Router();

router.post('/users', UserControllers.user);

export const UserRoute = router;

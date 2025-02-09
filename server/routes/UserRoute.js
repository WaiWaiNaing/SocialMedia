import express from 'express';
import { deleteUser, followerUser, getUser, unfollowUser, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followerUser);
router.put('/:id/unfollow', unfollowUser);


export default router;
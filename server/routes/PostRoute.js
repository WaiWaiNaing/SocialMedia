import express from 'express';
import { createPost, deletePost, getPosts, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js';

const router = express.Router();

router.post('/', createPost);
router.get('/:id', getPosts);
router.put('/:id', updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);

export default router;

import express from 'express'
import userController from '../controllers/user.controller.js'
import { ValidateUserId } from '../middlewares/validate.middleware.js'

const router = express.Router()

router.get('/', userController.GetAll)
router.get('/:id', ValidateUserId, userController.GetById)
router.post('/', userController.postUser)
router.put('/:id', ValidateUserId, userController.putUser)
router.delete('/:id', ValidateUserId, userController.deleteUser)

export default router;

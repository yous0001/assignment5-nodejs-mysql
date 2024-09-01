import { Router } from "express";
import * as userController from "./user.controller.js"

const router =Router()
router.get('/',userController.getUsers)
router.post('/signup',userController.signUp)
router.post('/signin',userController.signin)

export default router
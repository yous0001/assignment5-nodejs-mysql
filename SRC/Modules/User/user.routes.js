import { Router } from "express";
import * as userController from "./user.controller.js"

const router =Router()
router.get('/',userController.getUsers)
router.post('/signup',userController.signUp)
router.post('/signin',userController.signin)
router.put('/updateUser',userController.updateUser)
router.delete('/deleteUser',userController.deleteUser)
router.get('/searchforuser',userController.searchForUser)
router.get('/getoldestusers',userController.getOldestUsers)
router.get('/searchforusersbyages',userController.searchForUsersByAges)

export default router
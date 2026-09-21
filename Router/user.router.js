import { Router } from "express";
import { login,signup } from "../controller/user.controller.js";
import Verification from "../middleware/midaleware.js";
const UserRouter = Router()

UserRouter.post('/login',Verification,login)
UserRouter.post('/signup',signup)


export default UserRouter
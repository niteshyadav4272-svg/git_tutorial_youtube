import { Router } from "express";
import { downloadFile } from "../controller/download.controller.js";
import Verification from "../middleware/midaleware.js";
const downloadRouter = Router()

downloadRouter.get('/download/:id', Verification,downloadFile)


export default downloadRouter
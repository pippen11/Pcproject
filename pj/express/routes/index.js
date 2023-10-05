import express from "express";
const router = express.Router();

import regist from "./regist.js";

router.use("/regist", regist);

export default router;

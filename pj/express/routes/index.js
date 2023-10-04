import express from "express";
const router = express.Router();

import regist from "./regist.js";

console.log("re확인");

router.use("/regist", regist);

export default router;

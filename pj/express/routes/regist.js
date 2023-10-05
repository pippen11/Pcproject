import express from "express";
import multer from "multer";
const router = express.Router();
import { User } from "../models/index.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/confirm", upload.single("upload"), async (req, res) => {
  console.log(req.body.id);
  try {
    await User.create({
      name: req.body.name,
      userid: req.body.id,
      pw: req.body.pw,
    });
    res.send("성공");
  } catch (error) {
    console.log(error);
    res.send("실패");
  }
});

export default router;

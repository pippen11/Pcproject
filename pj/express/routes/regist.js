import express from "express";
// import multer from "multer";
const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

router.post("/confirm", async (req, res) => {
  console.log(req.body);
  try {
    res.send("성1공");
  } catch (error) {
    console.log(error);
    res.send("실패");
  }
});

export default router;

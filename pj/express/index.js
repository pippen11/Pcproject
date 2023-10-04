import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";

// import db, { sequelize } from "./models/index.js";

import routes from "./routes/index.js";
dotenv.config();

const app = express();

app.use("/upload", express.static("upload"));

// app.set("port", process.env.PORT || 8080);

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cors({ origin: true, credential: true }));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

// db.sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("db connected");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

app.use("/api", routes);

// app.listen(app.get("port"), () => {
//   console.log(`${app.get("port")}번 포트에 서버 오픈`);
// });

app.listen(8080, () => {
  console.log("Server Opened");
});

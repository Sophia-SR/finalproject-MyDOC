import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 4000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //only allow requests from domain upon deployment
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

const router = express.Router();
const externalRouter = express.Router();

router.get("/", async (request, response) => {
  const doulaList = await db.getDoulas();
  console.log("it worked!");
  response.status(200).json(doulaList);
});

externalRouter.get("/nhs_pregnancy", async (request, response) => {
  const nhsResponse = await fetch("https://api.nhs.uk/pregnancy/week-by-week/1-to-12/");
  const data = await nhsResponse.json();
  console.log("nhs endpoint here");
  console.log(nhsResponse);
  response.status(200).json(data);
});

router.use(express.json());
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let insertQuery = `INSERT INTO parents (first_name, last_name, phone_number, email) VALUES ( $1, $2, $3, $4)`;
    await db.none(insertQuery, [
      req.body.first_name,
      req.body.last_name,
      req.body.phone_number,
      req.body.email,
    ]);
    console.log(req.body.firstName);
    res.json({
      payload: req.body,
      message: "Parent Added",
    });
  } catch (error) {
    console.log(error);
  }
});
// router.post("/", async (request, response) => {
//   const { name } = request.body;
//   const task = await db.addTask(name);
//   response.status(201).json(task);
// });

app.use("/api/doulas", router);

app.use("/external", externalRouter);

process.env?.SERVE_REACT?.toLowerCase() === "true" &&
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});

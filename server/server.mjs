import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

const app = express();
const port = process.env.PORT || 4000;

const router = express.Router();

router.get("/", async (request, response) => {
  const doulaList = await db.getDoulas();
  response.json(doulaList);
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
      message: "Contact Added",
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (request, response) => {
  const { name } = request.body;
  const task = await db.addTask(name);
  response.status(201).json(task);
});

app.use("/api/doulas", router);

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

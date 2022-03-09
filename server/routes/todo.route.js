const router = require("express").Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("willkommen");
  const queryString = `SELECT * FROM "list"`;
  pool
    .query(queryString)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("/todo POST:", req.body);
  const queryString = `INSERT INTO "list"("tasks") VALUES( $1 );`;
  const values = [req.body.tasks];
  pool
    .query(queryString, values)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  console.log("/todo Delete:", req.params);
  res.send("delete!");
  // const queryString = `INSERT INTO "list"("tasks") VALUES( $1 );`;
  // const values = [req.body.tasks];
  // pool
  //   .query(queryString, values)
  //   .then((results) => {
  //     res.send(results.rows);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.sendStatus(500);
  //   });
});

module.exports = router;

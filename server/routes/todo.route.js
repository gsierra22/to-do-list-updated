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
  const queryString = `DELETE FROM "list" WHERE ID=$1;`;
  const values = [req.params.id];
  pool
    .query(queryString, values)
    .then((results) => {
      res.send("delete route!");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  console.log("/todo PUT:", req.params);
  const queryString = `UPDATE "list" SET "task_completed"=true WHERE id=$1;`;
  const values = [req.params.id];
  pool
    .query(queryString, values)
    .then((results) => {
      res.send("put route!");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;

const express = require("express");
const todoCtrl = require("../todos/todo-controller");

const router = express.Router();

router
  .route("/insert")
  .get((...params) => todoCtrl.insert(...params))

router
  .route("/update")
  .get((...params) => todoCtrl.update(...params))

router
  .route("/delete")
  .get((...params) => todoCtrl.delete(...params))

router
  .route("/list")
  .get((...params) => todoCtrl.list(...params))  

router
  .route("/todos")
  .get((...params) => todoCtrl.list(...params))
  .post((...params) => todoCtrl.create(...params));

router
  .route("/todos/:id")
  .delete((...params) => todoCtrl.removeById(...params));

module.exports = router;

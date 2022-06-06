const createError = require("http-errors");
const _ = require("lodash");
const redshiftClient = require("../../config/redshift");
const Todo = require("./todo-model");

exports.insert = async (req, res, next) => {
  const insertQuery = 'INSERT INTO brands (brand) values (\'brands FR\')';
  const data = await redshiftClient.query(insertQuery);
  console.log(data);
  const result = (data.rowCount === 1) ? 'Insert Done' : 'Failed';
  return res.json({response: result});
};

exports.update = async (req, res, next) => {
  const updateQuery = 'UPDATE brands set brand =  \'updated brand\' WHERE id = 1';
  const data = await redshiftClient.query(updateQuery);
  console.log(data);
  const result = (data.rowCount === 1) ? 'Update Done' : 'Failed';
  return res.json({response: result});
}  

exports.delete = async (req, res, next) => {
  const deleteQuery = 'DELETE FROM brands WHERE id = 3';
  const data = await redshiftClient.query(deleteQuery);
  console.log(data);
  const result = (data.rowCount === 1) ? 'Delete Done' : 'Failed';
  return res.json({response: result});
}  

exports.list = async (req, res, next) => {
  const selectQuery = 'SELECT * FROM brands LIMIT 10';
  const data = await redshiftClient.query(selectQuery);
  console.log(data);
  return res.json({response: data.rows});
}  

var express = require('express');
var router = express.Router();
var User = require('./users');
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/create', async function(req, res) {
  const createdUser = await User.create({
    username: 'Divyu',
    name: 'Divya',
    age: 19
  });
  console.log(createdUser);
  res.send(createdUser);
});
router.get('/read', async function(req, res) {
  const readUser = await User.find();
  console.log(readUser);
  res.send(readUser);
});
router.get('/read', async function(req, res) {
  const readUser = await User.findOne({username: "divyansh"});
  console.log(readUser);
  res.send(readUser);
});
router.get('/delete', async function(req, res) {
  const deletedUser = await User.findOneAndDelete({username: "Divyanshu"});
  console.log(deletedUser);
  res.send(deletedUser);
});
router.get('/update', async function(req, res) {
  const updatedUser = await User.findOneAndUpdate({username: "Divyanshu"}, {age: 30});
  console.log(updatedUser);
  res.send(updatedUser);
});

module.exports = router;

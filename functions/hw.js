exports.helloWorld = function helloWorld(req, res) {
  console.log(req.body.message);
  res.status(200).send("Hello World");
};

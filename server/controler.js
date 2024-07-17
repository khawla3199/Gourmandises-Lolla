const {pastry}= require("./pastry");


// exports.createOne = function (req, res) {
//   console.log(req.body)
//   const {name,caracter,price,description,imageUrl}=req.body
//   const pastry={name,caracter,price,description,imageUrl}
//  add(pastry)
//  console.log(pastry)
//  .then((response)=>{
//   res.status(200).send(response)
// })
// .catch((err)=>{
//   res.status(500).send(err)
// });
// };



exports.create = function (req, res) {
  pastry.insertMany(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.retrieve = function (req, res) {
  return pastry.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.retrieveOne = function (req, res) {
  return pastry.findOne({ number: req.params.number })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("not found");
    });
};

exports.updateOne = function (req, res) {
  pastry.findOneAndUpdate({_id: req.params.id }, req.body)
    .then(() => {
      console.log("updated successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteOne = function (req, res) {
  pastry.findOneAndDelete({_id: req.params.id })
    .then(() => {
      res.send("deleted successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
};

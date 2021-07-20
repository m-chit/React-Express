const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({})

const deviceSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional().allow(null, ''),
  disabled: Joi.bool().required(),
})

const idSchema = Joi.object({
  id: Joi.string().required(),
})

let database = [
  {
    "id": "36f0f0e8-e7ed-11eb-ba80-0242ac130004",
    "name": "Alice",
    "description": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
    "disabled": true
  },
  {
    "id": "3fe45398-e7ed-11eb-ba80-0242ac130004",
    "name": "Bob",
    "description": "Lorem Ipsum",
    "disabled": false
  },
  {
    "id": "461d90d0-e7ed-11eb-ba80-0242ac130004",
    "name": "Carol",
    "description": "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    "disabled": true
  },
  {
    "id": "4d228232-e7ed-11eb-ba80-0242ac130004",
    "name": "Marta",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    "disabled": true
  },
  {
    "id": "4d228232-e7ed-11eb-ba80-0242bc130004",
    "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "disabled": false
  }
]

router.get("/get", (req, res, next) => {
  res.status(200).json({
    message: "Get fetched succesfully",
    devices: database
  })
})

router.post("/post", validator.body(deviceSchema), (req, res, next) => {
  const device = {
    "id": req.body.id,
    "name": req.body.name,
    "description": req.body.description,
    "disabled": req.body.disabled
  };

  database.push(device)
  res.status(200).json({
    message: "Created",
    device: device
  })
})

router.delete("/delete", validator.body(idSchema), (req, res, next) => {
  const { id } = req.body
  const isDevice = database.some(device => device.id === id)
  if(isDevice) {
    next()
  } else {
    res.status(404).json({
      message: "Deleted failed",
    })
  }
  database = database.filter(device => device.id !== id)
  res.status(200).json({
    message: "Deleted succesfully",
    deviceId: id
  })
})

router.put("/put", validator.body(deviceSchema), (req, res, next) => {
  const device = {
    "id": req.body.id,
    "name": req.body.name,
    "description": req.body.description,
    "disabled": req.body.disabled
  };

  database = database.filter(device => device.id !== req.body.id)
  database.push(device)
  res.status(200).json({
    message: "Changed",
    device: device
  })
})

module.exports = router;

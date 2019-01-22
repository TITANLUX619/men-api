'use strict';

const Object = require('../models/object');

function getObject(req, res) {
  console.log(`POST /api/v1/object/:objectId: ${req.params.objectId}`);
  const objectId = req.params.objectId;

  Object.findById(objectId, (err, object) => {
    if (err) {
      return res.status(500).send({ message: `Error accesing database: ${err}` });
    } else if (!object) {
      return res.status(404).send({ message: 'Object not found' }); 
    } 
    return res.status(200).send({ object });
  });
}


function getObjects(req, res) {
  Object.find({}, (err, objects) => {
    if (err) {
      return res.status(500).send({ message: `Error accesing database: ${err}` });
    } 
    return res.status(200).send({ objects });
  });
}


function saveObject(req, res) {
  console.log('POST /api/v1/object:');
  console.log(req.body);

  const object = new Object();
  object.prop1 = req.body.prop1;
  object.prop2 = req.body.prop2;

  object.save((err, objectStored) => {
    if (err) {
      return res.status(500).send({ message: `Error accesing database: ${err}` });
    } 
    return res.status(200).send({ object: objectStored });
  });
}

function saveObject405(req, res) {
  console.log(`POST /api/v1/object/${req.params.param}`);
  return res.status(405).send({ message: 'Operation not allowed' });
}


function updateObject(req, res) {
  console.log(`UPDATE /api/v1/object/:objectId: ${req.params.objectId}`);
  const objectId = req.params.objectId;
  const update = req.body;

  if (objectId !== req.body.id || Object.keys(update) !== 3) {
    return res.status(405).send({ message: 'Bad request' });
  } 
  Object.findByIdAndUpdate(objectId, update, (err, objectUpdated) => {
    if (err) {
      return res.status(500).send({ message: `Error accesing database: ${err}` });
    } 
      return res.status(200).send({ object: objectUpdated });
  });
}

function updateObject405(req, res) {
  console.log('UPDATE /api/v1/object');
  res.status(405).send({ message: 'Operation not allowed' });
}


function deleteObject(req, res) {
  console.log(`DELETE /api/v1/object/:objectId: ${req.params.objectId}`);
  const objectId = req.params.objectId;

  Object.remove({ _id: objectId }, (err, numDel) => {
    console.log(numDel);
    
    if (err) {
      return res.status(500).send({ message: `Error accesing database: ${err}` });
    } else if (numDel.n === 0) {
      return res.status(404).send({ message: 'Object not found' }); 
    } 
    return res.status(200).send({ message: 'Object deleted' });  
  });
}


module.exports = {
  getObject,
  getObjects,
  saveObject,
  saveObject405,
  updateObject,
  updateObject405,
  deleteObject
};

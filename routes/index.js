'use strict';

const express = require('express');
const objectController = require('../controllers/objectController');

const router = express.Router();


router.get('/object', objectController.getObjects);

router.get('/object/:objectId', objectController.getObject);

router.post('/object', objectController.saveObject);

router.post('/object', objectController.saveObject);

router.post('/object/:param', objectController.saveObject405);

router.put('/object/:objectId', objectController.updateObject);

router.put('/object', objectController.updateObject405);

router.delete('/object/:param1', objectController.deleteObject);


module.exports = router;

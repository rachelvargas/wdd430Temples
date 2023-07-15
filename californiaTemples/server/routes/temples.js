var express = require('express');
var router = express.Router();
var sequenceGenerator = require('./sequenceGenerator');

const app = express();

const Temple = require('../models/temple');

  router
  .get('/', (req, res, next) => {
    Temple
    .find()
    .populate('group')
    .then(temples => {
      res.status(200).json({
         message: "Temples fetched successfully!",
         temples: temples
      });

   })
   .catch(error => {
      rest.status(500).json({
         message: 'An error occurred',
         error:error
      });
   });
});

   router
   .get('/:id', (req, res, next) => {
     Temple
     .findOne({
      "id": req.params.id
     })
     .populate('group')
     .then(temple => {
       res.status(200).json({
          message: "Temple fetched successfully!",
          temple: temple
       });
    })
    .catch(error => {
       res.status(500).json({
          message: 'An error occurred',
          error:error
       });
    });

}); 

router
.post('/', (req, res, next) => {
   const maxTempleId = sequenceGenerator.nextId("temples");

   const temple = new Temple({
    id: maxTempleId,       
    name: req.body.name,
    address:req.body.address,
    phone: req.body.phone,
    imageUrl: req.body.imageUrl,
    group: req.body.group

   });
   temple
   .save()
   .then(createdTemple => {
      res.status(201).json({
        message: 'Temple added successfully',
        temple: createdTemple
      });
   })
   .catch(error => {
      res.status(500).json({
         message: 'An error occurred',
         error:error
      });
   });
});

router
.put('/:id', (req, res, next) => {
  Temple
  .findOne({ id: req.params.id})
  .then(temple => {
    temple.name = req.body.name;
    temple.address = req.body.address;
    temple.phone = req.body.phone;
    temple.imageUrl = req.body.imageUrl;
    temple.group = req.body.group;
    
    Temple
    .updateOne({id: req.params.id}, temple)
    .then(result => {
        res.status(204).json({
        message: 'Temple updated successfully'
        })
    })
    .catch(error => {
        res.status(500).json({
        message: 'An error ocurred',
        error: error
        });
    });
})
.catch(error => {
    res.status(500).json({
        message: 'Temple not found',
        error: {temple: 'Temple not found'}
    });
});
});

router
.delete("/:id", (req, res, next) => {
  Temple
   .findOne({ id: req.params.id })
   .then(temple => {
      Temple
      .deleteOne({ id: req.params.id})
   .then(result => {
      res.status(204).json({
         message: "Temple deleted successfully"
      });
   })
   .catch(error => {
      res.status(500).json({
         message: 'An error ocurred',
         error: error
      });
   })
})
.catch(error => {
   res.status(500).json({
      message: 'Temple not found',
      error: { temple: 'Temple not found' }
   });
});
});
    
module.exports =  router;
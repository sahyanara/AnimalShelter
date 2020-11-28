var { response } = require('express');
var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

async function group(client) {
  var petsCollection = client.db('Animal_Shelter').collection('Pets');
  return await petsCollection.aggregate(
    [
      {
        $group:
        {
          _id: { $species: '$species' },
          pets: {
            $push: {
              id: '$id', name: '$name', breed: '$breed', status:
                '$status', gender: '$gender', yearsOld: '$yearsOld', adopted: '$adopted'
            }
          }
        }
      }
    ]
  )
}

module.exports = router;

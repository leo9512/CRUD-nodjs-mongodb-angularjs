var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

user = require("./models/user");
var router = express.Router(); 

//connect to Mongo
mongoose.connect("mongodb://leodaza1995:95121720362Leo@ds135540.mlab.com:35540/prueba");
var db = mongoose.connection;

//Creación de usuarios
router.route('/users').post(function (req, res) {  
    var us = new user();  
    us.name = req.body.name;  
    us.year = req.body.year;  
    us.email=req.body.email;
    us.password=req.body.password;
    us.rol = req.body.rol;  
    us.save(function (err) {  
        if (err) {  
            res.send(err);  
        }  
        res.send({ message: 'Usuario creado con exito !' })  
    })  
});
//Consulta de usuarios
router.route('/users').get(function (req, res) {
    user.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.send(users);
    });
});
//Consulta de usuaruio en especifico
router.route('/users/:user_id').get(function (req, res) {
    user.findById(req.params.user_id, function (err, us) {
        if (err)
            res.send(err);
        res.json(us);
    });
});
//Actualización de un usuario
router.route('/users/:user_id').put(function (req, res) {

    user.findById(req.params.user_id, function (err, us) {
        if (err) {
            res.send(err);
        }
        us.name = req.body.name;
        us.email=req.body.email;
        us.password=req.body.password;
        us.year = req.body.year;
        us.rol = req.body.rol;
        us.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});
//Borrar un usuario
router.route('/users/:user_id').delete(function (req, res) {
    user.remove({ _id: req.param.user_id }, function (err, us) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
app.use("/",router);
app.listen(3000);
console.log("Aplicación corriendo en el puerto 3000!!!")
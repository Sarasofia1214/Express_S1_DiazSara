// Dia 1
// importacion de express en variable app
const express = require ('express');
const app = express();

//Anidar para que todo sea JSON
app.use(express.json());
require('dotenv').config();

// Definir el puerto
const PORT= process.env.PORT;

//Ruta principal
app.get('/', (req,res) => {
    res.send('hola');
});

app.get('/mensaje1', (req,res) => {
    res.send('Otro endpointttt :)');
});

app.get('/mensaje2', (req,res) => {
    let jsonsito = ({
        "mensaje": "Malu"
    });
    res.json(jsonsito)
});

// Ruta con el endpoint /parametro
app.get('/mensajePersonalizado/:nombre',(req,res) =>{
    const nombre = req.params.nombre;
    res.send(`hola ${nombre}`);
});

app.post('/mensajeJSON', (req,res) =>{
    const menJSON = req.body;
    res.send(`Hola ${menJSON["nombre"]} que cuenta con ${menJSON["edad"]} años`)
})

//Inicilizar
app.listen(PORT, ()=>{
    console.log("Servidor iniciado");
});
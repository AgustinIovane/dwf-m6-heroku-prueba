import * as  express from "express"

const app = express()

const port = process.env.PORT || 3000;


app.get("/hola", (req, res) => {
    res.json({
        message: "hola soy Iovane",
    });
});

app.listen(port, () => {
    console.log("hola soy express y estoy corriendo en el puerto" + port);

});



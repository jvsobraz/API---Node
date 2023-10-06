import express from "express";
import mongoose from "mongoose";

import User from "./models/User.js"

const app = express();

app.use(express.json());

app.get("/users", async (request, response) => {
    const users = await User.find()
    
    return response.status(200).json(users);
});

app.post("/users", async (request, reposnse) => {
    const user = request.body

    const newUser = await User.create(user)

    return reposnse.status(201).json(newUser);
});

mongoose.connect("mongodb+srv://jvsobraz:Jv278194*@cluster0.kdc5db7.mongodb.net/")
    .then(() => console.log("Banco de Dados conectado!"))
    .catch(() => console.log("Deu ruim!"))
app.listen(3000);

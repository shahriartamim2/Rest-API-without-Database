import express from "express";
import { getUsers, createUser, readUser, updateUser, deleteUser } from "./controllers/users.controller.js";
import bodyParser from "body-parser";

const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', getUsers)
app.post('/', createUser)
app.get('/:id', readUser)
app.put('/:id',updateUser)
app.delete('/:id',deleteUser)

export default app
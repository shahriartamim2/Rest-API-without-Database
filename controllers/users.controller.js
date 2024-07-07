import users from "../models/users.model.js";
import { v4 as uuidv4 } from 'uuid';


const getUsers = (req,res,next) =>{
    res.status(200).json({
        users
    })
};


const createUser = (req, res, next) =>{
    const id = uuidv4();
    const name = req.body.name;
    const email = req.body.email;

    const newUser = {
        id: id,
        name: name,
        email: email
    }

    users.push(newUser)

    res.status(201).json({
        users
    })
}


const readUser = (req, res, next) =>{
    const uniqueId = req.params.id ;
    
    const filteredUser = users.filter((user) => user.id === uniqueId);
    
    res.status(202).send(
        filteredUser
    )
}


const updateUser = (req, res, next) => {
    const uniqueId = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    const filteredUser = users.filter((user) => user.id === uniqueId).map((selectedUser)=>{
        selectedUser.name = name;
        selectedUser.email = email;
    });


    res.status(202).send(
        "Successful"
    )
}

const deleteUser = (req, res, next) => {
    const uniqueId = req.params.id;

    const filteredUser = users.filter((user) => user.id !== uniqueId);

    res.status(202).send(
        filteredUser
    )
}


export { getUsers, createUser, readUser, updateUser, deleteUser };

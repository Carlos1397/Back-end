import { RequestHandler } from "express";
import UserGit from './UserGit'

 
export const createUser: RequestHandler = async (req, res) => {
    const userFound = await UserGit.findOne({userEmail:req.body.userEmail})
    if(userFound)
        return res.status(301).json({message:"el email ya existe!"});
    const usuariogit = new UserGit(req.body);
    console.log(usuariogit);
    const saveUser= await usuariogit.save();
    res.json(saveUser);
};
export const getUsers: RequestHandler =async (req, res) => {
   try {
    const usuariosGit= await UserGit.find();
    return res.json(usuariosGit);
   }catch (e) {
    res.json(e);
   }
};
export const getUser: RequestHandler = async(req, res) => {
    const userFound = await UserGit.findById(req.params.id);
    if(!userFound) return res.status(204).json();
    return res.json(userFound);
};
 
export const deleteUser: RequestHandler = async(req, res) => {
    const userFound = await UserGit.findByIdAndDelete(req.params.id);
    if(!userFound) return res.status(204).json();
    return res.json(userFound);
};
export const updateUser: RequestHandler =async (req, res) => {
    const userUpdate = await UserGit.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if(!userUpdate) return res.status(204).json();
    res.json(userUpdate);
};
 
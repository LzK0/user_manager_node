import { RequestHandler } from "express";
import { createUserSchema } from "../schemas/UserSchema";

export const listUsersController: RequestHandler = (req, res) => {
    return res.render("index");
}

export const createUserController: RequestHandler = (req, res) => {
    let data = req.body;
    const dataValided = createUserSchema.safeParse(data);

    if(!dataValided.success) return res.redirect("users/list");

    data = dataValided.data;
    
}

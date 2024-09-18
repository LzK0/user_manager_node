import { RequestHandler } from "express";

export const listUsersController: RequestHandler = (req, res) => {
    
    res.render("index");
}

import { RequestHandler } from "express";

export const indexController: RequestHandler = (req, res) => {
    return res.redirect('users/list');
}
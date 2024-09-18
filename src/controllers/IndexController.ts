import { RequestHandler } from "express";

export const indexController: RequestHandler = (req, res) => {
    res.render('index');
}
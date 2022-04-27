import express,{Router} from "express";
import {DB} from "../config.js";
//const express=require("express")
const router=Router()

const adminRouter = Router()
//const adminRouter = express.Router()



adminRouter.get('/dropdowns.:ext?', async (req, res) => {
    const [rows, fields] = await DB.execute('SELECT * FROM urunler_tbl');
    res.render('dropdowns',{layout:'admin',data:rows})
})

adminRouter.get(['/','index.:ext?'], async (req, res) => {
    res.render('index',{layout:'admin'})
})



/*
adminRouter.get(['/','/:page.:ext?'], async (req, res) => {
    let page =(typeof req.params.page=="undefined")? 'index':req.params.page
    res.render(page,{layout:'admin'})
})
*/


export default adminRouter
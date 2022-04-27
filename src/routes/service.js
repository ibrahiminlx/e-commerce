import {Router} from "express";
import {DB} from "../config.js";
const serviceRouter=Router()


serviceRouter.post('/user', async (req, res) => {
    if (typeof req.body.id !== "undefined"){
        const [rows, fields] = await DB.execute(`DELETE FROM urunler_tbl WHERE urun_id=${req.body.id}`);
        rows.status = true;
        res.json(rows)
    }else  {
        res.json({
            status: false,
            error: 'Missing Parametrise'
        })
    }
})



export default serviceRouter;
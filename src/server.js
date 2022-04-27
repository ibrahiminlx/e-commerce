import express from 'express';
import hbs, { engine } from 'express-handlebars';
const app = express()
const port = 3000
import path from 'path'
import serviceRouter from "./routes/service.js";
import adminRouter from "./routes/admin.js";
import main from "./config.js";
import bodyParser from "body-parser";

app.use('/css', express.static(path.join( 'src/assets/css')))
app.use('/fonts', express.static(path.join( 'src/assets/fonts')))
app.use('/img', express.static(path.join( 'src/assets/img')))
app.use('/js', express.static(path.join( 'src/assets/js')))
app.use('/assets', express.static(path.join( 'src/assets/')))

app.use(bodyParser.urlencoded({ extended: false }))

app.engine( 'hbs', engine( {
    extname: "hbs",
    defaultLayout: 'main',
    layoutsDir:  './src/views/layouts/',
    partialsDir:  './src/views/partials/'
} ) );

app.set( 'view engine', 'hbs' );
(async ()=>{
   await main()
    app.use(function (req, res, next) {
        //console.log(req.path)
        if (req.path.startsWith("/admin") ) app.set('views', 'src/views/pages/admin');
        else app.set('views', 'src/views/pages/website');

        next()
    })
    app.use("/service",serviceRouter)
    app.use("/admin",adminRouter)

    app.get(['/','/:page.:ext?'], (req, res) => {
        let page =(typeof req.params.page=="undefined")? 'index':req.params.page
        res.render(page,{})
    })
})()




app.listen(port, () => {
    console.log(`http://localhost:`+port)
})
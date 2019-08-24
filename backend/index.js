const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const db = require('./db')
const routes = require('./routes')
const router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(routes)

app.use((req, res, next)=>{
    res.status(404).json({error: 'Not found'})
})

router.get('/category', (req, res) => {
    db.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

app.use((err, req, res, next)=>{
    // console.error(err.code, err)
    if(!err.code){
        res.status(500)
    } else {
        res.status(err.code)
    }
    res.json({error: 'Ops'})
})

// app.use('/api', router);

db.connection.once('open', function() {
    app.listen(port, ()=> console.log(`Server running at http://${port}/`))
});

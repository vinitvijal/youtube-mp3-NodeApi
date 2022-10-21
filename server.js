const express = require('express')
const ytdl = require('ytdl-core');
const barongJwt = require('node-auth-barong')
const cors = require("cors");
const bodyParser = require('body-parser');




const app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



const output = async (url) => {
    let videoID = ytdl.getURLVideoID(url)


    let info = await ytdl.getInfo(videoID);
    let format = ytdl.filterFormats(info.formats,'audioonly');
    return format[0].url

}

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     })

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.listen(3300, () => {
    console.log('Example app listening on port 3300!')
    });

// app.get('/:id', async (req, res) => {
//     console.log(req.query['main'])
//     if (req.query['main'] == 'no'){
//         console.log(req.query)
//         res.send('/')
//     }else{
//     let address = await output(req.query['main'])

//     output(req.params.link)
//     console.log(address)
//     res.send(address)
//     }
// })

app.post('/', async (req, res) => {

    console.log(req.body)
    var url = req.body.url;
    var Address = await output(url);
    console.log(Address)
    res.send({address: Address})

});

app.get('/', (req, res) => {
    res.send('Hello World!')

});
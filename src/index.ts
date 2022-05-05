import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT || 3000

let videos = [
    {id: 1, title: 'About JS - 01', author: 'it-incubator.eu'},
    {id: 2, title: 'About JS - 02', author: 'it-incubator.eu'},
    {id: 3, title: 'About JS - 03', author: 'it-incubator.eu'},
    {id: 4, title: 'About JS - 04', author: 'it-incubator.eu'},
    {id: 5, title: 'About JS - 05', author: 'it-incubator.eu'},
]

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response ) => {
    console.log("incoming request")
    console.log(req.query)
    // let count = 10
    // count = +req.query.count;
    res.send('Hello: GITNAHER  World !')
})

app.get('/videos', (req: Request, res: Response ) => {

        res.send(videos)
        res.sendStatus(200)
})

app.get('/videos/:videoId', (req: Request, res: Response) => {
    const id = +req.params.videoId;

    const video = videos.find((v) => {
        return v.id === id;
    })
    if (video !== undefined) {
        res.send(video)
    } else {
        res.sendStatus(404)
    }

    // if (id < videos.length) {
    //     res.send(videos[id-1])
    // } else {
    //     res.send(404)
    // }

    // FIND VIDEO AND RETURN IT
    // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
})

app.post('/videos', (req: Request, res: Response) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    }
    videos.push(newVideo)
    res.status(201)
   // res.send(newVideo)
    res.send(newVideo)

})

app.delete('/videos/:id',(req: Request, res: Response)=>{

   videos = videos.filter( (v) => {
        return v.id !== +req.params.id
       })

    res.sendStatus(404)
    // videos.splice((id-1), 1);

    // put your code here
})

app.put('/videos/:id',(req: Request, res: Response)=>{
    const id = +req.params.id;

    const video = videos.find((v) => {
        return v.id === id;
    })
    if (video !== undefined) {
        video.title = req.body.title;
        res.send(204)
    } else {
        res.sendStatus(404)
    }

    // put your code here
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})






// const express = require('express')
// const app = express()
// const port = 3000
//
// app.get('/', (req, res) => {
//     res.send('Hello Whole World!')
//
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

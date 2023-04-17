import { Request, Response } from "express"
import { Application } from "../model/applications-model"

const addApplication = (req:Request, res: Response):void => {
   const application = new Application({...req.body})
   application.save().then((result) => {
    console.log(result)
    res.sendStatus(200)
   }).catch(error => {
    console.log(error)
    res.sendStatus(400)
   })
}


const getApplication = (req: Request, res: Response):void => {
    Application.find().then((applications)=>{
        console.log(applications)
        res.send(applications)
    }).catch((error)=> {
        console.log(error)
    })
}


export {
    addApplication,
    getApplication,
}
import {Request, Response} from "express";

 export interface Errorhandler {
    err: Error
    status: number
    stack: string
    message: string
}
export function notFound(req: Request, res: Response, next: Function){
    const error: { err: Error; status: number } ={
         err: new Error("Not Found!!"),
        status: 404
    }
    next(error)
}


export function developmentErrors(err: Errorhandler, req: Request, res: Response, next: Function){
    err.stack = err.stack || ''
    const errorDetails = {
        message: err.message,
        status: err.status,
         stackHighlighted:err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    }

    res.status(err.status || 500)
    res.format({
        'text/html': () => {
            res.render('error', errorDetails)
        },
        'application/json': () => res.json(errorDetails)
    })
}

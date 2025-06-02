import { Request, Response } from "express"
import users from "../storage/data"

export default class Users {
    create (req:Request, res:Response): any {
    const {name, career} = req.body
    if (!name || !career) res.send(!name ? "Invalid name" : "Invalid Career" )

    users.push({name, career, id: users.length + 1})
    return res.json({
        status: 200,
        message:'added a new user successfully',
        data: users
    })
}
    update (req: Request, res: Response): any {
    const {id} = req.params
    if(!id) res.json({status: 400, message: "Invalid identifier"})
    const {name} = req.body;
    users[Number(id)-1].name = name;
    return res.json({
        status: 200,
        message: "Successfully updated the user",
        data: users
    })
}

    read (req: Request ,res: Response): any {
    const {name} = req.query
    return res.json({
        status: 200,
        message: "Successfully fetched all users",
        data: name ?
                users.filter((user) => user.name.trim().toLowerCase() === String(name).trim().toLowerCase()):
                users
    })
}
    deleteUser (req: Request , res:Response) : any {
    const {id} = req.params
    if(!id) res.json({status: 400, message: "Invalid identifier"})
    const newUsers = users.filter((user) => user.id !== Number(id))
    return res.json({ 
        status: 200,
        message: "User deleted successfully",
        data: newUsers
    })
}

}
import express, { Router, Request, Response } from "express"
import Users from "../controller/user-controller"
const { create, update, read, deleteUser } = new Users()
const router:Router = express.Router()

router.post('', create)

router.patch("/:id", update)

router.get("", read)

router.delete("/:id", deleteUser)

export default router
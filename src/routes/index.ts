import express from "express"
import user from "./user-routes"

const routes = express.Router()
routes.use("/users", user)


export default routes
import express from "express"
import {  createUser, deleteUser, getAllUsers, updateUser,  } from "../controllers/userController.js"  

const router = express.Router()

router.get("/", getAllUsers)

// router.post("/", postUser)

router.post("/", createUser )

router.delete("/:id", deleteUser)

router.put("/:id", updateUser)

export default router
 
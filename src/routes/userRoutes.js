import express from "express"
import {  createUser, deleteUser, getAllUsers, getUserId, updateUser,  } from "../controllers/userController.js"  

const router = express.Router()

router.get("/", getAllUsers)

// router.post("/", postUser)

router.post("/", createUser )

router.delete("/:id", deleteUser)

router.put("/:id", updateUser)

router.get("/:id", getUserId)

export default router
 
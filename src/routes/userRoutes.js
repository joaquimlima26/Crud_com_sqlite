import express from "express"
import {  createUser, deleteUser, getAllUsers, getUserId, login, registerUser, updateUser,  } from "../controllers/userController.js"  
import { validate } from "../middleware/validate.js"
import { createUserSchemas, longinSchemas, updateUserSchema } from "../schemas/userSchemas.js"
import { authenticate } from "../middleware/authentication.js"

const router = express.Router()

router.get("/", getAllUsers)

// router.post("/", postUser)

router.post("/login", validate(longinSchemas), login)

router.post("/register", validate(createUserSchemas), registerUser)

router.post("/", validate(createUserSchemas), createUser )

router.delete("/:id",authenticate,  deleteUser)

router.put("/:id", authenticate, validate(updateUserSchema), updateUser)

router.get("/:id", getUserId)

export default router
 
import express from "express"
import {  createUser, deleteUser, getAllUsers, getUserId, updateUser,  } from "../controllers/userController.js"  
import { validate } from "../middleware/validate.js"
import { createUserSchemas, updateUserSchema } from "../schemas/userSchemas.js"

const router = express.Router()

router.get("/", getAllUsers)

// router.post("/", postUser)


router.post("/", validate(createUserSchemas), createUser )

router.delete("/:id", deleteUser)

router.put("/:id", validate(updateUserSchema), updateUser)

router.get("/:id", getUserId)

export default router
 
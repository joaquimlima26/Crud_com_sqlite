import express from "express"
import userRoutes from "./routes/userRoutes.js"

const app = express()

//PERMITE QUE O EXPRESS ENTENDA JSON NO CORPO DA REQUISIÇAO
 app.use(express.json())

//DEFINE O ENDPOINT /USER PARA AS ROTAS DE USUARIOS
app.use("/users", userRoutes)


export default app
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// COMENTADA PARA OUTROS TESTES 
// export const getAllUsers = ( req, res ) => {
//     res.status(200).json({
//         mensagem: "Rota GET users funcionando "
//     })
// }


export const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany()
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(201).json({
            mensagem: "Erro ao buscar todos os dados usuário",
            erro: error.message
        })
    }
}
// export const postUser =  (req, res) => {
//     const { nome, email } = req.body
//     // const id = usuarios[usuarios.length - 1].id + 1
//     const user = {
//         // "id": id,
//         nome,
//         email
//     }

//     res.status(201).json(user)
// }

export const createUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(201).json({
            mensagem: "Erro ao criar o novo usuário",
            erro: error.message
        })
    }
}



export const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const user = await prisma.user.delete({
            where: { id: id }
        })
        res.status(200).json(user)

    } catch (error) {
        res.status(200).json({
            mensagem: "Usuario não deletado",
            erro: error.message
        })
    }

}


export const updateUser = async (req, res) => {
    const id = parseInt(req.params.id)
    const { name, email, password } = req.body

    try {
       const updatedUser = await prisma.user.update({
            where: { id: id },
            data: { name, email, password }
        })
        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(400).json({
            mensagem: "Erro ao atualizar usuário",
            erro: error.message
        })
    }
}
export const getUserId = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        mensagem: "Error ao procurar o usuario, usuario não encontrado!",
        erro: error.message,
      });
    }
  };
  
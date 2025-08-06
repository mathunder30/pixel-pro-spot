import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface IUsuario {
    id?: number;
    nome: string;
    email: string;
    mensagem: string;

    
}

export class Usuario {
    static async RegisterUser(usuarios: IUsuario): Promise<IUsuario> {

    


        const novoUsuario = await prisma.usuario.create({
            data: {
                nome: usuarios.nome,
                email: usuarios.email,
                mensagem: usuarios.mensagem
                
            }
        });
    console.log(`Usuario ${usuarios.nome} cadastrado com sucesso!`);
    return novoUsuario;
    }
}
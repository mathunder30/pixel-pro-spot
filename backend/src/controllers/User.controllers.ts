import type { Request, Response } from "express";
import { Usuario } from "../models/User.js";
import { Prisma } from "@prisma/client";



export const RegisterUserController = async (req: Request, res: Response) =>  {
    const {nome, email, mensagem} = req.body;
    console.log(`Cadastrando usuario: ${nome}, email: ${email}`);
    console.log('req.body: ', req.body)

    if (!nome || !email){
        res.status(400).json({error: 'Nome e email são obrigatório'});
        return;
    }

    try {
        const novoUser = await Usuario.RegisterUser({nome, email, mensagem});

        res.status(201).json(novoUser);

    } catch (error) {
    
        console.error("Erro ao cadastrar usuário:", error);
        const MensagemError = error instanceof Error ? error.message : 'Erro desconhecido';
        console.log(`Error: ${error} ${MensagemError}`);
        res.status(500).json({error: 'Erro ao cadastrar usuario'})
    }
};
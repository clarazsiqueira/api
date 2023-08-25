import { Router } from "express";
import { Cliente } from "../repository/clienteRepository";
const server = Router();


endpoints.get('/cliente'), async  (req, resp) => {
    try{
       let resposta = await Cliente();

    }
}

export default server;
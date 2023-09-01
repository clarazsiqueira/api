import { Router } from "express";
import { Cliente, inserir } from "../repository/clienteRepository.js";
const server = Router();


server.get('/cliente', async  (req, resp) => {
    try{
       let resposta = await Cliente();
       resp.send(resposta)
    }


    
        catch (err){
            resp.status(500).send({erro: err.message})
        }


        
    });

    server.post ('/cliente', async (req,resp) => {
        try{
         let cl = req.body;
         let a = await inserir (cl);
         resp.send(a)

        }  

        catch (err){
            resp.status(500).send({erro: err.message})
        }
            
        
            
        })

   


export default server;
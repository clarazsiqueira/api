import { Router } from "express";
import { inserir } from "../repository/veiculoRepository.js";



const server = Router();



// server.get('/veiculo', async (req, resp) => {
//     try {
//         let resposta = await ???();
//         resp.send(resposta)
//     }
//     catch (err) {
//         resp.status(500).send({ erro: err.message })
//     }
// });



server.post('/veiculo', async (req, resp) => {
    try {
        let cb = req.body;
        let x = await inserir(cb);
        resp.send(x)
    }
    catch (err) {
        resp.status(500).send({ erro: err.message })
    }
})




export default server;
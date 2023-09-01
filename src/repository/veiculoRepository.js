import {con} from './connection.js'


export async function inserir(veiculo) {


    let cdg = `insert into tb_veiculo( ds_modelo, ds_marca, nr_ano, ds_placa)
         values(?,?,?,?)
    `


    let  [resp] = await con.query (cdg,
        [
           
            veiculo.modelo,
            veiculo.marca,
            veiculo.ano,
            veiculo.placa,
            
        ])

        veiculo.id = resp.insertId;
        return veiculo;
        
        
}
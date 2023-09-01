import {con} from './connection.js'

export async function Cliente() {
    const comando = `SELECT*FROM tb_cliente`;
    const [resp] = await con.query(comando)
    return resp
}

export async function inserir(cliente) {

    let cdg = `insert into tb_cliente(nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                values(?,?,?,?,?)
    `


    let  [resp] = await con.query (cdg,
        [
            cliente.nome,
            cliente.email,
            cliente.telefone,
            cliente.cpf,
            cliente.cnh
        ])

        cliente.id = resp.insertId;
        return cliente;
        
        
}
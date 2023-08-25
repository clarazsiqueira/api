import {con} from './connection.js'

export async function Cliente() {
    const comando = `SELECT*FROM tb_cliente`;
    const [resp] = await con.query(comando)
    return resp
}
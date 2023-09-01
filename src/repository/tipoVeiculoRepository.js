import {con} from './connection';

export async function Buscarveiculo (){
    let cmd = 'select * from tb_tipo_veiculo where id_tipo_veiculo = ?';
    let [dados] = await con.query(cmd, [id]);
    return dados;
}

export async function filtartipo() {

    let cmd = `
     select id_tipo_veiculo id,
     ds_tipo              tipo
     from tb_tipo_veiculo
    `;
    let [dados] = await con.query(cmd);
    return dados;
}
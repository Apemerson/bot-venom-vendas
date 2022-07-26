const resumoPedido = require("../resumoPedido");
const textoFormaPag = require("./textoFormaPagamento");
const util = require("../../util");
const banco = require("../../banco");

function execute(user, msg) {
  let arrayMsgRetorno = [];

  //Voltar para o menu anterior
  if(msg === '1' || msg === '#' || msg === '*')
  {
    arrayMsgRetorno = resumoPedido.execute(user, msg);
    banco.db[user].observacao = '';
    return arrayMsgRetorno;
  }
  else
  {
    banco.db[user].observacao = util.removerAcento(msg);
  }
  
  arrayMsgRetorno = textoFormaPag.textoFormaPagamento(user, msg);

  return arrayMsgRetorno;
}

exports.execute = execute;

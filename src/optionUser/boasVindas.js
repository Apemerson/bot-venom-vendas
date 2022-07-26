const banco = require("../banco");
const infoCliente = require("../informacoesCliente");

function execute(user, msg, contato) {
  //banco.db[user].stage = 1;
// Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }


  let arrayMsgRetorno = [];
  arrayMsgRetorno.push({stage: 1});

  arrayMsgRetorno.push({texto: `
  👋 ${time} *${contato}*, como vai?
  Bem vindo(a) ao atendimento inteligente da *${infoCliente.info.NOME_CLIENTE}* 😃
  Para iniciar nossa conversa, irei te apresentar algumas opções,\n
  
  *1* - Para realizar um pedido e matar sua fome 😋
  
  *6* - Para falar com um de nossos atendentes 📱\n
  
  *_Sua FOME não espera e eu também estou muito ansioso para montar seu pedido, então digite á opção desejada e te aguardo nos próximos passos..._* 😎❤️ 
  `});

  return arrayMsgRetorno;
}

exports.execute = execute;

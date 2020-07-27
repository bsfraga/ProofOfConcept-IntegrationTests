#language: pt
  #encoding:utf-8


Funcionalidade: Validar dados de serviço HearthStone

  Como um usuário fã de hearthstone
  Quero Consumir endpoints do serviço de Hearthstone
  Para obter e validar informações sobre as minhas cartas favoritas

  Cenário: Validar serviço de cartas do HearthStone utilizando dados válidos
    Dado que preparo uma requisição do tipo GET para o endpoint de listagem de cartas
    E informo o nome de uma carta como parâmetro da requisição
    Então envio a requisição do tipo GET para o serviço do HearthStone
    E a resposta da requisição deverá retornar 200
    E valido a estrutura da resposta da requisição
    E o nome da carta deverá estar contido no corpo da resposta da requisição
    E o tipo da carta deverá estar contido no corpo da resposta da requisição
    E a raridade da carta deverá estar contido no corpo da resposta da requisição
    E a expansão que a carta pertence deverá estar contida no corpo da resposta da requisição
    E as mecânicas da carta deverão estar contidas no corpo da resposta da requisição
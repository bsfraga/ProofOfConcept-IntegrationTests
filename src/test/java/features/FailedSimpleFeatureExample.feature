#language: pt
  #encoding:utf-8


Funcionalidade: Validar dados de serviço HearthStone com dados inválidos

  Como um usuário fã de hearthstone
  Quero Consumir endpoints do serviço de Hearthstone
  Para obter e validar informações sobre as minhas cartas favoritas

  Cenário: Validar serviço de cartas do HearthStone utilizando dados inválidos
    Dado que preparo uma requisição do tipo GET para o endpoint de listagem de cartas
    E informo o nome de uma carta inválida como parâmetro da requisição
    Então envio a requisição do tipo GET para o serviço do HearthStone
    E a resposta da requisição deverá retornar 404
    E valido a estrutura da resposta da requisição
    E a mensagem de erro deverá estar contida no corpo da resposta da requisição
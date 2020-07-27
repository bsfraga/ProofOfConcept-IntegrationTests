#language: pt
  #encoding: utf-8


Funcionalidade: Validar dados de serviço HearthStone com dados inválidos

  Como um usuário fã de hearthstone
  Quero consumir endpoints do serviço de Hearthstone
  Para validar o comportamento do serviço ao informar dados inválidos

  Esquema do Cenário: Validar serviço de cartas do HearthStone utilizando dados inválidos
    Dado que preparo uma requisição do tipo GET para o endpoint "<path>"
    E informo o nome "<cardName>" como parâmetro da requisição
    Então envio a requisição do tipo GET
    E o código de resposta da requisição deverá ser <statusCode>
    E a mensagem "<message>" deverá estar contida no corpo da resposta da requisição

    Exemplos:
      | path   | cardName       | statusCode | message         |
      | cards/ | Bruno Fraga    | 404        | Card not found. |
      | cards/ | Lasier Martins | 404        | Card not found. |
      | cards/ | Silvio Santos  | 404        | Card not found. |
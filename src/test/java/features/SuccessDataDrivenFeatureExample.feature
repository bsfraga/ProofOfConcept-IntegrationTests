#language: pt
  #encoding: utf-8

Funcionalidade: Validar dados de serviço HearthStone

  Como um usuário fã de HearthStone
  Quero consumir endpoints do serviço de HearthStone
  Para obter e validar informações sobre as minhas cartas favoritas

  Esquema do Cenário: Validar serviço de cartas do HearthStone utilizando dados válidos
    Dado que preparo uma requisição do tipo GET para o endpoint "<path>"
    E informo o nome "<cardName>" como parâmetro da requisição
    Então envio a requisição do tipo GET
    E o código de resposta da requisição deverá ser <statusCode>
    E o nome da carta contido no corpo da resposta da requisição deverá ser "<cardName>"
    E o tipo da carta contido no corpo da resposta da requisição deverá ser "<type>"
    E a raridade da carta contido no corpo da resposta da requisição deverá ser "<rarity>"
    E a expansão "<cardSet>" deverá estar contida no corpo da resposta da requisição
    E as mecânicas "<mechanics>" da carta deverão estar contidas no corpo da resposta da requisição

    Exemplos: Cenários de Sucesso
      | path   | cardName                | statusCode | type   | rarity    | cardSet                  | mechanics                 |
      | cards/ | Kalecgos                | 200        | Minion | Legendary | Rise of Shadows          | Battlecry, Aura, Discover |
      | cards/ | Deathwing, Dragonlord   | 200        | Minion | Legendary | Whispers of the Old Gods | Deathrattle               |
      | cards/ | Harrison Jones          | 200        | Minion | Legendary | Classic                  | Battlecry                 |
      | cards/ | Bloodmage Thalnos       | 200        | Minion | Legendary | Classic                  | Deathrattle, Spell Damage |
      | cards/ | Dragonqueen Alexstrasza | 200        | Minion | Legendary | Descent of Dragons       | Battlecry                 |
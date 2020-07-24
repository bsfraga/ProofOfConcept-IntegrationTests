$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/feature.feature");
formatter.feature({
  "name": "Validar dados de serviço HearthStone",
  "description": "  Como um usuário fã de HearthStone\n  Quero consumir endpoints do serviço de HearthStone\n  Para obter e validar informações sobre as minhas cartas favoritas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Validar serviço de cartas do HearthStone",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"\u003cpath\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "name": "informo o nome \"\u003ccardName\u003e\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.step({
  "name": "o código da requisição deverá ser \u003cstatusCode\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "o nome da carta contido na requisição deverá ser \"\u003ccardName\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "o tipo da carta contido na requisição deverá ser \"\u003ctype\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "a raridade da carta contido na requisição deverá ser \"\u003crarity\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "a expansão \"\u003ccardSet\u003e\" deverá estar contida na requisição",
  "keyword": "E "
});
formatter.step({
  "name": "as mecânicas \"\u003cmechanics\u003e\" da carta deverão estar contidas na requisição",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "path",
        "cardName",
        "statusCode",
        "type",
        "rarity",
        "cardSet",
        "mechanics"
      ]
    },
    {
      "cells": [
        "cards/",
        "Kalecgos",
        "200",
        "Minion",
        "Legendary",
        "Rise of Shadows",
        "Battlecry, Aura, Discover"
      ]
    },
    {
      "cells": [
        "cards/",
        "Deathwing, Dragonlord",
        "200",
        "Minion",
        "Legendary",
        "Whispers of the Old Gods",
        "Deathrattle"
      ]
    },
    {
      "cells": [
        "cards/",
        "Harrison Jones",
        "200",
        "Minion",
        "Legendary",
        "Classic",
        "Battlecry"
      ]
    },
    {
      "cells": [
        "cards/",
        "Bloodmage Thalnos",
        "200",
        "Minion",
        "Legendary",
        "Classic",
        "Deathrattle, Spell Damage"
      ]
    },
    {
      "cells": [
        "cards/",
        "Dragonqueen Alexstrasza",
        "200",
        "Minion",
        "Legendary",
        "Descent of Dragons",
        "Battlecry"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Kalecgos\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido na requisição deverá ser \"Kalecgos\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido na requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.OTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido na requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ARaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Rise of Shadows\" deverá estar contida na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AExpensaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Battlecry, Aura, Discover\" da carta deverão estar contidas na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AsMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Deathwing, Dragonlord\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido na requisição deverá ser \"Deathwing, Dragonlord\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido na requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.OTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido na requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ARaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Whispers of the Old Gods\" deverá estar contida na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AExpensaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Deathrattle\" da carta deverão estar contidas na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AsMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Harrison Jones\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido na requisição deverá ser \"Harrison Jones\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido na requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.OTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido na requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ARaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Classic\" deverá estar contida na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AExpensaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Battlecry\" da carta deverão estar contidas na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AsMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Bloodmage Thalnos\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido na requisição deverá ser \"Bloodmage Thalnos\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido na requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.OTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido na requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ARaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Classic\" deverá estar contida na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AExpensaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Deathrattle, Spell Damage\" da carta deverão estar contidas na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AsMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Dragonqueen Alexstrasza\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido na requisição deverá ser \"Dragonqueen Alexstrasza\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido na requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.OTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido na requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.ARaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Descent of Dragons\" deverá estar contida na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AExpensaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Battlecry\" da carta deverão estar contidas na requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthstoneServiceStep.AsMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DataDrivenFeatureFailedExample.feature");
formatter.feature({
  "name": "Validar dados de serviço HearthStone",
  "description": "  Como um usuário fã de hearthstone\n  Quero consumir endpoints do serviço de Hearthstone\n  Para validar o comportamento do serviço ao informar dados inválidos",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Validar serviço de cartas do HearthStone utilizando dados inválidos",
  "description": "",
  "keyword": "Esquema do Cenário"
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
  "name": "o código de resposta da requisição deverá ser \u003cstatusCode\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "a mensagem \"\u003cmessage\u003e\" deverá estar contida no corpo da resposta da requisição",
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
        "message"
      ]
    },
    {
      "cells": [
        "cards/",
        "Bruno Fraga",
        "404",
        "Card not found."
      ]
    },
    {
      "cells": [
        "cards/",
        "Lasier Martins",
        "404",
        "Card not found."
      ]
    },
    {
      "cells": [
        "cards/",
        "Silvio Santos",
        "404",
        "Card not found."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados inválidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Bruno Fraga\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 404",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"Card not found.\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aMensagemDeveraEstarContidaNoCorpoDaRespostaDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados inválidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Lasier Martins\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 404",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"Card not found.\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aMensagemDeveraEstarContidaNoCorpoDaRespostaDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados inválidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Silvio Santos\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 404",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"Card not found.\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aMensagemDeveraEstarContidaNoCorpoDaRespostaDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/DataDrivenFeatureSuccessExample.feature");
formatter.feature({
  "name": "Validar dados de serviço HearthStone",
  "description": "  Como um usuário fã de HearthStone\n  Quero consumir endpoints do serviço de HearthStone\n  Para obter e validar informações sobre as minhas cartas favoritas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Esquema do Cenário"
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
  "name": "o código de resposta da requisição deverá ser \u003cstatusCode\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "o nome da carta contido no corpo da resposta da requisição deverá ser \"\u003ccardName\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "o tipo da carta contido no corpo da resposta da requisição deverá ser \"\u003ctype\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "a raridade da carta contido no corpo da resposta da requisição deverá ser \"\u003crarity\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "a expansão \"\u003ccardSet\u003e\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.step({
  "name": "as mecânicas \"\u003cmechanics\u003e\" da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.examples({
  "name": "Cenários de Sucesso",
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
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Kalecgos\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido no corpo da resposta da requisição deverá ser \"Kalecgos\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido no corpo da resposta da requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido no corpo da resposta da requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aRaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Rise of Shadows\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aExpansaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Battlecry, Aura, Discover\" da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.asMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Deathwing, Dragonlord\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido no corpo da resposta da requisição deverá ser \"Deathwing, Dragonlord\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido no corpo da resposta da requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido no corpo da resposta da requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aRaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Whispers of the Old Gods\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aExpansaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Deathrattle\" da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.asMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Harrison Jones\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido no corpo da resposta da requisição deverá ser \"Harrison Jones\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido no corpo da resposta da requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido no corpo da resposta da requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aRaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Classic\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aExpansaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Battlecry\" da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.asMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Bloodmage Thalnos\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido no corpo da resposta da requisição deverá ser \"Bloodmage Thalnos\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido no corpo da resposta da requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido no corpo da resposta da requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aRaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Classic\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aExpansaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Deathrattle, Spell Damage\" da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.asMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint \"cards/\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Dragonqueen Alexstrasza\" como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.informoONomeComoPorametroDaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.envioArequisicaoDoTipoGET()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o código de resposta da requisição deverá ser 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oCodigoDaRequisicaoDeveraSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta contido no corpo da resposta da requisição deverá ser \"Dragonqueen Alexstrasza\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.ONomeDaCartaConidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta contido no corpo da resposta da requisição deverá ser \"Minion\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.oTipoDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta contido no corpo da resposta da requisição deverá ser \"Legendary\"",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aRaridadeDaCartaContidoNaRequisicaoDeveraSer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão \"Descent of Dragons\" deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.aExpansaoDeveraEstarContidaNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas \"Battlecry\" da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HeartStoneDataDrivenFeatureStep.asMecanicasDaCartaDeveraoEstarContidasNaRequisicao(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SimpleFailureFeatureExample.feature");
formatter.feature({
  "name": "Validar dados de serviço HearthStone com dados inválidos",
  "description": "  Como um usuário fã de hearthstone\n  Quero Consumir endpoints do serviço de Hearthstone\n  Para obter e validar informações sobre as minhas cartas favoritas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@SimpleTest"
    }
  ]
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados inválidos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@SimpleTest"
    }
  ]
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint de listagem de cartas",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.quePreparoUmaRequisicaoDoTipoGetParaOEndpointDeListagemDeCartas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome de uma carta inválida como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.informoONomeDeUmaCartaInvalidaComoParametroDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET para o serviço do HearthStone",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.envioARequisicaoDoTipoGETParaOServicoDoHearthStone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a resposta da requisição deverá retornar 404",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.aRespostaDaRequisicaoDeveraRetorar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a estrutura da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.validoAEstruturaDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem de erro deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.aMensagemDeErroDeveraEstarContidaNoCorpoDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SimpleSuccessFeatureExample.feature");
formatter.feature({
  "name": "Validar dados de serviço HearthStone",
  "description": "    Como um usuário fã de hearthstone\n    Quero Consumir endpoints do serviço de Hearthstone\n    Para obter e validar informações sobre as minhas cartas favoritas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@SimpleTest"
    }
  ]
});
formatter.scenario({
  "name": "Validar serviço de cartas do HearthStone utilizando dados válidos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@SimpleTest"
    }
  ]
});
formatter.step({
  "name": "que preparo uma requisição do tipo GET para o endpoint de listagem de cartas",
  "keyword": "Dado "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.quePreparoUmaRequisicaoDoTipoGetParaOEndpointDeListagemDeCartas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome de uma carta como parâmetro da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.informoONomeDeUmaCartaComoParametroDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio a requisição do tipo GET para o serviço do HearthStone",
  "keyword": "Então "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.envioARequisicaoDoTipoGETParaOServicoDoHearthStone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a resposta da requisição deverá retornar 200",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.aRespostaDaRequisicaoDeveraRetorar(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido a estrutura da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.validoAEstruturaDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o nome da carta deverá estar contido no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.oNomeDaCartaDeveraEstarContidoNoCorpoDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o tipo da carta deverá estar contido no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.oTipoDaCartaDeveraEstarContidoNoCorpoDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a raridade da carta deverá estar contido no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.aRaridadeDaCartaDeveraEstarContidoNoCorpoDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a expansão que a carta pertence deverá estar contida no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.aExpensaoQueACarataPertenceDeveraEstarContidaNoCorpoDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "as mecânicas da carta deverão estar contidas no corpo da resposta da requisição",
  "keyword": "E "
});
formatter.match({
  "location": "stepDefinition.HearthStoneSimpleFeatureStep.asMecanicasDaCartaDeveraoEstarContidasNoCorpoDaRespostaDaRequisicao()"
});
formatter.result({
  "status": "passed"
});
});
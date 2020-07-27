package stepDefinition;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import stepObjects.HearthStoneSimpleFeatureObject;

public class HearthStoneSimpleFeatureStep extends HearthStoneSimpleFeatureObject {

    @Dado("que preparo uma requisição do tipo GET para o endpoint de listagem de cartas")
    public void quePreparoUmaRequisicaoDoTipoGetParaOEndpointDeListagemDeCartas(){
        prepareStaticRequestToHearthstoneService();
    }

    @Dado("informo o nome de uma carta como parâmetro da requisição")
    public void informoONomeDeUmaCartaComoParametroDaRequisicao(){
        addStaticParamToRequest();
    }

    @Dado("informo o nome de uma carta inválida como parâmetro da requisição")
    public void informoONomeDeUmaCartaInvalidaComoParametroDaRequisicao(){
        addStaticInvalidParamToRequest();
    }


    @Então("envio a requisição do tipo GET para o serviço do HearthStone")
    public void envioARequisicaoDoTipoGETParaOServicoDoHearthStone(){
        sendRequestToHearthStoneService();
    }

    @Então("a resposta da requisição deverá retornar {int}")
    public void aRespostaDaRequisicaoDeveraRetorar(int statusCode){
        validateResponseStatusCode(statusCode);
    }

    @Então("valido a estrutura da resposta da requisição")
    public void validoAEstruturaDaRespostaDaRequisicao(){
        validateResponseSchema();
    }

    @Então("o nome da carta deverá estar contido no corpo da resposta da requisição")
    public void oNomeDaCartaDeveraEstarContidoNoCorpoDaRespostaDaRequisicao(){
        validateStaticCardName();
    }

    @Então("o tipo da carta deverá estar contido no corpo da resposta da requisição")
    public void oTipoDaCartaDeveraEstarContidoNoCorpoDaRespostaDaRequisicao(){
        validateStaticCardType();
    }

    @Então("a raridade da carta deverá estar contido no corpo da resposta da requisição")
    public void aRaridadeDaCartaDeveraEstarContidoNoCorpoDaRespostaDaRequisicao(){
        validateStaticCardRarity();
    }

    @Então("a expansão que a carta pertence deverá estar contida no corpo da resposta da requisição")
    public void aExpensaoQueACarataPertenceDeveraEstarContidaNoCorpoDaRespostaDaRequisicao(){
        validateStaticCardExpansion();
    }

    @Então("as mecânicas da carta deverão estar contidas no corpo da resposta da requisição")
    public void asMecanicasDaCartaDeveraoEstarContidasNoCorpoDaRespostaDaRequisicao(){
        validarStaticCardMechanics();
    }

    @Então("a mensagem de erro deverá estar contida no corpo da resposta da requisição")
    public void aMensagemDeErroDeveraEstarContidaNoCorpoDaRespostaDaRequisicao(){
        validateBadRequestMessage();
    }

}

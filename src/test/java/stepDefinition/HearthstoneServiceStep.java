package stepDefinition;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Então;
import stepObjects.HearthstoneServiceObject;

public class HearthstoneServiceStep  extends HearthstoneServiceObject {

    @Dado("que preparo uma requisição do tipo GET para o endpoint {string}")
    public void queEnvioUmaRequisicaoDoTipoGETParaOEndpoint(String path){
        prepareRequestToHearthstoneService(path);
    }

    @Dado("informo o nome {string} como parâmetro da requisição")
    public void informoONomeComoPorametroDaRequisicao(String cardName){
        addParamToRequest(cardName);
    }

    @Entao("envio a requisição do tipo GET")
    public void envioArequisicaoDoTipoGET(){
        sendRequestToHearthstoneService();
    }

    @Então("o código da requisição deverá ser {int}")
    public void oCodigoDaRequisicaoDeveraSer(int statusCode){
        validateStatusCode(statusCode);
    }

    @Então("o nome da carta contido na requisição deverá ser {string}")
    public void ONomeDaCartaConidoNaRequisicaoDeveraSer(String cardName){
        validateCardName(cardName);
    }

    @Então("o tipo da carta contido na requisição deverá ser {string}")
    public void oTipoDaCartaContidoNaRequisicaoDeveraSer(String type){
        validateCardType(type);
    }

    @Então("a raridade da carta contido na requisição deverá ser {string}")
    public void aRaridadeDaCartaContidoNaRequisicaoDeveraSer(String rarity){
        validateCardRarity(rarity);
    }

    @Então("a expansão {string} deverá estar contida na requisição")
    public void aExpensaoDeveraEstarContidaNaRequisicao(String cardSet){
        validateCardExpansion(cardSet);
    }

    @Então("as mecânicas {string} da carta deverão estar contidas na requisição")
    public void asMecanicasDaCartaDeveraoEstarContidasNaRequisicao(String mechanics){
        validateCardMechanics(mechanics);
    }

}

package stepObjects;

import io.cucumber.messages.internal.com.google.gson.Gson;
import io.cucumber.messages.internal.com.google.gson.reflect.TypeToken;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;
import pojo.BadRequest;
import pojo.Card;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

public class HearthStoneSimpleFeatureObject {

    private Response response;
    private final String BASE_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";
    private StringBuilder endpoint;
    private Map<String, String> header;
    private List<Card> enums;
    private BadRequest badEnums;

    public void prepareStaticRequestToHearthstoneService(){
        try {
            endpoint = new StringBuilder()
            .append(BASE_URL)
            .append("cards/");
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void addStaticParamToRequest(){
        try {
            endpoint.append("Harrison Jones");
            header = new HashMap<>();
            header.put("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
            header.put("x-rapidapi-key", "d1f472d1efmsh81541e786267a16p19f800jsn6639802f1834");
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void addStaticInvalidParamToRequest(){
        try {
            endpoint.append("invalid_param");
            header = new HashMap<>();
            header.put("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
            header.put("x-rapidapi-key", "d1f472d1efmsh81541e786267a16p19f800jsn6639802f1834");
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void sendRequestToHearthStoneService(){
        try {
            response = RestAssured.given()
                    .headers(header)
                    .get(endpoint.toString());
        }catch (Exception e){
            e.printStackTrace();
        }
    }


    public void validateResponseStatusCode(int statusCode){
        try {
            response.then().statusCode(statusCode);
            Gson gson = new Gson();
            if(response.getStatusCode() == 404){
                badEnums = gson.fromJson(response.getBody().print(), BadRequest.class);
            }else{
                enums = gson.fromJson(response.getBody().print(), new TypeToken<List<Card>>(){}.getType());
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateResponseSchema(){
        try {
            if(response.getStatusCode() == 404){
                response.then().assertThat().body(matchesJsonSchemaInClasspath("badRequestSchema.json"));
            }else{
                response.then().assertThat().body(matchesJsonSchemaInClasspath("cardSchema.json"));
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateStaticCardName(){
        try {
            Assert.assertEquals("Harrison Jones", enums.get(0).getName());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateStaticCardType(){
        try {
            Assert.assertEquals("Minion", enums.get(0).getType());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateStaticCardRarity(){
        try {
            Assert.assertEquals("Legendary", enums.get(0).getRarity());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateStaticCardExpansion(){
        try {
            Assert.assertEquals("Classic", enums.get(0).getCardSet());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validarStaticCardMechanics(){
        try {
            Assert.assertEquals("Battlecry", enums.get(0).getMechanics().get(0).getName());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateBadRequestMessage( ){
        try {
            Assert.assertEquals("Card not found.", badEnums.getMessage());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}

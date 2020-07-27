package stepObjects;

import io.cucumber.messages.internal.com.google.gson.Gson;
import io.cucumber.messages.internal.com.google.gson.reflect.TypeToken;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Assert;
import pojo.BadRequest;
import pojo.Card;

import java.io.File;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;


public class HearthStoneDataDrivenFeatureObject {

    private Response response;
    private final String BASE_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";
    private StringBuilder endpoint;
    private Map<String, String> header;
    private List<Card> enums;
    private BadRequest badEnums;

    public void prepareRequestToHearthstoneService(String path) {
        try {
            endpoint = new StringBuilder()
                    .append(BASE_URL)
                    .append(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addParamToRequest(String cardName) {
        try {
            endpoint.append(cardName);

            header = new HashMap<>();
            header.put("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
            header.put("x-rapidapi-key", "d1f472d1efmsh81541e786267a16p19f800jsn6639802f1834");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendRequestToHearthstoneService() {
        try {
            response = RestAssured.given()
                    .headers(header)
                    .get(endpoint.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void validateStatusCode(int statusCode) {
        try {
            response.then().statusCode(statusCode);
            Gson gson = new Gson();
            if (response.getStatusCode() == 404){
                badEnums = gson.fromJson(response.getBody().print(), BadRequest.class);
            }else{
                enums = gson.fromJson(response.getBody().print(), new TypeToken<List<Card>>(){}.getType());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public void validateCardName(String cardName){
        try {
            Assert.assertEquals(cardName, enums.get(0).getName());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void validateCardType(String type) {
        try {
            Assert.assertEquals(type, enums.get(0).getType());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void validateCardRarity(String rarity) {
        try {
            Assert.assertEquals(rarity, enums.get(0).getRarity());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void validateCardExpansion(String cardSet) {
        try {
            Assert.assertEquals(cardSet, enums.get(0).getCardSet());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void validateCardMechanics(String mechanics) {
        try {
            List<String> mech = Arrays.asList(mechanics.trim().split(","));
            mech = mech.stream().map(String::trim).collect(Collectors.toList());
            for(final String item : mech){
                Assert.assertTrue(enums.get(0).getMechanics().stream().anyMatch(mechanic -> mechanic.getName().equals(item)));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void validateMessage(String message){
        try {
            Assert.assertEquals(message, badEnums.getMessage());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}


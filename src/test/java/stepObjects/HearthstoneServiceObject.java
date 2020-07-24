package stepObjects;

import io.cucumber.messages.internal.com.google.gson.Gson;
import io.cucumber.messages.internal.com.google.gson.reflect.TypeToken;
import io.cucumber.messages.internal.com.google.gson.stream.JsonReader;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.response.ValidatableResponse;
import org.junit.Assert;
import pojo.Card;
import pojo.Mechanics;

import java.lang.reflect.Type;
import java.util.*;
import java.util.stream.Collectors;

public class HearthstoneServiceObject {

    private Response response;
    private final String BASE_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";
    private StringBuilder endpoint;
    private Map<String, String> header;
    private List<Card> enums;

    public void prepareRequestToHearthstoneService(String path) {
        try {
            endpoint = new StringBuilder();
            endpoint.append(BASE_URL)
                    .append(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addParamToRequest(String cardName) {
        try {
            endpoint.append(cardName);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendRequestToHearthstoneService() {
        try {
            header = new HashMap<>();
            header.put("x-rapidapi-host", "omgvamp-hearthstone-v1.p.rapidapi.com");
            header.put("x-rapidapi-key", "d1f472d1efmsh81541e786267a16p19f800jsn6639802f1834");

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
            Type collectionType = new TypeToken<List<Card>>(){}.getType();
            enums = gson.fromJson(response.getBody().print(), collectionType);
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

}


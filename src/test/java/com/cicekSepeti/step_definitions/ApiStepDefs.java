package com.cicekSepeti.step_definitions;

import com.cicekSepeti.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import com.google.gson.Gson;
import org.junit.ComparisonFailure;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;


public class ApiStepDefs {

    Response response;
    Gson gson = new Gson();
    int jsonDataStatusCode;
    List<Map<String, Object>> products;
    String jsonDataForInstallment;
    int jsonDataForStatusCode;

    /**
     * get the info from api
     */
    @When("I get the current user information from api")
    public void i_get_the_current_user_information_from_api() {

        String url = ConfigurationReader.get("api.Url");

        response = given().accept(ContentType.JSON)
                .and()
                .get(url);

    }

    /**
     * check the status code
     */
    @Then("status code should be {int}")
    public void status_code_should_be(int statusCode) {

        assertEquals(statusCode, response.statusCode());

    }

    /**
     * check the content type
     */
    @Then("content type is should be json")
    public void content_type_is_should_be_json() {

        assertEquals("application/json; charset=utf-8", response.contentType());

    }

    /**
     * check the information for installment products
     */
    @Then("I check that the {string} for products with installment option")
    public void i_check_that_the_for_products_with_installment_option(String information) {

        String jsonDataForInstallment = response.body().path("item[0].response[0].body");
        int jsonDataForStatusCode = response.body().path("item[0].response[0].code");
        String jsonDataForInstallmentName = response.body().path("item[0].name");
        System.out.println("jsonDataForInstallment = " + jsonDataForInstallment);

        jsonDataStatusCode = gson.fromJson(String.valueOf(jsonDataForStatusCode), int.class);
        Map<String, Object> InstallmentList = gson.fromJson(jsonDataForInstallment, Map.class);
        Map<String, Object> result = (Map<String, Object>) InstallmentList.get("result");
        Map<String, Object> data = (Map<String, Object>) result.get("data");
        products = (List<Map<String, Object>>) data.get("products");

        for (Map<String, Object> product : products) {

            switch (information) {
                case "installment":
                    assertEquals("test/installment=1",jsonDataForInstallmentName);
                    assertTrue((Boolean) product.get("installment"));
                    assertEquals(200, jsonDataStatusCode);
                    break;

                case "installmentText":
                    assertEquals("test/installment=1",jsonDataForInstallmentName);
                    assertTrue(product.get("installmentText").toString().contains("Taksit Seçeneği"));
                    assertEquals(200, jsonDataStatusCode);
                    break;

                case "productGroupIds":
                    assertEquals("test/installment=1",jsonDataForInstallmentName);
                    assertEquals(1.0, product.get("productGroupId"));
                    assertEquals(200, jsonDataStatusCode);
                    break;
            }
        }
    }

    /**
     * check the information for non-installment products
     */
    @Then("I check that the {string} for products without installment option")
    public void i_check_that_the_for_products_without_installment_option(String information) {
        jsonDataForInstallment = response.body().path("item[1].response[0].body");
        jsonDataForStatusCode = response.body().path("item[1].response[0].code");
        String jsonDataForInstallmentName = response.body().path("item[1].name");
        System.out.println("jsonDataforInstallment1 = " + jsonDataForInstallment);

        jsonDataStatusCode = gson.fromJson(String.valueOf(jsonDataForStatusCode), int.class);
        Map<String, Object> Installment1List = gson.fromJson(jsonDataForInstallment, Map.class);
        Map<String, Object> result = (Map<String, Object>) Installment1List.get("result");
        Map<String, Object> data = (Map<String, Object>) result.get("data");
        products = (List<Map<String, Object>>) data.get("products");

        for (Map<String, Object> product : products) {

            switch (information) {
                case "installment":
                    assertEquals("test/installment=0",jsonDataForInstallmentName);
                    assertFalse((Boolean) product.get("installment"));
//                    try {
//                        assertFalse((Boolean) product.get("installment"));
//                    } catch (AssertionError a) {
//                        System.out.println("There is a bug, the product without the installment should have false installment");
//                    }
                    assertEquals(200, jsonDataStatusCode);
                    break;

                case "installmentText":
                    assertEquals("test/installment=0",jsonDataForInstallmentName);
                    assertEquals("", product.get("installmentText").toString());
//                    try {
//                        assertEquals("", product.get("installmentText").toString());
//                    } catch (ComparisonFailure b) {
//                        System.out.println("There is a bug, the product without the installment should have null installment Text");
//                    }
                    assertEquals(200, jsonDataStatusCode);
                    break;

                case "productGroupIds":
                    assertEquals("test/installment=0",jsonDataForInstallmentName);
                    assertEquals(2.0, product.get("productGroupId"));
//                    try {
//                        assertEquals(2.0, product.get("productGroupId"));
//                    } catch (AssertionError c) {
//                        System.out.println("There is a bug, the product without the installment should have 2.0 productGroupId");
//                    }
                    assertEquals(200, jsonDataStatusCode);
                    break;
            }
        }
    }


    /**
     * check the information for the installment value is null
     */
    @Then("I check that the body has null value")
    public void i_check_that_the_body_has_null_value() {
        String jsonDataForInstallment = response.body().path("item[2].response[0].body");
        int jsonDataForStatusCode = response.body().path("item[2].response[0].code");
        String jsonDataForInstallmentName = response.body().path("item[2].name");

        System.out.println("jsonDataforInstallment = " + jsonDataForInstallment);

//        dataForInstallmentName = gson.fromJson(String.valueOf(jsonDataForInstallmentName), String.class);
        jsonDataStatusCode = gson.fromJson(String.valueOf(jsonDataForStatusCode), int.class);

        assertEquals("test/installment=",jsonDataForInstallmentName);
        assertEquals("", jsonDataForInstallment);
        assertEquals(500, jsonDataStatusCode);
    }
}
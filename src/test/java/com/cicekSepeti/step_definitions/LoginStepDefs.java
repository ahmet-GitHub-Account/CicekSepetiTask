package com.cicekSepeti.step_definitions;

import com.cicekSepeti.pages.LoginPage;
import com.cicekSepeti.utilities.BrowserUtils;
import com.cicekSepeti.utilities.ConfigurationReader;
import com.cicekSepeti.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class LoginStepDefs {

    LoginPage loginPage = new LoginPage();

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("the user enters unauthorized email and password")
    public void the_user_enters_unauthorized_email_and_password() {
        loginPage.login(ConfigurationReader.get("invalid_email"), ConfigurationReader.get("invalid_password"));
        BrowserUtils.waitFor(3);
    }

    @Then("the user should be able to see the error message")
    public void the_user_should_be_able_to_see_the_error_message() {
        String actualWarningMessage = loginPage.popUpWarningMessage.getText();
        String expectedWarningMessage = "E-mail address or password is incorrect. Please check your information and try again.";
        System.out.println("actualWarningMessage = " + actualWarningMessage);
        Assert.assertEquals(expectedWarningMessage, actualWarningMessage);
    }

    @When("the user inputs {string} into email box")
    public void the_user_inputs_into_email_box(String email) {
        loginPage.emailInputBox.clear();
        loginPage.emailInputBox.sendKeys(email);
    }

    @When("the user inputs {string} into password box")
    public void the_user_inputs_into_password_box(String password) {
        loginPage.passwordInputBox.clear();
        loginPage.passwordInputBox.sendKeys(password);
    }

    @When("the user click on the sign in button")
    public void the_user_click_on_the_sign_in_button() {
        loginPage.signInButton.click();
    }

    @Then("the user should see the warning message")
    public void the_user_should_see_the_warning_message() {
        BrowserUtils.waitFor(3);
        loginPage.getWarningMessage();
    }

}

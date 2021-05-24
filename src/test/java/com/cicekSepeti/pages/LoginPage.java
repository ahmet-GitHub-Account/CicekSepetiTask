package com.cicekSepeti.pages;

import com.cicekSepeti.utilities.Driver;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.*;


import java.util.List;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "#EmailLogin")
    public WebElement emailInputBox;

    @FindBy(css = "#Password")
    public WebElement passwordInputBox;

    @FindBy(xpath = "//button[text() = 'Sign In']")
    public WebElement signInButton;

    @FindBy(css = ".modal-body")
    public WebElement popUpWarningMessage;

    @FindBy(css = ".modal-body")
    public List<WebElement> popUpWarningMessageList;

    @FindBy(css = "#EmailLogin-error")
    public WebElement emailWarningMessage;

    @FindBy(css = "#EmailLogin-error")
    public List<WebElement> emailWarningMessageList;

    @FindBy(xpath = "//span[text() = 'Required field.']")
    public WebElement requiredFieldMessage;

    @FindBy(css = "#EmailLogin-error")
    public List<WebElement> emptyEmailWarningMessageList;

    @FindBy(css = "#Password-error")
    public WebElement passwordWarningMessage;

    @FindBy(css = "#Password-error")
    public List<WebElement> emptyPasswordWarningMessageList;


    @FindBy(xpath = "//span[contains(text(),'maximum')]")
    public WebElement invalidPasswordText;

    @FindBy(xpath = "//span[contains(text(),'maximum')]")
    public List<WebElement> invalidPasswordTextList;


    public void login(String email, String password) {
        emailInputBox.sendKeys(email);
        passwordInputBox.sendKeys(password);
        signInButton.click();
    }

    public void getWarningMessage() {
        if (popUpWarningMessageList.size() > 0) {
            String expectedPopUpMessage = "E-mail address or password is incorrect. Please check your information and try again.";
            assertEquals(expectedPopUpMessage, popUpWarningMessage.getText());
        } else if (emptyEmailWarningMessageList.size() > 0 || emptyPasswordWarningMessageList.size() > 0) {
            try {
                String expectedMessage = "Required field.";
                assertEquals(expectedMessage, requiredFieldMessage.getText());
            } catch (NoSuchElementException e) {
                if (emailWarningMessageList.size()>0) {
                    try{
                        String expectedMessage = "Please enter a valid e-mail address.";
                        assertEquals(expectedMessage, emailWarningMessage.getText());
                    }catch (NoSuchElementException a){
                        String expectedMessage = "'Email' must be between 0 and 100 characters.";
                        assertEquals(expectedMessage, emailWarningMessage.getText());
                    }
                }else{
                    String expectedMessage = "Please enter minimum 3 and maximum 20 characters.";
                    assertEquals(expectedMessage, passwordWarningMessage.getText());
                }
            }
        }
    }
}


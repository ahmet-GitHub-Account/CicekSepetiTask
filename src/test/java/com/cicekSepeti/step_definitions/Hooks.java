package com.cicekSepeti.step_definitions;

import com.cicekSepeti.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before ("@UI")
    public void setUp(){
        System.out.println("\tthis is coming from BEFORE");
        Driver.get().manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Driver.get().manage().window().maximize();
    }

    @After ("@UI")
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png","screenshot");
        }

        Driver.closeDriver();

    }

}

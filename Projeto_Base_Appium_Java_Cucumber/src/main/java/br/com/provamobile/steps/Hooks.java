package br.com.provamobile.steps;

import br.com.provamobile.app.DriverFactory;
import br.com.provamobile.support.Element;
import br.com.provamobile.support.Utils;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.time.Duration;

public class Hooks extends Element {
    public Hooks(){
        PageFactory.initElements(new AppiumFieldDecorator(DriverFactory.getDriver(), Duration.ofSeconds(30)  ), this );
    }

    @After //import cucumber.api.java.After;
    public void after(Scenario scenario){
        if (scenario.isFailed()) {
            File screenshot = Utils.gerarScreenShot(scenario);
            Utils.anexarScreenshot(screenshot, scenario.getName());
        }
        DriverFactory.relaunchApp();

    }

}

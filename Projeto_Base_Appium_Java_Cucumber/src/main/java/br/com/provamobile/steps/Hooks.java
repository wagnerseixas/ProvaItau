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
        PageFactory.initElements(new AppiumFieldDecorator(DriverFactory.getDriver(), Duration.ofSeconds(10)  ), this );
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


// public class Hooks {
//
//    Random rand = new Random();
//    int value = rand.nextInt(50);
//
//    @Before
//    public void beforeScenario() throws Exception {
//        System.out.println("Before Scenario"+value + "\n");
//    }
//
//    @After
//    public void afterScenario() throws InterruptedException, IOException {
//        System.out.println("After Scenario"+value + "\n");
//    }
//}

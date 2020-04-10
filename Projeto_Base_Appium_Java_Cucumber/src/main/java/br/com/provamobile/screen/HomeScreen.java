package br.com.provamobile.screen;

import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;

import java.time.Duration;

public class HomeScreen extends BaseScreen {

    private static final By tela = By.id("com.example.organize:id/button");


    public static void acessarteladecadastro_login(){

        for (int i=0; i<4; i++){
            TouchAction action = new TouchAction(appiumDriver);
            action.press(PointOption.point(440,400))
                    .waitAction(new WaitOptions().withDuration(Duration.ofMillis(1000))) //you can change wait durations as per your requirement
                    .moveTo(PointOption.point(5, 100))
                    .release()
                    .perform();
        }


    }




}

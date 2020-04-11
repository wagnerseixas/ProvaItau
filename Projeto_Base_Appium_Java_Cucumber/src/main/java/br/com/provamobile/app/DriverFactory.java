package br.com.provamobile.app;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;


public class DriverFactory {

    public static AppiumDriver<MobileElement> appiumDriver;
    public static WebDriverWait wait;
    public static WebDriverWait waitNot;

    public static AppiumDriver<MobileElement> createDriver() {

        try{
        DesiredCapabilities cap = new DesiredCapabilities();
        cap.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");
        cap.setCapability(MobileCapabilityType.AUTOMATION_NAME,"uiautomator2");
        cap.setCapability(MobileCapabilityType.DEVICE_NAME,"teste");
        //cap.setCapability("appPackage","qaninja.com.pixel");
        //cap.setCapability("appActivity","qaninja.com.pixel.SplashScreen");
        //cap.setCapability("app", new File("../../../../apk/ContePraMim(^_^).apk"));
        cap.setCapability(MobileCapabilityType.APP, "D:/ProvaItauSP/Projeto_Base_Appium_Java_Cucumber/apk/ContePraMim(^_^).apk");
        //appiumDriver = new AppiumDriver<MobileElement>(new URL("http://192.168.114.103"), cap);
        appiumDriver = new AppiumDriver<MobileElement>(new URL("http://127.0.0.1:4723/wd/hub"), cap);
        appiumDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);


        }catch (MalformedURLException e) {
            System.out.println( e.getMessage() );
        }
        return appiumDriver;
    }

    public static AppiumDriver<MobileElement> getDriver() {
        if(appiumDriver == null){
            return createDriver();
        }
        return appiumDriver;
    }

    public static void closeDriver() {
        if(appiumDriver != null) {

            appiumDriver.quit();
            appiumDriver = null;
        }
    }

    public static void relaunchApp() {
        appiumDriver.launchApp();
    }

}

package br.com.provamobile.support;
import br.com.provamobile.app.DriverFactory;
import io.appium.java_client.MobileElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class Element extends DriverFactory {

    protected static MobileElement element(By by) {
        waitElement(by);
        return appiumDriver.findElement(by);
    }

    protected static List<MobileElement> elements(By by) {
        waitElement(by);
        return appiumDriver.findElements(by);
    }

    protected static boolean exist(By by) {
        wait.until(ExpectedConditions.presenceOfElementLocated(by));
        return appiumDriver.findElement(by).isDisplayed();
    }

    protected static boolean elementIsVisible(By by) {
        return appiumDriver.findElement(by).isDisplayed();
    }

    protected static boolean elementNotPresent(By by) {
        return waitNot.until(ExpectedConditions.not(ExpectedConditions.presenceOfElementLocated(by)));
    }

    protected static void waitElement(By by) {
        appiumDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        appiumDriver.findElement(by);
    }

    protected static void waitElementToNotBeVisible(By by) {
        wait.until(ExpectedConditions.invisibilityOfElementLocated(by));
    }


}

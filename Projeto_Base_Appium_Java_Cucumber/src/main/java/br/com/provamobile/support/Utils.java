package br.com.provamobile.support;

import br.com.provamobile.app.DriverFactory;
import cucumber.api.Scenario;
import io.qameta.allure.Allure;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class Utils {

    /*1- Gera relatorio com nome e status do cenário no allure
    * 2- Cria diretorio automaticamente*/

    public static File gerarScreenShot(Scenario scenario){
        File imagem = ((TakesScreenshot) DriverFactory.getDriver()).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(imagem, (new File("./evidences", scenario.getName() + " - " + scenario.getStatus().toUpperCase() + ".png")));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return imagem;
    }

    public static void anexarScreenshot(File file, String description) {
        Path content = Paths.get(file.getPath());
        try (InputStream is = Files.newInputStream(content)) {
            Allure.addAttachment(description, is);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

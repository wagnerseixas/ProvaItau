package br.com.provamobile.runner;

import br.com.provamobile.app.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@RunWith(Cucumber.class)

@CucumberOptions(
        features = "features",
        tags = {"@logar,@receita"},
        glue = "br/com/provamobile/steps",
        plugin = {"json:target/cucumber-reports/report_cucumber.json","pretty","html:target/cucumber-reports/report_cucumber.html"}
)

public class RunTest {

    @BeforeClass
    public static void tearUp(){
      DriverFactory.getDriver();


    }

    @AfterClass
    public static void tearDown(){
        //SimpleDateFormat dataAtual = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        LocalDateTime hoje = LocalDateTime.now();
        DateTimeFormatter  formatter =  DateTimeFormatter.ofPattern("dd_MM_yyyy_HH_mm_ss");
        String dtformatada = hoje.format(formatter);
        String nomearquivo = "Index_"+dtformatada+".html";
       // System.out.println(nomearquivo);

        File pasta = new File("D:\\ProvaItauSP\\Projeto_Base_Appium_Java_Cucumber\\target\\cucumber-reports\\report_cucumber.html");
        File arquivo = new File(pasta,"index.html");
        File novonome = new File(pasta,nomearquivo);
        boolean renomeado = arquivo.renameTo(novonome);
        //System.out.println(renomeado);

      DriverFactory.closeDriver();

    }

}
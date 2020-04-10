package br.com.provamobile.runner;

import br.com.provamobile.app.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "features",
        tags = {"@logar,@receita"},
        glue = "br/com/provamobile/steps"
)
public class RunTest {

    @BeforeClass
    public static void tearUp(){
      DriverFactory.getDriver();

    }

    @AfterClass
    public static void tearDown(){
      DriverFactory.closeDriver();

    }

}
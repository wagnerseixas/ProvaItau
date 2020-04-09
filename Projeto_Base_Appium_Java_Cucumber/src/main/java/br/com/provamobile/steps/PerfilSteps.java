package br.com.provamobile.steps;

import br.com.provamobile.screen.HomeScreen;
import br.com.provamobile.screen.PerfilScreen;
import cucumber.api.java.pt.Entao;
import org.junit.Assert;

public class PerfilSteps {

    @Entao("^vejo minhas informacoes de cadastro$")
    public void vejo_minhas_informacoes_de_cadastro() {
        HomeScreen.clicarbtTelaLogin();
        Assert.assertEquals(PerfilScreen.validarNome(),"Tony Stark");
        System.out.println(PerfilScreen.validarNome());
    }


}
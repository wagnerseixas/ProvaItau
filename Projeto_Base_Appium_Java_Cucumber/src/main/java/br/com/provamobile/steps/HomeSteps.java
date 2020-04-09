package br.com.provamobile.steps;

import br.com.provamobile.screen.HomeScreen;
import cucumber.api.java.pt.Dado;

public class HomeSteps {

    @Dado("^que eu esteja na tela de login$")
    public void que_eu_esteja_na_tela_de_login() {
        HomeScreen.clicarbtTelaLogin();
    }


}
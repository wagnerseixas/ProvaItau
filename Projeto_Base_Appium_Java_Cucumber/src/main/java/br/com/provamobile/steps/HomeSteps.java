package br.com.provamobile.steps;

import br.com.provamobile.screen.HomeScreen;
import cucumber.api.java.pt.Dado;

public class HomeSteps {

    @Dado("^acesso tela de cadastro logar$")
    public void acesso_tela_de_cadastro_logar() {
        HomeScreen.acessarteladecadastro_login();
    }


}
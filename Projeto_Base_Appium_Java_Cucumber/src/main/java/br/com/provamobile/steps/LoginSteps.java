package br.com.provamobile.steps;

import br.com.provamobile.screen.LoginScreen;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;

public class LoginSteps {


    @E("^preencho o formulario de login com email (.*)$")
    public void preencho_o_formulario_de_login_com_email(String Email) {
        LoginScreen.preencherCampoEmail(Email);

    }

    @E("^preencho o formulario de login com senha (.*)$")
    public void preencho_o_formulario_de_login_com_senha(String Senha) {
        LoginScreen.preencherCampoSenha(Senha);
    }

    @Quando("^seleciono a opcao Entrar$")
    public void seleciono_a_opcao_Entrar() {
        LoginScreen.clicarEntrar();
    }


}
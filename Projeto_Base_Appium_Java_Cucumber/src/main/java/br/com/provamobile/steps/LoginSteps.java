package br.com.provamobile.steps;

import br.com.provamobile.screen.LoginScreen;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;

public class LoginSteps {

    @E("^seleciono a opcao cadastrar$")
    public void seleciono_a_opcao_cadastrar() {
        LoginScreen.opcaocadastrar();

    }

    @E("^seleciono a opcao ja tenho conta$")
    public void seleciono_a_opcao_ja_tenho_conta() {
        LoginScreen.opcaojatenhoconta();

    }

    @Quando("^escolho a opcao entrar$")
    public void escolho_a_opcao_entrar()  {
        LoginScreen.opcaoentrar();


    }




}
package br.com.provamobile.steps;

import br.com.provamobile.screen.CadastrarContaScreen;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;

public class CadastrarContaSteps {

    @E("^preencho o formulario de cadastro com nome (.*)$")
    public void preencho_o_formulario_de_cadastro_com_nome(String Nome){
        CadastrarContaScreen.preencherCampoNome(Nome);
    }
    @E("^preencho o formulario de cadastro com email (.*)$")
    public void preencho_o_formulario_de_cadastro_com_email(String Email) {
        CadastrarContaScreen.preencherCampoEmail(Email);

    }

    @E("^preencho o formulario de cadastro com senha (.*)$")
    public void preencho_o_formulario_de_cadastro_com_senha(String Senha) {
        CadastrarContaScreen.preencherCampoSenha(Senha);
    }

    @Quando("^escolho a opcao cadastrar$")
    public void escolho_a_opcao_cadastrar() {
       CadastrarContaScreen.clicarCadastrar();

    }


}
package br.com.provamobile.steps;

import br.com.provamobile.screen.CadastrarContaScreen;
import br.com.provamobile.support.ReaderCSV;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;

import java.util.ArrayList;

public class CadastrarContaSteps {

    ArrayList<String> result = null;
    @Before
    public void doSomethingBefore(Scenario scenario) throws Exception {
        String CT = scenario.getSourceTagNames().iterator().next();
        String cwd = System.getProperty("user.dir");
        String csv_path = (cwd + "\\massateste\\CadUsuario.csv");
        ReaderCSV csv_file = new ReaderCSV();
        result = csv_file.oneByOne(csv_path, CT);
      }

    @E("preencho o formulario de cadastro com nome")
    public void preencho_o_formulario_de_cadastro_com_nome(){
        String nome = result.get(3).trim();
        CadastrarContaScreen.preencherCampoNome(nome);
    }
    @E("preencho o formulario de cadastro com email")
    public void preencho_o_formulario_de_cadastro_com_email() {
        String email = result.get(1).trim();
        CadastrarContaScreen.preencherCampoEmail(email);

    }

    @E("preencho o formulario de cadastro com senha")
    public void preencho_o_formulario_de_cadastro_com_senha() {
        String senha = result.get(2).trim();
        CadastrarContaScreen.preencherCampoSenha(senha);
    }

    @Quando("^escolho a opcao cadastrar$")
    public void escolho_a_opcao_cadastrar() {
       CadastrarContaScreen.clicarCadastrar();

    }


}
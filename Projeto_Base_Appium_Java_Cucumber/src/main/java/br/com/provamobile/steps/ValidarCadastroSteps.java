package br.com.provamobile.steps;

import br.com.provamobile.screen.ValidarCadastroScreen;
import br.com.provamobile.support.ReaderCSV;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Entao;
import org.junit.Assert;

import java.time.Duration;
import java.util.ArrayList;


public class ValidarCadastroSteps {
    ArrayList<String> result = null;
    @Before
    public void doSomethingBefore(Scenario scenario) throws Exception {
        String CT = scenario.getSourceTagNames().iterator().next();
        //System.out.println("TEST CN: " + CT);
        String cwd = System.getProperty("user.dir");
        //System.out.println("Current working directory : " + cwd);
        String csv_path = (cwd + "\\massateste\\CadUsuario.csv");
        ReaderCSV csv_file = new ReaderCSV();
        //System.out.println("Current working directory : " + csv_path);
        result = csv_file.oneByOne(csv_path, CT);
        //result.forEach(System.out::println);
        //result = csv_file.oneByOne(csv_path, CT);
        //String Campo1 = result.get(1).trim();
        // System.out.println("Campo Nome: "+ result.get(1).trim());
        // System.out.println("Campo Email: "+ result.get(2).trim());
        // System.out.println("Campo Senha: "+ result.get(3).trim());

    }

    @Entao("^verifico a mensagem de confirmacao de cadastro na tela$")
    public void verifico_a_mensagem_de_confirmacao_de_cadastro_na_tela() {
        //HomeScreen.clicarbtTelaLogin();
        Assert.assertEquals(ValidarCadastroScreen.validarNome(),"CADASTRE-SE");
        System.out.println(ValidarCadastroScreen.validarNome());
    }

    @Entao("^verifico usuário logado$")
    public void verifico_usuário_logado() {
        String nome = result.get(3).trim();
        Duration.ofSeconds(20);
        Assert.assertEquals(ValidarCadastroScreen.validarNomeLogado(), nome);
        System.out.println(ValidarCadastroScreen.validarNomeLogado());
    }

    @Entao("verifico o item salvo na lista de receitas")
    public void verifico_o_item_salvo_na_lista_de_receitas() {
        String resultado = result.get(6).trim();
        Duration.ofSeconds(20);
        Assert.assertEquals(ValidarCadastroScreen.validarConfirmarReceita(), resultado);
        System.out.println(ValidarCadastroScreen.validarConfirmarReceita());

    }


}
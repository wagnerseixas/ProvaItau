package br.com.provamobile.steps;

import br.com.provamobile.screen.ValidarCadastroScreen;
import cucumber.api.java.pt.Entao;
import org.junit.Assert;

public class ValidarCadastroSteps {

    @Entao("^verifico a mensagem de confirmacao de cadastro na tela$")
    public void verifico_a_mensagem_de_confirmacao_de_cadastro_na_tela() {
        //HomeScreen.clicarbtTelaLogin();
        Assert.assertEquals(ValidarCadastroScreen.validarNome(),"CADASTRE-SE");
        System.out.println(ValidarCadastroScreen.validarNome());
    }

    @Entao("^verifico usuário logado (.*)$")
    public void verifico_usuário_logado(String Nome) {

        Assert.assertEquals(ValidarCadastroScreen.validarNomeLogado(), Nome);
        System.out.println(ValidarCadastroScreen.validarNomeLogado());
    }

    @Entao("^verifico o item salvo na lista de receitas (.*)$")
    public void verifico_o_item_salvo_na_lista_de_receitas(String Descricao) {

        Assert.assertEquals(ValidarCadastroScreen.validarConfirmarReceita(), Descricao);
        System.out.println(ValidarCadastroScreen.validarConfirmarReceita());

    }


}
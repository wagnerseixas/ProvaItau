package br.com.provamobile.steps;

import br.com.provamobile.screen.CadastrarContaReceitaScreen;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;

public class CadastrarContaReceitaSteps {


    @E("^seleciono a opcao adicionar receitadespesa$")
        public void seleciono_a_opcao_adicionar_receitadespesa(){
        CadastrarContaReceitaScreen.clicarAddReceita();

    }
    @E("^seleciono a opcao receita$")
        public void seleciono_a_opcao_receita(){
            CadastrarContaReceitaScreen.clicarMenuReceita();
    }

    @E("^preencho o formulario de Receita Valor(.*)$")
        public void preencho_o_formulario_de_Receita_Valor(String Valor){
            CadastrarContaReceitaScreen.preencherCampoValor(Valor);

    }
    @E("^preencho o formulario de Receita Categoria(.*)$")
        public void preencho_o_formulario_de_Receita_Categoria(String Categoria){
            CadastrarContaReceitaScreen.preencherCampoCategoria(Categoria);

    }
    @E("^preencho o formulario de Receita Descricao(.*)$")
        public void preencho_o_formulario_de_Receita_Descricao(String Descricao){
            CadastrarContaReceitaScreen.preencherCampoDescricao(Descricao);

    }

    @Quando("^seleciono a opcao Salvar$")
        public void seleciono_a_opcao_Salvar(){
            CadastrarContaReceitaScreen.clicarSalvar();
    }




}
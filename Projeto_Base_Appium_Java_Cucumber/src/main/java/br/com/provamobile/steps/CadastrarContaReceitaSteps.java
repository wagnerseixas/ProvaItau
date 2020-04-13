package br.com.provamobile.steps;

import br.com.provamobile.screen.CadastrarContaReceitaScreen;
import br.com.provamobile.support.ReaderCSV;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Quando;

import java.time.Duration;
import java.util.ArrayList;

public class CadastrarContaReceitaSteps {
    ArrayList<String> result = null;
    @Before
    public void doSomethingBefore(Scenario scenario) throws Exception {
        String CT = scenario.getSourceTagNames().iterator().next();
        String cwd = System.getProperty("user.dir");
        String csv_path = (cwd + "\\massateste\\CadUsuario.csv");
        ReaderCSV csv_file = new ReaderCSV();
        result = csv_file.oneByOne(csv_path, CT);

    }

    @E("^seleciono a opcao adicionar receitadespesa$")
        public void seleciono_a_opcao_adicionar_receitadespesa(){
        Duration.ofSeconds(10);
        CadastrarContaReceitaScreen.clicarAddReceita();

    }
    @E("^seleciono a opcao receita$")
        public void seleciono_a_opcao_receita(){
            Duration.ofSeconds(10);
            CadastrarContaReceitaScreen.clicarMenuReceita();
    }

    @E("preencho o formulario de Receita Valor")
       public void preencho_o_formulario_de_Receita_Valor(){
            String valor = result.get(3).trim();
            CadastrarContaReceitaScreen.preencherCampoValor(valor);

    }
    @E("preencho o formulario de Receita Categoria")
        public void preencho_o_formulario_de_Receita_Categoria(){
            String categoria = result.get(4).trim();
            CadastrarContaReceitaScreen.preencherCampoCategoria(categoria);

    }
    @E("preencho o formulario de Receita Descricao")
        public void preencho_o_formulario_de_Receita_Descricao(){
            String descricao = result.get(5).trim();
            CadastrarContaReceitaScreen.preencherCampoDescricao(descricao);

    }

    @Quando("^seleciono a opcao Salvar$")
        public void seleciono_a_opcao_Salvar(){
            CadastrarContaReceitaScreen.clicarSalvar();

    }




}
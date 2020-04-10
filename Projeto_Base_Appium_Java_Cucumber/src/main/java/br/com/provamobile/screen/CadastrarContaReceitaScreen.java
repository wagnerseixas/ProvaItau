package br.com.provamobile.screen;

import org.openqa.selenium.By;

public class CadastrarContaReceitaScreen extends BaseScreen {

    private static final By btaddreceita = By.className("android.widget.ImageButton");

    private static final By btmenureceita = By.id("com.example.organize:id/menu_receita");

    private static final By btsalvar = By.id("com.example.organize:id/fabSalvar");

    private static final By resultaddreceita = By.id("com.example.organize:id/textAdapterTitulo");

    private static final By nmcampovalor = By.id("com.example.organize:id/editValor");

    private static final By nmcampocategoria = By.id("com.example.organize:id/editCategoria");

    private static final By nmcampodescricao = By.id("com.example.organize:id/editDescricao");






    public static void preencherCampoValor(String Valor){
         preencherInput(nmcampovalor, Valor);
    }

    public static void preencherCampoCategoria(String Categoria){
       preencherInput(nmcampocategoria, Categoria);
    }

    public static void preencherCampoDescricao(String Descricao){
        preencherInput(nmcampodescricao, Descricao);
    }

    public static void clicarSalvar(){
        click(btsalvar);

    }

    public static void clicarAddReceita(){
        click(btaddreceita);

    }

    public static void clicarMenuReceita(){
        click(btmenureceita);

    }

}

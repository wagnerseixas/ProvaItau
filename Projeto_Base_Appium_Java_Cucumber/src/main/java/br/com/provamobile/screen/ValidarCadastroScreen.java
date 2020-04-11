package br.com.provamobile.screen;

import org.openqa.selenium.By;


public abstract class ValidarCadastroScreen extends BaseScreen {

    private static final By btCadastre = By.id("com.example.organize:id/button");

    private static final By btvalidanomelogado = By.id("com.example.organize:id/textSaudacao");

    private static final By nmConfirmarCadastroReceita = By.id("com.example.organize:id/textSaldo");
   // private static final By nmConfirmarCadastroReceita = By.id("com.example.organize:id/recycleMovimentos");




    public static String validarNome() {
        return element(btCadastre).getText();
    }

    public static String validarNomeLogado() {

       if(element(btvalidanomelogado).isDisplayed()){
            System.out.println(element(btvalidanomelogado).getText());
        }
        return element(btvalidanomelogado).getText();
    }

    public static String validarConfirmarReceita() {

        if(element(nmConfirmarCadastroReceita).isDisplayed()){
            System.out.println(element(nmConfirmarCadastroReceita).getText());

        }
        //Duration.ofSeconds(15);
        return element(nmConfirmarCadastroReceita).getText();
    }


}

package br.com.provamobile.screen;

import org.openqa.selenium.By;

public class CadastrarContaScreen extends BaseScreen {

    private static final By campoNome = By.id("com.example.organize:id/editNome");
    private static final By campoEmail = By.id("com.example.organize:id/editEmail");
    private static final By campoSenha = By.id("com.example.organize:id/editPassword");
    private static final By btcadastrar = By.id("com.example.organize:id/btnCadastrar");




    public static void preencherCampoNome(String nome){
         preencherInput(campoNome, nome);
    }

    public static void preencherCampoEmail(String email){
       preencherInput(campoEmail, email);
    }

    public static void preencherCampoSenha(String senha){
        preencherInput(campoSenha, senha);
    }

    public static void clicarCadastrar(){
        click(btcadastrar);

    }

}

package br.com.provamobile.screen;

import org.openqa.selenium.By;

public class LoginScreen extends BaseScreen {

    private static final By campoEmail = By.id("qaninja.com.pixel:id/usernameTxt");
    private static final By campoSenha = By.id("qaninja.com.pixel:id/passwordTxt");
    private static final By btEntrar = By.id("qaninja.com.pixel:id/loginButt");


    public static void preencherCampoEmail(String email){
        preencherInput(campoEmail, email);
    }

    public static void preencherCampoSenha(String senha){
        preencherInput(campoSenha, senha);
    }

    public static void clicarEntrar(){
        click(btEntrar);
    }


}

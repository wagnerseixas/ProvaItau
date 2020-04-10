package br.com.provamobile.screen;

import org.openqa.selenium.By;

public class LoginScreen extends BaseScreen {

    private static final By btcadastrar = By.id("com.example.organize:id/button");
    private static final By btjatenhoconta = By.id("com.example.organize:id/textView5");
    private static final By btentrar = By.id("com.example.organize:id/btnEntrar");





    public static void opcaocadastrar(){
        click(btcadastrar);
    }

    public static void opcaojatenhoconta(){
        click(btjatenhoconta);
    }

    public static void opcaoentrar(){
        click(btentrar);

    }





}

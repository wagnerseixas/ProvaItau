package br.com.provamobile.screen;

import org.openqa.selenium.By;

public class PerfilScreen extends BaseScreen {

    private static final By nmNomeCompleto = By.id("qaninja.com.pixel:id/aFullNameTxt");

    public static String validarNome(){
        return element(nmNomeCompleto).getText();
    }



}

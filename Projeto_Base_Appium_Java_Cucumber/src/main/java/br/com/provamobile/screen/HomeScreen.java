package br.com.provamobile.screen;

import org.openqa.selenium.By;

public class HomeScreen extends BaseScreen {

    private static final By btlogar = By.id("qaninja.com.pixel:id/accountButt");

    public static void clicarbtTelaLogin(){


        click(btlogar);
    }




}

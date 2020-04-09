package br.com.provamobile.screen;

import br.com.provamobile.support.Element;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class BaseScreen extends Element {

        /* Função que preenche campo imput*/
        public static void preencherInput(By by, String text) {
            waitElement(by);
            element(by).sendKeys(text);
        }

        /* Função que clica em campo ou em botão*/
        public static void click(By by) {
            waitElement(by);
            element(by).click();
        }

        /* Função que limpra campo imput*/
        static void clear(By by) {
            element(by).clear();
        }

        /* Função que retorna um "false ou um true" sobre a disponibilidade de um elemento*/
        static boolean isDisplayed(By by) {
            return element(by).isDisplayed();
        }

        /* Função que seleciona a tecla tab sobre um campo*/
        protected static void selecinoTab(By by) {
            element(by).sendKeys(Keys.TAB);
        }

        /* Função que pega o texto de um determinado elemento*/
        protected static String getText(By by) {
            return element(by).getText();
        }

        /* Função que valida se o check está true*/
        protected static String checkedTrue(By by, String True) {
            return element(by).getAttribute(True);
        }

        /* Função que valida se o check está false*/
        protected static String checkedFalse(By by, String False) {
            return element(by).getAttribute(False);
        }







}

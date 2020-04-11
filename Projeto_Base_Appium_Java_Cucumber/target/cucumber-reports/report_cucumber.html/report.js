$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logarouCadastrar.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    },
    {
      "line": 2,
      "value": "#encoding:utf-8"
    },
    {
      "line": 3,
      "value": "##################### Feature construida para Cadastrar Novo Usuario  ou Logar na Aplicaco"
    }
  ],
  "line": 6,
  "name": "Cadastrar Usuário",
  "description": "",
  "id": "cadastrar-usuário",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 5,
      "name": "@logar"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Cadastrar Usuário",
  "description": "",
  "id": "cadastrar-usuário;cadastrar-usuário",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 14,
  "name": "seleciono a opcao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho o formulario de cadastro com nome  \u003cNome\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o formulario de cadastro com email \u003cEmail\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o formulario de cadastro com senha \u003cSenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "escolho a opcao cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "verifico a mensagem de confirmacao de cadastro na tela",
  "keyword": "Entao "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "cadastrar-usuário;cadastrar-usuário;",
  "rows": [
    {
      "cells": [
        "Nome",
        "Email",
        "Senha"
      ],
      "line": 21,
      "id": "cadastrar-usuário;cadastrar-usuário;;1"
    },
    {
      "cells": [
        "Tony7 Stark",
        "tony7@stark.com",
        "pass123"
      ],
      "line": 22,
      "id": "cadastrar-usuário;cadastrar-usuário;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 8,
  "name": "Eu como usuario desejo cadastrar um usuário para acessa a APP",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "### Usado para fazer Swipe de janelas ate a funcionalidade Logar ou Cadastrar"
    }
  ],
  "line": 10,
  "name": "acesso tela de cadastro logar",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 10881676700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Cadastrar Usuário",
  "description": "",
  "id": "cadastrar-usuário;cadastrar-usuário;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@logar"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "seleciono a opcao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho o formulario de cadastro com nome  Tony7 Stark",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o formulario de cadastro com email tony7@stark.com",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o formulario de cadastro com senha pass123",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "escolho a opcao cadastrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "verifico a mensagem de confirmacao de cadastro na tela",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.seleciono_a_opcao_cadastrar()"
});
formatter.result({
  "duration": 667899300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Tony7 Stark",
      "offset": 43
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_nome(String)"
});
formatter.result({
  "duration": 3433932600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony7@stark.com",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email(String)"
});
formatter.result({
  "duration": 1350996500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_senha(String)"
});
formatter.result({
  "duration": 1337109500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.escolho_a_opcao_cadastrar()"
});
formatter.result({
  "duration": 800026000,
  "status": "passed"
});
formatter.match({
  "location": "ValidarCadastroSteps.verifico_a_mensagem_de_confirmacao_de_cadastro_na_tela()"
});
formatter.result({
  "duration": 15536957000,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WAGNER\u0027, ip: \u0027192.168.114.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities {app: D:/ProvaItauSP/Projeto_Base..., appPackage: com.example.organize, automationName: uiautomator2, databaseEnabled: false, desired: {app: D:/ProvaItauSP/Projeto_Base..., automationName: uiautomator2, deviceName: teste, platformName: android}, deviceApiLevel: 28, deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 240, deviceScreenSize: 480x800, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 1.5, platform: LINUX, platformName: Android, platformVersion: 9, statBarHeight: 36, takesScreenshot: true, viewportRect: {height: 764, left: 0, top: 36, width: 480}, warnings: {}, webStorageEnabled: false}\nSession ID: 8403b301-b6c2-4d47-b695-f8a306f922ee\n*** Element info: {Using\u003did, value\u003dcom.example.organize:id/button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat br.com.provamobile.support.Element.waitElement(Element.java:37)\r\n\tat br.com.provamobile.support.Element.element(Element.java:13)\r\n\tat br.com.provamobile.screen.ValidarCadastroScreen.validarNome(ValidarCadastroScreen.java:17)\r\n\tat br.com.provamobile.steps.ValidarCadastroSteps.verifico_a_mensagem_de_confirmacao_de_cadastro_na_tela(ValidarCadastroSteps.java:12)\r\n\tat ✽.Entao verifico a mensagem de confirmacao de cadastro na tela(logarouCadastrar.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 17042969200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Logar com Usuário Cadastrado",
  "description": "",
  "id": "cadastrar-usuário;logar-com-usuário-cadastrado",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 26,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "preencho o formulario de cadastro com email \u003cEmail\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "preencho o formulario de cadastro com senha \u003cSenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "verifico usuário logado \u003cNome\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "cadastrar-usuário;logar-com-usuário-cadastrado;",
  "rows": [
    {
      "cells": [
        "Nome",
        "Email",
        "Senha"
      ],
      "line": 32,
      "id": "cadastrar-usuário;logar-com-usuário-cadastrado;;1"
    },
    {
      "cells": [
        "Olá, Amigo ;)   Tony4 Stark",
        "tony4@stark.com",
        "pass123"
      ],
      "line": 33,
      "id": "cadastrar-usuário;logar-com-usuário-cadastrado;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 8,
  "name": "Eu como usuario desejo cadastrar um usuário para acessa a APP",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "### Usado para fazer Swipe de janelas ate a funcionalidade Logar ou Cadastrar"
    }
  ],
  "line": 10,
  "name": "acesso tela de cadastro logar",
  "keyword": "Dado "
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 12371837900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Logar com Usuário Cadastrado",
  "description": "",
  "id": "cadastrar-usuário;logar-com-usuário-cadastrado;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@logar"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "preencho o formulario de cadastro com email tony4@stark.com",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "preencho o formulario de cadastro com senha pass123",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "verifico usuário logado Olá, Amigo ;)   Tony4 Stark",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.seleciono_a_opcao_ja_tenho_conta()"
});
formatter.result({
  "duration": 461771600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony4@stark.com",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email(String)"
});
formatter.result({
  "duration": 4146341200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_senha(String)"
});
formatter.result({
  "duration": 754514200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.escolho_a_opcao_entrar()"
});
formatter.result({
  "duration": 792955200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Olá, Amigo ;)   Tony4 Stark",
      "offset": 24
    }
  ],
  "location": "ValidarCadastroSteps.verifico_usuário_logado(String)"
});
formatter.result({
  "duration": 9629369200,
  "status": "passed"
});
formatter.after({
  "duration": 13980057700,
  "status": "passed"
});
formatter.uri("organizarcontareceita.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    },
    {
      "line": 2,
      "value": "#encoding:utf-8"
    },
    {
      "line": 3,
      "value": "##################### Feature construida para Cadastrar Receita ou Despesa de um determinado Usuario"
    }
  ],
  "line": 6,
  "name": "Organizar Conta - Receitas e Despesas",
  "description": "",
  "id": "organizar-conta---receitas-e-despesas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 5,
      "name": "@receita"
    }
  ]
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Cadastrar Receitas",
  "description": "",
  "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 19,
  "name": "seleciono a opcao adicionar receitadespesa",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "seleciono a opcao receita",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencho o formulario de Receita Valor \u003cValor\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho o formulario de Receita Categoria \u003cCategoria\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencho o formulario de Receita Descricao \u003cDescricao\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono a opcao Salvar",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "verifico o item salvo na lista de receitas \u003cDescricao\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas;",
  "rows": [
    {
      "cells": [
        "Valor",
        "Categoria",
        "Descricao"
      ],
      "line": 27,
      "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas;;1"
    },
    {
      "cells": [
        "20",
        "lanche7",
        "Lanche da semana7"
      ],
      "line": 28,
      "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "### Usado como Suporte para logar na APP"
    }
  ],
  "line": 8,
  "name": "Eu como usuario desejo estar logado para cadastrar minhas contas - Receitas e Despesas",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "acesso tela de cadastro logar",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "acesso tela de cadastro logar",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "preencho o formulario de cadastro com email tony4@stark.com",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencho o formulario de cadastro com senha pass123",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 11625195600,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 5625952100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.seleciono_a_opcao_ja_tenho_conta()"
});
formatter.result({
  "duration": 432743000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony4@stark.com",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email(String)"
});
formatter.result({
  "duration": 4622120800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_senha(String)"
});
formatter.result({
  "duration": 1304802300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.escolho_a_opcao_entrar()"
});
formatter.result({
  "duration": 728664000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Cadastrar Receitas",
  "description": "",
  "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@receita"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "seleciono a opcao adicionar receitadespesa",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "seleciono a opcao receita",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "preencho o formulario de Receita Valor 20",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho o formulario de Receita Categoria lanche7",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencho o formulario de Receita Descricao Lanche da semana7",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono a opcao Salvar",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "verifico o item salvo na lista de receitas Lanche da semana7",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_adicionar_receitadespesa()"
});
formatter.result({
  "duration": 10620702000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_receita()"
});
formatter.result({
  "duration": 619966600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 20",
      "offset": 38
    }
  ],
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Valor(String)"
});
formatter.result({
  "duration": 3037632400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " lanche7",
      "offset": 42
    }
  ],
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Categoria(String)"
});
formatter.result({
  "duration": 928058600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Lanche da semana7",
      "offset": 42
    }
  ],
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Descricao(String)"
});
formatter.result({
  "duration": 842462400,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_Salvar()"
});
formatter.result({
  "duration": 871129300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lanche da semana7",
      "offset": 43
    }
  ],
  "location": "ValidarCadastroSteps.verifico_o_item_salvo_na_lista_de_receitas(String)"
});
formatter.result({
  "duration": 3116777300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[ ]Lanche da semana7\u003e but was:\u003c[]Lanche da semana7\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.com.provamobile.steps.ValidarCadastroSteps.verifico_o_item_salvo_na_lista_de_receitas(ValidarCadastroSteps.java:26)\r\n\tat ✽.Entao verifico o item salvo na lista de receitas Lanche da semana7(organizarcontareceita.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 12661671800,
  "status": "passed"
});
});
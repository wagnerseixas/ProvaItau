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
  "comments": [
    {
      "line": 11,
      "value": "#@cad"
    }
  ],
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
        "Tony12 Stark",
        "tony12@stark.com",
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
  "duration": 10775931900,
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
  "name": "preencho o formulario de cadastro com nome  Tony12 Stark",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o formulario de cadastro com email tony12@stark.com",
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
  "duration": 853134200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Tony12 Stark",
      "offset": 43
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_nome(String)"
});
formatter.result({
  "duration": 3952834800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony12@stark.com",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email(String)"
});
formatter.result({
  "duration": 1443047300,
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
  "duration": 866486300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.escolho_a_opcao_cadastrar()"
});
formatter.result({
  "duration": 809103800,
  "status": "passed"
});
formatter.match({
  "location": "ValidarCadastroSteps.verifico_a_mensagem_de_confirmacao_de_cadastro_na_tela()"
});
formatter.result({
  "duration": 4445470000,
  "status": "passed"
});
formatter.after({
  "duration": 10791774300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Logar com Usuário Cadastrado",
  "description": "",
  "id": "cadastrar-usuário;logar-com-usuário-cadastrado",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 27,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "preencho o formulario de cadastro com email \u003cEmail\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "preencho o formulario de cadastro com senha \u003cSenha\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "verifico usuário logado \u003cNome\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 32,
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
      "line": 33,
      "id": "cadastrar-usuário;logar-com-usuário-cadastrado;;1"
    },
    {
      "cells": [
        "Olá, Amigo ;)   Tony4 Stark",
        "tony4@stark.com",
        "pass123"
      ],
      "line": 34,
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
  "duration": 10981966100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
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
  "line": 27,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "preencho o formulario de cadastro com email tony4@stark.com",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "preencho o formulario de cadastro com senha pass123",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
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
  "duration": 452230800,
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
  "duration": 4203348700,
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
  "duration": 1328280300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.escolho_a_opcao_entrar()"
});
formatter.result({
  "duration": 797493000,
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
  "duration": 9276909600,
  "status": "passed"
});
formatter.after({
  "duration": 12431417200,
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
  "name": "verifico o item salvo na lista de receitas \u003cResultado\u003e",
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
        "Descricao",
        "Resultado"
      ],
      "line": 27,
      "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas;;1"
    },
    {
      "cells": [
        "15",
        "Merenda2",
        "Meu Lanche da semana2",
        "R$ 60"
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
  "name": "preencho o formulario de cadastro com email tony5@stark.com",
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
  "duration": 11809390300,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 5878587100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.seleciono_a_opcao_ja_tenho_conta()"
});
formatter.result({
  "duration": 395766900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tony5@stark.com",
      "offset": 44
    }
  ],
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email(String)"
});
formatter.result({
  "duration": 3171619500,
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
  "duration": 1692391900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.escolho_a_opcao_entrar()"
});
formatter.result({
  "duration": 783482800,
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
  "name": "preencho o formulario de Receita Valor 15",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho o formulario de Receita Categoria Merenda2",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencho o formulario de Receita Descricao Meu Lanche da semana2",
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
  "name": "verifico o item salvo na lista de receitas R$ 60",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_adicionar_receitadespesa()"
});
formatter.result({
  "duration": 7858617900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_receita()"
});
formatter.result({
  "duration": 1665899000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 15",
      "offset": 38
    }
  ],
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Valor(String)"
});
formatter.result({
  "duration": 2852339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Merenda2",
      "offset": 42
    }
  ],
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Categoria(String)"
});
formatter.result({
  "duration": 874330200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Meu Lanche da semana2",
      "offset": 42
    }
  ],
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Descricao(String)"
});
formatter.result({
  "duration": 1190172500,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_Salvar()"
});
formatter.result({
  "duration": 739362800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R$ 60",
      "offset": 43
    }
  ],
  "location": "ValidarCadastroSteps.verifico_o_item_salvo_na_lista_de_receitas(String)"
});
formatter.result({
  "duration": 3558494400,
  "status": "passed"
});
formatter.after({
  "duration": 11645420500,
  "status": "passed"
});
});
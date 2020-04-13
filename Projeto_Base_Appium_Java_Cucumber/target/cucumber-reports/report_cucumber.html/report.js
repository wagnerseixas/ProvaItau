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
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 45078600,
  "status": "passed"
});
formatter.before({
  "duration": 1286500,
  "status": "passed"
});
formatter.before({
  "duration": 1162800,
  "status": "passed"
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
  "duration": 11131596100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Cadastrar Usuário",
  "description": "",
  "id": "cadastrar-usuário;cadastrar-usuário",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@cad"
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
  "name": "preencho o formulario de cadastro com nome",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "preencho o formulario de cadastro com email",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "preencho o formulario de cadastro com senha",
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
  "duration": 647106000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_nome()"
});
formatter.result({
  "duration": 3590908200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email()"
});
formatter.result({
  "duration": 1417545800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_senha()"
});
formatter.result({
  "duration": 1289736900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.escolho_a_opcao_cadastrar()"
});
formatter.result({
  "duration": 824547400,
  "status": "passed"
});
formatter.match({
  "location": "ValidarCadastroSteps.verifico_a_mensagem_de_confirmacao_de_cadastro_na_tela()"
});
formatter.result({
  "duration": 4814847100,
  "status": "passed"
});
formatter.after({
  "duration": 10197193400,
  "status": "passed"
});
formatter.before({
  "duration": 1164500,
  "status": "passed"
});
formatter.before({
  "duration": 1423600,
  "status": "passed"
});
formatter.before({
  "duration": 1153300,
  "status": "passed"
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
  "duration": 11645166100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Logar com Usuário Cadastrado",
  "description": "",
  "id": "cadastrar-usuário;logar-com-usuário-cadastrado",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@logar"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "preencho o formulario de cadastro com email",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "preencho o formulario de cadastro com senha",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "verifico usuário logado",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.seleciono_a_opcao_ja_tenho_conta()"
});
formatter.result({
  "duration": 712793200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email()"
});
formatter.result({
  "duration": 3382576000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_senha()"
});
formatter.result({
  "duration": 1350073200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.escolho_a_opcao_entrar()"
});
formatter.result({
  "duration": 1301611800,
  "status": "passed"
});
formatter.match({
  "location": "ValidarCadastroSteps.verifico_usuário_logado()"
});
formatter.result({
  "duration": 10136302900,
  "status": "passed"
});
formatter.after({
  "duration": 10539664500,
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
      "name": "@addrec"
    }
  ]
});
formatter.before({
  "duration": 1965000,
  "status": "passed"
});
formatter.before({
  "duration": 930200,
  "status": "passed"
});
formatter.before({
  "duration": 895800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 7,
      "value": "### Usado como Suporte para logar na APP"
    }
  ],
  "line": 9,
  "name": "Eu como usuario desejo estar logado para cadastrar minhas contas - Receitas e Despesas",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "acesso tela de cadastro logar",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "acesso tela de cadastro logar",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "seleciono a opcao ja tenho conta",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "preencho o formulario de cadastro com email",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "preencho o formulario de cadastro com senha",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "escolho a opcao entrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 11700928500,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.acesso_tela_de_cadastro_logar()"
});
formatter.result({
  "duration": 5616098800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.seleciono_a_opcao_ja_tenho_conta()"
});
formatter.result({
  "duration": 440795300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_email()"
});
formatter.result({
  "duration": 4198586300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaSteps.preencho_o_formulario_de_cadastro_com_senha()"
});
formatter.result({
  "duration": 1282719800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.escolho_a_opcao_entrar()"
});
formatter.result({
  "duration": 1264935000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Cadastrar Receitas",
  "description": "",
  "id": "organizar-conta---receitas-e-despesas;cadastrar-receitas",
  "type": "scenario",
  "keyword": "Cenario"
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
  "name": "preencho o formulario de Receita Valor",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "preencho o formulario de Receita Categoria",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "preencho o formulario de Receita Descricao",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono a opcao Salvar",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "verifico o item salvo na lista de receitas",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_adicionar_receitadespesa()"
});
formatter.result({
  "duration": 9415123600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_receita()"
});
formatter.result({
  "duration": 1276674000,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Valor()"
});
formatter.result({
  "duration": 3236116600,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Categoria()"
});
formatter.result({
  "duration": 1244838200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.preencho_o_formulario_de_Receita_Descricao()"
});
formatter.result({
  "duration": 1195823800,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarContaReceitaSteps.seleciono_a_opcao_Salvar()"
});
formatter.result({
  "duration": 813525800,
  "status": "passed"
});
formatter.match({
  "location": "ValidarCadastroSteps.verifico_o_item_salvo_na_lista_de_receitas()"
});
formatter.result({
  "duration": 3135464600,
  "status": "passed"
});
formatter.after({
  "duration": 12887137800,
  "status": "passed"
});
});
#language:pt
#encoding:utf-8
##################### Feature construida para Cadastrar Novo Usuario  ou Logar na Aplicaco


Funcionalidade: Cadastrar Usuário

  Contexto: Eu como usuario desejo cadastrar um usuário para acessa a APP
    ### Usado para fazer Swipe de janelas ate a funcionalidade Logar ou Cadastrar
    Dado acesso tela de cadastro logar
  @cad
  Cenario: Cadastrar Usuário

    E seleciono a opcao cadastrar
    E preencho o formulario de cadastro com nome
    E preencho o formulario de cadastro com email
    E preencho o formulario de cadastro com senha
    Quando escolho a opcao cadastrar
    Entao verifico a mensagem de confirmacao de cadastro na tela

  @logar
  Cenario: Logar com Usuário Cadastrado

    E seleciono a opcao ja tenho conta
    E preencho o formulario de cadastro com email
    E preencho o formulario de cadastro com senha
    Quando escolho a opcao entrar
    Entao verifico usuário logado




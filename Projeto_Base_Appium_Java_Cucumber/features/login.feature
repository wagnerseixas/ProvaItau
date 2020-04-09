#language:pt
#encoding:utf-8

@wip
Funcionalidade: Login

  Contexto: Eu como usuario desejo logar na app com usuario e senha valido
    Dado que eu esteja na tela de login

  Esquema do Cenario: Selecionando o formulario
    E preencho o formulario de login com email <Email>
    E preencho o formulario de login com senha <Senha>
    Quando seleciono a opcao Entrar
    Entao vejo minhas informacoes de cadastro
    Exemplos:
    |Email           | Senha   |
    | tony@stark.com | pass123 |



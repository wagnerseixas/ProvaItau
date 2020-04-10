#language:pt
#encoding:utf-8
##################### Feature construida para Cadastrar Novo Usuario  ou Logar na Aplicaco

@logar
Funcionalidade: Cadastrar Usuário

  Contexto: Eu como usuario desejo cadastrar um usuário para acessa a APP
    ### Usado para fazer Swipe de janelas ate a funcionalidade Logar ou Cadastrar
    Dado acesso tela de cadastro logar

  Esquema do Cenario: Cadastrar Usuário

    E seleciono a opcao cadastrar
    E preencho o formulario de cadastro com nome  <Nome>
    E preencho o formulario de cadastro com email <Email>
    E preencho o formulario de cadastro com senha <Senha>
    Quando escolho a opcao cadastrar
    Entao verifico a mensagem de confirmacao de cadastro na tela
    Exemplos:
    | Nome           |  Email         | Senha   |
    | Tony7 Stark    |tony7@stark.com | pass123 |

  Esquema do Cenario: Logar com Usuário Cadastrado

    E seleciono a opcao ja tenho conta
    E preencho o formulario de cadastro com email <Email>
    E preencho o formulario de cadastro com senha <Senha>
    Quando escolho a opcao entrar
    Entao verifico usuário logado <Nome>
    Exemplos:
      | Nome                           |  Email         | Senha   |
      | Olá, Amigo ;)   Tony4 Stark    |tony4@stark.com | pass123 |



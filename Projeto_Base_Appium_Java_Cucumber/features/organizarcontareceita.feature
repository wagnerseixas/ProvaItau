#language:pt
#encoding:utf-8
##################### Feature construida para Cadastrar Receita ou Despesa de um determinado Usuario

@receita
Funcionalidade: Organizar Conta - Receitas e Despesas
### Usado como Suporte para logar na APP
 Contexto: Eu como usuario desejo estar logado para cadastrar minhas contas - Receitas e Despesas
 Dado acesso tela de cadastro logar
 Dado acesso tela de cadastro logar
 E seleciono a opcao ja tenho conta
 E preencho o formulario de cadastro com email tony4@stark.com
 E preencho o formulario de cadastro com senha pass123
 Quando escolho a opcao entrar


   Esquema do Cenario: Cadastrar Receitas

    E seleciono a opcao adicionar receitadespesa
    E seleciono a opcao receita
    E preencho o formulario de Receita Valor <Valor>
    E preencho o formulario de Receita Categoria <Categoria>
    E preencho o formulario de Receita Descricao <Descricao>
    Quando seleciono a opcao Salvar
    Entao verifico o item salvo na lista de receitas <Descricao>
    Exemplos:
      | Valor             |  Categoria          | Descricao          |
      | 20               | lanche7              | Lanche da semana7  |

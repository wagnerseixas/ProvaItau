#language:pt
#encoding:utf-8
##################### Feature construida para Cadastrar Receita ou Despesa de um determinado Usuario

@addrec
Funcionalidade: Organizar Conta - Receitas e Despesas
### Usado como Suporte para logar na APP

 Contexto: Eu como usuario desejo estar logado para cadastrar minhas contas - Receitas e Despesas
 Dado acesso tela de cadastro logar
 Dado acesso tela de cadastro logar
 E seleciono a opcao ja tenho conta
 E preencho o formulario de cadastro com email
 E preencho o formulario de cadastro com senha
 Quando escolho a opcao entrar


 Cenario: Cadastrar Receitas
    E seleciono a opcao adicionar receitadespesa
    E seleciono a opcao receita
    E preencho o formulario de Receita Valor
    E preencho o formulario de Receita Categoria
    E preencho o formulario de Receita Descricao
    Quando seleciono a opcao Salvar
    Entao verifico o item salvo na lista de receitas


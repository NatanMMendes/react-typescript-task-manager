# Projeto Onboarding - ReactJS e Typescript - Gerenciador de Tarefas 

Repositório de Treinamento de ReactJS e TypeScript para o Onboarding

## Instruções de Execução:
1. Fazer o dowload do projeto e executar $ npm install para baixar os pacotes;
2. Para executar o projeto : $ npm start
3. Acessar localhost:3000/

## Como foi Feito:
- Utilizado ReactJS e Typescript
- Para estilização StyledComponents e React Icons

## Funcionamento:
Pagina unica com modal contendo:
+ Input e button para inserir uma nova tarefa;
+ Uma lista de Tarefas criadas com opção de Excluir e Finalizar Tarefas;
+ Outra lista com as Tarefas Finalizadas com a opção Reabrir Tarefas;

## Como foi desenvolvido:
- Apenas com um arquivo usando a classe raiz do React App.tsx;
- Separei constantes para usar com os estados do React distinguindo lista e item a entrar;
- Inserindo por captura de eventos de botões do front, armazenando em uma variavel array (perdendo informações no reload);
- Usei Map para percorrer e utilizando a reatividade de status para atualizar informações;

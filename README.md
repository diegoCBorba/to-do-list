# To-Do List

Este é um aplicativo simples de lista de tarefas construído com React.

## Tecnologias Utilizadas

- React
- Vite
- TypeScript

## Como começar

1. Clone o repositório: `git clone https://github.com/diegoCBorba/to-do-list.git`

2. Instale as dependências: `npm install`

3. Execute o servidor de desenvolvimento: `npm run dev`

## Scripts Disponíveis

- `npm run dev`: Executa o servidor de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção.
- `npm run lint`: Executa a verificação de código usando o ESLint.
- `npm run preview`: Pré-visualiza a versão de produção localmente.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

- `src/`: Contém o código-fonte do aplicativo.
  - `components/`: Contém componentes React usados no aplicativo.
  - `buttonNew.tsx`: Componente para o botão de nova tarefa.
  - `table/`: Contém componentes relacionados ao layout da tabela.
    - `table-cell.tsx`: Componente para células da tabela.
    - `table-row.tsx`: Componente para linhas da tabela.
  - `toDoList.tsx`: Componente principal para a funcionalidade da lista de tarefas.
- `index.tsx`: Ponto de entrada do aplicativo.
- `vite.config.ts`: Arquivo de configuração do Vite.

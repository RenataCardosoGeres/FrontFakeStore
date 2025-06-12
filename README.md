# 🛍️ Fake Store App

Aplicação frontend desenvolvida com **React**, **Vite**, **TypeScript** e **Material UI**, que consome a [Fake Store API](https://fakestoreapi.com/) e utiliza autenticação com **JWT**.

---

## 🧾 Sumário

- [🎯 Objetivo]
- [📦 Tecnologias Utilizadas]
- [🔐 Funcionalidades]
- [🚧 Fluxo da Aplicação]
- [🧪 Como Rodar o Projeto](
- [🔗 Endpoints da API]
- [📚 Documentação e Referências]
- [📸 Demonstração (opcional)]

---

## 🎯 Objetivo

Desenvolver uma aplicação SPA protegida por autenticação JWT que permita aos usuários:

- Fazer login com nome de usuário e senha
- Listar produtos autenticados
- Visualizar detalhes de cada produto
- Exibir foto, título, preço e descrição
- Efetuar logout, limpando o token da sessão

---

## 📦 Tecnologias Utilizadas

- ⚛️ React
- ⚡ Vite
- ⛑️ TypeScript
- 🎨 Material UI
- 🔐 JWT
- 🔄 Axios
- 🌐 React Router

---

## 🔐 Funcionalidades

| Funcionalidade         | Descrição                                                                 |
|------------------------|---------------------------------------------------------------------------|
| Login com JWT          | Autenticação usando usuário/senha da Fake Store API                       |
| Página protegida       | Acesso a lista de produtos somente com token válido                       |
| Listagem de produtos   | Imagem, nome, preço e descrição                                           |
| Detalhes do produto    | Visualização completa de um produto selecionado                           |
| Logout                 | Remove o token e redireciona para login                                   |

---

## 🚧 Fluxo da Aplicação

1. **Login**
   - Formulário com `username` e `password`
   - Envia requisição para endpoint de login
   - Armazena o token JWT em localStorage

2. **Página de Produtos**
   - Protegida por autenticação
   - Recupera produtos via `GET /products` com o token no header
   - Lista os produtos com Material UI (Cards ou Grid)

3. **Detalhes do Produto**
   - Rota específica para visualizar mais informações

4. **Logout**
   - Remove o token
   - Redireciona para tela de login
  
   - ## 🧪 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone "Link do seu Repositório" 

Instale as dependências
npm install

 Inicie o servidor de desenvolvimento
 npm run dev


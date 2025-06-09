# 🎓 API - Gerenciador de Alunos

Este projeto é uma API desenvolvida em Python com Flask, que permite o gerenciamento de alunos com funcionalidades de cadastro, listagem, busca e exclusão.

## 🚀 Funcionalidades

* ✅ Cadastrar aluno
* 🔍 Listar todos os alunos
* 🧾 Buscar aluno por ID
* ❌ Deletar aluno

## 🛠️ Tecnologias

* Python 3
* Flask
* Flask-CORS
* SQLite
* Swagger (OpenAPI)

## 🧑‍💻 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/jaugustoguerra/MvP-Puc-Rio.git
cd MvP-Puc-Rio/back-end
```

### 2. Crie e ative um ambiente virtual (opcional)

```bash
python -m venv venv
venv\Scripts\activate   # no Windows
```

### 3. Instale as dependências

```bash
pip install -r requirements.txt
```

### 4. Execute o servidor

```bash
python app.py
```

## 📚 Documentação Swagger

Abra o Swagger Editor [https://editor.swagger.io](https://editor.swagger.io) e cole o conteúdo do arquivo `swagger.yaml` para testar as rotas com exemplos.

Certifique-se de que o servidor Flask está rodando em `http://localhost:5000`, e que o campo `servers` no YAML esteja assim:

```yaml
servers:
  - url: http://localhost:5000
```

## 📂 Estrutura do Projeto

```
/back-end
├── app.py
├── models.py
├── database.db
├── requirements.txt
└── swagger.yaml
```

## 📌 Observações

* Todas as requisições devem ser feitas para `http://localhost:5000`
* Use o front-end (SPA) para interagir com esta API através de um navegador.
* O projeto front-end está disponível em: [https://github.com/jaugustoguerra/MvP-Puc-Rio](https://github.com/jaugustoguerra/MvP-Puc-Rio)

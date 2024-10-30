# API de Biblioteca

Esta é uma API simples para uma biblioteca que permite gerenciar Livros e seus Autores usando uma base de dados SqLite.

## endpoints "Livros"

### POST http://localhost:3000/api/livros

Rota para criar um livro e podemos adicionar jã o/os seus autores

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe o status 201 com os dados do livro criado

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### POST http://localhost:3000/api/livro/novo

Rota para criar um livro novo sem precisar especificar os seus autores

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe o status 201 com os dados do livro criado

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### GET http://localhost:3000/api/livros

Rota para visualizar todos os livros existentes na base de dados e seus autores

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe a listagem com todos os livros e seus autores

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### GET http://localhost:3000/api/livros/IDlivro

Rota para visualizar detalhes de um livro especifico

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe a listagem com todos os detalhes de um livro

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### PUT http://localhost:3000/api/livro/IDlivro

Rota para atualizar detalhes de um livro especifico

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe uma menssagem de confirmação

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### DELETE http://localhost:3000/api/livro/IDlivro

Rota para Apagar um livro especifico

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe uma menssagem de confirmação

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

## endpoints "Autores"

### POST http://localhost:3000/api/autores

Rota para criar um autor e podemos adicionar jã o/os seus livros

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe o status 201 com os dados do autor criado

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### POST http://localhost:3000/api/autor/novo

Rota para criar um autor novo sem precisar especificar os seus livros

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe o status 201 com os dados do autor criado

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### GET http://localhost:3000/api/autores

Rota para visualizar todos os autores existentes na base de dados e seus livros

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe a listagem com todos os autores e seus livros

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### GET http://localhost:3000/api/autores/IDautor

Rota para visualizar detalhes de um autor especifico

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe a listagem com todos os detalhes de um Autor

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### PUT http://localhost:3000/api/autor/IDautor

Rota para atualizar detalhes de um autor especifico

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe uma menssagem de confirmação

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### DELETE http://localhost:3000/api/autor/IDautor

Rota para Apagar um autor especifico

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe uma menssagem de confirmação

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### POST http://localhost:3000/api/livros/IDLIVRO/autores/IDAUTOR

Rota para Associar um Autor á um determinado Livro

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe uma menssagem de confirmação

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

### POST ttp://localhost:3000/api/autores/IDAUTOR/livros/IDLIVRO

Rota para Associar um Livro á um determinado Autor

(Rota protegida por chave de API, que deve ser passada pela url)

#### Parametros

Chave da API = ?api_key=enoquedacruzsilva

#### Respostas

##### 200! OK

Recebe uma menssagem de confirmação

##### 401! Falha na autenticação

Caso esta resposta aconteça, significa que ocorreu alguma falha durante o processo de autenticação da requisição. Motivo: Credenciais Invalidas ou falta dela!

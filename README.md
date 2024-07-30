### Descrição

Este projeto é um aplicativo de previsão do tempo construído usando React e a API OpenWeather. Os usuários podem inserir o nome de uma cidade para receber dados meteorológicos, incluindo uma previsão de 5 dias e as condições climáticas atuais. O aplicativo oferece uma interface amigável para pesquisar e exibir informações meteorológicas, tornando fácil acompanhar o clima em qualquer cidade do mundo.

### README

# App de Previsão do Tempo

## Índice
- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Chave API](#chave-api)
- [Tecnologias](#tecnologias)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Introdução

O App de Previsão do Tempo é uma aplicação baseada em React que permite aos usuários pesquisar o clima de uma cidade e obter dados meteorológicos, incluindo o clima atual e uma previsão de 5 dias. O app utiliza a API OpenWeather para buscar as informações meteorológicas.

## Funcionalidades

- Pesquisar o clima de uma cidade pelo nome.
- Exibir as condições climáticas atuais.
- Exibir uma previsão do tempo para os próximos 5 dias.
- Interface amigável ao usuário.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/weather-forecast-app.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd weather-forecast-app
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

1. Obtenha uma chave API em [OpenWeather](https://openweathermap.org/api).

2. Crie um arquivo `.env` no diretório raiz e adicione sua chave API:
    ```env
    REACT_APP_OPENWEATHER_API_KEY=sua_chave_api_aqui
    ```

3. Inicie a aplicação:
    ```bash
    npm start
    ```

4. Abra o navegador e acesse `http://localhost:3000`.

5. Insira o nome de uma cidade na barra de pesquisa e clique no botão de busca para ver os dados meteorológicos.

## Chave API

Para usar a API OpenWeather, você precisa se inscrever e obter uma chave API. Siga estes passos:

1. Acesse [OpenWeather](https://openweathermap.org/api).
2. Inscreva-se ou faça login na sua conta.
3. Navegue até a seção de API e gere uma chave API.
4. Use essa chave API no seu arquivo `.env` conforme mostrado na seção [Uso](#uso).

## Tecnologias

- React
- API OpenWeather
- CSS para estilização

## Contribuindo

1. Faça um fork do repositório.
2. Crie um novo branch:
    ```bash
    git checkout -b feature/nome-da-sua-feature
    ```
3. Faça suas alterações e as commit:
    ```bash
    git commit -m 'Adicionar uma nova funcionalidade'
    ```
4. Faça o push para o branch:
    ```bash
    git push origin feature/nome-da-sua-feature
    ```
5. Abra um pull request.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Fique à vontade para entrar em contato se tiver alguma dúvida ou precisar de mais assistência. Feliz codificação!

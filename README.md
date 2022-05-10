# Editor de Markdown colaborativo
---
#### disponivel para teste em: [Editor colaborativo](https://colabeditor.ddns.net/)

* ### Instruções de instalação em ambiente de teste:
primeiro siga o tutorial para subir o *backend* disponível em: [api-markdown](https://github.com/gabrielnevesdev/api-markdown)

clone o repositório em sua maquina

abra o código na sua IDE e altere a URL pela qual a aplicação se conecta ao *backend*
 no App.js

no seu ambiente de desenvolvimento, rode os comandos: 

```
    npm install
     npm start
```
para instalar as dependências e iniciar a aplicação.
A aplicação estará disponível em ``http://localhost:3000``

* ### Acessando um documento especifico:
ao acessar a pagina, será solicitado o titulo do documento que deseja editar.

digite o titulo e clique em buscar, o documento deverá ser aberto, caso tenha conteúdo. Caso não, será gerado um documento novo com texto padrão

compartilhe o link e o titulo do documento com quem deseja editar junto

* ### Tool-bar
A aplicação apresenta uma barra de ferramentas onde é possivel adicionar marcação no texto em edição. Possuindo:
* opções: 

download e gerar PDF

* **negrito**
* *italico*
* ~~rasurado~~
* bloco de código:
 ```
function exemple(){
    console.log("teste")
}
```
* cabeçalhos
* links
* listas
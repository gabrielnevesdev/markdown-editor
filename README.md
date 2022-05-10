# Editor de Markdown colaborativo
---
#### disponivel para teste em: [Editor colaborativo](https://colabeditor.ddns.net/)

* ### Instru��es de instala��o em ambiente de teste:
primeiro siga o tutorial para subir o *backend* dispon�vel em: [api-markdown](https://github.com/gabrielnevesdev/api-markdown)

clone o reposit�rio em sua maquina

abra o c�digo na sua IDE e altere a URL pela qual a aplica��o se conecta ao *backend*
 no App.js

no seu ambiente de desenvolvimento, rode os comandos: 

```
    npm install
     npm start
```
para instalar as depend�ncias e iniciar a aplica��o.
A aplica��o estar� dispon�vel em ``http://localhost:3000``

* ### Acessando um documento especifico:
ao acessar a pagina, ser� solicitado o titulo do documento que deseja editar.

digite o titulo e clique em buscar, o documento dever� ser aberto, caso tenha conte�do. Caso n�o, ser� gerado um documento novo com texto padr�o

compartilhe o link e o titulo do documento com quem deseja editar junto

* ### Tool-bar
A aplica��o apresenta uma barra de ferramentas onde � possivel adicionar marca��o no texto em edi��o. Possuindo:
* op��es: 

download e gerar PDF

* **negrito**
* *italico*
* ~~rasurado~~
* bloco de c�digo:
 ```
function exemple(){
    console.log("teste")
}
```
* cabe�alhos
* links
* listas
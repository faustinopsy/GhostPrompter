#  GhostPrompter (Teleprompter Secreto)

> **Um teleprompter flutuante, invisível para transmissões e transparente para o mouse.**

Este projeto é uma aplicação Desktop construída com **Electron** projetada para apresentadores, professores e palestrantes que precisam ler um roteiro enquanto compartilham a tela, sem que a audiência perceba.

A janela do aplicativo fica **sempre no topo**, mas permite que você **clique através dela** para interagir com seus slides (PowerPoint/Google Slides) e é **invisível** para ferramentas de captura (Zoom, Google Meet, OBS, Teams).

---

##  Funcionalidades Principais

*  **Modo Stealth (Anti-Captura):** Utiliza a API de proteção de conteúdo do sistema operacional. Você vê o roteiro, mas quem assiste ao seu compartilhamento de tela vê apenas o que está atrás da janela (seus slides).
*  **Ghost Click:** A janela ignora eventos do mouse. Você pode deixar o roteiro por cima do botão de "Passar Slide" do PowerPoint e clicar normalmente.
*  **Atalhos Globais:** Controle o avanço do roteiro mesmo que o foco esteja no PowerPoint.
*  **Visual Discreto:** Interface escura e semitransparente, estilo legenda, para não cansar a vista.
*  **Always on Top:** Garante que o roteiro nunca fique escondido atrás da apresentação.

---

## Como Rodar

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Clone este repositório:
```bash
git clone [https://github.com/faustinopsy/telepromp.git](https://github.com/faustinopsy/telepromp.git)

```
2. Instale as dependencias
```
cd ghost-prompter
npm install
```
3. rode o projeto
```
npm start
```

Como Usar
---------

1.  **Abra sua apresentação** (PowerPoint, Keynote, Google Slides) e entre no modo de apresentação.
    
2.  **Inicie o GhostPrompter** (npm start).
    
3.  Arraste a janela do roteiro para uma posição confortável (geralmente na parte inferior ou superior da tela).
    
4.  **Sincronia:**
    
    *   Use o **Mouse** ou **Seta Direita** para avançar os slides da sua apresentação no PowerPoint.
        
    *   Use **Alt + Seta Direita** para avançar o texto no Teleprompter.
        

### Atalhos de Teclado

Alt + ➡️**Próximo** Avança para o próximo parágrafo do roteiro.

Alt + ⬅️**Anterior** Volta para o parágrafo anterior.

Alt + Q Fecha o aplicativo imediatamente.

Personalizando o Roteiro
------------------------

Para alterar o texto da sua apresentação, abra o arquivo index.html e edite a constante slides dentro da tag :</p><p class="slate-paragraph">JavaScript</p><pre class="slate-code\_block"><select style="float:right" contenteditable="false"><option value="">Plain text</option><option value="antlr4">ANTLR4</option><option value="bash">Bash</option><option value="c">C</option><option value="csharp">C#</option><option value="css">CSS</option><option value="coffeescript">CoffeeScript</option><option value="cmake">CMake</option><option value="dart">Dart</option><option value="django">Django</option><option value="docker">Docker</option><option value="ejs">EJS</option><option value="erlang">Erlang</option><option value="git">Git</option><option value="go">Go</option><option value="graphql">GraphQL</option><option value="groovy">Groovy</option><option value="html">HTML</option><option value="java">Java</option><option value="javascript">JavaScript</option><option value="json">JSON</option><option value="jsx">JSX</option><option value="kotlin">Kotlin</option><option value="latex">LaTeX</option><option value="less">Less</option><option value="lua">Lua</option><option value="makefile">Makefile</option><option value="markdown">Markdown</option><option value="matlab">MATLAB</option><option value="markup">Markup</option><option value="objectivec">Objective-C</option><option value="perl">Perl</option><option value="php">PHP</option><option value="powershell">PowerShell</option><option value="properties">.properties</option><option value="protobuf">Protocol Buffers</option><option value="python">Python</option><option value="r">R</option><option value="ruby">Ruby</option><option value="sass">Sass (Sass)</option><option value="scss">Sass (Scss)</option><option value="scheme">Scheme</option><option value="sql">SQL</option><option value="shell">Shell</option><option value="swift">Swift</option><option value="svg">SVG</option><option value="tsx">TSX</option><option value="typescript">TypeScript</option><option value="wasm">WebAssembly</option><option value="yaml">YAML</option><option value="xml">XML</option></select><code ><div class="slate-code\_line">const slides = \[</div><div class="slate-code\_line"> { </div><div class="slate-code\_line"> id: 1, </div><div class="slate-code\_line"> text: "Bom dia a todos. Hoje vamos falar sobre a arquitetura de microserviços." </div><div class="slate-code\_line"> },</div><div class="slate-code\_line"> { </div><div class="slate-code\_line"> id: 2, </div><div class="slate-code\_line"> text: "Neste slide, podemos observar o crescimento exponencial dos dados..." </div><div class="slate-code\_line"> },</div><div class="slate-code\_line"> // Adicione novos objetos aqui...</div><div class="slate-code\_line">\];</div><div class="slate-code\_line"></div></code></pre><p class="slate-paragraph"></p><h2 class="slate-h2">Tecnologias Utilizadas</h2><p class="slate-paragraph"></p><ul class="slate-ul"><li class="slate-li"><div style="position:relative"><a href="https://www.electronjs.org/" class="slate-a" target="\_blank"><strong class="slate-bold">Electron</strong></a><strong class="slate-bold">:</strong> Framework para criar apps desktop nativos.</div></li><li class="slate-li"><div style="position:relative"><strong class="slate-bold">Node.js:</strong> Ambiente de execução.</div></li><li class="slate-li"><div style="position:relative"><strong class="slate-bold">HTML5/CSS3:</strong> Interface do usuário.</div></li></ul><p class="slate-paragraph"></p><h3 class="slate-h3">APIs Específicas do Electron</h3><p class="slate-paragraph"></p><ul class="slate-ul"><li class="slate-li"><div style="position:relative">setContentProtection(true): Previne captura de tela (DRM).</div></li><li class="slate-li"><div style="position:relative">setIgnoreMouseEvents(true): Permite clicar através da janela.</div></li><li class="slate-li"><div style="position:relative">globalShortcut: Registra atalhos de teclado globais no sistema.</div></li></ul><p class="slate-paragraph"></p><h2 class="slate-h2">Limitações Conhecidas</h2><p class="slate-paragraph"></p><ul class="slate-ul"><li class="slate-li"><div style="position:relative"><strong class="slate-bold">Windows/macOS:</strong> A função setContentProtection funciona perfeitamente na maioria das versões modernas, tornando a janela preta ou transparente em capturas.</div></li><li class="slate-li"><div style="position:relative"><strong class="slate-bold">Linux:</strong> O comportamento pode variar dependendo do compositor de janelas (X11/Wayland).</div></li><li class="slate-li"><div style="position:relative"><strong class="slate-bold">Movimentação:</strong> Como a janela ignora o mouse, você não consegue arrastá-la facilmente após iniciada. <em class="slate-italic">Dica: Configure a posição x e y no arquivo main.js antes de iniciar.</em></div></li></ul><p class="slate-paragraph"></p><h2 class="slate-h2">Licença</h2><p class="slate-paragraph"></p><p class="slate-paragraph">Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar.</p><p class="slate-paragraph">Feito com ☕ e Electron.</p><p class="slate-paragraph"></p></x-turndown>
## my-login-ui
Descrição
my-login-ui é uma tela de login moderna e responsiva, desenvolvida com HTML, CSS e JavaScript. A interface oferece uma experiência de login simples e intuitiva, com validações de formulários implementadas diretamente com JavaScript. O design é adaptável a diferentes dispositivos, garantindo uma boa experiência de usuário em desktop, tablet e mobile.

O objetivo do projeto é fornecer uma interface de login visualmente agradável e fácil de usar. A validação de entradas (usuário e senha) também é implementada para assegurar que os dados preenchidos sejam válidos antes do envio.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página, organização do conteúdo e construção do formulário de login.

- **CSS3**: Estilização da interface, incluindo a responsividade e animações simples para melhorar a experiência do usuário.

- **JavaScript**: Validação do formulário, com verificação de senha (mínimo de caracteres e regras de segurança).

- **Fontes**: Utilização da fonte **Noto Sans** do Google Fonts para um design limpo e moderno.




## Estrutura de Pastas

```markdown


```bash
my-login-ui/
├── index.html         # Arquivo principal da página (HTML)
├── style.css          # Arquivo de estilos (CSS)
├── script.js          # Arquivo de scripts (JavaScript)
├── animacion.svg      # Arquivo de imagem (SVG) utilizado na interface
└── README.md          # Documento com informações sobre o projeto
```

## Responsabilidades
HTML: Responsável por estruturar o formulário de login com os campos para usuário e senha, e o botão de Login.
CSS: Responsável por definir o estilo visual da página, com cores, tamanhos, margens e a implementação de um design responsivo.
JavaScript: Garantir que o formulário seja preenchido corretamente, com validações para os campos de usuário e senha. A senha é validada para ter pelo menos 8 caracteres, incluindo números e letras.
## Funcionalidades
Validação de Formulário: O formulário só pode ser enviado se todos os campos estiverem corretamente preenchidos.
Validação de Senha: A senha deve ter no mínimo 8 caracteres e pode exigir números e letras (personalizável).
Design Responsivo: O layout adapta-se automaticamente a diferentes tamanhos de tela, oferecendo uma boa experiência de uso em dispositivos móveis e desktops.
Como Rodar o Projeto Localmente
Para rodar este projeto localmente, basta seguir os seguintes passos:

Clone o repositório:

bash
Copiar código
git clone https://github.com/CamilaDziubat/my-login-ui.git
Abra o arquivo index.html no seu navegador preferido.

Não é necessário configurar servidores ou ferramentas adicionais, pois este é um projeto estático.

## Deploy
Este projeto pode ser facilmente hospedado em plataformas de deploy gratuito como GitHub Pages, Netlify, ou Vercel.

## GitHub Pages
Para fazer o deploy no GitHub Pages, siga esses passos:

No seu repositório do GitHub, clique em Settings.
Role até a seção GitHub Pages.
Em Source, selecione a branch main e a pasta /root (que é o padrão).
O GitHub Pages irá gerar uma URL para acessar o projeto online.
Netlify
Você pode fazer o deploy no Netlify com os seguintes passos:

Vá até Netlify.
Crie uma conta ou faça login.
Clique em New Site from Git.
Conecte seu GitHub e escolha o repositório do projeto.
Clique em Deploy e pronto! O Netlify fornecerá uma URL para o seu site.
Vercel
Para fazer o deploy na Vercel, basta:

Acesse Vercel.
Crie uma conta ou faça login.
Clique em New Project e conecte sua conta do GitHub.
Selecione o repositório my-login-ui e clique em Deploy.
O Vercel gerará automaticamente um link para o seu projeto.
Melhorias Futuras
Integração com Backend: Implementar autenticação real de usuários, com envio de dados para um servidor backend.
Estilização Avançada: Adicionar mais animações, transições e interações visuais no design.
Acessibilidade: Melhorar a acessibilidade, como suporte à navegação via teclado e leitores de tela.
Testes de Unidade: Adicionar testes para as funções de validação de formulário.
Como Adicionar no Seu README.md
Para adicionar esta descrição ao seu repositório no GitHub, basta:

Abrir ou criar o arquivo README.md no seu repositório.
Colar o conteúdo acima.
Salvar e commitar as alterações:
bash
Copiar código
git add README.md
git commit -m "Adiciona descrição técnica do projeto"
git push origin main

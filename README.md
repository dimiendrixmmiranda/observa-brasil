# Observa Brasil 🇧🇷

> **Dados, contexto e cidadania para um Brasil mais informado.**

O **Observa Brasil** é uma plataforma web de caráter educativo que reúne, organiza e apresenta indicadores sociais brasileiros em uma interface acessível e interativa. A proposta é ajudar estudantes, pesquisadores e cidadãos a explorar dados sobre educação, saúde, emprego, renda, desigualdade e outros temas, comparar regiões e encontrar fontes confiáveis para compreender melhor a realidade brasileira.

> **Status do projeto:** em planejamento / desenvolvimento inicial.  
> Os indicadores, gráficos e funcionalidades descritos neste documento representam o escopo planejado. Só serão considerados disponíveis quando estiverem implementados e validados no repositório.

---

## 📌 Sumário

- [Objetivos](#-objetivos)
- [Público-alvo](#-público-alvo)
- [Funcionalidades planejadas](#-funcionalidades-planejadas)
- [Páginas da aplicação](#-páginas-da-aplicação)
- [Tecnologias](#️-tecnologias)
- [Fontes de dados](#-fontes-de-dados)
- [Arquitetura planejada](#️-arquitetura-planejada)
- [Modelo de dados inicial](#-modelo-de-dados-inicial)
- [Estrutura de diretórios sugerida](#-estrutura-de-diretórios-sugerida)
- [Instalação e execução local](#-instalação-e-execução-local)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Qualidade, acessibilidade e segurança](#-qualidade-acessibilidade-e-segurança)
- [Roadmap](#-roadmap)
- [Como contribuir](#-como-contribuir)
- [Licença](#-licença)
- [Aviso sobre os dados](#-aviso-sobre-os-dados)

---

## 🎯 Objetivos

- Tornar indicadores sociais mais fáceis de explorar e compreender.
- Permitir comparações transparentes entre estados, regiões e períodos.
- Contextualizar os dados com definições, metodologia, período de referência e fonte.
- Reunir materiais educativos sobre direitos, cidadania e serviços públicos.
- Praticar desenvolvimento web, visualização de dados, modelagem de banco de dados e documentação.
- Construir um projeto de portfólio com foco em utilidade pública e responsabilidade na apresentação de informações.

## 👥 Público-alvo

- Estudantes e professores.
- Pessoas interessadas em conhecer melhor a realidade social brasileira.
- Desenvolvedores que queiram estudar a implementação de uma aplicação orientada a dados.
- Pesquisadores e profissionais que precisem consultar indicadores e suas fontes.

---

## ✨ Funcionalidades planejadas

### 1. Página inicial e panorama social

A página inicial apresentará uma visão geral da plataforma e facilitará o acesso às principais áreas.

- Apresentação do propósito do Observa Brasil.
- Campo de pesquisa para encontrar indicadores, estados, regiões ou temas.
- Cards de indicadores em destaque, sempre acompanhados de período e fonte.
- Atalhos para as dimensões sociais.
- Acesso rápido ao comparador, ao catálogo de dados e ao guia de cidadania.
- Destaque para a data de atualização dos conjuntos de dados.

### 2. Catálogo de indicadores

Uma área para consultar os indicadores disponíveis.

- Listagem de indicadores por categoria.
- Pesquisa por nome, descrição ou palavra-chave.
- Filtros por tema, território e período, conforme a disponibilidade dos dados.
- Página de detalhes de cada indicador.
- Definição, unidade de medida, metodologia e limitações.
- Fonte original, link para consulta e data de acesso/importação.
- Identificação clara do período de referência — diferente da data em que os dados foram importados.

### 3. Explorador por estados e regiões

Uma interface para navegar por dados territoriais.

- Seleção de região e unidade federativa.
- Mapa interativo do Brasil, se houver dados geográficos adequados.
- Visualização de indicadores disponíveis para o território selecionado.
- Comparação com valores nacionais ou regionais quando os dados forem compatíveis.
- Legendas, unidades e períodos visíveis.
- Tratamento explícito para dados ausentes, incompletos ou não comparáveis.

### 4. Comparador de indicadores

Ferramenta para comparar territórios ou períodos de forma transparente.

- Seleção de dois ou mais estados/regiões, quando suportado.
- Seleção de indicador e período.
- Gráficos comparativos.
- Exibição dos valores absolutos e das diferenças.
- Cálculo percentual somente quando matematicamente adequado e com denominador válido.
- Descrição da metodologia e avisos quando houver diferenças de definição, cobertura ou período.
- Opção futura de exportar uma comparação para CSV ou imagem.

### 5. Visualizações e gráficos

- Gráficos de barras para comparar categorias ou territórios.
- Gráficos de linhas para séries históricas.
- Tabelas acessíveis como alternativa aos gráficos.
- Rótulos, unidades, legendas e fonte próximos da visualização.
- Estados de carregamento, erro e ausência de dados.
- Cores e ícones que não sejam a única forma de transmitir significado.

### 6. Dimensões sociais

O catálogo poderá ser organizado por temas como:

- **Educação:** matrículas, escolarização, aprendizagem e infraestrutura educacional.
- **Saúde:** indicadores de saúde pública e acesso a serviços, conforme as fontes disponíveis.
- **Emprego e renda:** ocupação, desocupação, rendimento e condições de trabalho.
- **Desigualdade social:** distribuição de renda e indicadores relacionados, com explicação metodológica.
- **População:** população, composição demográfica e distribuição territorial.
- **Meio ambiente:** indicadores ambientais relevantes, quando houver fontes adequadas.
- **Direitos e cidadania:** conteúdo educativo e links para canais e serviços oficiais.

A disponibilidade de cada indicador dependerá da existência de dados confiáveis, atualizados e comparáveis.

### 7. Guia de direitos e cidadania

Uma seção educativa relacionada aos temas da disciplina Sociedade Brasileira e Cidadania.

- Conteúdos introdutórios sobre direitos e deveres.
- Participação social e políticas públicas.
- Explicações sobre como localizar serviços e informações oficiais.
- Links para órgãos e portais públicos.
- Referências e data de revisão dos conteúdos.
- Linguagem clara, sem substituir orientação jurídica ou atendimento oficial.

### 8. Pesquisa e navegação

- Pesquisa global por indicador, tema, estado ou região.
- Filtros combináveis quando fizerem sentido para o conjunto de dados.
- URLs que possam ser compartilhadas para páginas e consultas, quando implementado.
- Mensagens úteis quando não houver resultados.
- Navegação adaptada a computadores, tablets e celulares.

### 9. Catálogo de fontes e metodologia

Cada indicador deverá permitir que o visitante verifique sua origem.

- Nome da instituição responsável.
- Título do conjunto de dados ou tabela.
- Link para a fonte primária.
- Período de referência.
- Data de coleta ou importação.
- Unidade de medida e população coberta.
- Metodologia, limitações e observações relevantes.
- Registro de transformações feitas pelo projeto.

### 10. Recursos futuros

Estas funcionalidades são possibilidades para versões posteriores, não compromissos da primeira entrega.

- Exportação de dados filtrados para CSV.
- Favoritos salvos no navegador.
- Comparações compartilháveis por URL.
- Histórico de atualizações dos conjuntos de dados.
- Painel administrativo para gerenciar metadados e conteúdo.
- API própria documentada.
- Testes automatizados ampliados e monitoramento de qualidade dos dados.

---

## 🗺️ Páginas da aplicação

| Página | Rota sugerida | Finalidade |
|---|---|---|
| Início | `/` | Apresentar a plataforma e os indicadores em destaque |
| Indicadores | `/indicadores` | Pesquisar e filtrar o catálogo |
| Detalhe do indicador | `/indicadores/[slug]` | Exibir valores, gráficos, metodologia e fonte |
| Estados e regiões | `/territorios` | Explorar indicadores territoriais |
| Detalhe territorial | `/territorios/[uf]` | Consultar os dados disponíveis para uma UF |
| Comparar | `/comparar` | Comparar territórios ou períodos |
| Temas | `/temas/[slug]` | Reunir indicadores de uma dimensão social |
| Direitos e cidadania | `/cidadania` | Apresentar conteúdo educativo e fontes oficiais |
| Sobre o projeto | `/sobre` | Explicar objetivos, escopo e metodologia |
| Fontes de dados | `/fontes` | Listar instituições e conjuntos de dados utilizados |

As rotas são uma proposta inicial e poderão ser ajustadas durante a implementação.

---

## 🧰 Tecnologias

### Stack principal proposta

| Tecnologia | Uso |
|---|---|
| [Next.js](https://nextjs.org/) | Framework React, roteamento e estrutura da aplicação |
| [React](https://react.dev/) | Componentes e interfaces |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e maior segurança na manutenção do código |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização e layout responsivo |
| [Recharts](https://recharts.org/) | Gráficos para React |
| [Leaflet](https://leafletjs.com/) | Mapas interativos, se necessário |
| [PostgreSQL](https://www.postgresql.org/) | Banco relacional para indicadores e metadados, se necessário |
| [Prisma](https://www.prisma.io/) | Acesso tipado ao banco, caso adotado |
| [Zod](https://zod.dev/) | Validação de entradas e estruturas de dados |
| [Vitest](https://vitest.dev/) | Testes automatizados |
| [Git](https://git-scm.com/) e [GitHub](https://github.com/) | Versionamento e colaboração |
| [Vercel](https://vercel.com/) | Opção de hospedagem para a aplicação Next.js |

**Observação:** a stack definitiva será confirmada durante o desenvolvimento. É possível começar com Next.js, Tailwind e dados estáticos versionados no repositório. O banco de dados só deve ser introduzido quando houver uma necessidade concreta de persistência, atualização ou administração dos dados.

---

## 📊 Fontes de dados

O projeto priorizará fontes públicas, documentadas e rastreáveis. Exemplos de instituições e portais que poderão ser consultados:

- [IBGE](https://www.ibge.gov.br/) — estatísticas demográficas e socioeconômicas.
- [SIDRA/IBGE](https://sidra.ibge.gov.br/) — tabelas estatísticas e consultas de dados.
- [INEP](https://www.gov.br/inep/pt-br) — estatísticas e indicadores educacionais.
- [IPEA](https://www.ipea.gov.br/) — estudos e indicadores socioeconômicos.
- [Portal Brasileiro de Dados Abertos](https://dados.gov.br/) — conjuntos de dados publicados por órgãos públicos.

A inclusão de uma instituição nesta lista não significa que todos os indicadores já estejam integrados. Cada conjunto de dados deverá ser avaliado individualmente quanto à licença, periodicidade, cobertura, metodologia, formato e disponibilidade de API ou download.

### Critérios para incluir um indicador

Antes de publicar um valor, registrar:

1. Nome e definição do indicador.
2. Instituição e fonte original.
3. Link direto para a tabela ou conjunto de dados.
4. Período de referência.
5. Unidade de medida e cobertura territorial.
6. Data de importação ou atualização.
7. Limitações conhecidas e transformações aplicadas.

---

## 🏗️ Arquitetura planejada

A arquitetura será evolutiva, evitando complexidade desnecessária na primeira versão.

1. **Interface:** páginas e componentes React com Next.js e Tailwind CSS.
2. **Camada de dados:** módulos responsáveis por carregar e normalizar os indicadores.
3. **Validação:** checagem dos formatos e dos campos esperados.
4. **Visualização:** gráficos e tabelas construídos a partir de dados validados.
5. **Persistência opcional:** PostgreSQL para armazenar indicadores, fontes e metadados quando necessário.
6. **Atualização:** processo documentado de importação ou integração com fontes oficiais.

Os componentes visuais não devem conter regras complexas de tratamento dos dados. A lógica de normalização, cálculos e validação deve ficar em módulos separados e testáveis.

---

## 🗃️ Modelo de dados inicial

Se o projeto adotar PostgreSQL, o modelo poderá evoluir a partir das entidades abaixo:

### `indicators`

- `id`
- `name`
- `slug`
- `description`
- `unit`
- `category_id`
- `methodology`
- `limitations`

### `categories`

- `id`
- `name`
- `slug`
- `description`

### `data_sources`

- `id`
- `name`
- `url`
- `dataset_name`
- `license`
- `accessed_at`

### `indicator_observations`

- `id`
- `indicator_id`
- `source_id`
- `territory_code`
- `territory_name`
- `reference_period`
- `value`
- `imported_at`

Esse modelo é conceitual. Antes de implementá-lo, será necessário definir como representar períodos, unidades federativas, municípios, dados ausentes, revisões históricas e indicadores com metodologias diferentes. Restrições e chaves estrangeiras deverão garantir a integridade dos registros.

---

## 📁 Estrutura de diretórios sugerida

Exemplo para uma aplicação Next.js com App Router e TypeScript:

```text
observa-brasil/
├── public/
│   ├── images/
│   └── maps/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── indicadores/
│   │   ├── territorios/
│   │   ├── comparar/
│   │   ├── cidadania/
│   │   ├── fontes/
│   │   └── sobre/
│   ├── components/
│   │   ├── layout/
│   │   ├── charts/
│   │   ├── maps/
│   │   ├── indicators/
│   │   └── ui/
│   ├── lib/
│   │   ├── data/
│   │   ├── validations/
│   │   └── utils/
│   ├── types/
│   └── styles/
├── prisma/                 # se Prisma for adotado
├── tests/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

A estrutura exata dependerá da versão do Next.js e das ferramentas escolhidas. Não é necessário criar diretórios vazios antes de existir código para eles.

---

## 🚀 Instalação e execução local

> As instruções abaixo são um modelo para quando o código inicial estiver criado. Os comandos podem precisar de ajustes conforme a configuração real do repositório.

### Pré-requisitos

- Node.js em uma versão LTS compatível com a versão escolhida do Next.js.
- npm (ou outro gerenciador de pacotes, mantendo o lockfile correspondente).
- Git.
- PostgreSQL apenas se a versão em execução utilizar banco de dados.

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/observa-brasil.git
cd observa-brasil
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Se o projeto utilizar variáveis de ambiente, copie o arquivo de exemplo:

```bash
cp .env.example .env.local
```

Preencha apenas as variáveis necessárias para a configuração escolhida. No Windows, o arquivo também pode ser copiado pelo Explorador de Arquivos.

### 4. Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 5. Verificações de qualidade

Execute os scripts disponíveis no `package.json`. Quando configurados, os comandos poderão incluir:

```bash
npm run lint
npm run test
npm run build
```

Esses scripts precisam existir no projeto; não devem ser considerados disponíveis antes de serem configurados.

---

## 🔐 Variáveis de ambiente

O arquivo `.env.example` deverá documentar as variáveis necessárias sem conter credenciais reais.

Exemplo ilustrativo para uma futura integração com PostgreSQL:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
```

- Nunca envie senhas, tokens ou chaves privadas para o GitHub.
- Mantenha `.env.local` e arquivos equivalentes no `.gitignore`.
- Use variáveis públicas somente para valores que podem ser expostos no navegador.
- Nunca inclua credenciais privadas em variáveis com prefixo `NEXT_PUBLIC_`.

Se a primeira versão utilizar apenas dados estáticos, nenhuma conexão com banco poderá ser necessária.

---

## ♿ Qualidade, acessibilidade e segurança

### Acessibilidade e experiência de uso

- Layout responsivo para celular, tablet e desktop.
- HTML semântico e navegação por teclado.
- Contraste adequado e foco visível.
- Rótulos e mensagens de erro em formulários.
- Tabelas acessíveis para complementar os gráficos.
- Estados de carregamento, erro e ausência de resultados.

### Qualidade dos dados

- Identificar fonte e período em cada visualização.
- Não misturar indicadores com unidades ou metodologias incompatíveis.
- Distinguir zero de dado ausente.
- Validar valores e formatos durante a importação.
- Testar fórmulas de comparação e variações percentuais.
- Documentar correções e transformações.

### Segurança

- Validar dados de entrada no servidor quando houver operações de backend.
- Usar consultas parametrizadas ou um ORM seguro.
- Proteger credenciais e configurações privadas.
- Implementar autenticação e autorização somente se funcionalidades que as exijam forem adicionadas.
- Evitar coletar dados pessoais desnecessários.

---

## 🛣️ Roadmap

O roadmap será atualizado conforme cada etapa estiver concluída.

### Fase 1 — Planejamento e fundamentos

- [ ] Definir o escopo da primeira versão.
- [ ] Selecionar indicadores e fontes oficiais.
- [ ] Definir identidade visual e navegação.
- [ ] Criar o repositório e configurar o projeto Next.js.
- [ ] Criar o README e documentar decisões iniciais.

### Fase 2 — Primeira versão visual

- [ ] Desenvolver cabeçalho e navegação responsivos.
- [ ] Criar a página inicial.
- [ ] Criar cards de indicadores.
- [ ] Implementar páginas de catálogo e detalhes.
- [ ] Implementar estados de carregamento, erro e ausência de dados.

### Fase 3 — Dados e visualizações

- [ ] Integrar o primeiro conjunto de dados verificado.
- [ ] Criar gráficos e tabelas.
- [ ] Implementar pesquisa e filtros.
- [ ] Exibir fonte, período e metodologia.
- [ ] Criar testes para transformações e cálculos.

### Fase 4 — Exploração e comparação

- [ ] Implementar seleção de territórios.
- [ ] Criar o comparador de indicadores.
- [ ] Adicionar visualização geográfica, se viável.
- [ ] Tratar dados ausentes e comparações inválidas.

### Fase 5 — Cidadania e documentação

- [ ] Criar o guia de direitos e cidadania.
- [ ] Revisar links e referências.
- [ ] Documentar arquitetura e modelo de dados.
- [ ] Adicionar capturas de tela ao README.
- [ ] Revisar acessibilidade e responsividade.

### Fase 6 — Publicação

- [ ] Fazer o build de produção.
- [ ] Corrigir problemas encontrados nos testes.
- [ ] Publicar a aplicação.
- [ ] Adicionar o link da demonstração ao README.
- [ ] Registrar limitações conhecidas e próximos passos.

### Fase futura — Recursos adicionais

- [ ] Adotar banco de dados se houver necessidade.
- [ ] Automatizar importações e registrar atualizações.
- [ ] Adicionar exportação de dados.
- [ ] Criar API própria, se fizer sentido.
- [ ] Ampliar a cobertura de testes.

---

## 🤝 Como contribuir

Contribuições, sugestões de melhorias e correções são bem-vindas.

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração.
3. Faça commits com mensagens claras.
4. Execute as verificações configuradas.
5. Abra um Pull Request explicando a mudança.

Ao propor novos indicadores, inclua a fonte original, a definição, o período de referência e as limitações conhecidas.

---

## 📄 Licença

A licença do código ainda deverá ser escolhida. Se o projeto for publicado sob uma licença de código aberto, adicione o arquivo `LICENSE` com o texto correspondente.

A licença do código não substitui as condições de uso dos dados de terceiros. Consulte os termos e atribuições de cada fonte antes de redistribuir conjuntos de dados.

---

## ⚠️ Aviso sobre os dados

O Observa Brasil é um projeto educativo e informativo. Ele não substitui as publicações oficiais, os estudos técnicos ou os serviços prestados pelas instituições responsáveis.

Indicadores podem ter períodos de referência, definições e metodologias diferentes. Comparações devem respeitar essas diferenças. Sempre que possível, consulte a fonte original antes de utilizar os dados em trabalhos acadêmicos ou decisões práticas.

Os números de exemplo utilizados durante o desenvolvimento deverão ser identificados como dados fictícios e não poderão ser apresentados como estatísticas reais.

---

## 💚 Sobre o projeto

O **Observa Brasil** nasce como um projeto de estudo relacionado à disciplina **Sociedade Brasileira e Cidadania**, com o propósito de unir desenvolvimento web, dados públicos e educação cidadã.

A proposta é demonstrar como a tecnologia pode ajudar a organizar informações, tornar indicadores mais acessíveis e incentivar uma compreensão crítica e responsável da realidade brasileira.

**Tecnologia, informação e cidadania.**
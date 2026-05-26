# Precificação Caldinhos

Calculadora de precificação para a **Delicaldos** — marca de caldos artesanais de Eunápolis/BA.

App pra alunas do curso aprenderem a precificar seus próprios caldos cadastrando ingredientes, embalagens e receitas. Calcula custo, lucro e preço de venda com taxa do iFood.

## Stack

- HTML/CSS/JS único (sem framework, sem build)
- `localStorage` pra persistência (dados ficam no celular da aluna)
- Mobile-first (base 360px)
- Sistema de cores OKLCH tingido pro bordô da marca

## Estrutura

```
public/                       ← o que vai pro deploy
├── index.html                ← o app inteiro
├── delicaldos-logo.jpg       ← logo + favicon
└── _headers                  ← cache e segurança (Cloudflare Pages lê)

.impeccable.md                ← contexto de design (audience, tone, princípios)
Planilha Deli.xlsx            ← planilha original de referência
DEPLOY.md                     ← instruções de deploy
wrangler.toml                 ← config Cloudflare CLI
```

## Rodar local

Abra `public/index.html` direto no navegador (duplo clique). Funciona sem servidor.

Pra preview com live reload (opcional):

```bash
npx wrangler pages dev public
```

## Deploy

Tudo em [DEPLOY.md](DEPLOY.md). Resumo: Cloudflare Pages aponta pra pasta `public/`.

## Design

Direção, paleta e princípios em [.impeccable.md](.impeccable.md).

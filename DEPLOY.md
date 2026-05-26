# Deploy — Cloudflare Pages

A pasta `public/` contém tudo que precisa ir pro ar:

```
public/
├── index.html             ← o app
├── delicaldos-logo.jpg    ← logo (também usado como favicon)
└── _headers               ← cache e segurança (lido pelo Cloudflare)
```

## Opção 1 — Drag and drop (mais simples)

1. Entre em https://dash.cloudflare.com/ → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Dê um nome ao projeto: `delicaldos-precificacao`
3. Arraste a pasta `public/` inteira pra área de upload
4. Clique em **Deploy site**

URL final: `https://delicaldos-precificacao.pages.dev`

Pra fazer deploys novos depois, basta entrar no projeto e clicar em **Create new deployment** → arrastar a pasta `public/` atualizada.

## Opção 2 — Wrangler CLI (deploys rápidos do terminal)

Precisa do Node.js instalado. Primeira vez:

```bash
npm install -g wrangler
wrangler login
```

Daí em diante, do diretório do projeto:

```bash
wrangler pages deploy public --project-name delicaldos-precificacao
```

O `wrangler.toml` na raiz já tem a configuração — o comando lê de lá.

## Opção 3 — Conectar com GitHub (deploy automático)

1. Suba o projeto pro GitHub
2. No Cloudflare Pages → **Create** → **Connect to Git**
3. Selecione o repo
4. Em **Build settings**:
   - Framework preset: **None**
   - Build command: (deixe em branco)
   - Build output directory: `public`
5. **Save and Deploy**

Cada `git push` na branch principal vira um deploy novo.

## Domínio customizado (opcional)

Depois do primeiro deploy, no painel do projeto:
**Custom domains** → **Set up a custom domain** → digite o domínio.
O Cloudflare guia o resto (DNS).

## Arquivos fora de `public/`

Não vão pro deploy — ficam só no projeto local:
- `.impeccable.md` — contexto de design
- `Planilha Deli.xlsx` — referência
- `site.txt`, logo original, este arquivo, `wrangler.toml`

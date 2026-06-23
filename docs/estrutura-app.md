# Projeto Caldo — Mapa do `public/index.html`

O app inteiro vive num único arquivo: [`public/index.html`](../public/index.html) (~4100 linhas).
É HTML + CSS + JS puro (sem build), com dados salvos em `localStorage`. Este mapa serve
de índice pra achar as coisas rápido sem ler o arquivo todo.

## Layout geral do arquivo
- **CSS** — do início até ~linha 2300 (dentro de `<style>`).
- **HTML / markup** — ~2300 a ~2470 (formulários e listas das abas).
- **JavaScript** — ~2650 até o fim (lógica de cada aba).

## Abas (navegação por tabs)
Ingredientes · Embalagens · Receitas · Painel · Ajustes.

## Modelo de dados (localStorage)
- `ingredientes`: `{ id, nome, peso, preco, tipo }`
  - `tipo` ∈ `solido | liquido | unidade` (ver `UNIDADES` ~linha 2829).
  - `peso` é sempre guardado na **unidade base**: `g` (sólido), `ml` (líquido), `un` (unidade).
- `embalagens`: `{ id, nome, unidades, preco }`
- `receitas`: incluem `embalagensUsadas: [{ embId, ... }]` ligadas por id.

## Pontos-chave por funcionalidade

### Ingredientes
| O quê | Onde (aprox.) |
|---|---|
| Formulário "Novo/Editar ingrediente" (HTML) | ~2330 (`#ing-form-card`, `#ing-form-titulo`, `#ing-btn-salvar`, `#ing-btn-cancelar`) |
| Inputs | `#ing-nome`, `#ing-peso`, `#ing-preco`, pills `#ing-peso-unit-a/b` |
| Estado do form | `ingTipo`, `ingUnit`, `ingEditId` (~2826) |
| `UNIDADES` (kg/g, L/ml, un) | ~2829 |
| `setIngTipo` / `setIngPesoUnit` / `getIngPesoBase` | ~2836 / ~2872 / ~2896 |
| `previewIng` (texto "vai custar X / 100g") | ~2905 |
| `adicionarIngrediente` (faz **add e update**) | ~2978 |
| `editarIngrediente(id)` — carrega item no form | ~3035 |
| `cancelarEdicaoIng()` — reseta o form | ~3059 |
| `removerIngrediente(id)` | ~3070 |
| `renderIngredientes()` (lista "Cadastrados") | ~3055 |

### Embalagens (mesmo padrão dos ingredientes)
| O quê | Onde (aprox.) |
|---|---|
| `adicionarEmbalagem` | ~3085 |
| `removerEmbalagem` | ~3106 |
| `renderEmbalagens` | ~3133 |

> ⚠️ Embalagens **ainda não têm botão Editar** — se quiser, dá pra replicar o mesmo
> padrão usado em ingredientes (estado `embEditId` + `editarEmbalagem` + ajustes no form).

### Helpers úteis (~2666 em diante)
- `parseNum(v)` — lê número em formato BR ("1,5" → 1.5).
- `brl` / `brlNum` / `brlPrec` — formatam moeda BR.
- Para preencher um input a partir de um número: `String(n).replace('.', ',')`.
- `novoId(arr)`, `esc(s)`, `salvarDados()`, `toast(msg, tipo, opts)`, `confirmar(...)`.

## Como funciona o "Editar ingrediente" (implementado em 2026-06-23)
Reaproveita o próprio formulário de cadastro em vez de abrir um modal:
1. Cada card em `renderIngredientes` tem um botão lápis (`.btn-icon.editar`) ao lado do lixo,
   dentro de `.cadastro-acoes`.
2. `editarIngrediente(id)` carrega os valores no form, troca título/botão, mostra "Cancelar
   edição", rola até o form e seta `ingEditId`. O peso é salvo na unidade base (g/ml/un),
   mas é exibido na unidade grande (kg/L) — convertido por `i.peso / UNIDADES[tipo].fatorGrande`.
3. `adicionarIngrediente` checa `ingEditId`: se preenchido, **atualiza** o item (mantendo o
   mesmo `id`, então receitas que usam o ingrediente continuam ligadas) e chama
   `renderReceitas()` pra refletir o novo custo; senão, cria um novo.
4. `cancelarEdicaoIng()` limpa o form e volta ao modo "Novo ingrediente".

**Feedback visual do modo edição:**
- Card do form ganha contorno coral + selo "editando" (`#ing-form-card.em-edicao`).
- O item da lista em edição fica destacado (`.cadastro-item.em-edicao`, via `data-ing-id`).
- Os campos Nome/Peso/Valor piscam (`flashCampos([...])` → classe `.flash-edicao`, keyframe `flashCampo`).

## Dicas pra editar este arquivo
- É grande: prefira **Grep por id de elemento** (`#ing-...`) ou nome de função antes de ler.
- Não tem build/lint: teste abrindo o `index.html` no navegador e olhando o console.
- `sw.js` é o service worker (cache PWA) — se mudar assets, lembre de versão de cache.

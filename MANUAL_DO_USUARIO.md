# Manual do Usuário — Calculadora de Precificação Delicaldos

**Bem-vinda!** Este manual explica como usar a calculadora de precificação para seus caldos artesanais.

---

## 🌐 Como Acessar

1. **Abra o link no navegador do seu celular ou computador:**
   ```
   https://delicaldos-precificacao.pages.dev
   ```

2. **Salve na tela inicial** (opcional, mas prático):
   - **iPhone**: Toque `Compartilhar` → `Adicionar à tela inicial`
   - **Android**: Toque `⋮` (menu) → `Instalar app` ou `Adicionar à tela inicial`

   Depois o app fica acessível como um ícone na sua tela inicial, sem precisar abrir o navegador.

---

## 📋 Fluxo Principal

O app funciona em **4 etapas**:

```
Ingredientes → Embalagens → Receitas → Painel
```

Cada etapa se baseia nas anteriores. Comece pela esquerda e vá avançando.

---

## 1️⃣ Ingredientes

**O que é:** Cadastrar cada ingrediente que você usa (farinha, cenoura, sal, etc.) e quanto custa.

### Como usar:

1. **Clique em "Ingredientes"** (primeira aba, esquerda)
2. **Clique em "+ Adicionar Ingrediente"**
3. **Preencha:**
   - **Nome**: ex. "Cenoura"
   - **Preço por unidade**: quanto custa (ex. `2.50` reais por kg)
   - **Unidade**: kg, litro, unidade, etc.

4. **Clique "Salvar"**

### Exemplo prático:

| Nome | Preço | Unidade |
|------|-------|---------|
| Cenoura | 2.50 | kg |
| Cebola | 1.80 | kg |
| Sal | 1.20 | kg |

**💡 Dica:** Atualize regularmente os preços quando fizerem promoção no fornecedor. Os cálculos mudam automaticamente.

---

## 2️⃣ Embalagens

**O que é:** Registrar os potes/garrafas/embalagens que você usa e quanto custam.

### Como usar:

1. **Clique em "Embalagens"**
2. **Clique em "+ Adicionar Embalagem"**
3. **Preencha:**
   - **Nome**: ex. "Pote 500ml"
   - **Preço unitário**: quanto custa CADA embalagem (ex. `0.80` reais)
   - **Volume/Capacidade**: quanto cabe (ex. `500` ml)

4. **Clique "Salvar"**

### Exemplo prático:

| Nome | Preço | Capacidade |
|------|-------|-----------|
| Pote 500ml | 0.80 | 500 ml |
| Pote 1L | 1.20 | 1000 ml |
| Vidro 250ml | 0.60 | 250 ml |

---

## 3️⃣ Receitas

**O que é:** Criar suas receitas de caldo cadastrando qual ingrediente vai, quanto usa de cada um, e em qual embalagem entra.

### Como usar:

1. **Clique em "Receitas"**
2. **Clique em "+ Adicionar Receita"**
3. **Preencha:**
   - **Nome da Receita**: ex. "Caldo de Carne"
   - **Selecione a Embalagem**: qual pote vai usar (ex. "Pote 500ml")

4. **Adicione os Ingredientes:**
   - Clique "+ Adicionar Ingrediente"
   - Selecione o ingrediente (ex. "Cenoura")
   - Digite quanto usa (ex. `0.200` kg para 200g)
   - Clique ✓

5. **Repita** para todos os ingredientes da receita

6. **Clique "Salvar Receita"**

### Exemplo prático — Caldo de Carne (pote 500ml):

| Ingrediente | Quantidade |
|-------------|-----------|
| Cenoura | 0.100 kg |
| Cebola | 0.080 kg |
| Carne moída | 0.150 kg |
| Sal | 0.010 kg |
| **Total** | **0.340 kg** |

**O app calcula automaticamente:**
- ✅ Custo de ingredientes: R$ 0.92
- ✅ Custo da embalagem: R$ 0.80
- ✅ **Custo total por pote: R$ 1.72**

---

## 4️⃣ Painel

**O que é:** Visualizar o resumo de todas as suas receitas e definir os preços de venda.

### Na tela do Painel você vê:

**Para cada receita:**
- 📦 **Receita**: nome (ex. "Caldo de Carne")
- 💰 **Custo**: quanto custa fazer um pote (ex. R$ 1.72)
- 📊 **Lucro esperado**: quanto você ganha (configurável)
- 🏷️ **Preço de venda**: preço final pro cliente

### Como definir o preço:

1. **Defina a taxa de lucro** (no topo):
   - Digite a % que você quer ganhar (ex. `100` = 100% de lucro)
   - O app recalcula todos os preços automaticamente

   **Exemplo:**
   - Custo: R$ 1.72
   - Margem: 100% (você ganha o mesmo que gastou)
   - Preço: R$ 3.44

2. **Ou defina manualmente:**
   - Clique em um preço para editá-lo individualmente
   - O lucro (%) é recalculado

### 🍕 Frete do iFood

Se você vende pelo iFood, o app também calcula com a taxa deles:

1. **Clique a % do iFood** (padrão é ~15%)
2. O app deduz automaticamente do seu lucro
3. O preço final já inclui essa taxa

**Exemplo com iFood:**
- Custo: R$ 1.72
- Margem bruta: 100%
- iFood (15%): -R$ 0.52
- **Preço final: R$ 3.92** (você recebe menos, mas vende pelo iFood)

---

## 💾 Seus Dados — Como Funcionam

**Tudo fica guardado no seu celular.** Não é necessário se conectar a internet ou fazer login.

- ✅ Seus ingredientes, embalagens e receitas ficam salvos
- ✅ Quando você volta ao app, tudo está lá
- ✅ Ninguém tem acesso além de você
- ⚠️ Se você limpar o navegador/app, os dados desaparecem

### Fazer Backup (Copiar Dados)

Se trocar de celular ou navegador, você pode exportar seus dados:

1. **Abra o menu** (canto superior direito)
2. **Clique "Baixar Dados"**
3. Um arquivo é salvo (leve ele pro novo dispositivo)
4. **No novo dispositivo**: Clique "Importar Dados" e selecione o arquivo

---

## ❓ Perguntas Frequentes

### P: Onde vejo meu lucro total?
**R:** No **Painel**, veja a coluna "Lucro (R$)" — é quanto você ganha por pote vendido.

### P: Posso mudar uma receita depois de cadastrada?
**R:** Sim! Clique no ⚙️ ao lado da receita e selecione "Editar". Você pode:
- Adicionar/remover ingredientes
- Mudar as quantidades
- Trocar a embalagem

### P: E se o preço do ingrediente mudar?
**R:** Clique em "Ingredientes" → selecione o ingrediente → clique ⚙️ → "Editar" → atualize o preço. Todos os cálculos mudam automaticamente.

### P: Como uso o app offline?
**R:** O app funciona 100% offline. Se carregou uma vez, funciona sem internet. Os dados ficam no seu celular.

### P: Posso usar dois navegadores/celulares?
**R:** Cada dispositivo tem seus próprios dados. Para sincronizar, use "Baixar Dados" num e "Importar Dados" no outro.

### P: Eu perdi meus dados. Como recupero?
**R:** Infelizmente não tem como recuperar se você limpou o navegador. Por isso faça backup regularmente:
1. Clique no menu (canto superior)
2. Clique "Baixar Dados"
3. Guarde o arquivo num lugar seguro

### P: O app suporta receitas com sub-receitas?
**R:** Não. Cada receita é independente. Mas você pode duplicar uma e adaptar.

### P: Posso vender o mesmo caldo em tamanhos diferentes?
**R:** Sim! Crie embalagens diferentes (Pote 500ml, Pote 1L) e depois crie receitas para cada uma. A mesma receita pode ficar em embalagens diferentes.

---

## 🎯 Exemplo Completo — Do Zero ao Resultado

Vamos fazer um caldo de caldo de abóbora do zero:

### Passo 1: Adicione ingredientes
1. Abóbora — R$ 3.00/kg
2. Cebola — R$ 1.80/kg
3. Alho — R$ 5.00/kg
4. Sal — R$ 1.20/kg

### Passo 2: Registre a embalagem
1. Pote 500ml — R$ 0.80

### Passo 3: Crie a receita
**Caldo de Abóbora:**
- 0.250 kg de abóbora (R$ 0.75)
- 0.050 kg de cebola (R$ 0.09)
- 0.010 kg de alho (R$ 0.05)
- 0.005 kg de sal (R$ 0.01)
- **Custo de ingredientes: R$ 0.90**
- Embalagem: R$ 0.80
- **CUSTO TOTAL: R$ 1.70**

### Passo 4: Defina o preço no Painel
- Margem de lucro: 80%
- Preço base: R$ 3.06
- Sem iFood: venda por R$ 3.06
- Com iFood (15%): venda por R$ 3.60 (você recebe R$ 3.06)

---

## 📞 Precisa de Ajuda?

O app tem guias dentro dele:

1. **Banners no topo**: leia as sugestões de "Próximo Passo"
2. **Estados vazios**: quando nada está cadastrado, o app explica o que fazer
3. **Ícones de ajuda ❓**: clique em alguns lugares para mais contexto

---

## 🚀 Dicas Finais

✅ **Atualize regularmente** os preços de ingredientes
✅ **Faça backup** dos seus dados pelo menos 1x por semana
✅ **Teste diferentes margens** no Painel para ver o impacto no preço final
✅ **Use nomes descritivos** nas receitas (ex. "Caldo de Carne Premium" em vez de "Receita 1")
✅ **Revise seus custos** a cada mês — você pode estar gastando mais do que acha
✅ **Acompanhe o iFood taxa** — se tiver promoção, pode reduzir a margem sem perder lucro

---

**Boa sorte com seus caldos!** 🍲

# 🚀 Guia de Deploy - JP Tecidos

## Deploy para Vercel (Recomendado)

### Método 1: Via CLI (Rápido)

```bash
# 1. Instalar Vercel CLI (se não tiver)
npm i -g vercel

# 2. Login no Vercel
vercel login

# 3. Deploy
vercel --prod
```

### Método 2: Via GitHub (Automático)

1. **Criar repositório no GitHub:**
```bash
git init
git add .
git commit -m "feat: JP Tecidos landing page com SEO completo"
git branch -M main
git remote add origin https://github.com/seu-usuario/LP-LOJAJPTECIDOS.git
git push -u origin main
```

2. **Conectar ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Click em "New Project"
   - Importe seu repositório do GitHub
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click em "Deploy"

## Após o Deploy

### 1. Atualizar URLs

Atualize as URLs no código com seu domínio real:

**Arquivos para atualizar:**

`index.html`:
```html
<!-- Trocar todas as ocorrências de -->
https://lp-lojajptecidos.vercel.app/

<!-- Por seu domínio real -->
https://seu-dominio.com/
```

`public/sitemap.xml`:
```xml
<!-- Atualizar todas as URLs -->
<loc>https://seu-dominio.com/</loc>
```

`public/robots.txt`:
```
Sitemap: https://seu-dominio.com/sitemap.xml
```

### 2. Configurar Google Analytics

1. Criar propriedade GA4 em [analytics.google.com](https://analytics.google.com)
2. Copiar seu ID (formato: G-XXXXXXXXXX)
3. Adicionar no `index.html` antes do `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Verifique via meta tag ou arquivo HTML
4. Envie o sitemap: `https://seu-dominio.com/sitemap.xml`

### 4. Criar Imagens Essenciais

#### Open Graph Image (`public/og-image.jpg`)
- **Dimensões:** 1200x630px
- **Formato:** JPG ou PNG
- **Conteúdo sugerido:**
  - Logo JP Tecidos
  - Texto: "Tecidos Jeans de Qualidade em Fortaleza"
  - Imagem de rolos de tecido
  - Cores da marca (laranja #FF6B35)

#### Favicons
```bash
public/
├── favicon.ico (16x16, 32x32, 48x48)
├── favicon-16x16.png
├── favicon-32x32.png
└── apple-touch-icon.png (180x180)
```

**Ferramentas recomendadas:**
- [Favicon Generator](https://realfavicongenerator.net/)
- [Canva](https://canva.com) - Para criar og-image

### 5. Configurar Domínio Customizado

No Vercel:
1. Acesse seu projeto
2. Settings > Domains
3. Adicione seu domínio
4. Configure DNS:

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### 6. Habilitar HTTPS

✅ Automático no Vercel (Let's Encrypt)

### 7. Performance Optimization

Configure no `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Checklist Pós-Deploy

- [ ] Site acessível via HTTPS
- [ ] Todas as páginas carregando corretamente
- [ ] Imagens sendo exibidas
- [ ] Links do WhatsApp funcionando
- [ ] Formulário de newsletter funcionando
- [ ] Site responsivo em mobile
- [ ] Open Graph funcionando (testar compartilhando no WhatsApp)
- [ ] Google Analytics rastreando visitas
- [ ] Search Console recebendo dados
- [ ] Sitemap submetido e indexado
- [ ] Favicons aparecendo

## Testes Recomendados

### 1. Lighthouse (Chrome DevTools)
```
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 95+
```

### 2. Mobile-Friendly Test
https://search.google.com/test/mobile-friendly

### 3. PageSpeed Insights
https://pagespeed.web.dev/

### 4. Rich Results Test
https://search.google.com/test/rich-results

### 5. Open Graph Debugger
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator

## Monitoramento

### Analytics
- Acessos diários
- Páginas mais visitadas
- Taxa de conversão (cliques no WhatsApp)
- Origem do tráfego

### Search Console
- Impressões no Google
- Cliques orgânicos
- CTR médio
- Posição média
- Palavras-chave

### Uptime Monitoring
Ferramentas recomendadas:
- [UptimeRobot](https://uptimerobot.com/) (grátis)
- [Pingdom](https://www.pingdom.com/)

## Suporte e Manutenção

### Atualizações Regulares
```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

### Backup
- Manter código no GitHub
- Exportar dados do Analytics mensalmente
- Backup de imagens e assets

## Troubleshooting

### Problema: Build falha no Vercel
**Solução:**
```bash
# Testar build localmente
npm run build

# Se funcionar local, limpar cache do Vercel
Vercel Dashboard > Settings > Clear Build Cache
```

### Problema: Imagens não carregam
**Solução:**
- Verificar paths relativos vs absolutos
- Confirmar que arquivos estão na pasta `public/`
- Verificar extensão dos arquivos (.png, .jpg, .webp)

### Problema: WhatsApp não abre
**Solução:**
- Verificar formato do número: +5585985661823
- Conferir encoding da mensagem: `encodeURIComponent()`
- Testar link diretamente no navegador

## Custos Estimados

| Serviço | Custo |
|---------|-------|
| Vercel Hosting | Grátis (Hobby Plan) |
| Domínio .com | ~R$ 40/ano |
| Google Analytics | Grátis |
| Search Console | Grátis |
| Email Marketing (Mailchimp) | Grátis até 500 contatos |
| **TOTAL** | **~R$ 40/ano** |

## Contato para Suporte

Se precisar de ajuda:
- 📧 Email: contato@jptecidos.com.br
- 📞 WhatsApp: (85) 98566-1823

---

**Boa sorte com o deploy! 🚀**

**Última atualização:** 14/11/2025

# Chat avec Mistral AI 🤖

Salut ! 👋 Voici un petit projet que j'ai commencé pour expérimenter avec l'API de Mistral AI. L'idée était de créer une interface de chat sympa, mais j'ai rencontré quelques obstacles en route... 😅

⚠️ **Spoiler alert** : Le projet n'est pas fini ! J'ai eu des soucis avec ma clé API qui n'était pas autorisée, du coup j'ai mis ça en pause.

## Où j'en suis 📊

- ✅ L'interface est plutôt jolie (merci HeroUI !)
- ✅ Les composants de chat sont prêts à l'emploi
- ❌ L'API Mistral me fait des caprices (problème de clé API)
- ❌ Next.js refuse de builder à cause de mes appels fetch mal placés (oups !)

## Ce que j'ai utilisé 🛠️

- [Next.js 15](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [MistralAI SDK](https://www.npmjs.com/package/@mistralai/mistralai)

## Si tu veux tester le projet 🚀

### Ce qu'il te faut

1. Une clé API MistralAI qui fonctionne (la mienne était cassée 😢)
2. Node.js 18+ sur ta machine

### Pour commencer

1. Clone ce repo sur ton ordi
2. Lance `pnpm install` pour installer tout ce qu'il faut
3. Crée un fichier `.env.local` avec ta clé API :
   ```bash
   MISTRAL_API_KEY=ta_cle_api_ici
   ```

### Les petits soucis que j'ai rencontrés 🐛

1. **Le build plante** : J'ai fait des appels fetch dans des Server Components... Next.js n'a pas aimé !
2. **API qui dit non** : Ma clé API Mistral n'était pas la bonne, du coup ça marche pas
3. **Fonctionnalités à moitié finies** : L'envoi de messages et tout ça, c'est pas encore au point

### Si tu veux corriger tout ça

1. Trouve-toi une vraie clé API MistralAI qui marche
2. Ajoute `"use client";` en haut des composants qui font du fetch
3. Finis l'implémentation des messages et des conversations (j'ai commencé mais pas fini !)

### Pour lancer le tout

```bash
pnpm dev
```

### Petite astuce pour pnpm 💡

Si tu utilises pnpm (comme moi), n'oublie pas d'ajouter ça dans ton `.npmrc` :

```bash
public-hoist-pattern[]=*@heroui/*
```

Puis relance `pnpm install` après avoir ajouté ça.

## Comment c'est organisé 📁

```
app/
├── page.tsx              # Page d'accueil avec ChatBox
├── layout.tsx            # Layout principal
└── api/mistral/models/   # Route API pour les modèles MistralAI

components/
├── custom/
│   ├── chat-box.tsx      # Conteneur principal du chat
│   ├── chat-textarea.tsx # Zone de saisie (problématique)
│   └── chat-select.tsx   # Sélecteur de modèles
└── ...

lib/
└── mistral/              # Configuration SDK MistralAI
```

## Licence 📜

Tout ça est sous licence [MIT](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE), donc tu peux faire ce que tu veux avec !

---

**PS** : J'ai mis ce projet en pause à cause des soucis d'API, mais ça peut être un bon point de départ si tu veux jouer avec Mistral AI. N'hésite pas à le forker et à le finir si ça t'inspire ! 😊

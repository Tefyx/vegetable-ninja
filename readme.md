# Module 426

## Structure des fichiers

- M426-Repo
  - css
  - html
  - js
  - index.html

## Convention de nomage des classes

> Pour identifier les éléments DOM, utilisez des classes, par exemple : `<div class="container">`
> Une classe se séléctionne en CSS comme ceci : `.container { background-color: red; }`
> Pour le nom des classes, faire selon la hierarchie html, par exemple :

```
<div class="homepage">
  <img class="homepage__logo">
  <h1 class="homepage__title"></h1>
  <div class="homepage__section">
    <h2 class="homepage__section__title"></h2>
    <h2 class="homepage__section__paragraph">
  </div>
</div>
```

**S'assurer de ne pas faire de conflits avec les noms de classes**

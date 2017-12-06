# Module 426

## Site
Enjoy 😉
 - https://benoit-s8.github.io/vegetable-ninja

## Branches
Ne travaillez **jamais** sur la branche master. Quand vous avez cloné le repo, créer vous votre branche selon la tâche que vous avez à faire et faites vos commit dessus. Une fois que la tâche sera terminée et validée, la branche sera intégrée au projet. <br>
Pour créer une nouvelle branche : `git checkout -b nom-de-la-branche` <br>
Pour faire un commit : `git commit -m "mon commit"` <br>
Pour push la branche sur le serveur : `git push -u origin nom-de-la-branche` <br>

## Convention de nommage des classes

Pour identifier les éléments DOM, utilisez des classes, par exemple : `<div class="container">` <br>
Une classe se séléctionne en CSS comme ceci : `.container { background-color: red; }` <br>
Pour le nom des classes, faire selon la hierarchie html, par exemple :

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

---
index: false
---

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.focus {
  color: var(--theme-foreground-focus);
  border-radius: 50%;
  box-shadow: 0px 0px 16px 8px #ccc;
}

.invert {
  background-color: var(--theme-foreground-alt);
  color: var(--theme-background);
}

.crop {
  border-radius: 8px;
  margin: 1rem;
  max-width: calc(50% - 2rem);
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
  aspect-ratio: 3024 / 1888;
  object-fit: cover;
  object-position: 0 100%;
}

.cta {
  display: flex;
  align-items: center;
  gap: 2rem;
}

@container not (min-width: 400px) {
  .cta {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
  .cta .observablehq-pre-container,
  .cta pre:not(.observablehq-pre-container pre) {
    width: 100%;
  }
}

/* Gallery */

.gallery {
  margin: 4rem -1rem;
  gap: 2rem;
  max-width: calc(840px + 2rem);
}

.gallery a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.gallery img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
  aspect-ratio: 2500 / 1900;
}

@media (prefers-color-scheme: dark) {
  .gallery img {
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.4);
  }
}

.gallery a:not(:hover, :focus) {
  color: var(--theme-foreground-muted);
}

.gallery a:hover img,
.gallery a:focus img {
  box-shadow: 0 0 0 0.75px var(--theme-foreground-focus), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.gallery figcaption {
  font-size: 12px;
  color: inherit;
}

.arrow {
  font-weight: 500;
}

.arrow::after {
  content: "→";
  display: inline-block;
  margin-left: 0.25rem;
}

@media (prefers-color-scheme: light) {
  h1 {
    --theme-red: #d75c48;
  }
}

</style>


<div class="grid grid-cols-2">
  <div>
  <h1>Welcome</h1>

  <em>We are on the holy grail quest to understand multimodal foundation models.</em>

  In this Observable framework, you'll find a series of notes from the [Computational Ethics Lab](https://www.compethicslab.org/) about multimodal foundation models (FMs). Each week or so, we meet to talk about the recent advances in the domain. We keep track of our findings in this series of notebook.

  In the [preliminaries](./preliminaries/) directory, we put early meetings where we engage with the literature. As we have a better idea of what multimodal FMs capabilities (and most importatly, limitations), we will create new directories. In [papers deep dive](./papers), we take deep dive for any given paper in our [refs.bib](https://github.com/jstonge/multimodal-fms-at-uvm/blob/main/docs/refs.bib). 
  
  The git repo can be found [here](https://github.com/jstonge/multimodal-fms-at-uvm). The github.io where this app lives can be found [here](https://jstonge.github.io/multimodal-fms-at-uvm/).

  </div>
  <div>
  <div class="container">
      <img src="./assets/mascot.png" class="focus">
  </div>
  </div>
</div>



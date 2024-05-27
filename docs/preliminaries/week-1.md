<style type="text/css">

.focus {
  color: var(--theme-foreground-focus);
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
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

.wbr::before {
  content: "\200b";
}

.wide {
  max-width: 960px;
}

figcaption code {
  font-size: 90%; /* TODO move to global.css */
}

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

</style>

# Multimodal foundation models

How does tokenization works in multimodal foundation models (FMs)?  That is, we know that in text-only FMs require tokens as input.
In simple words, a tokenizer maps strings onto tokens. The era where tokens were just words is long gone, FMs use fancy tokenizers such as the <a href=https://github.com/google/sentencepiece>SentencePiece's byte-pair-encoding(BPE)</a> alogorithm.  As Andre Karpathy points out in his<a href="https://www.youtube.com/watch?v=zduSFxRajkE">Let's build the GPT Tokenizer</a>, the tokenizer part is often the least appreciatebut the crucial part that makes everything break or succeed. 

How does tokenization works when you have more than one mode in your FMs?  Even before answering that, what do we mean with multimodal FMs.  For now, we will only talk about vision+text undertanding multimodality.  We put aside other senses but we might come back to it. This is where the leading teams in the industry are mostly pushing currently anyway. Naively, does a FM that can embed images in a text-only generated embedding space counts as multimodal? Does the pretraining step absolutely needs to be multimodal for FMs to inheritate that quality? 

We take as starting point to answer those question the following paper; [Chameleon: Mixed-Modal Early-Fusion Foundation
Models](https://www.semanticscholar.org/reader/32112b798f70faab00e14806f51d46058cf5e597). We navigate the paper's citation graph to better understand what the story is about. For each paper, we have another [directory](../papers/) with detailed information about the paper. Here we try to keep the narrative fairly high-level.

## Timeline

```js
const selectInput = Inputs.radio(["all", "meta", "huggingface", "microsoft"], {value: "all", label: "team contribution"})
const select = Generators.input(selectInput)
```

<div>${selectInput}</div>

<div class="grid grid-cols-3">
  <div class="card grid-colspan-1">
  Ideas in construction.
  </div>
  <div class="grid-colspan-2">${resize((width) => 
    Plot.plot({
      width,
      height: 1200,
      y: { axis: null },
      x: { axis: null, domain: [-200 / 2, 200 / 2] },
      marks: [
        Plot.ruleX([0]),
        Plot.ruleY(
          refs.filter(
            d => select === "all" ? d : d.entryTags.type == select), 
            { y: d => d.entryTags.year+"-"+d.entryTags.month+"-"+d.entryTags.day, x: (d, i) => (i % 2 === 0 ? 25 : -25)  }
          ),
        Plot.dot(
          refs.filter(d => select === "all" ? d : d.entryTags.type == select), 
          { 
            y: d => d.entryTags.year+"-"+d.entryTags.month+"-"+d.entryTags.day, 
            fill: "#fff", 
            stroke: d => d.entryTags.type, 
            tip: true,
            title: d => d.entryTags.url,
            textWidth: 200
          }),
        Plot.text(
          refs.filter(d => select === "all" ? d : d.entryTags.type == select), 
          { 
            x: (d, i) => (i % 2 === 0 ? -13 : 13 ), 
            y: d => d.entryTags.year+"-"+d.entryTags.month+"-"+d.entryTags.day, 
            text: d => `${d.entryTags.year+"-"+d.entryTags.month+"-"+d.entryTags.day}`,
          }
        ),
        Plot.image(
          refs.filter(d => select === "all" ? d : d.entryTags.type == select), 
          { 
            y: d => d.entryTags.year+"-"+d.entryTags.month+"-"+d.entryTags.day,  
            x: (d, i) => i % 2 === 0  ? 30 + 3 * 16 * 0.5 : -30 - 3 * 16 * 0.5,
            src: d => d.entryTags.link,
            width: 270
        })
      ],
      caption: ""
    })
  )}
  </div>
</div>

<!-- LOAD AND PARSE BIBTEX -->

```js
import bibtexParse from "npm:bibtex-parse-js";
```
```js
const raw_refs = FileAttachment("../refs.bib").text()
```
```js
const refs = bibtexParse.toJSON(raw_refs);
```
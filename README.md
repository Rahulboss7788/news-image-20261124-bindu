# news-image-20261124-bindu

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Rahulboss7788/news-image-20261124-bindu/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Rahulboss7788/news-image-20261124-bindu/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of Tuesday 24 November 2026, drawn as
a single newspaper front page — *The Global Ledger*. The lead story is the
Russian drone and missile strikes on Ukraine's Kyiv region, killing at least
14 people. Around it: a factory fire in Indonesia killing 24 workers; Nvidia
reinstating Jensen Huang as chief executive after Trump intervenes, with
shares up 33%; US states suing Elon Musk's companies over sexualised images
made by the Grok chatbot; COP31 climate talks in Antalya split over fossil
fuels; and the India–New Zealand Test ending in a draw, with Rishabh Pant's
record 128. In brief: Gukesh beginning his world chess title defence in
Geneva, thousands marching in Lisbon over living costs, and Modi opening an
AI centre at IIT Patna.

## The image

`entry.png` is a 1024×1024 PNG (under 1 MiB) rendered from `page.html`, a
self-contained front-page layout with hand-drawn SVG art: a night skyline
over Kyiv under the hero headline, and small scenes for the factory fire,
the Nvidia chip, the courthouse, the climate globe and the cricket record.
Every story on the page happened, or was first reported, on 24 November
2026; claims are labelled as claims and no quotes, numbers or events are
invented. Sources: The Times of India / Education Times, Jagran Josh,
The Manila Times (AP/AFP).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). It uses no
network, so two runs write byte-identical output.

## Files

- `main.ts` — the entrypoint; writes the image to the output directory.
- `entry.png` — the submitted image, 1024×1024.
- `page.html` — the front-page design the image was rendered from.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>

## tgtq


Текстовые квесты будут размещаться на github.com



```plane_text

game
├── assets
│   ├── room_hero.png
│   ├── prof_norm.png
│   └── errors.mp3
├── icons
│   ├── favicon.png
│   └── logo32x32.png
├── scenes
│   ├── start
│   │   ├── chapter1.yaml
│   │   └── chapy2.yaml
│   └── lab
│       ├── entryIntoLab.yaml
│       └── game-over.taml
├── readme.md
└── package.yaml

```


__`start/chapter1.yaml`__

```yaml
- print: Привет мир
- print: Я буду писать текстовый квест
  image: room_hero
- print: Дальше я пойду далеко далеко
- jump: chapy2

```
__`start/chapy2.yaml`__

```yaml
- print: Это глава 2


```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/termsurf/chat.js/blob/make/view/view.svg?raw=true' height='312'>
</p>

<h3 align='center'>
  @termsurf/chat
</h3>
<p align='center'>
  A Cross-Cultural Romanization Scheme
</p>

<br/>
<br/>
<br/>

## Overview

ChatText uses the Latin script with diacritics to encode most of Earth's
natural language features, enough so that you can write every language
using the same Latin-oriented system and be close enough to a realistic
pronunciation, including nasalized vowels, tense consonants, clicks, and
tones, amongst other things. See the `index.ts` for a list of all the
possible symbols and their representation.

In addition to a compact "Latin script with diacritics" version, there
is also an ASCII version suitable for writing on a traditional keyboard.
This is shown in a faint color in the upper right of each box in the
tables below. It is also clearly mapped out in the source code as well.

## EaseChat

This is the simplified, diacritic-free version of ChatText, as
demonstrated with these example words. Since it is so minimal, it is
much _easier_ for an English speaker to _read_, hence calling it the
EaseChat. It's not perfect, but it gets the job done.

| english    | ascii        | simplified  |
| :--------- | :----------- | :---------- |
| think      | `ciqk`       | theenk      |
| these      | `Ciz`        | zheez       |
| brother    | `brUCu$`     | bruzher     |
| bend       | `bEnd`       | bend        |
| date       | `det`        | daet        |
| cat        | `kAt`        | kaat        |
| father     | `faCu$`      | fazher      |
| eventually | `UvE^ntxOli` | uvenchuulee |
| cool       | `kul`        | kool        |
| lately     | `letli`      | laetlee     |
| koala      | `kOwalU`     | kuuwaluh    |
| creature   | `kritxu$`    | kreecher    |

The _simplified_ version is meant to be readable if you have some degree
of English intuition, but it's not meant to be perfect like it would
represent the words in English.

```ts
import chat from '@termsurf/chat'

chat.ease('brUCu$') // => 'bruzher'
```

You can combine this with
[`@termsurf/talk`](https://github.com/termsurf/talk.js) to start from
native writing systems, and using that library convert to ChatText
ASCII, then simplify the ASCII into a somewhat readable form!

```ts
import talk from '@termsurf/talk'
import chat from '@termsurf/chat'

chat.read(talk.tibetan.read(someTibetan))
```

## FlowChat

This is the more rich formatting of the ASCII characters, using
diacritics and trying to keep things relatively minimal while still
being reasonably accurate with pronunciation. That is why we call it
FlowChat.

| ascii            | simplified   |
| :--------------- | :----------- |
| `txaando^`       | txaandȯ      |
| `surdjyo^`       | surdjyȯ      |
| `Ha$!a$@!^rijE`  | ḥa̱̖ȧ̱̤̖rıjẹ      |
| `H!u&_^th~`      | ḥ̖ṵ̄̇tḩ         |
| `eT!e_^mu`       | eṭ̖ē̇mu        |
| `txya@+a-a++u`   | txyà̤áȁu      |
| `hwpo$kUimUno$s` | hwpo̖kụımụno̖s |
| `sinho^rEsi`     | sınhȯrẹsı    |
| `batoo'aH`       | batoo'aḥ     |
| `batoo'aHh!`     | batoo'ah̥     |
| `aiyuQaK`        | aıyuq̇aḳ      |

```ts
import chat from '@termsurf/chat'

chat.flow('eT!e_^mu') // => 'eṭ̖ē̇mu'
```

## ReadChat

Here we have included a system inspired by the
[Double Metaphone algorithm](https://github.com/words/double-metaphone/blob/main/index.js),
which is an algorithm which creates a simplified pronunciation "hash" of
some input text, usually English or other Indo-European languages.

Since ChatText is itself a simplified ASCII pronunciation system for any
of the world's languages (like X-SAMPA or IPA, but easier to write), it
was straightforward to make a system where we _progressively simplify
the pronunciation from accurate to only simplified consonants and no
vowels_. There are 5 categories of things which get tinkered with when
"refining" the pronunciation from its most accurate form, to the most
basic form:

- **vowel**: none, one, basic, all. No vowels, the `a` vowel, the 5
  basic vowels `i e a o u`, or any possible vowel allowed by ChatText.
- **consonant**: all, simplified. All possible consonants allowed by
  ChatText, or a simplified subset, where it basically merges bp, td,
  xj, fv, sz, and kg, and gets rid of any consonant variants like click
  consonants or stop/tense consonants (Korean).
- **tone**: yes, no. Whether or not we include tone markers (useful in
  Chinese).
- **duration**: yes, no. Whether or not we include duration markers
  (useful in Sanskrit).
- **aspiration**: yes, no. Whether or not we include aspiration markers
  (useful in Indian languages).

By combining all these characteristics, we end up with something like
this (for the word `by~oph~am`, which has palatalization, aspiration,
and a few vowels and non-simplified consonants):

```js
const list = chat.read('by~oph~am')
[
  {
    text: 'by~oph~am',
    mass: 405,
    load: {
      consonant: 'all',
      vowel: 'all',
      tone: 'yes',
      aspiration: 'yes',
      duration: 'yes',
    },
  },
  {
    text: 'by~ph~m',
    mass: 324,
    load: {
      consonant: 'all',
      vowel: 'basic',
      tone: 'yes',
      aspiration: 'yes',
      duration: 'yes',
    },
  },
  {
    text: 'by~opam',
    mass: 270,
    load: {
      consonant: 'all',
      vowel: 'all',
      tone: 'yes',
      aspiration: 'no',
      duration: 'yes',
    },
  },
  {
    text: 'pyopham',
    mass: 270,
    load: {
      consonant: 'simplified',
      vowel: 'all',
      tone: 'yes',
      aspiration: 'yes',
      duration: 'yes',
    },
  },
  {
    text: 'by~pm',
    mass: 216,
    load: {
      consonant: 'all',
      vowel: 'basic',
      tone: 'yes',
      aspiration: 'no',
      duration: 'yes',
    },
  },
  {
    text: 'pyphm',
    mass: 216,
    load: {
      consonant: 'simplified',
      vowel: 'basic',
      tone: 'yes',
      aspiration: 'yes',
      duration: 'yes',
    },
  },
]
```

The `mass` is basically a "weight" for now, to say how many features it
included, i.e. how close to the actual pronunciation it was. The smaller
the mass, the less it is like the original pronunciation.

You then use the `text` as a key in a lookup table to find words
matching that refined text pronunciation. You likely will find the same
term in several spots, but you can just filter those at at query time.

That's about it! Now have to play with this in production to see how
useful it is in practice for building pseudo-fuzzy dictionary search.

## Syllables and Pronunciation

Using the library, you can also count the number of syllables in a word,
and convert IPA text into ASCII Call Text.

```ts
import chat from '@termsurf/chat'

chat.talk('kxɯʎʎikʰa̠da̠') // => 'kHOly~ly~ikh~a@da@'
chat.mark('kHOly~ly~ikh~a@da@') // => { size: 4 }
```

## Tone Text

You can also transform ChatText into
[Tone Text](https://github.com/termsurf/tone) by writing it in ASCII,
and running it through the tone text code, which is freely available and
open source there.

```ts
import tone from '@termsurf/tone'

// make it for the font.
tone.make('a+a+si-kiri-imu-') // => 'a3a3si4kiri4imu4'
```

## License

Copyright 2021-2024 <a href='https://term.surf'>TermSurf</a>

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## TermSurf

This is being developed by the folks at [TermSurf](https://term.surf), a
California-based project for helping humanity master information and
computation. Find us on [Twitter](https://twitter.com/termsurf),
[LinkedIn](https://www.linkedin.com/company/termsurf), and
[Facebook](https://www.facebook.com/termsurf). Check out our other
[GitHub projects](https://github.com/termsurf) as well!

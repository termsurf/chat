import chat from './index.js'

flow('txaando^', 'txaandȯ')
flow('surdjyo^', 'surdjyȯ')
flow('Ha$!a$@!^rijE', 'ḩa̱̖ȧ̱̤̖rijẹ')
flow('H!u&_^th~', 'ḩ̖ṵ̄̇tḥ')
flow('eT!e_^mu', 'eṭ̖ē̇mu')
flow('txya@+a-a++u', 'txyà̤áȁu')
flow('hwpo$kUi^mUno$s', 'hwpo̖kụïmụno̖s')
flow('sinho^rEsi', 'sinhȯrẹsi')
flow("batoo'aH", "batoo'aḩ")
flow("batoo'aHh!", "batoo'ah̥")
flow('aiyuQaK', 'aiyuq̇aḳ')
flow("s'oQya&te", "s'oq̇ya̰te")
flow('t!arEba', 't̖arẹba')
flow('txhaK!EnEba', 'txhaḳ̖ẹnẹba')
flow('txh~im', 'txḥim')
flow('txy~h~im', 'txẏḥim')
flow('mh!im', 'm\u030Aim')
flow('nh!iqh!lh!', 'n\u030Aiq\u030Al̥')
flow('p*at@', 'ṗ̂aṱ')
flow('t*et.', 'ṭ̬et̰')
flow('n~ulQ~tQ~', 'n̂ul̬t̬')
flow('b?ad?', 'ɓaɗ')
flow('p*od*h~t*ak*el*', 'ṗ̂oḍ̬ḥṭ̬aḳ̬eḷ̬')

ease('p*od*t*ak*el*', 'podtakael')
ease('nh!iqh!lh!', 'neengl')
ease("s'oQya&te", "s'o'yatae")
ease('H!u&_^th~', 'hoot')
ease('txaando^', 'chando')
ease('xOx', 'shuush')
ease('txya@+a-a++u', 'chyaoo')
ease('ciqk', 'theenk')
ease('Ciz', 'zheez')
ease('brUCu$', 'bruzher')
ease('bEnd', 'bend')
ease('det', 'daet')
ease('kAt', 'kaat')
ease('faCu$', 'fazher')
ease('UvE^ntxOli', 'uvenchuulee')
ease('kul', 'kool')
ease('letli', 'laetlee')
ease('kOwalU', 'kuuwaluh')
ease('kritxu$', 'kreecher')

// talk('diəm˧˩˨')
// talk('cɤ̆n˧˧')
// talk('ɲɤ˨˦')
// talk('uj˧˩˨')
// talk('è.ɣì.ɣɔ̀')
// talk('àá.fá')
// talk('àà.k͡pɔ̃̀') // ?
// talk('àá.ɾĩ́')
// talk('āá.sì.kí')
// talk('áásìkiriìmù')
// talk('āá.ʃáà.ī.tà')
// talk('àà.wɛ̀')
// talk('àà.jò')
// talk('ʊ̄.mɔ̃̄.lɛ̀')
// talk('jà.ú.jà.úù')
// talk('ka̠ɡa̠sʰʌ̹ŋd͡ʑa̠')
// talk('ˈka̠ːɡa̠ɦa̠da̠')
// talk('ka̠ɡa̠βo̞βo̞')
// talk('săw˧˩˨')
// talk('sɤ̆p˨ˀ˩')
// talk('ʔɗəwk͡p̚˧˨ʔ')
// talk('ɑb̥eˈd̥isə')
// talk('t͡ɕɘ(ː)ŋo̞')
// talk('t͡ɕʌ̹t̚k͈a̠ɾa̠k̚t͡ɕ͈iɭ')
// talk('t͡ɕʌ̹pɕ͈i')
// talk('ˈt͡ɕɘ(ː)mpʰo̞')
// talk('t͡ɕʌ̹ŋɕʰinɰiɦa̠k̚')
// talk('t͡ɕʌ̹ŋsʰa̠ŋβwe̞da̠m')
// talk('ip̚p͈ʌ̹p̚t͡ɕ͈a̠')
// talk('(ʔ)evoˈlut͡sja')
// talk('adʁiˈχal')
talk('k͈o̞ms͈o̞mo̞ɭsʰɯkxɯ-na̠-a̠muɾe̞')
talk('ɸʷo̞')
talk('kxɯnsʰo̞ɾit͡ɕʰida̠')
talk('kxɯʎʎikʰa̠da̠')
talk('ɔ̂ːi̯.on')

read('by~u$oph~am')

console.log(chat.slot('by~ou$f ph~A_m'))
const viewList = chat.read('aikagaVika_bh~yah')

function read(a: string) {
  const viewList = chat.read(a)
  console.log(viewList)
}

function talk(a: string) {
  const pron = chat.talk.fromIPA(a)
  console.log('ipa => ' + a)
  console.log('  text => ' + pron)
  console.log('  ease => ' + chat.ease(pron))
  console.log('  flow => ' + chat.flow(pron))
  const markList = chat.mark(pron)
  console.log(markList)
  console.log('  mark => ' + markList.size)
  console.log('  fold => ' + markList.fold)
}

function ease(a: string, b: string) {
  const o = chat.ease(a)
  console.log(o)
  o.split('').forEach((x, i) => {
    if (x !== b[i]) {
      throw new Error(`${o} with ${x} != ${b[i]}`)
    }
  })
}

function flow(a: string, b: string) {
  const o = chat.flow(a)
  console.log(o)
  o.split('').forEach((x, i) => {
    if (x !== b[i]) {
      throw new Error(`${o} with ${x} != ${b[i]}`)
    }
  })
}

import chat from './index.js'

flow('txaando^', 'txaandȯ')
flow('surdjyo^', 'surdjyȯ')
flow('Ha$!a$@!^rijE', 'ḥa̱̖ȧ̱̤̖rıjẹ')
flow('H!u&_^th~', 'ḥ̖ṵ̄̇tḩ')
flow('eT!e_^mu', 'eṭ̖ē̇mu')
flow('txya@+a-a++u', 'txyà̤áȁu')
flow('hwpo$kUimUno$s', 'hwpo̖kụımụno̖s')
flow('sinho^rEsi', 'sınhȯrẹsı')
flow("batoo'aH", "batoo'aḥ")
flow("batoo'aHh!", "batoo'ah̥")
flow('aiyuQaK', 'aıyuq̇aḳ')
flow("s'oQya&te", "s'oq̇ya̰te")
flow('t!arEba', 't̖arẹba')
flow('txhaK!EnEba', 'txhaḳ̖ẹnẹba')
flow('txh~im', 'txḩım')
flow('txy~h~im', 'txẏḩım')
flow('mh!im', 'm\u030Aım')
flow('nh!iqh!lh!', 'n\u030Aıq\u030Al̥')
flow('p*at@', 'ṗ̂aṱ')
flow('t*et.', 'ṭ̬et̰')
flow('n~ul~t~', 'n̂ul̬t̬')
flow('b?ad?', 'ɓaɗ')
flow('p*od*h~t*ak*el*', 'ṗ̂oḍ̬ḩṭ̬aḳ̬eḷ̬')

read('p*od*t*ak*el*', 'podtakael')
read('nh!iqh!lh!', 'neengl')
read("s'oQya&te", "s'o'yatae")
read('H!u&_^th~', 'hoot')
read('txaando^', 'chando')
read('xOx', 'shuush')
read('txya@+a-a++u', 'chyaoo')
read('ciqk', 'theenk')
read('Ciz', 'zheez')
read('brUCu$', 'bruzher')
read('bEnd', 'bend')
read('det', 'daet')
read('kAt', 'kaat')
read('faCu$', 'fazher')
read('UvE^ntxOli', 'uvenchuulee')
read('kul', 'kool')
read('letli', 'laetlee')
read('kOwalU', 'kuuwaluh')
read('kritxu$', 'kreecher')

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

function talk(a: string) {
  const pron = chat.talk(a)
  console.log('ipa => ' + a)
  console.log('  text => ' + pron)
  console.log('  read => ' + chat.read(pron))
  console.log('  flow => ' + chat.flow(pron))
  const markList = chat.mark(pron)
  console.log('  mark => ' + markList.size)
  console.log('  fold => ' + markList.fold)
}

function read(a: string, b: string) {
  const o = chat.read(a)
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

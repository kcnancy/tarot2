const tarot = require("tarot-deck");

console.log(tarot.suits);
// [ 'major', 'wands', 'cups', 'swords', 'coins' ]

console.log(tarot.minorArcana);
// 56

console.log(tarot.getByRank(1));
/*
{ keywords: [ 'capability', 'empowerment', 'activity' ],
  meanings:
   { light:
      [ 'Taking appropriate action',
        'Receiving guidance from a higher power',
        'Becoming a channel of divine will',
        'Expressing masculine energy in appropriate and constructive ways',
        'Being yourself in every way' ],
     shadow:
      [ 'Inflating your own ego',
        'Abusing talents',
        'Manipulating or deceiving others',
        'Being too aggressive',
        'Using cheap illusions to dazzle others',
        'Refusing to invest the time and effort needed to master your craft',
        'Taking shortcuts' ] },
  name: 'The Magician',
  rank: 1,
  suit: 'major' }
*/

console.log(tarot.drawCard());
/*
{ keywords: [ 'health', 'wealth', 'practicality', 'receiving' ],
  meanings:
   { light:
      [ 'Outlining a plan for achieving prosperity',
        'Becoming aware of opportunities to improve income or health',
        'Realizing you have everything you need',
        'Appreciating everything the Universe has given you',
        'Receiving the perfect gift at the perfect time' ],
     shadow:
      [ 'Indulging in relentless consumerism',
        'Wanting more, no matter how much you have',
        'Obsessing on your account balance',
        'Suffering from hypochondria',
        'Consuming blessings without expressing gratitude',
        'Taking what you want without concern for the needs of others' ] },
  name: 'ace of coins',
  rank: 1,
  suit: 'coins',
  reversed: true }
*/

console.log(tarot.drawReading());
/*
[ { keywords: [ 'training', 'discipline', 'confidence', 'enough' ],
    meanings: { light: [Object], shadow: [Object] },
    name: 'nine of coins',
    rank: 9,
    suit: 'coins',
    reversed: true },
  { keywords:
     [ 'wholeness',
       'integration',
       'totality',
       'completeness',
       'fullness' ],
    meanings: { light: [Object], shadow: [Object] },
    name: 'The World',
    rank: 21,
    suit: 'major',
    reversed: true },
  { keywords: [ 'implementation', 'action', 'exploration' ],
    meanings: { light: [Object], shadow: [Object] },
    name: 'three of wands',
    rank: 3,
    suit: 'wands',
    reversed: false } ]
*/

module.exports = tarot;

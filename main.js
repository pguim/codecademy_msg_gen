// Prints a "joke" with the next parts:
// "- Why did the + {noun(1)} + {verb} + {noun(2)}?"
// "- Because the {noun(2)} is {adjective}! + {emoji x3}"
// There are 4 arrays within a main object "joke": nouns, verbs, adjectives and emojis
// Arrays made with help from: https://randomwordgenerator.com/

const joke = {
  nouns: [
    'fish', 'cat', 'dog', 'Brad Pitt', 'road', 'cloud', 'earth', 'highway', 'climate', 'cancer', 'response', 'hotel', 'poetry', 'depth', 'cigarette', 'satisfaction', 'potato', 'politics', 'thought', 'region', 'database', 'child', 'mom', 'hospital', 'argument', 'office', 'guitar', 'story', 'candidate', 'king', 'engine', 'membership', 'inspector', 'salad', 'analysis', 'location', 'oven', 'chemistry', 'airport', 'employment', 'art', 'control', 'association', 'city', 'property', 'version', 'growth', 'topic', 'sympathy', 'role', 'village', 'moment', 'debt', 'history', 'secretary', 'meaning', 'basket'
  ],
  verbs: [
    'omit', 'substitute', 'respond', 'picture', 'allege', 'print', 'effect', 'pay', 'name', 'bid', 'consume', 'undertake', 'entail', 'press', 'replace', 'boast', 'disclose', 'manage', 'accuse', 'coincide'
  ],
  adjectives: [
    'classy', 'overwrought', 'round', 'annoying', 'dynamic', 'skillful', 'electrical', 'new', 'well-groomed', 'itchy', 'glib', 'rambunctious', 'alert', 'vague', 'ripe', 'sexual', 'filthy', 'confused', 'unbiased', 'mute', 'unusual', 'material', 'unwieldy', 'futuristic', 'divergent', 'financial', 'didactic', 'stereotyped', 'faulty', 'sordid'
  ],
  emojis: ['🥳', '😭', '🤣', '🙈', '😂', '😲', '🤯']
}

// Given an array, returns a random values from it
const getRandomIndex = (arr) => {

  //Check wether given data is an array (actually an object)
  if (typeof arr !== 'object') return ''

  // Check minimum array length
  const len = arr.length
  if (len < 1) return ''

  // Get random index from 0 to upper bound from array
  const idx = Math.floor(Math.random() * len)

  // Return value in array in random position
  return arr[idx]
}


// Test "getRandomIndex" functionality with smallest array
// Should eventualy return all possible values
/*for (let i = 0; i < 50; i++) {
  console.log(getRandomIndex(joke.emojis))
}*/
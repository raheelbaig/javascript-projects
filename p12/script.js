//Settings DOM Elements
const settingsBtn = document.getElementById('setting-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const settingsDifficulty = document.getElementById('difficulty');

//Score and Time DOM Elements
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');

//Word and Text Input DOM Elements
const word = document.getElementById('word');
const text = document.getElementById('text');

//End game Container DOM Element
const endGameElement = document.getElementById('end-game-container');

//The pool of Words for the Game
const wordList = [ 
     'a',	'ability',	'able',	'about',	'above',	'accept',	'according',	'account',	'across',	'act',	'action',	'activity',	'actually',	'add',	'address',	'administration',	'admit',	'adult',	'affect',	'after',	'again',	'against',	'age',	'agency',	'agent',	'ago',	'agree',	'agreement',	'ahead',	'air',	'all',	'allow',	'almost',	'alone',	'along',	'already',	'also',	'although',	'always',	'American',	'among',	'amount',	'analysis',	'and',	'animal',	'another',	'answer',	'any',	'anyone',	'anything',	'appear',	'apply',	'approach',	'area',	'argue',	'arm',	'around',	'arrive',	'art',	'article',	'artist',	'as',	'ask',	'assume',	'at',	'attack',	'attention',	'attorney',	'audience',	'author',	'authority',	'available',	'avoid',	'away',	'baby',	'back',	'bad',	'bag',	'ball',	'bank',	'bar',	'base',	'be',	'beat',	'beautiful',	'because',	'become',	'bed',	'before',	'begin',	'behavior',	'behind',	'believe',	'benefit',	'best',	'better',	'between',	'beyond',	'big',	'bill',	'billion',	'bit',	'black',	'blood',	'blue',	'board',	'body',	'book',	'born',	'both',	'box',	'boy',	'break',	'bring',	'brother',	'budget',	'build',	'building',	'business',	'but',	'buy',	'by',	'call',	'camera',	'campaign',	'can',	'cancer',	'candidate',	'capital',	'car',	'card',	'care',	'career',	'carry',	'case',	'catch',	'cause',	'cell',	'center',	'central',	'century',	'certain',	'certainly',	'chair',	'challenge',	'chance',	'change',	'character',	'charge',	'check',	'child',	'choice',	'choose',	'church',	'citizen',	'city',	'civil',	'claim',	'class',	'clear',	'clearly',	'close',	'coach',	'cold',	'collection',	'college',	'color',	'come',	'commercial',	'common',	'community',	'company',	'compare',	'computer',	'concern',	'condition',	'conference',	'Congress',	'consider',	'consumer',	'contain',	'continue',	'control',	'cost',	'could',	'country',	'couple',	'course',	'court',	'cover',	'create',	'crime',	'cultural',	'culture',	'cup',	'current',	'customer',	'cut',	'dark',	'data',	'daughter',	'day',	'dead',	'deal',	'death',	'debate',	'decade',	'decide',	'decision',	'deep',	'defense',	'degree',	'Democrat',	'democratic',	'describe',	'design',	'despite',	'detail',	'determine',	'develop',	'development',	'die',	'difference',	'different',	'difficult',	'dinner',	'direction',	'director',	'discover',	'discuss',	'discussion',	'disease',	'do',	'doctor',	'dog',	'door',	'down',	'draw',	'dream',	'drive',	'drop',	'drug',	'during',	'each',	'early',	'east',	'easy',	'eat',	'economic',	'economy',	'edge',	'education',	'effect',	'effort',	'eight',	'either',	'election',	'else',	'employee',	'end',	'energy',	'enjoy',	'enough',	'enter',	'entire',	'environment',	'environmental',	'especially',	'establish',	'even',	'evening',	'event',	'ever',	'every',	'everybody',	'everyone',	'everything',	'evidence',	'exactly',	'example',	'executive',	'exist',	'expect',	'experience',	'expert',	'explain',	'eye',	'face',	'fact',	'factor',	'fail',	'fall',	'family',	'far',	'fast',	'father',	'fear',	'federal',	'feel',	'feeling',	'few',	'field',	'fight',	'figure',	'fill',	'film',	'final',	'finally',	'financial',	'find',	'fine',	'finger',	'finish',	'fire',	'firm',	'first',	'fish',	'five',	'floor',	'fly',	'focus',	'follow',	'food',	'foot',	'for',	'force',	'foreign',	'forget',	'form',	'former',	'forward',	'four',	'free',	'friend',	'from',	'front',	'full',	'fund',	'future',	'game',	'garden',	'gas',	'general',	'generation',	'get',	'girl',	'give',	'glass',	'go',	'goal',	'good',	'government',	'great',	'green',	'ground',	'group',	'grow',	'growth',	'guess',	'gun',	'guy',	'hair',	'half',	'hand',	'hang',	'happen',	'happy',	'hard',	'have',	'he',	'head',	'health',	'hear',	'heart',	'heat',	'heavy',	'help',	'her',	'here',	'herself',	'high',	'him',	'himself',	'his',	'history',	'hit',	'hold',	'home',	'hope',	'hospital',	'hot',	'hotel',	'hour',	'house',	'how',	'however',	'huge',	'human',	'hundred',	'husband',	'I',	'idea',	'identify',	'if',	'image',	'imagine',	'impact',	'important',	'improve',	'in',	'include',	'including',	'increase',	'indeed',	'indicate',	'individual',	'industry',	'information',	'inside',	'instead',	'institution',	'interest',	'interesting',	'international',	'interview',	'into',	'investment',	'involve',	'issue',	'it',	'item',	'its',	'itself',	'job',	'join',	'just',	'keep',	'key',	'kid',	'kill',	'kind',	'kitchen',	'know',	'knowledge',	'land',	'language',	'large',	'last',	'late',	'later',	'laugh',	'law',	'lawyer',	'lay',	'lead',	'leader',	'learn',	'least',	'leave',	'left',	'leg',	'legal',	'less',	'let',	'letter',	'level',	'lie',	'life',	'light',	'like',	'likely',	'line',	'list',	'listen',	'little',	'live',	'local',	'long',	'look',	'lose',	'loss',	'lot',	'love',	'low',	'machine',	'magazine',	'main',	'maintain',	'major',	'majority',	'make',	'man',	'manage',	'management',	'manager',	'many',	'market',	'marriage',	'material',	'matter',	'may',	'maybe',	'me',	'mean',	'measure',	'media',	'medical',	'meet',	'meeting',	'member',	'memory',	'mention',	'message',	'method',	'middle',	'might',	'military',	'million',	'mind',	'minute',	'miss',	'mission',	'model',	'modern',	'moment',	'money',	'month',	'more',	'morning',	'most',	'mother',	'mouth',	'move',	'movement',	'movie',	'Mr',	'Mrs',	'much',	'music',	'must',	'my',	'myself',	'name',	'nation',	'national',	'natural',	'nature',	'near',	'nearly',	'necessary',	'need',	'network',	'never',	'new',	'news',	'newspaper',	'next',	'nice',	'night',	'no',	'none',	'nor',	'north',	'not',	'note',	'nothing',	'notice',	'now',	'not',	'number',	'occur',	'of',	'off',	'offer',	'office',	'officer',	'official',	'often',	'oh',	'oil',	'ok',	'old',	'on',	'once',	'one',	'only',	'onto',	'open',	'operation',	'opportunity',	'option',	'or',	'order',	'organization',	'other',	'others',	'our',	'out',	'outside',	'over',	'own',	'owner',	'page',	'pain',	'painting',	'paper',	'parent',	'part',	'participant',	'particular',	'particularly',	'partner',	'party',	'pass',	'past',	'patient',	'pattern',	'pay',	'peace',	'people',	'per',	'perform',	'performance',	'perhaps',	'period',	'person',	'personal',	'phone',	'physical',	'pick',	'picture',	'piece',	'place',	'plan',	'plant',	'play',	'player',	'PM',	'point',	'police',	'policy',	'political',	'politics',	'poor',	'popular',	'population',	'position',	'positive',	'possible',	'power',	'practice',	'prepare',	'present',	'president',	'pressure',	'pretty',	'prevent',	'price',	'private',	'probably',	'problem',	'process',	'produce',	'product',	'production',	'professional',	'professor',	'program',	'project',	'property',	'protect',	'prove',	'provide',	'public',	'pull',	'purpose',	'push',	'put',	'quality',	'question',	'quickly',	'quite',	'race',	'radio',	'raise',	'range',	'rate',	'rather',	'reach',	'read',	'ready',	'real',	'reality',	'realize',	'really',	'reason',	'receive',	'recent',	'recently',	'recognize',	'record',	'red',	'reduce',	'reflect',	'region',	'relate',	'relationship',	'religious',	'remain',	'remember',	'remove',	'report',	'represent',	'Republican',	'require',	'research',	'resource',	'respond',	'response',	'responsibility',	'rest',	'result',	'return',	'reveal',	'rich',	'right',	'rise',	'risk',	'road',	'rock',	'role',	'room',	'rule',	'run',	'safe',	'same',	'save',	'say',	'scene',	'school',	'science',	'scientist',	'score',	'sea',	'season',	'seat',	'second',	'section',	'security',	'see',	'seek',	'seem',	'sell',	'send',	'senior',	'sense',	'series',	'serious',	'serve',	'service',	'set',	'seven',	'several',	'sex',	'sexual',	'shake',	'share',	'she',	'shoot',	'short',	'shot',	'should',	'shoulder',	'show',	'side',	'sign',	'significant',	'similar',	'simple',	'simply',	'since',	'sing',	'single',	'sister',	'sit',	'site',	'situation',	'six',	'size',	'skill',	'skin',	'small',	'smile',	'so',	'social',	'society',	'soldier',	'some',	'somebody',	'someone',	'something',	'sometimes',	'son',	'song',	'soon',	'sort',	'sound',	'source',	'south',	'southern',	'space',	'speak',	'special',	'specific',	'speech',	'spend',	'sport',	'spring',	'staff',	'stage',	'stand',	'standard',	'star',	'start',	'state',	'statement',	'station',	'stay',	'step',	'still',	'stock',	'stop',	'store',	'story',	'strategy',	'street',	'strong',	'structure',	'student',	'study',	'stuff',	'style',	'subject',	'success',	'successful',	'such',	'suddenly',	'suffer',	'suggest',	'summer',	'support',	'sure',	'surface',	'system',	'table',	'take',	'talk',	'task',	'tax',	'teach',	'teacher',	'team',	'technology',	'television',	'tell',	'ten',	'tend',	'term',	'test',	'than',	'thank',	'that',	'the',	'their',	'them',	'themselves',	'then',	'theory',	'there',	'these',	'they',	'thing',	'think',	'third',	'this',	'those',	'though',	'thought',	'thousand',	'threat',	'three',	'through',	'throughout',	'throw',	'thus',	'time',	'to',	'today',	'together',	'tonight',	'too',	'top',	'total',	'tough',	'toward',	'town',	'trade',	'traditional',	'training',	'travel',	'treat',	'treatment',	'tree',	'trial',	'trip',	'trouble',	'TRUE',	'truth',	'try',	'turn',	'TV',	'two',	'type',	'under',	'understand',	'unit',	'until',	'up',	'upon',	'us',	'use',	'usually',	'value',	'various',	'very',	'victim',	'view',	'violence',	'visit',	'voice',	'vote',	'wait',	'walk',	'wall',	'want',	'war',	'watch',	'water',	'way',	'we',	'weapon',	'wear',	'week',	'weight',	'well',	'west',	'western',	'what',	'whatever',	'when',	'where',	'whether',	'which',	'while',	'white',	'who',	'whole',	'whom',	'whose',	'why',	'wide',	'wife',	'will',	'win',	'wind',	'window',	'wish',	'with',	'within',	'without',	'woman',	'wonder',	'word',	'work',	'worker',	'world',	'worry',	'would',	'write',	'writer',	'wrong',	'yard',	'yeah',	'year',	'yes',	'yet',	'you',	'young',	'your',	'yourself'

]
//Initialize Variables
// 1.initialize word to dispaly
let randomWord;

// 2.Initialize time
let time = 15;

// 3.Initialize score
let score = 0;
 
// 4.Initialize difficulty
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

settingsDifficulty.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

//On page load,Focus on the text Input so user can type
text.focus();

// Start the countdown of the timer
const timeInteval = setInterval(updateTime, 1000);

// Function
// 1.Generate a word at random from wordlist
function generateRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length) ];
}

// 2.Function to add the Random word to DOM
function addWordToDOM() {
    randomWord = generateRandomWord();
    word.innerHTML = randomWord;
}

// 3.Function to update the score
function updateScore() {
    score++;
    scoreElement.innerHTML = score;
}

// 4.function to update the time
function updateTime() {
    //decrement time by 1 second
    time--;
    //Updating DOM time Element
    timeElement.innerHTML = `${time}s`;
    //check if time has expired
    if ( time === 0 ) {
        clearInterval(timeInteval);
        //End the game by showing the end game container
        gameOver();
    }
}

// 5.Function to End the game
function gameOver() {
    endGameElement.innerHTML = `
        <h1> The Clock has Run Out!</h1>
        <p>Your score is ${score}</p>
        <button onClick="window.location.reload()">Play Again</button>
    `
    endGameElement.style.display = 'flex';
}

addWordToDOM();

// Event Listners
// Event Listener ON Text INput
text.addEventListener('input', (e) => {
    // Get the value from the user input
    const typeText = e.target.value;

    // check if user input matches random word
    if (typeText === randomWord) {
        //display a new word    
        addWordToDOM();
        //update the Score
        updateScore();
        //Clear the input field
        e.target.value = ''
        // Add more time to the clock based on difficulty
        if ( diificulty === 'easy' ) {
            time += 5;
        }else if ( difficulty === 'medium') {
            time += 4
        }else {
            time += 3
        }
        updateTime();
    }
});

// 2. When clicking the settings button
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
})

// 3.When changing the difficulty setting
settingsForm.addEventListener('change', (e) =>{
    const difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})
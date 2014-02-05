/* global sharing, jobs, last, first */
var nouns = [],
    verbs = [],
    adjs  = [],
    corp, years, job, corp2, lyrics;

function articleize(str) {
  return (
      str[0] === 'a' ||
      str[0] === 'e' ||
      str[0] === 'i' ||
      str[0] === 'o' ||
      str[0] === 'u'
    ) ? 'an ' + str : 'a ' + str;
}

Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
};

String.prototype.process = function() {
  return this.replace(/CORP2/g,corp2).replace(/CORP/g,corp).replace(/YEARS/g,years).replace(/AJOB/g,articleize(job)).replace(/JOB/g,job);
};

function generate(text) {
  corp = [
    adjs.pick().titleize() + ['Corp', 'Co'].pick(),
    nouns.pick().titleize() + ['Corp', 'Co', ', Inc.'].pick(),
    adjs.pick().titleize() + ' ' + nouns.pick().titleize() + ' Studios',
    nouns.pick().titleize() + ' Productions',
    last.pick() + ', ' + last.pick() + ', & ' + last.pick()
    ].pick();

  corp2 = [
    adjs.pick().titleize() + ['Corp', 'Co'].pick(),
    nouns.pick().titleize() + ['Corp', 'Co', ', Inc.'].pick(),
    adjs.pick().titleize() + ' ' + nouns.pick().titleize() + ' Studios',
    nouns.pick().titleize() + ' Productions',
    last.pick() + '-' + last.pick()
    ].pick();

  years = Math.floor(Math.random()*3+2);

  job = jobs.pick();

  var salutation = [
    'Dear Everyone',
    'Dear Coworkers',
    'Hey all',
    'Hi',
    'Dear Colleagues',
    'To My Esteeemed Colleagues'
  ].pick();

  var opener = [
    'I\'m sorry to announce that I am leaving CORP today.',
    'I wanted to let you all know that today is my last day at CORP.',
    'I can hardly believe it, but after YEARS years at CORP, I\'ve decided it\'s time for me to move on.',
    'You might have already heard the news, but in case you haven\'t: I am leaving my position as JOB here at CORP.',
    'As you may have already heard, I\'ve handed in my resignation after YEARS years at CORP.',
    'Next Friday is going to be my last day working at CORP.',
    'After YEARS exciting years at CORP, it\'s time to bid you all adieu.',
    'It\'s with a mixture of sadness and excitement that I have to announce that next Friday will be my last day as AJOB at CORP.',
    'I\'m not very good at this kind of stuff so I guess I\'ll get right to the point.',
    'I never know how to write this kind of thing, but here goes: today is my last day at CORP.',
    'It\'s probably time I informed you that Friday will be my last day at CORP.'
  ].pick().process();

  var reason = [
    'I\'ve taken a new job at CORP2, and I\'m really excited about the opportunities I will have to grow there and apply all the lessons I\'ve learned at CORP.',
    'After a great deal of consideration and not a small amount of agony, I\'ve decided to accept a job offer from CORP2, where I will be their senior JOB.',
    'I\'ve decided to take the next step of my career at CORP2.',
    'Due to family obligations, I need to move across the country. Fortunately, CORP2 had a position open for AJOB and I\'ll be starting there soon.',
    'CORP2 has offered me a senior JOB position, and I\'m sorry to say that I need to move on in order to advance my career.'
  ].pick().process();

  var enjoyment = [
    'I have greatly enjoyed my tenure as AJOB here.',
    'Being AJOB here is truly the best job I\'ve ever had, but as much as it pains me to leave, I\'ve got to move onward and upward.',
    'Working with each and every one of you has been one of the best experiences of my life.',
    'During these last YEARS years you\'ve taught me everything there is to know about being AJOB.',
    'I\'ve grown both personally and professionally here and I couldn\'t have done it without your support.',
    'I had an incredible time here, especially with those of you I\'ve mentored.'
  ].pick().process();
         
  var enjoyment2 = [
    'I couldn\'t have asked for a better group of colleagues and friends.',
    'We\'ve had some amazing times together over the years and I\'ve grown so much as a result of spending time with of all you.',
    'The CORP team is the best group of coworkers a person could hope to have.',
    'I value our friendships and our working relationships more than I can say.',
    'I know there will be many moments at my new job when I look back on what I\'ve learned here and smile.'
  ].pick().process();

  var miss = [
    'Even though I\'m looking forward to the next phase of my career, I\'ll miss seeing you all every day.',
    'It\'s been so great working with you. I can\'t imagine a better group of coworkers.',
    'I\'ll especially miss the yearly CORP retreats, which were such a good time. You all are a blast to be around.',
    'This feels a little bit more like leaving a family than leaving a job.',
    'I wish you all the greatest success in the future.',
    'I have complete faith that CORP has amazing things in store for the future, and I can\'t wait to see what lies next for you all!'
  ].pick().process();

  var remember = [
    'Remember the ' + [1, 3, 5].pick() + '-legged races at the annual CORP picnics?',
    'Remember how we used to cover people\'s desks with ' + nouns.pick().pluralize() + ' while they were on vacation?',
    'Remember when we worked on Project ' + nouns.pick().titleize() + '?',
    'I\'ll never forget the great April Fool\'s pranks we played every year.',
    'I\'ll never forget when I started here, YEARS years ago (has it been that long???) and the very first person to greet me at the door was none other than ' + first.pick() + ' ' + last.pick() + '! Can you believe it?',
    'Back when I started here YEARS years ago, we were a much smaller company and I had no idea we\'d get so big so soon.',
    'I remember I started here on Halloween YEARS years back. The whole place was decorated and everyone was dressed in costumes. I thought you were a bunch of nuts!',
    'Bagel Friday was always special to me.'
  ].pick().process();

  var goodtimes = [
    'Great times.',
    'Those were good times.',
    'I\'ll cherish those memories.',
    'What a total blast.',
    'I bet they don\'t make them like you all at CORP2!',
    'Those were the days, eh?'
  ].pick().process();

  var stayintouch = [
    'Please, don\'t be strangers. Stay in touch.',
    'I\'d love to remain in touch with every one of you, so please feel free to drop me a line at my personal email address.',
    'I look forward to keeping in touch with you all.',
    'This isn\'t "goodbye"&mdash;it\'s "see you later."',
    'Please make sure to connect with me on LinkedIn so we don\'t lose touch.',
    'I have always valued your professional input and I would like to stay in touch with each and every one of you.',
    'It would mean a lot to me if you stayed in touch.',
    'To ' + first.pick() + ' and ' + first.pick() + ' -- I\'m happy to continue to provide career advice. Anyone is welcome to find me on LinkedIn or Facebook and stay in touch!'
  ].pick().process();

  var lyric = lyrics.pick();

  var song = 'I guess ' + ['this quote', 'this bit', 'my favorite lyric', 'this gem'].pick() + ' from ' + lyric.artist.name + '\'s classic song "' + lyric.title + '" really sums it up:<blockquote>' +
             lyric.snippet.replace(/\n.*\.\.\./,'').replace(/\n/g,'<br>') + '</blockquote>';

  var ps = [
    'I was the one who kept not refilling the copier ink.',
    'Those dirty dishes in the kitchen? They were MINE.',
    'I know who "The Bathroom Bomber" is and I\'m not telling ;)',
    first.pick() + ': you can seriously just go to hell.',
    'Consider investing in a real coffee maker. The one here sucks.',
    first.pick() + ', you still owe me a drink for that thing, okay?',
    'I was lying about all of this. Sayonara, suckers.',
    'Whoever kept taking my lunches like once a week: don\'t think you\'re off the hook. You will pay.',
    'Drinks tonight at ' + first.pick() + '\'s!',
    'When you kill the water cooler tank, you refill it. It\'s not rocket science, people.',
    'Save me a spot at Wednesday taco buffet lunches!'
  ].pick().process();

  var sig = [
    'Sincerely',
    'Best',
    'Best regards',
    'Best wishes',
    'So long, but not goodbye',
    'Goodbye',
    'Farewell',
    'Warmest regards'
  ].pick().process();

  // Text of the letter
  var generatedText = text || salutation + ',<p>' +
    opener + ' ' + reason + '<p>' +
    enjoyment + ' ' + enjoyment2 + ' ' + miss + '<p>' +
    ((Math.random() < 0.3) ? (remember + ' ' + goodtimes + '<p>') : '') +
    stayintouch + '<p>' +
    ((Math.random() < 0.3) ? (song + '<p>') : '') +
    sig + ',<br>' +
    first.pick() + ' ' + last.pick() + '<p>' +
    ((Math.random() < 0.3) ? ('P.S. ' + ps) : '');

  var sharedText = 'Farewell Letter Generator: ' + generatedText.substr(0,90).replace(/<p>/g,' ').replace(/^.+?, /,'').replace(/\s\w+$/,'') + '...';
  $('#content').html(generatedText);
  var shareUrl = window.location.href.split('?')[0]+'?word='+sharing.encodeStr(generatedText);
  $('#share').attr('href', shareUrl);
  $('.twitter-share-button').remove();
  $('#twitterShare').html('<a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-hashtags="farewellLetter" data-url="' + shareUrl + '" data-text="' + sharedText + '" data-lang="en">Tweet</a>');
  if (twttr.widgets) {
    twttr.widgets.load();
  }
}

function getWords(suppressGenerate, text) {
  $.when(
    $.ajax({
      url: 'http://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=10000&minDictionaryCount=5&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&hasDictionaryDef=true&includePartOfSpeech=noun&limit=1000&maxLength=22&api_key='+key.API_KEY,
      async: false,
      dataType:'json'
    }),
    $.ajax({
      url: 'http://api.wordnik.com/v4/words.json/randomWords?minCorpusCount=80000&minDictionaryCount=5&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&hasDictionaryDef=true&includePartOfSpeech=adjective&limit=1000&maxLength=5&api_key='+key.API_KEY,
      async: false,
      dataType:'json'
    }),
    $.ajax({
      url: 'http://api.wordnik.com//v4/words.json/randomWords?limit=1000&excludePartOfSpeech=adjective&hasDictionaryDef=true&includePartOfSpeech=verb-transitive&minCorpusCount=1000&api_key='+key.API_KEY,
      async: false,
      dataType:'json'
    }),
    $.ajax({
      url: 'http://api.lyricsnmusic.com/songs?api_key=' + key.LYRICS + '&q=' + ['anger', 'sadness', 'future', 'memories', 'love', 'youth', 'age', 'breakup', 'family'].pick() + '&callback=',
      async: false,
      dataType: 'jsonp'
    })
  ).done(function(noun_data, adj_data, verb_data, lyrics_data) {
    lyrics = lyrics_data[0].data;
    nouns = $.map(noun_data[0], function(el) { return el.word; });
    adjs  = $.map( adj_data[0], function(el) { return el.word; });
    verbs = $.map(verb_data[0], function(el) { return el.word; });
    if (!suppressGenerate) {
      generate();
    }
    else {
      generate(text);
    }
  });
}

$('#generate').click(function() { generate(); });
if (sharing.gup('word') === '') {
  getWords();
}
else {
  var text = sharing.decodeStr(unescape(sharing.gup('word')));
  getWords(true, text);
}

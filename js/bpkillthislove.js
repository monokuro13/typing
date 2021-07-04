var p = document.getElementById('text');
var textLists = [   
  "ㅊㅓㄴㅅㅏ ㄱㅏㅌㅇㅡㄴ ㄲㅡㅌㅇㅔㄴ ㅇㅏㄱㅁㅏ ㄱㅏㅌㅇㅡㄴ",
  "ㅁㅐㅂㅓㄴ ㅁㅣㅊㅣㄹㄷㅡㅅㅎㅏㄴ ㄷㅜㅣㅇㅔㄴ ㅂㅐㅌㅇㅓㅇㅑㅎㅏㄴㅡㄴ",
  "ㅇㅣㄱㅓㄴ ㄷㅏㅂㅇㅣ ㅇㅓㅂㅅㄴㅡㄴ ㅁㅐㅂㅓㄴ ㅅㅗㄱㄷㅓㄹㅏㄷㅗ",
  "ㄸㅏㄱㅎㅏㄴ ㄱㅏㅁㅈㅓㅇㅇㅡㅣ ㄴㅗㅇㅖ",
  "ㅇㅓㄹㅇㅓ ㅈㅜㄱㅇㅡㄹ ㅅㅏㄹㅏㅇㅎㅐ",
  " ",
  "ㄱㅏㅈㅏㅇ ㄷㅗㄱㅎㅏㄴ ㄱㅓㄹㄹㅗ ㅈㅜㅓ",
  "ㅃㅓㄴㅎㅏㄷㅣ ㅃㅓㄴㅎㅏㄴ ㄱㅡ",
  "ㄷㅓ ㄴㅐㄴㅗㅏㅂㅗㅏ",
  "ㅇㅏㄹㅇㅏㅅㅓ ㅁㅐㄷㅏㄹㄹㅕ ㅂㅕㄹㅏㅇ ㄲㅡㅌㅇㅔ",
  "ㅎㅏㄴㅁㅏㄷㅣㅁㅕㄴ ㄸㅗ ㅎㅔㅂㅓㄹㄹㅔ ㅎㅐ",
  "ㄱㅡ ㄸㅏㄸㅡㅅㅎㅏㄴ ㄸㅓㄹㄹㅣㅁㅇㅣ ㅅㅐㅃㅏㄹㄱㅏㄴ ㅅㅓㄹㄹㅔㅁㅇㅣ",
  "ㅁㅏㅊㅣ ㄱㅏㅌㄱㅔㅆㅈㅣㅁㅏㄴ",
  " ",
  " ",
  "ㄴㅜㄱㅏ ㄷㅓ ㅇㅏㅍㅡㄹㄲㅏ?",
  "ㄴㅜㄱㅏ?",
  "ㄷㅜ ㄴㅜㄴㅇㅔ ㅍㅣㄴㅜㄴㅁㅜㄹ ㅎㅡㄹㅡㄱㅔ ㄷㅗㅣㄴㄷㅏㅁㅕㄴ",
  "ㄴㅜㄱㅏ?",
  "ㄴㅏ ㅇㅓㄸㅓㄱㅎㅐ ㄴㅏㅇㅑㄱㅎㅏㄴ ㄴㅏㄹ ㄱㅕㄴㄷㅣㄹ ㅅㅜ ㅇㅓㅂㅅㅇㅓ",
  "ㅇㅐㅆㅓ ㄷㅜ ㄴㅜㄴㅇㅡㄹ ㄱㅏㄹㅣㄴ ㅊㅐ",
  "ㅅㅏㄹㅏㅇㅇㅡㅣ ㅅㅜㅁㅌㅗㅇㅇㅡㄹ ㄲㅡㄴㅎㅇㅓㅇㅑㄱㅔㅆㅇㅓ",
  " ",
  " ",
  " ",
  "I ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "ㄱㅕㄹㄱㅜㄱㅇㅔㄴ ㄱㅓㅈㅣㅅㅁㅏㄹ",
  " ",
  "ㅁㅏㄴㅇㅑㄱㅇㅔ ㄴㅐㄱㅏ ㄴㅓㄹ ㅈㅣㅇㅜㄱㅔ",
  "ㄷㅗㅣㄴㄷㅏㅁㅕㄴ",
  " ",
  "ㄴㅏ ㅇㅓㄸㅓㄱㅎㅐ ㄴㅏㅇㅑㄱㅎㅏㄴ ㄴㅏㄹ ㄱㅕㄴㄷㅣㄹ ㅅㅜ ㅇㅓㅂㅅ어",
  "ㅇㅐㅆㅓ ㄴㅜㄴㅁㅜㄹㅇㅡㄹ ㄱㅏㅁㅊㅜㄴ ㅊㅐ",
  "ㅅㅏㄹㅏㅇㅇㅡㅣ ㅅㅜㅁㅌㅗㅇㅇㅡㄹ ㄲㅡㄴㅎㅇㅓㅇㅑㄱㅔㅆㅇㅓ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " "
  // "ㅊㅓㄴㅅㅏ ㄱㅏㅌㅇㅡㄴ Hi ㄲㅡㅌㅇㅔㄴ ㅇㅏㄱㅁㅏ ㄱㅏㅌㅇㅡㄴ Bye",
  // "ㅁㅐㅂㅓㄴ ㅁㅣㅊㅣㄹㄷㅡㅅㅎㅏㄴ High ㄷㅜㅣㅇㅔㄴ ㅂㅐㅌㅇㅓㅇㅑㅎㅏㄴㅡㄴ Price",
  // "ㅇㅣㄱㅓㄴ ㄷㅏㅂㅇㅣ ㅇㅓㅂㅅㄴㅡㄴ Test ㅁㅐㅂㅓㄴ ㅅㅗㄱㄷㅓㄹㅏㄷㅗ Yes",
  // "ㄸㅏㄱㅎㅏㄴ ㄱㅏㅁㅈㅓㅇㅇㅡㅣ ㄴㅗㅇㅖ",
  // "ㅇㅓㄹㅇㅓ ㅈㅜㄱㅇㅡㄹ ㅅㅏㄹㅏㅇㅎㅐ",
  // "Here I come kick in the door",
  // "ㄱㅏㅈㅏㅇ ㄷㅗㄱㅎㅏㄴ ㄱㅓㄹㄹㅗ ㅈㅜㅓ",
  // "ㅃㅓㄴㅎㅏㄷㅣ ㅃㅓㄴㅎㅏㄴ ㄱㅡ love",
  // "ㄷㅓ ㄴㅐㄴㅗㅏㅂㅗㅏ give me some more",
  // "ㅇㅏㄹㅇㅏㅅㅓ ㅁㅐㄷㅏㄹㄹㅕ ㅂㅕㄹㅏㅇ ㄲㅡㅌㅇㅔ",
  // "ㅎㅏㄴㅁㅏㄷㅣㅁㅕㄴ ㄸㅗ like ㅎㅔㅂㅓㄹㄹㅔ ㅎㅐ",
  // "ㄱㅡ ㄸㅏㄸㅡㅅㅎㅏㄴ ㄸㅓㄹㄹㅣㅁㅇㅣ ㅅㅐㅃㅏㄹㄱㅏㄴ ㅅㅓㄹㄹㅔㅁㅇㅣ",
  // "ㅁㅏㅊㅣ heaven ㄱㅏㅌㄱㅔㅆㅈㅣㅁㅏㄴ",
  // "you might not get in it",
  // "Look at me Look at you",
  // "ㄴㅜㄱㅏ ㄷㅓ ㅇㅏㅍㅡㄹㄲㅏ?",
  // "You smart ㄴㅜㄱㅏ? You are",
  // "ㄷㅜ ㄴㅜㄴㅇㅔ ㅍㅣㄴㅜㄴㅁㅜㄹ ㅎㅡㄹㅡㄱㅔ ㄷㅗㅣㄴㄷㅏㅁㅕㄴ",
  // "So sorry ㄴㅜㄱㅏ? You are",
  // "ㄴㅏ ㅇㅓㄸㅓㄱㅎㅐ ㄴㅏㅇㅑㄱㅎㅏㄴ ㄴㅏㄹ ㄱㅕㄴㄷㅣㄹ ㅅㅜ ㅇㅓㅂㅅㅇㅓ",
  // "ㅇㅐㅆㅓ ㄷㅜ ㄴㅜㄴㅇㅡㄹ ㄱㅏㄹㅣㄴ ㅊㅐ",
  // "ㅅㅏㄹㅏㅇㅇㅡㅣ ㅅㅜㅁㅌㅗㅇㅇㅡㄹ ㄲㅡㄴㅎㅇㅓㅇㅑㄱㅔㅆㅇㅓ",
  // "LET'S KILL THIS LOVE",
  // "LET'S KILL THIS LOVE",
  // "Feelin' like a sinner",
  // "Its so fire with him I go boo hoo",
  // "He said you look crazy",
  // "Thank you baby",
  // "I owe it all to you",
  // "Got me all messed up",
  // "His love is my favorite",
  // "But you plus me sadly can be dangerous",
  // "Lucky me Lucky you",
  // "ㄱㅕㄹㄱㅜㄱㅇㅔㄴ ㄱㅓㅈㅣㅅㅁㅏㄹ we lie",
  // "So what so what",
  // "ㅁㅏㄴㅇㅑㄱㅇㅔ ㄴㅐㄱㅏ ㄴㅓㄹ ㅈㅣㅇㅜㄱㅔ",
  // "ㄷㅗㅣㄴㄷㅏㅁㅕㄴ So sorry",
  // "I'm not sorry",
  // "ㄴㅏ ㅇㅓㄸㅓㄱㅎㅐ ㄴㅏㅇㅑㄱㅎㅏㄴ ㄴㅏㄹ ㄱㅕㄴㄷㅣㄹ ㅅㅜ ㅇㅓㅂㅅ어",
  // "ㅇㅐㅆㅓ ㄴㅜㄴㅁㅜㄹㅇㅡㄹ ㄱㅏㅁㅊㅜㄴ ㅊㅐ",
  // "ㅅㅏㄹㅏㅇㅇㅡㅣ ㅅㅜㅁㅌㅗㅇㅇㅡㄹ ㄲㅡㄴㅎㅇㅓㅇㅑㄱㅔㅆㅇㅓ",
  // "LET'S KILL THIS LOVE",
  // "LET'S KILL THIS LOVE",
  // "We all commit to love",
  // "That makes you cry",
  // "We're all making love",
  // "That kills you inside",
  // "We must kill this love",
  // "Yeah it's sad but true",
  // "Gotta kill this love",
  // "Before it kills you too",
  // "Kill this love",
  // "Yeah it's sad but true",
  // "Gotta kill this love",
  // "Gotta kill let's kill this love"
]

var t = document.getElementById('korean');
var koreanTexts = [
  "천사 같은 Hi 끝엔 악마 같은 Bye",
  "매번 미칠듯한 High 뒤엔 뱉어야 하는 Price",
  "이건 답이 없는 Test 매번 속더라도 Yes",
  "딱한 감정의 노예",
  "얼어 죽을 사랑해",
  "Here I come kick in the door",
  "가장 독한 걸로 줘",
  "뻔하디 뻔한 그 love",
  "더 내놔봐 give me some more",
  "알아서 매달려 벼랑 끝에",
  "한마디면 또 like 헤벌레 해",
  "그 따뜻한 떨림이 새빨간 설렘이",
  "마치 heaven 같겠지만",
  "you might not get in it",
  "Look at me Look at you",
  "누가 더 아플까?",
  "You smart 누가? You are",
  "두 눈에 피눈물 흐르게 된다면",
  "So sorry 누가? You are",
  "나 어떡해 나약한 날 견딜 수 없어",
  "애써 두 눈을 가린 채",
  "사랑의 숨통을 끊어야겠어",
  "LET'S KILL THIS LOVE",
  "LET'S KILL THIS LOVE",
  "Feelin' like a sinner",
  "Its so fire with him I go boo hoo",
  "He said you look crazy",
  "Thank you baby",
  "I owe it all to you",
  "Got me all messed up",
  "His love is my favorite",
  "But you plus me sadly can be dangerous",
  "Lucky me Lucky you",
  "결국엔 거짓말 we lie",
  "So what so what",
  "만약에 내가 널 지우게",
  "된다면 So sorry",
  "I'm not sorry",
  "나 어떡해 나약한 날 견딜 수 없어",
  "애써 눈물을 감춘 채",
  "사랑의 숨통을 끊어야겠어",
  "LET'S KILL THIS LOVE",
  "LET'S KILL THIS LOVE",
  "We all commit to love",
  "That makes you cry",
  "We're all making love",
  "That kills you inside",
  "We must kill this love",
  "Yeah it's sad but true",
  "Gotta kill this love",
  "Before it kills you too",
  "Kill this love",
  "Yeah it's sad but true",
  "Gotta kill this love",
  "Gotta kill let's kill this love"
 ]

 var checkTexts = [];
var readytime = 3;
var score;
var correct;
var mistake;
var char_num = 0;
var word_char;
var random;
var startTime;
var elapsedTime = 0;
var timerId;
var timeToadd = 0;
var timer = document.getElementById('count');
var endpoint = 0;

function ready(){
  endpoint = 0;
  readytime = 3;
  scoredis.innerHTML="";
  count.innerHTML = "";
  start_button.style.visibility ="hidden";
  var readytimer = setInterval(function(){
    count.innerHTML=readytime;
    readytime--;
    if(readytime < 0){
      clearInterval(readytimer);
      gameStart();
    }
  },1000);
}

function updateTimetText(){
  var m = Math.floor(elapsedTime / 60000);
  var s = Math.floor(elapsedTime % 60000 / 1000);
  var ms = elapsedTime % 1000;
  m = ('0' + m).slice(-2); 
  s = ('0' + s).slice(-2);
  ms = ('0' + ms).slice(-3);
  count.textContent = m + ':' + s + ':' + ms;
}

function gameStart(){
  score = 0.0;
  mistake = 0;
  correct = 0;
  createText();
  var gametimer = setInterval(function(){
    'use strict';
    
    startTime = Date.now();
    countUp();
    
    function countUp(){
      timerId = setTimeout(function(){
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimetText()
        countUp();
        if (endpoint == 1) {
          clearTimeout(timerId);
        }
      },10);
    }
    
  }());
}



      
var k = 0;
var n = 0;
function createText(){
p.textContent='';
checkTexts = textLists[k].split('').map(function(value) {
  var span = document.createElement('span');
  span.textContent = value;
  p.appendChild(span);

  return span
});
korean.textContent = koreanTexts[k];
charInsort();
}

function charInsort(){
  word_char = textLists[k].charAt(char_num);
  // console.log(word_char);
}


function finish(){
    score = Math.floor(Math.pow(correct,2) * Math.pow((correct/(correct+mistake)),5));
    scoredis.innerHTML="スコア:"+score+"点"+"<hr>正タイプ数:"+correct+"<br>ミスタイプ数:"+mistake+"<br>正答率"+(correct/(correct+mistake)*100).toFixed(1)+"%";
    count.innerHTML="";
    text.innerHTML="";
    korean.innerHTML="";
    start_button.style.visibility ="visible";
    word_char=0;
    random = 0;
    char_num = 0;
    k = 0;
    n = 0;
    endpoint = 1;
    
}

function KeyEvent(evt){ 
  
  var key_num = evt.charCode;
  var keyStr = String.fromCharCode(key_num);
  
  console.log(keyStr);
  // console.log(checkTexts[0].textContent);
  console.log(checkTexts[0].textContent);

  if(keyStr === checkTexts[0].textContent) {
    checkTexts[0].className = 'add-blue';
    char_num++;
    correct++;
    charInsort();

   
    checkTexts.shift();

    if(!checkTexts.length) createText();

  }else {
    mistake++;
  }

  if(char_num == textLists[k].length){
    char_num=0;
    k++;
    n++;
    if (n == textLists.length) {
      finish();
    }else {
      createText();
    }
  }
}
document.onkeypress = KeyEvent;
self.focus();
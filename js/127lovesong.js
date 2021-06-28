var p = document.getElementById('text');
var textLists = [
  "ㄴㅓㄹㅡㄹ ㅎㅑㅇㅎㅐ ㄱㅣㅇㅜㄴ ㅇㅜㅅㅏㄴㅇㅣ",
  "ㅇㅣㄹㅓㅎㄱㅔ ㄸㅐㅁㅏㅊㅣㅁ",
  "ㅊㅏㅁ ㅈㅏㄱㅇㅏㅅㅓ ㄷㅏㅎㅐㅇㅇㅣㅇㅑ",
  // "hoo ㅇㅣㄹㅓㄴ ㄱㅓㄴ",
  // "ㅇㅖㅅㅏㅇㅎㅏㅈㅣ ㅁㅗㅅㅎㅏㄴ ㅅㅏㅇㅎㅗㅏㅇㅇㅣㅇㅑ",
  // "ㅇㅓㄲㅐㄱㅏ ㄷㅏㅎㅇㅡㄴ ㅇㅣ ㅅㅜㄴㄱㅏㄴ",
  // "ㅇㅓㄷㅣ ㄷㅡㄹㅇㅓㄱㅏㄹ ㄷㅔㄹ ㅊㅏㅈㅈㅏ",
  // "ㅁㅏㄹㅎㅏㅁㅕㄴㅅㅓㄷㅗ ㄴㅐ ㄱㅓㄹㅇㅡㅁㅇㅡㄴ",
  // "ㅈㅏㄲㅜㅁㅏㄴ ㅎㅏㅇㅕㅁㅇㅓㅂㅅㅇㅣ ㄴㅡㄹㅕㅈㅕ",
  // "I can't stop I can't stop this feeling",
  // "ㄴㅓㅇㅡㅣ ㅅㅜㅁㅅㅗㄹㅣㄷㅗ ㄷㅡㄹㄹㅕ",
  // "ㅇㅣㄹㅓㅎㄱㅔ ㄱㅏㄲㅏㅇㅜㄴㅣㄲㅏ",
  // "ㅇㅣㄷㅐㄹㅗ ㅌㅜㅁㅕㅇㅎㅐㅈㅣㄴ ㅊㅐ",
  // "ㅅㅣㄱㅏㄴㅇㅣ ㅁㅓㅁㅊㅜㅓㅆㅇㅡㅁㅕㄴ ㅎㅐ yeah",
  // "ㅂㅣㄴㅡㄴ ㅈㅣㄹㅅㅐㄱㅇㅣㄴㄷㅔ",
  // "ㅇㅗㄴㅡㄹ ㅈㅗㅁ ㅈㅗㅎㅇㅏㅈㅣㄹㅕ ㅎㅐ",
  // "ㅇㅏㄴㅣ ㅇㅏㅈㅣㄱ ㄱㅡㅊㅣㄹ ㅅㅐㅇㄱㅏㄱㅇㅡㄴ ㅁㅏㄹㄱㅗ",
  // "ㅇㅗㅣㄴㅉㅗㄱ ㅇㅓㄲㅐㄴㅡㄴ ㅎㅡㅁㅃㅓㄱ ㅈㅓㄱㅅㅕ ㄴㅗㅏㄷㅗ ㄷㅗㅐ",
  // "ㅂㅣㅅㅅㅗㄱㅇㅡㅣ love song",
  // "love song love song yeah",
  // "ㄷㅜㄹㅁㅏㄴㅇㅡㅣ ㅅㅓㅁㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㅇㅓ ooh",
  // "ㅇㅣㄹㅓㅎㄱㅔ love this love this love this rain",
  // "ㄸㅓㄹㅇㅓㅈㅣㄴㅡㄴ ㅂㅣㅅㅅㅗㄱㅇㅔ all day",
  // "ㅇㅗㄴㅡㄹㄸㅏㄹㅏ ㄷㅓ ㅇㅣㄱㅅㅜㄱㅎㅏㄴ ㄱㅓㄹㅣㄷㅗ ㅎㅔㅁㅐㄱㅗ ㅅㅣㅍㅇㅓ ㄴㅏㄴ",
  // "ooh ㅈㅓㅂㅓㄴ ㄱㅡ ㅇㅖㅃㅡㄴ ㅋㅏㅍㅔㄱㅏ ㅇㅓㄷㅣ ㄷㅓㄹㅏ",
  // "ㅈㅏㄹ ㄱㅣㅇㅓㄱㄴㅏㅈㅣ ㅇㅏㄴㅎㅇㅏ",
  // "ㄴㅓㅇㅡㅣ ㄴㅜㄴㅇㅔ ㄴㅐㄱㅏ ㅂㅣㅊㅕ",
  // "ㅇㅣㄹㅓㅎㄱㅔ ㄱㅏㄲㅏㅇㅜㄴㅣㄲㅏ",
  // "ㄴㅏㄹ ㅂㅗㅁㅕ ㅇㅜㅅㅇㅡㅁ ㅈㅣㅇㅡㄹ ㄸㅐㄴ",
  // "ㅅㅣㅁㅈㅏㅇㅇㅣ ㅁㅓㅈㅇㅡㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ yeah",
  // "ㅂㅣㄴㅡㄴ ㅈㅣㄹㅅㅐㄱㅇㅣㄴㄷㅔ",
  // "ㅇㅗㄴㅡㄹ ㅈㅗㅁ ㅈㅗㅎㅇㅏㅈㅣㄹㅕ ㅎㅐ",
  // "ㅇㅏㄴㅣ ㅇㅏㅈㅣㄱ ㄱㅡㅊㅣㄹ ㅅㅐㅇㄱㅏㄱㅇㅡㄴ ㅁㅏㄹㄱㅗ",
  // "ㅇㅗㅣㄴㅉㅗㄱ ㅇㅓㄲㅐㄴㅡㄴ ㅎㅡㅁㅃㅓㄱ ㅈㅓㄱㅅㅕ ㄴㅗㅏㄷㅗ ㄷㅗㅐ",
  // "ㅂㅣㅅㅅㅗㄱㅇㅡㅣ love song",
  // "love song love song yeah",
  // "ㄷㅜㄹㅁㅏㄴㅇㅡㅣ ㅅㅓㅁㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㅇㅓ ooh",
  // "ㅇㅣㄹㅓㅎㄱㅔ love this love this love this rain",
  // "ㄸㅓㄹㅇㅓㅈㅣㄴㅡㄴ ㅂㅣㅅㅅㅗㄱㅇㅔ all day",
  // "in this place",
  // "just you and me",
  // "outside all blurry",
  // "my focus clear as day 2.0 2.0",
  // "warm and cozy",
  // "covering us from all the crazy",
  // "rain don't stop ㅂㅣ ㄴㅐㄹㅕㅇㅗㅏ",
  // "ㄷㅜㄹㅇㅣㅅㅓ 1ㅇㅣㄴㅇㅛㅇ umbrella ㅇㅏㄹㅐ",
  // "ㄴㅐ ㅎㅏㄹㅜㄴㅡㄴ so bright",
  // "ㄸㅓㅇㅗㄹㄹㅏ ㄴㅓㄴ ㅈㅣㅈㅣ ㅇㅏㄴㅎㄴㅡㄴ ㄴㅏㅇㅡㅣ ㅂㅣㅊ",
  // "doo-doo-doo rain drop",
  // "hop out my foreign car",
  // "ㅎㅡㅁㅃㅓㄱ ㅈㅓㅈㅇㅡㄴ ㅇㅣ ㅇㅏㅅㅡㅍㅏㄹㅌㅡ ㅇㅜㅣㅇㅔㄴㅡㄴ",
  // "ㅎㅏㄴㅍㅕㄴㅇㅡㅣ sceneㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㅇㅓㄴㅐㅈㅣ",
  // "ㅇㅓㄴㅡㅅㅐ ㅇㅕㄱㅣ ㄴㅐ ㅇㅏㄴㅇㅔ ㄴㅔㄱㅏ ㄱㅕㅂㅊㅕㅇㅗㅏ",
  // "ㄴㅐ ㅁㅏㅁㅅㅗㄱㅇㅔ ㄴㅓㄴㅡㄴ ㅈㅓ ㅊㅗㄱㅊㅗㄱㅎㅏㄴ ㅂㅣㅊㅓㄹㅓㅁ",
  // "ㅅㅡㅁㅕㄷㅡㄹㅇㅓㅇㅗㅏ",
  // "ㅂㅣㄴㅡㄴ ㅈㅣㄹㅅㅐㄱㅇㅣㄴㄷㅔ",
  // "ㅇㅗㄴㅡㄹ ㅈㅗㅁ ㅈㅗㅎㅇㅏㅈㅣㄹㅕ ㅎㅐ",
  // "ㅇㅏㄴㅣ ㅇㅏㅈㅣㄱ ㄱㅡㅊㅣㄹ ㅅㅐㅇㄱㅏㄱㅇㅡㄴ ㅁㅏㄹㄱㅗ",
  // "ㅇㅗㅣㄴㅉㅗㄱ ㅇㅓㄲㅐㄴㅡㄴ ㅎㅡㅁㅃㅓㄱ ㅈㅓㄱㅅㅕ ㄴㅗㅏㄷㅗ ㄷㅗㅐ",
  // "ㅂㅣㅅㅅㅗㄱㅇㅡㅣ love song",
  // "love song love song yeah",
  // "ㄷㅜㄹㅁㅏㄴㅇㅡㅣ ㅅㅓㅁㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㅇㅓ ooh",
  // "ㅇㅣㄹㅓㅎㄱㅔ love this love this love this rain",
  // "ㄸㅓㄹㅇㅓㅈㅣㄴㅡㄴ ㅂㅣㅅㅅㅗㄱㅇㅔ all day",
];

var t = document.getElementById('korean');
 var koreanTexts = [
  "너를 향해 기운 우산이",
  "이렇게 때마침",
  "참 작아서 다행이야",
  // "hoo 이런 건",
  // "예상하지 못한 상황이야",
  // "어깨가 닿은 이 순간",
  // "어디 들어갈 델 찾자",
  // "말하면서도 내 걸음은",
  // "자꾸만 하염없이 느려져",
  // "I can't stop I can't stop this feeling",
  // "너의 숨소리도 들려",
  // "이렇게 가까우니까",
  // "이대로 투명해진 채",
  // "시간이 멈췄으면 해 yeah",
  // "비는 질색인데",
  // "오늘 좀 좋아지려 해",
  // "아니 아직 그칠 생각은 말고",
  // "왼쪽 어깨는 흠뻑 적셔 놔도 돼",
  // "빗속의 love song",
  // "love song love song yeah",
  // "둘만의 섬을 만들어 ooh",
  // "이렇게 love this love this love this rain",
  // "떨어지는 빗속에 all day",
  // "오늘따라 더 익숙한 거리도 헤매고 싶어 난",
  // "ooh 저번 그 예쁜 카페가 어디 더라",
  // "잘 기억나지 않아",
  // "너의 눈에 내가 비쳐",
  // "이렇게 가까우니까",
  // "날 보며 웃음 지을 땐",
  // "심장이 멎을 것 같아 yeah",
  // "비는 질색인데",
  // "오늘 좀 좋아지려 해",
  // "아니 아직 그칠 생각은 말고",
  // "왼쪽 어깨는 흠뻑 적셔 놔도 돼",
  // "빗속의 love song",
  // "love song love song yeah",
  // "둘만의 섬을 만들어 ooh",
  // "이렇게 love this love this love this rain",
  // "떨어지는 빗속에 all day",
  // "in this place",
  // "just you and me",
  // "outside all blurry",
  // "my focus clear as day 2.0 2.0",
  // "warm and cozy",
  // "covering us from all the crazy",
  // "rain don't stop 비 내려와",
  // "둘이서 1인용 umbrella 아래",
  // "내 하루는 so bright",
  // "떠올라 넌 지지 않는 나의 빛",
  // "doo-doo-doo- rain drop",
  // "hop out my foreign car",
  // "흠뻑 젖은 이 아스팔트 위에는",
  // "한편의 scene을 만들어내지",
  // "어느새 여기 내 안에 네가 겹쳐와",
  // "내 맘속에 너는 저 촉촉한 비처럼",
  // "스며들어와",
  // "비는 질색인데",
  // "오늘 좀 좋아지려 해",
  // "아니 아직 그칠 생각은 말고",
  // "왼쪽 어깨는 흠뻑 적셔 놔도 돼",
  // "빗속의 love song",
  // "love song love song yeah",
  // "둘만의 섬을 만들어 ooh",
  // "이렇게 love this love this love this rain",
  // "떨어지는 빗속에 all day"
 ];
var checkTexts = [];
// var time_limit = 600;
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

function ready(){
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
  // var time_remaining = time_limit;
  // var gametimer = setInterval(function(){
  //   count.innerHTML="残り時間："+time_remaining;
  //     time_remaining--;
  //     if(time_remaining <= 0){
    //     clearInterval(gametimer);
    //         finish();
    // }
    // },1000);
  var gametimer = setInterval(function(){
    'use strict';
    // var start = document.getElementById('start_button');
    
    startTime = Date.now();
    countUp();
    
    
    
    function countUp(){
      timerId = setTimeout(function(){
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimetText()
        countUp();
        if (n == textLists.length) {
          clearTimeout(timerId);
          timeToadd += Date.now() - startTime;
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
// text.textContent = textLists[k];
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
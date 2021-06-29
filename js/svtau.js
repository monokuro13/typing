var p = document.getElementById('text');
var textLists = [   
  "Seventeen Yob",
  "You Know What",
  "ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ ㅅㅐㅇㄱㅏㄱㅇㅣ ㅁㅏㄴㅎㅇㅏ",
  "ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ ㄴㅓㅇㅔㄱㅔ ㅁㅏㄹㅇㅑ",
  "ㅎㅏㄹ ㅁㅏㄹㅇㅣ ㅁㅏㄴㅎㅇㅏ",
  "ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㄴㅐㄱㅏ ㅈㅗㅁ ㅇㅣㅅㅏㅇㅎㅐ ㅁㅏㄹㅅㅜㄱㅏ ㅈㅓㄱㅇㅓㅈㅕ",
  "ㅊㅣㄴㄱㅜㄷㅡㄹㅇㅣ ㄷㅏ ㄱㅓㄱㅈㅓㅇㅎㅐ",
  "ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㄴㅔ ㅇㅏㅍㅇㅔㅁㅏㄴ ㅅㅓㅁㅕㄴ ㅅㅣㅁㅈㅏㅇㅇㅣ ㄸㅜㅣㅇㅓㅅㅓ",
  "ㅎㅐㅇㄷㅗㅇㅇㅣ ㅅㅓㅌㅜㄹㄹㅓㅅㅓ ㅁㅣㅇㅏㄴㅎㅐ",
  "ㅇㅏㅈㅣㄱㄷㅗ ㅈㅗㅈㅓㄹㅇㅣ ㅇㅏㄴ ㄷㅗㅐ",
  "ㄴㅏ ㄱㅏㅈㄱㅗ ㄴㅗㄹㅈㅣ ㅈㅗㅁ ㅁㅏㄹㄹㅐ",
  "ㅇㅗㅐ ㅈㅏㄲㅜ front ㅎㅏㄴㅡㄴ ㄱㅓㄴㄷㅔ",
  "ㅁㅗㄹㅡㄱㅔㅆㄷㅏ ㅁㅗㄹㅡㄱㅔㅆㄷㅏ",
  "ㅇㅓㄸㅓㅎㄱㅔㄷㅡㄴ ㄷㅗㅣㄱㅔㅆㅈㅣ",
  "ㄱㅡㄴㅣㄲㅏ ㄴㅐ ㅁㅏㄹㅇㅡㄴ",
  "ㄴㅓㄹㅡㄹ ㄷㅏ ㅇㅏㄹㄱㅗ ㅅㅣㅍㅇㅓ",
  "ㄴㅓㄹㅡㄹ ㄴㅗㄹㅐㅎㅐ U Hoo",
  "ㄴㅓㄹㅡㄹ ㄴㅗㄹㅐㅎㅐ U Hoo",
  "ㅇㅣㅂㅅㅜㄹㅇㅣ ㅁㅏㄹㄹㅏㄷㅗ",
  "ㅎㅏㄹ ㅁㅏㄹㅇㅡㄴ ㅎㅐㅇㅑㄱㅔㅆㅇㅓ Baby",
  "ㅇㅏㄲㅕ ㄴㅓㄹ ㅇㅏㄲㅕ ㄴㅓㄹ",
  "ㅎㅕㄴㄱㅣㅈㅡㅇ ㄴㅏㄹ ㅈㅓㅇㄷㅗㄹㅗ",
  "ㅇㅏㄲㅣㄴㄷㅏ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㅇㅏㄲㅣㄴㄷㅏ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ",
  "ㅇㅛㅈㅡㅁ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㅇㅓㅉㅓㄷㅏㄱㅏ ㄴㅜㄴㅇㅣ ㅂㅜㅅㅣㄴㅡㄴㄱㅏ",
  "ㅇㅣㄱㅣㅈㅓㄱㅇㅣㄴ ㅇㅗㅣㅁㅗ ㄱㅕㅁㅅㅗㄴㅎㅏㄴ ㅅㅓㅇㅍㅜㅁㅇㅡㄹ ㅂㅗㅏ",
  "ㅇ ㅕㄱㅣ ㄱㅏㅁㅎㅣ ㅇㅓㄷㅣㄹㅏㄱㅗ ㄴㅗㅇㅇㅣ ㅇㅏㄴㅑ",
  "ㄴㅓㅇㅡㅣ ㅁㅐㄹㅕㄱㅇㅔ ㄷㅐㅎㅏㄴ ㅅㅏㅅㅣㄹㅇㅡㄹ ㄱㅗㅎㅏㄴㄷㅏ Oh",
  "ㄴㅏㄹ ㅂㅗㄱㅗ ㅇㅜㅅㄴㅡㄴ ㄱㅔ ㅈㅗㅎㅇㅏㅅㅓㄴㅈㅣ",
  "ㅇㅏㄴㅣㅁㅕㄴ ㄱㅡㄴㅑㅇ ㅇㅜㅅㅡㅇㅜㅓ ㅂㅗㅇㅣㄴㅡㄴ ㄱㅓㄴㅈㅣ ho",
  "Yeh ㅈㅣㄱㅡㅁ ㅈㅏㄹㅣㄹ ㅊㅏㅈㄱㅗ ㅇㅣㅆㄷㅏㅁㅕㄴ",
  "Yeh ㄴㅐ ㅇㅕㅍㅈㅏㄹㅣㄱㅏ ㅈㅗㅎㅇㅏ ㅂㅗㅇㅕ",
  "Yeh ㄴㅓㅇㅔㄱㅔ ㄱㅗㅏㄴㅅㅣㅁ ㅁㅏㄴㅎㅇㅓ",
  "ㅅㅣㄴㅂㅏㄹ ㅅㅏㅇㅣㅈㅡ ㄲㅏㅈㅣㄷㅗ Oh Oh",
  "ㅇㅏ ㅈㅣㄱㅡㅁ ㄴㅓ ㄸㅐㅁㅇㅔ ㅂㅜㄹㅇㅣ ㄴㅏ",
  "ㄴㅏㄹㅡㄹ ㅅㅣㄱㅎㅣㄴㅡㄴ ㄱㅓㄴ ㅁㅜㄹㅣㅇㅑ",
  "ㅇㅏ ㅈㅣㄱㅡㅁ ㄴㅓ ㄸㅐㅁ에 ㅂㅜㄹㅇㅣ ㄴㅏ",
  "ㅁㅗㄹㅡㄱㅔㅆㄷㅏ ㅁㅗㄹㅡㄱㅔㅆㄷㅏ",
  "ㅇㅓㄸㅓㅎㄱㅔㄷㅡㄴ ㄷㅗㅣㄱㅔㅆㅈㅣ",
  "ㄱㅡㄴㅣㄲㅏ ㄴㅐ ㅁㅏㄹㅇㅡㄴ",
  "ㄴㅓㄹㅡㄹ ㄷㅏ ㅇㅏㄹㄱㅗ ㅅㅣㅍㅇㅓ",
  "ㄴㅓㄹㅡㄹ ㄴㅗㄹㅐㅎㅐ U Hoo",
  "ㄴㅓㄹㅡㄹ ㄴㅗㄹㅐㅎㅐ U Hoo",
  "ㅇㅣㅂㅅㅜㄹㅇㅣ ㅁㅏㄹㄹㅏㄷㅗ",
  "ㅎㅏㄹ ㅁㅏㄹㅇㅡㄴ ㅎㅐㅇㅑㄱㅔㅆㅇㅓ Baby",
  "ㅇㅏㄲㅕ ㄴㅓㄹ ㅇㅏㄲㅕ ㄴㅓㄹ",
  "ㅎㅕㄴㄱㅣㅈㅡㅇ ㄴㅏㄹ ㅈㅓㅇㄷㅗㄹㅗ",
  "ㅇㅏㄲㅣㄴㄷㅏ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㅇㅏㄲㅣㄴㄷㅏ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ",
  "ㅇㅛㅈㅡㅁ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㄴㅓ ㅇㅕㄱㅣ ㄱㅣㄷㅐㄷㅗ ㄷㅗㅐ",
  "ㄴㅓㅇㅡㅣ ㅇㅏㅍㅡㅁ ㄴㅏㄹㅗ ㄷㅓㅍㅇㅓㄷㅗ ㄷㅗㅐ",
  "ㄴㅔ ㅅㅗㄱㅁㅏㅇㅡㅁ ㅂㅜㄹㅇㅓ",
  "ㄴㅜㄴㅊㅣ ㅊㅐㄱㅣㄴ ㅇㅕㄱㅂㅜㅈㅗㄱ",
  "Can't fake it no more",
  "ㄲㅡㄹㅇㅓㅇㅗㄹㄹㅕ ㅅㅗㄱㄷㅗ",
  "ㅌㅜㅣㅇㄱㅣㄴㅡㄴ ㄱㅓㄴ ㅇㅣ ㅉㅡㅁㅇㅔㅅㅔ ㄲㅡㅌㄴㅐㄱㅗ",
  "ㅇㅣㅈㅔ ㄴㅏㄷㅗ ㅎㅏㄴ ㅂㅓㄴ ㅂㅜㄹㄹㅓ ㅂㅗㅈㅏ",
  "Baby You're My Angel",
  "ㄴㅓㄹㅡㄹ ㄷㅏ ㅇㅏㄹㄱㅗ ㅅㅣㅍㅇㅓ",
  "ㄴㅓㄹㅡㄹ ㄴㅗㄹㅐㅎㅐ U Hoo",
  "ㄴㅓㄹㅡㄹ ㄴㅗㄹㅐㅎㅐ U Hoo",
  "ㅇㅣㅂㅅㅜㄹㅇㅣ ㅁㅏㄹㄹㅏㄷㅗ",
  "ㅎㅏㄹ ㅁㅏㄹㅇㅡㄴ ㅎㅐㅇㅑㄱㅔㅆㅇㅓ Baby",
  "ㅇㅏㄲㅕ ㄴㅓㄹ ㅇㅏㄲㅕ ㄴㅓㄹ",
  "ㅎㅕㄴㄱㅣㅈㅡㅇ ㄴㅏㄹ ㅈㅓㅇㄷㅗㄹㅗ",
  "ㅇㅏㄲㅣㄴㄷㅏ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ",
  "ㅇㅏㄲㅣㄴㄷㅏ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ ㄴㅐㄱㅏ ㅁㅏㄹㅇㅑ",
  "ㅇㅛㅈㅡㅁ ㅇㅛㅈㅡㅁ ㅁㅏㄹㅇㅑ"
]

var t = document.getElementById('korean');
var koreanTexts = [
  "Seventeen Yob",
  "You Know What",
  "요즘 말야 내가 말야 생각이 많아",
  "요즘 말야 너에게 말야",
  "할 말이 많아",
  "요즘 말야",
  "내가 좀 이상해 말수가 적어져",
  "친구들이 다 걱정해",
  "요즘 말야",
  "네 앞에만 서면 심장이 뛰어서",
  "행동이 서툴러서 미안해",
  "아직도 조절이 안 돼",
  "나 갖고 놀지 좀 말래",
  "왜 자꾸 front 하는 건데",
  "모르겠다 모르겠다",
  "어떻게든 되겠지",
  "그니까 내 말은",
  "너를 다 알고 싶어",
  "너를 노래해 U Hoo",
  "너를 노래해 U Hoo",
  "입술이 말라도",
  "할 말은 해야겠어 Baby",
  "아껴 널 아껴 널",
  "현기증 날 정도로",
  "아낀다 요즘 말야",
  "내가 말야 요즘 말야",
  "아낀다 요즘 말야 내가 말야",
  "요즘 요즘 말야",
  "어쩌다가 눈이 부시는가",
  "이기적인 외모 겸손한 성품을 봐",
  "여기 감히 어디라고 농이 아냐",
  "너의 매력에 대한 사실을 고한다 Oh",
  "날 보고 웃는 게 좋아선지",
  "아니면 그냥 우스워 보이는 건지 ho",
  "Yeh 지금 자릴 찾고 있다면",
  "Yeh 내 옆자리가 좋아 보여",
  "Yeh 너에게 관심 많어",
  "신발 사이즈 까지도 Oh Oh",
  "아 지금 너 땜에 불이 나",
  "나를 식히는 건 무리야",
  "아 지금 너 땜에 불이 나",
  "모르겠다 모르겠다",
  "어떻게든 되겠지",
  "그니까 내 말은",
  "너를 다 알고 싶어",
  "너를 노래해 U Hoo",
  "너를 노래해 U Hoo",
  "입술이 말라도",
  "할 말은 해야겠어 Baby",
  "아껴 널 아껴 널",
  "현기증 날 정도로",
  "아낀다 요즘 말야",
  "내가 말야 요즘 말야",
  "아낀다 요즘 말야 내가 말야",
  "요즘 요즘 말야",
  "너 여기 기대도 돼",
  "너의 아픔 나로 덮어도 돼",
  "네 속마음 불어",
  "눈치 채긴 역부족",
  "Can't fake it no more",
  "끌어올려 속도",
  "튕기는 건 이 쯤에서 끝내고",
  "이제 나도 한 번 불러 보자",
  "Baby You're My Angel",
  "너를 다 알고 싶어",
  "너를 노래해 U Hoo",
  "너를 노래해 U Hoo",
  "입술이 말라도",
  "할 말은 해야겠어 Baby",
  "아껴 널 아껴 널",
  "현기증 날 정도로",
  "아낀다 요즘 말야",
  "내가 말야 요즘 말야",
  "아낀다 요즘 말야 내가 말야",
  "요즘 요즘 말야"
 ]

 var checkTexts = [];
var time_limit = 600;
var readytime = 3;
var score;
var correct;
var mistake;
var char_num = 0;
var word_char;
var random;

function ready(){
  readytime = 3;
  scoredis.innerHTML="";
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
function gameStart(){
  score = 0.0;
  mistake = 0;
  correct = 0;
  createText();
  var time_remaining = time_limit;
  var gametimer = setInterval(function(){
    count.innerHTML="残り時間："+time_remaining;
      time_remaining--;
      if(time_remaining <= 0){
      clearInterval(gametimer);
          finish();
  }
  },1000);
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
  console.log(textLists[k]);

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

var p = document.getElementById('text');
var textLists = [   
  "ㅁㅓㅅㅈㅣㅁ",
  "ㄴㅐ ㅁㅏㅇㅡㅁㄷㅐㄹㅗ ㄱㅗㄹㄹㅏ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ ㄷㅏ ㅎㅐ",
  " ",
  "ㄴㅏㄹㅡㄹ ㄸㅏㄹㅏ ㅎㅐ",
  "ㅁㅗㄷㅜ ㄱㅏㅌㅇㅣ",
  "ㄴㅔㄱㅏ ㅁㅜㅓㄹㅏㄷㅡㄴ ㄱㅏㄴㅇㅔ",
  "ㄴㅔㄱㅏ ㅁㅜㅓㄹ ㅎㅏㄷㅡㄴ ㄱㅏㄴㅇㅔ",
  "ㄴㅡㄹ ㄸㅏㄲㅡㄴㄸㅏㄲㅡㄴㅎㅐ ㄱㅡ ㄱㅗㅏㄴㅅㅣㅁㅇㅣ ㄸㅏㄲㅡㅁㄸㅏㄲㅡㅁㅎㅐ",
  "ㄸㅗ ㅎㅣㄹㄲㅡㅁ ㅎㅣㄹㄲㅡㅁ ㅎㅣㄹㄲㅡㅁ",
  "ㅇㅣㅈㅔㄴ ㅁㅗㄷㅡㄴ ㅇㅣㄹㅇㅣ ㄱㅏㅃㅜㄴㅎㅐ",
  "ㅅㅓㅇㄱㅗㅇㅇㅡㄹ ㅆㅓㄹㅇㅓ ㅁㅓㄱㅇㅓ ㅁㅏㅊㅣ",
  "ㄴㅜㄱㅜㅂㅗㄷㅏ ㅃㅏㄹㅡㄴ ㄱㅓㄹㅇㅡㅁㅇㅡㄹ ㄱㅓㄹㅇㅓㅆㄴㅔ ㅂㅣㅅㅣㅈㅡㄴ",
  "ㅇㅣㅈㅇㅡㄴ ㅈㅣㄷㅗ ㅇㅗㄹㅐㅇㅑ ㄷㅜㅣㅅㄱㅓㄹㅇㅡㅁ",
  "ㅁㅓㅅㅈㅣㅁ",
  "ㄴㅐ ㅁㅓㅅㄷㅐㄹㅗ ㄱㅗㄹㄹㅏ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ ㄷㅏ",
  "ㅃㅣㅃㅣㅃㅣ ㄴㅗㄴㄹㅏㄴㅇㅣ ㄷㅗㅐ",
  "ㅂㅕㄹㄹㅗ ㅅㅣㄴㄱㅕㅇ ㅇㅏㄴ ㅆㅓ ㄱㅡㅈㅓ",
  "ㅈㅏㄲㅜ",
  "ㅎㅗㄹㄹㅣㄴ ㄷㅡㅅㅇㅣ",
  " ",
  "ㅎㅐ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ",
  "ㅎㅐ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ",
  "ㅎㅐ",
  "ㅇㅓㄷㅣㄹ ㄱㅏㄷㅡㄴ ㄴㅓㄴ",
  "ㅂㅣㅊㄴㅏㄹ ㅅㅜ ㅇㅣㅆㅇㅓ",
  "ㅅㅔㅅㅏㅇㅇㅔ ㄴㅓㄴ ㅎㅏㄴㅏㅃㅜㄴㅇㅣㄴ ㄱㅓㄹ",
  "ㄱㅡㄴㄷㅔ ㅇㅗㅐㅇㅣㄹㅐ ㄴㅔ ㅇㅓㄹㄱㅜㄹㅇㅔ ㅊㅣㅁ ㅂㅐㅌㄴㅣ (ㅋㅏㄱㅌㅜ)",
  "ㄴㅏㄹ ㅈㅏㄱㅡㄱㅎㅏㄴ ㅇㅕㄹㅓㅂㅜㄴ ㄱㅏㅁㅅㅏ",
  "ㄱㅓㄱㅣㅅㅓ ㅁㅓㅁㅊㅜㄴ ㅉㅣㅈㅣㄹㅇㅣ ㅂㅏㄴㅅㅏ",
  "ㄷㅓㄱㅂㅜㄴㅇㅔ ㄴㅏㅇㅡㅣ ㅁㅔㄴㅌㅏㄹㅇㅡㄴ ㄷㅏㄴㄷㅏㄴㅎㅐ",
  "ㄴㅏㄴ ㄷㅏㅇㅡㅁ ㅇㅐㄹㅂㅓㅁ ㅁㅏㄴㄷㅡㄹㄹㅓ ㄱㅏㄹㄱㅔ",
  " ",
  "ㅇㅓㄱㅡㄹㅗ ㄲㅡㄹㄱㅣ ㄸㅐㅉㅣ",
  "ㄱㅡㄹㅓㄴ ㅇㅐㄷㅡㄹ ㄲㅣㄹㅣㄲㅣㄹㅣ",
  "ㅃㅣㅃㅣㅃㅣ ㄴㅗㄴㄹㅏㄴㅇㅣ ㄷㅗㅐ",
  "ㅂㅕㄹㄹㅗ ㅅㅣㄴㄱㅕㅇ ㅇㅏㄴ ㅆㅓ ㄱㅡㅈㅓ",
  "ㅈㅏㄲㅜ",
  "ㅎㅗㄹㄹㅣㄴ ㄷㅡㅅㅇㅣ",
  " ",
  "ㅎㅐ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ",
  "ㅎㅐ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ",
  "ㅎㅐ",
  "ㅋㅗ ㅁㅜㄷㅇㅡㄴ ㅌㅣ",
  "ㅃㅣㅈㅕㄴㅏㅇㅗㄴ ㅇㅣㅂ",
  "ㄸㅓㄱㅈㅣㄴ ㅁㅓㄹㅣ",
  "ㄴㅏㄴ ㅅㅏㅇㄱㅗㅏㄴㅇㅓㅂㅅㅈㅣ",
  "ㅋㅗ ㅁㅜㄷㅇㅡㄴ ㅌㅣ",
  "ㅃㅣㅈㅕㄴㅏㅇㅗㄴ ㅇㅣㅂ",
  "ㄸㅓㄱㅈㅣㄴ ㅁㅓㄹㅣ",
  "ㄴㅐㄱㅏ ㅎㅏㅁㅕㄴ",
  "ㅋㅗ ㅁㅜㄷㅇㅡㄴ ㅌㅣ",
  "ㅃㅣㅈㅕㄴㅏㅇㅗㄴ ㅍㅐㄴㅌㅣ",
  "ㄸㅓㄱㅈㅣㄴ ㅁㅓㄹㅣ",
  "ㄴㅏㄴ ㅅㅏㅇㄱㅗㅏㄴㅇㅓㅂㅅㅈㅣ",
  "ㅋㅗ ㅁㅜㄷㅇㅡㄴ ㅌㅣ",
  "ㅃㅣㅈㅕㄴㅏㅇㅗㄴ ㅍㅐㄴㅌㅣ",
  "ㄸㅓㄱㅈㅣㄴ ㅁㅓㄹㅣ",
  "ㄴㅐㄱㅏ ㅎㅏㅁㅕㄴ",
  "ㅃㅣㅃㅣㅃㅣ ㄴㅗㄴㄹㅏㄴㅇㅣ ㄷㅗㅐ",
  "ㅂㅕㄹㄹㅗ ㅅㅣㄴㄱㅕㅇ ㅇㅏㄴ ㅆㅓ ㄱㅡㅈㅓ",
  "ㅈㅏㄲㅜ",
  "ㅎㅗㄹㄹㅣㄴ ㄷㅡㅅㅇㅣ",
  " ",
  " ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ",
  "ㅎㅐ",
  "ㅁㅓㄹㅣ ㅇㅓㄲㅐ ㅁㅜㄹㅡㅍ",
  "ㅎㅐ",
]

var t = document.getElementById('korean');
var koreanTexts = [
  "All I wanna be is 멋짐",
  "내 마음대로 골라 kick it",
  "머리 어깨 무릎 다 HIP 해",
  "Do it do it like me do it",
  "나를 따라 해 kick it",
  "Clapping clapping 모두 같이 HIP",
  "I love you 네가 뭐라든 간에",
  "Respect you 네가 뭘 하든 간에",
  "늘 따끈따끈해 그 관심이 따끔따끔해",
  "또 힐끔 힐끔 힐끔",
  "이젠 모든 일이 가뿐해 veteran",
  "성공을 썰어 먹어 마치 michelin",
  "누구보다 빠른 걸음을 걸었네 비시즌",
  "잊은 지도 오래야 뒷걸음",
  "All I wanna be is 멋짐",
  "내 멋대로 골라 kick it",
  "머리 어깨 무릎 다 HIP",
  "삐삐삐 논란이 돼 my fashion",
  "별로 신경 안 써 그저 action",
  "자꾸 click me click me",
  "홀린 듯이 zoom",
  "Close up close up close up",
  "HIP 해 HIP HIP",
  "머리 어깨 무릎 HIP",
  "HIP HIP HIP HIP HIP HIP 해 HIP HIP",
  "머리 어깨 무릎 HIP",
  "HIP HIP HIP HIP 해 HIP",
  "(Attention) 어딜 가든 넌",
  "(Reflection) 빛날 수 있어",
  "세상에 넌 하나뿐인 걸",
  "근데 왜이래 네 얼굴에 침 뱉니 (칵투)",
  "날 자극한 여러분 감사",
  "거기서 멈춘 찌질이 반사",
  "덕분에 나의 멘탈은 단단해",
  "난 다음 앨범 만들러 갈게",
  "All you wanna be is trendy",
  "어그로 끌기 gimmick 때찌",
  "그런 애들 끼리끼리 HIP",
  "삐삐삐 논란이 돼 my fashion",
  "별로 신경 안 써 그저 action",
  "자꾸 click me click me",
  "홀린 듯이 zoom",
  "Close up close up close up",
  "HIP 해 HIP HIP",
  "머리 어깨 무릎 HIP",
  "HIP HIP HIP HIP HIP HIP 해 HIP HIP",
  "머리 어깨 무릎 HIP",
  "HIP HIP HIP HIP 해 HIP",
  "코 묻은 티",
  "삐져나온 입",
  "떡진 머리",
  "난 상관없지",
  "코 묻은 티",
  "삐져나온 입",
  "떡진 머리",
  "내가 하면 HIP",
  "코 묻은 티",
  "삐져나온 팬티",
  "떡진 머리",
  "난 상관없지",
  "코 묻은 티",
  "삐져나온 팬티",
  "떡진 머리",
  "내가 하면 HIP",
  "삐삐삐 논란이 돼 my fashion",
  "별로 신경 안 써 그저 action",
  "자꾸 click me click me",
  "홀린 듯이 zoom",
  "Close up close up close up",
  "HIP 해 HIP HIP",
  "머리 어깨 무릎 HIP",
  "HIP HIP HIP HIP HIP HIP 해 HIP HIP",
  "머리 어깨 무릎 HIP",
  "HIP HIP HIP HIP 해 HIP"
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
     checkTexts[0].className = 'add-red';
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
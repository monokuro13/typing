var p = document.getElementById('text');
var textLists = [   
  "ㄱㅡㄹㅓㄴ ㄴㅏㄹㅇㅣ ㅇㅣㅆㅇㅓ",
  "ㄱㅏㅂㅈㅏㄱㅣ ㅎㅗㄴㅈㅏㅇㅣㄴ ㄱㅓㅅㅁㅏㄴ ㄱㅏㅌㅇㅡㄴ ㄴㅏㄹ",
  "ㅇㅓㄷㅣㄹ ㄱㅏㄷㅗ ㄴㅐ ㅈㅏㄹㅣㄱㅏ ㅇㅏㄴㅣㄴ ㄱㅓㅅㅁㅏㄴ ㄱㅏㅌㄱㅗ",
  "ㄱㅗㄱㅐㄴ ㄸㅓㄹㄱㅜㅓㅈㅣㄴㅡㄴ ㄴㅏㄹ",
  "ㄱㅡㄹㅓㄹ ㄸㅐㅁㅏㄷㅏ ㄴㅐㄱㅔ",
  "ㅇㅓㄹㅁㅏㄴㅏ ㄴㅐㄱㅏ ㅅㅗㅈㅜㅇㅎㅏㄴㅈㅣ",
  "ㅁㅏㄹㅎㅐㅈㅜㄴㅡㄴ ㄴㅓㅇㅡㅣ ㄱㅡ ㅎㅏㄴㅁㅏㄷㅣㅇㅔ",
  " ",
  "ㅊㅗㄹㅏㅎㅏㄴ ㅇㅔㅅㅓ ㄷㅏㅅㅣ",
  "ㅌㅡㄱㅂㅕㄹㅎㅏㄴ ㄴㅏㄹㅗ ㅂㅕㄴㅎㅐ",
  " ",
  "ㅅㅔㅅㅏㅇㅇㅣ ㅇㅏㅁㅜㄹㅣ ㄴㅏㄹ ㅈㅜㅈㅓㅇㅏㄴㅈㅎㅕㄷㅗ",
  "ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㅁㅏㄹㄷㅡㄹㅇㅣ ㄴㅏㄹ ㅉㅣㄹㄹㅓㄷㅗ",
  "ㄴㅔㄱㅏ ㅇㅣㅆㅇㅓ ㄴㅏㄴ ㄷㅏㅅㅣ ㅇㅜㅅㅇㅓ",
  " ",
  " ",
  "ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴㅣㄴ ㅈㅗㄴㅈㅐ ㄱㅏㅌㄷㅏㄱㅏㄷㅗ",
  "ㅅㅏㄹㅏㅈㅕㄷㅗ ㅁㅗㄹㅡㄹ ㅅㅏㄹㅏㅁ ㄱㅏㅌㄷㅏㄱㅏㄷㅗ",
  "ㄴㅏㄹ ㅂㅜㄹㅡㄴㅡㄴ ㄴㅔ ㅁㅗㄱㅅㅗㄹㅣㅇㅔ",
  " ",
  "ㅈㅏㄲㅜ ㅅㅜㅁㄱㅗㅁㅏㄴ ㅅㅣㅍㅇㅓㅅㅓ",
  "ㅁㅏㅈㅜ ㅎㅏㄱㅣㄱㅏ ㅅㅣㄹㅎㅇㅓㅅㅓ",
  "ㅁㅗㄷㅡㄴ ㄱㅔ ㅇㅡㅣㅁㅣㄹㅡㄹ ㅇㅣㄹㅎㅇㅡㄴ ㄷㅡㅅㅇㅣ",
  "ㄴㅐㄱㅏ ㅇㅡㅣㅁㅣㄹㅡㄹ ㅇㅣㄹㅎㅇㅡㄴ ㄷㅡㅅㅇㅣ",
  "ㄱㅏㅁㅏㄴㅎㅣ ㅈㅜㅈㅓㅇㅏㄴㅈㅇㅏ ㅇㅣㅆㅇㅡㄹ ㄸㅐ",
  "ㄱㅡㄸㅐ ㄴㅐ ㅇㅏㅍㅇㅔ ㄴㅏㅌㅏㄴㅏㄴ ㄴㅓㅇㅡㅣ",
  "ㄸㅏㄸㅡㅅㅎㅏㄴ ㅁㅣㅅㅗㅇㅗㅏ ㅅㅗㄴㄱㅣㄹㅇㅔ",
  " ",
  "ㅊㅗㄹㅏㅎㅏㄴ ㅇㅔㅅㅓ ㄷㅏㅅㅣ",
  "ㅌㅡㄱㅂㅕㄹㅎㅏㄴ ㄴㅏㄹㅗ ㅂㅕㄴㅎㅐ",
  " ",
  "ㅅㅔㅅㅏㅇㅇㅣ ㅇㅏㅁㅜㄹㅣ ㄴㅏㄹ ㅈㅜㅈㅓㅇㅏㄴㅈㅎㅕㄷㅗ",
  "ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㅁㅏㄹㄷㅡㄹㅇㅣ ㄴㅏㄹ ㅉㅣㄹㄹㅓㄷㅗ",
  "ㄴㅔㄱㅏ ㅇㅣㅆㅇㅓ ㄴㅏㄴ ㄷㅏㅅㅣ ㅇㅜㅅㅇㅓ",
  " ",
  " ",
  "ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴㅣㄴ ㅈㅗㄴㅈㅐ ㄱㅏㅌㄷㅏㄱㅏㄷㅗ",
  "ㅅㅏㄹㅏㅈㅕㄷㅗ ㅁㅗㄹㅡㄹ ㅅㅏㄹㅏㅁ ㄱㅏㅌㄷㅏㄱㅏㄷㅗ",
  "ㄴㅏㄹ ㅂㅜㄹㅡㄴㅡㄴ ㄴㅔ ㅁㅗㄱㅅㅗㄹㅣㅇㅔ",
  " ",
  " ",
  "ㄱㅜㄹㅡㅁㅇㅣ ㅉㅗㅏㄱ ㄲㅣㄴ ㅎㅐㅅㅅㅏㄹ ㅎㅏㄴ ㅈㅜㅁ ㅇㅓㅂㅅㄴㅡㄴ ㄴㅏㄹ",
  "ㄴㅔㄱㅏ ㅂㅏㄹㅗ ㄴㅏㅇㅡㅣ",
  " ",
  "ㅇㅏㅁㅜㄹㅣ ㅇㅓㄷㅜㅇㅜㄴ ㅂㅏㅁㄷㅗ ㄷㅏㅅㅣ ㄴㅏㅈ",
  " ",
  " ",
  " ",
  "ㅅㅔㅅㅏㅇㅇㅣ ㅇㅏㅁㅜㄹㅣ ㄴㅏㄹ ㅈㅜㅈㅓㅇㅏㄴㅈㅎㅕㄷㅗ",
  "ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㅁㅏㄹㄷㅡㄹㅇㅣ ㄴㅏㄹ ㅉㅣㄹㄹㅓㄷㅗ",
  "ㄴㅔㄱㅏ ㅇㅣㅆㅇㅓ ㄴㅏㄴ ㄷㅏㅅㅣ ㅇㅜㅅㅇㅓ",
  " ",
  " ",
  "ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴㅣㄴ ㅈㅗㄴㅈㅐ ㄱㅏㅌㄷㅏㄱㅏㄷㅗ",
  "ㅅㅏㄹㅏㅈㅕㄷㅗ ㅁㅗㄹㅡㄹ ㅅㅏㄹㅏㅁ ㄱㅏㅌㄷㅏㄱㅏㄷㅗ",
  "ㄴㅏㄹ ㅂㅜㄹㅡㄴㅡㄴ ㄴㅔ ㅁㅗㄱㅅㅗㄹㅣㅇㅔ",
  " ",
]

var t = document.getElementById('korean');
var koreanTexts = [
  "그런 날이 있어",
  "갑자기 혼자인 것만 같은 날",
  "어딜 가도 내 자리가 아닌 것만 같고",
  "고갠 떨궈지는 날",
  "그럴 때마다 내게",
  "얼마나 내가 소중한지",
  "말해주는 너의 그 한마디에",
  "Everything's alright",
  "초라한 Nobody에서 다시 Somebody",
  "특별한 나로 변해",
  "You make me feel special",
  "세상이 아무리 날 주저앉혀도",
  "아프고 아픈 말들이 날 찔러도",
  "네가 있어 난 다시 웃어",
  "That's what you do",
  "Again I feel special",
  "아무것도 아닌 존재 같다가도",
  "사라져도 모를 사람 같다가도",
  "날 부르는 네 목소리에",
  "I feel loved I feel so special",
  "자꾸 숨고만 싶어서",
  "마주 하기가 싫어서",
  "모든 게 의미를 잃은 듯이",
  "내가 의미를 잃은 듯이",
  "가만히 주저앉아 있을 때",
  "그때 내 앞에 나타난 너의",
  "따뜻한 미소와 손길에",
  "Everything's alright",
  "초라한 Nobody에서 다시 Somebody",
  "특별한 나로 변해",
  "You make me feel special",
  "세상이 아무리 날 주저앉혀도",
  "아프고 아픈 말들이 날 찔러도",
  "네가 있어 난 다시 웃어",
  "That's what you do",
  "Again I feel special",
  "아무것도 아닌 존재 같다가도",
  "사라져도 모를 사람 같다가도",
  "날 부르는 네 목소리에",
  "I feel loved I feel so special",
  "You make everything alright",
  "구름이 쫙 낀 햇살 한 줌 없는 날",
  "네가 바로 나의 Shining light",
  "That's what you do",
  "아무리 어두운 밤도 다시 낮",
  "I owe it to you",
  "Because you make me feel",
  "You make me feel special",
  "세상이 아무리 날 주저앉혀도",
  "아프고 아픈 말들이 날 찔러도",
  "네가 있어 난 다시 웃어",
  "That's what you do",
  "Again I feel special",
  "아무것도 아닌 존재 같다가도",
  "사라져도 모를 사람 같다가도",
  "날 부르는 네 목소리에",
  "I feel loved I feel so special"
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
     event.preventDefault();
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
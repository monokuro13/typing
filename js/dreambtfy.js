var p = document.getElementById('text');
var textLists = [
  'ㅎㅗㄱㅅㅣ ㄱㅣㅇㅓㄱㅎㅐ ㅊㅓㅇㅡㅁ ㅁㅏㄴㄴㅏㄴ',
  'ㅎㅐㅅㅅㅏㄹ ㄱㅏㄷㅡㄱㅎㅣ ㄴㅜㄴ ㅂㅜㅅㅕㅆㄷㅓㄴ ㄱㅡㄴㅏㄹ',
  'ㄴㅡㄹ ㅇㅣㄹㅓㅎㄱㅔ ㄴㅏㅇㅡㅣ ㄱㅕㅌㅇㅔ',
  'ㅇㅣㅆㅇㅓ ㅈㅜㄴ ㄴㅓㅇㅔㄱㅔ ㄴㅏㄴ ㄱㅏㅁㅅㅏㅎㅐ',
  ' ',
  ' ',
  'ㅇㅜㄹㅣ ㅍㅕㄴㅎㅐㅈㅣㄴ ㄱㅔ',
  'ㄸㅐㄹㅗㄴ ㅅㅗㄱㅅㅏㅇㅎㅏㄱㅔ ㅎㅐㅆㅇㅡㄹㅈㅣ ㅁㅗㄹㄹㅏ',
  'ㅇㅓㄴㅈㅔㄷㅡㄴ ㄴㅐㄱㅔ ㅁㅏㄹㅎㅐㄷㅗ ㄷㅗㅐ',
  'ㄴㅔㄱㅏ ㅇㅜㅓㄴㅎㅏㄴㅡㄴ ㄴㅐㄱㅏ ㄷㅗㅐㅈㅜㄹㄱㅔ',
  'ㄴㅓㅇㅡㅣ ㅎㅏㄹㅜ ㄲㅡㅌㅇㅔㄴ ㄴㅡㄹ ㄴㅐㄱㅏ',
  'ㄱㅏㄷㅡㄱ ㄴㅓㄹ ㅍㅜㅁㅇㅔ ㅇㅏㄴㄱㅗ ㄴㅔ ㅇㅒㄱㅣㄹ ㄷㅡㄹㅇㅓㅈㅜㄹㄱㅔ',
  'ㄴㅐㄱㅔㄴ ㅎㅏㅇㅅㅏㅇ ㅇㅗㅏㄴㅂㅕㄱㅎㅏㅈㅣ ㅇㅏㄴㅎㅇㅏㄷㅗ ㄷㅗㅐ',
  ' ',
  'ㄴㅓㄴ ㅇㅣㄷㅐㄹㅗ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  'ㅇㅣㄱㅅㅜㄱㅎㅐㅈㅕ ㅂㅓㄹㅣㄴ',
  'ㅇㅜㄹㅣㄹㅏㅅㅓ ㄴㅏㄴㅡㄴ ㄷㅓ ㄷㅏㅎㅐㅇㅇㅣㄴㄱㅓㄹ',
  'ㅇㅓㄴㅈㅔㄷㅡㄴ ㄴㅐㄱㅏ ㄷㅗㄹㅇㅏㅂㅗㅁㅕㄴ',
  'ㄱㅡ ㅈㅏㄹㅣㅇㅔ ㅇㅣㅆㅇㅡㄹ ㄴㅓㄹ ㅇㅏㄹㄱㅣㅇㅔ',
  'ㄴㅓㅇㅡㅣ ㅎㅏㄹㅜ ㄲㅡㅌㅇㅔㄴ ㄴㅡㄹ ㄴㅐㄱㅏ',
  'ㄱㅏㄷㅡㄱ ㄴㅓㄹ ㅍㅜㅁㅇㅔ ㅇㅏㄴㄱㅗ ㄴㅔ ㅇㅒㄱㅣㄹ ㄷㅡㄹㅇㅓㅈㅜㄹㄱㅔ',
  'ㄴㅐㄱㅔㄴ ㅎㅏㅇㅅㅏㅇ ㅇㅗㅏㄴㅂㅕㄱㅎㅏㅈㅣ ㅇㅏㄴㅎㅇㅏㄷㅗ ㄷㅗㅐ',
  " ",
  'ㄴㅓㄴ ㅇㅣㄷㅐㄹㅗ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  'ㄴㅐㄱㅏ ㄴㅡㄹ ㄲㅜㅁㄲㅜㅓㅇㅗㅏㅆㄷㅓㄴ',
  'ㅅㅔㅅㅏㅇㅇㅡㄹ ㅅㅓㄴㅁㅜㄹㅎㅐㅈㅜㄴ ㄴㅓ',
  ' ',
  ' ',
  'ㄴㅏㅇㅡㅣ ㅎㅏㄹㅜ ㄲㅡㅌㅇㅔㄴ ㄴㅔㄱㅏ',
  'ㄱㅏㄷㅡㄱ ㄴㅏㄹ ㅍㅜㅁㅇㅔ ㅇㅏㄴㄱㅗ ㄴㅐ ㅇㅒㄱㅣㄹ ㄷㅡㄹㅇㅓㅈㅜㄹㄹㅐ',
  'ㅇㅜㄹㅣ ㅎㅏㅇㅅㅏㅇ ㅇㅗㅏㄴㅂㅕㄱㅎㅏㅈㅣ ㅇㅏㄴㅎㅇㅏㄷㅗ ㄷㅗㅐ',
  " ",
  'ㄴㅓㄴ ㅇㅣㄷㅐㄹㅗ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  'ㄴㅓㄴ ㄴㅐ ㄱㅕㅌㅇㅔ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  'ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ'
  // 'ㅎㅗㄱㅅㅣ ㄱㅣㅇㅓㄱㅎㅐ ㅊㅓㅇㅡㅁ ㅁㅏㄴㄴㅏㄴ',
  // 'ㅎㅐㅅㅅㅏㄹ ㄱㅏㄷㅡㄱㅎㅣ ㄴㅜㄴ ㅂㅜㅅㅕㅆㄷㅓㄴ ㄱㅡㄴㅏㄹ',
  // 'ㄴㅡㄹ ㅇㅣㄹㅓㅎㄱㅔ ㄴㅏㅇㅡㅣ ㄱㅕㅌㅇㅔ',
  // 'ㅇㅣㅆㅇㅓ ㅈㅜㄴ ㄴㅓㅇㅔㄱㅔ ㄴㅏㄴ ㄱㅏㅁㅅㅏㅎㅐ',
  // 'And again,and again',
  // 'I just need you to be with me',
  // 'As time goes on ㅇㅜㄹㅣ ㅍㅕㄴㅎㅐㅈㅣㄴ ㄱㅔ',
  // 'ㄸㅐㄹㅗㄴ ㅅㅗㄱㅅㅏㅇㅎㅏㄱㅔ ㅎㅐㅆㅇㅡㄹㅈㅣ ㅁㅗㄹㄹㅏ',
  // 'ㅇㅓㄴㅈㅔㄷㅡㄴ ㄴㅐㄱㅔ ㅁㅏㄹㅎㅐㄷㅗ ㄷㅗㅐ',
  // 'ㄴㅔㄱㅏ ㅇㅜㅓㄴㅎㅏㄴㅡㄴ ㄴㅐㄱㅏ ㄷㅗㅐㅈㅜㄹㄱㅔ',
  // 'ㄴㅓㅇㅡㅣ ㅎㅏㄹㅜ ㄲㅡㅌㅇㅔㄴ ㄴㅡㄹ ㄴㅐㄱㅏ',
  // 'ㄱㅏㄷㅡㄱ ㄴㅓㄹ ㅍㅜㅁㅇㅔ ㅇㅏㄴㄱㅗ ㄴㅔ ㅇㅒㄱㅣㄹ ㄷㅡㄹㅇㅓㅈㅜㄹㄱㅔ',
  // 'ㄴㅐㄱㅔㄴ ㅎㅏㅇㅅㅏㅇ ㅇㅗㅏㄴㅂㅕㄱㅎㅏㅈㅣ ㅇㅏㄴㅎㅇㅏㄷㅗ ㄷㅗㅐ',
  // "It's alright",
  // 'ㄴㅓㄴ ㅇㅣㄷㅐㄹㅗ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  // 'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  // 'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  // 'As time goes on ㅇㅣㄱㅅㅜㄱㅎㅐㅈㅕ ㅂㅓㄹㅣㄴ',
  // 'ㅇㅜㄹㅣㄹㅏㅅㅓ ㄴㅏㄴㅡㄴ ㄷㅓ ㄷㅏㅎㅐㅇㅇㅣㄴㄱㅓㄹ',
  // 'ㅇㅓㄴㅈㅔㄷㅡㄴ ㄴㅐㄱㅏ ㄷㅗㄹㅇㅏㅂㅗㅁㅕㄴ',
  // 'ㄱㅡ ㅈㅏㄹㅣㅇㅔ ㅇㅣㅆㅇㅡㄹ ㄴㅓㄹ ㅇㅏㄹㄱㅣㅇㅔ',
  // 'ㄴㅓㅇㅡㅣ ㅎㅏㄹㅜ ㄲㅡㅌㅇㅔㄴ ㄴㅡㄹ ㄴㅐㄱㅏ',
  // 'ㄱㅏㄷㅡㄱ ㄴㅓㄹ ㅍㅜㅁㅇㅔ ㅇㅏㄴㄱㅗ ㄴㅔ ㅇㅒㄱㅣㄹ ㄷㅡㄹㅇㅓㅈㅜㄹㄱㅔ',
  // 'ㄴㅐㄱㅔㄴ ㅎㅏㅇㅅㅏㅇ ㅇㅗㅏㄴㅂㅕㄱㅎㅏㅈㅣ ㅇㅏㄴㅎㅇㅏㄷㅗ ㄷㅗㅐ',
  // "It's alright",
  // 'ㄴㅓㄴ ㅇㅣㄷㅐㄹㅗ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  // 'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  // 'ㄴㅐㄱㅏ ㄴㅡㄹ ㄲㅜㅁㄲㅜㅓㅇㅗㅏㅆㄷㅓㄴ',
  // 'ㅅㅔㅅㅏㅇㅇㅡㄹ ㅅㅓㄴㅁㅜㄹㅎㅐㅈㅜㄴ ㄴㅓ',
  // 'I always wanna be there for you',
  // 'And I know that you will feel the same',
  // 'ㄴㅏㅇㅡㅣ ㅎㅏㄹㅜ ㄲㅡㅌㅇㅔㄴ ㄴㅔㄱㅏ',
  // 'ㄱㅏㄷㅡㄱ ㄴㅏㄹ ㅍㅜㅁㅇㅔ ㅇㅏㄴㄱㅗ ㄴㅐ ㅇㅒㄱㅣㄹ ㄷㅡㄹㅇㅓㅈㅜㄹㄹㅐ',
  // 'ㅇㅜㄹㅣ ㅎㅏㅇㅅㅏㅇ ㅇㅗㅏㄴㅂㅕㄱㅎㅏㅈㅣ ㅇㅏㄴㅎㅇㅏㄷㅗ ㄷㅗㅐ',
  // "It's alright",
  // 'ㄴㅓㄴ ㅇㅣㄷㅐㄹㅗ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  // 'ㄴㅡㄹ ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ',
  // 'ㄴㅓㄴ ㄴㅐ ㄱㅕㅌㅇㅔ ㅇㅣㅆㅇㅓ ㅈㅜㅁㅕㄴ ㄷㅗㅐ',
  // 'ㅈㅣㄱㅡㅁㅊㅓㄹㅓㅁㅁㅏㄴ'
];

var t = document.getElementById('korean');
 var koreanTexts = [
  '혹시 기억해 처음 만난',
  '햇살 가득히 눈 부셨던 그날',
  '늘 이렇게 나의 곁에',
  '있어 준 너에게 난 감사해',
  'And again,and again',
  'I just need you to be with me',
  'As time goes on 우리 편해진 게',
  '때론 속상하게 했을지 몰라',
  '언제든 내게 말해도 돼',
  '네가 원하는 내가 돼줄게',
  '너의 하루 끝엔 늘 내가',
  '가득 널 품에 안고 네 얘길 들어줄게',
  '내겐 항상 완벽하지 않아도 돼',
  "It's alright",
  '넌 이대로 있어 주면 돼',
  '늘 지금처럼만',
  '늘 지금처럼만',
  'As time goes on 익숙해져 버린',
  '우리라서 나는 더 다행인걸',
  '언제든 내가 돌아보면',
  '그 자리에 있을 널 알기에',
  '너의 하루 끝엔 늘 내가',
  '가득 널 품에 안고 네 얘길 들어줄게',
  '내겐 항상 완벽하지 않아도 돼',
  "It's alright",
  '넌 이대로 있어 주면 돼',
  '늘 지금처럼만',
  '내가 늘 꿈꿔왔던',
  '세상을 선물해 준 너',
  'I always wanna be there for you',
  'And I know that you will feel the same',
  '나의 하루 끝엔 네가',
  '가득 날 품에 안고 내 얘길 들어줄래',
  '우리 항상 완벽하지 않아도 돼',
  "It's alright",
  '넌 이대로 있어 주면 돼',
  '늘 지금처럼만',
  '넌 내 곁에 있어 주면 돼',
  '지금처럼만'
 ];
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
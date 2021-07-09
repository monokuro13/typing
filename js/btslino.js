var p = document.getElementById('text');
var textLists = [   
  "ㄱㅡ ㄱㅣㄴ ㅂㅏㅁㅇㅣ ㄴㅓㄹ ㄸㅏㄹㅏ",
  "ㅎㅡㄹㄹㅓㅁㅏㄴ ㄱㅏㄴㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅇㅣ ㅅㅣㄱㅏㄴㅇㅣ ㄴㅓㄹ ㄸㅏㄹㅏ",
  "ㅎㅡㄹㅕㅈㅣㄴㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅇㅗㅐ ㅁㅓㄹㅇㅓㅈㅕ ㄱㅏ",
  "ㅇㅗㅐ ㄷㅏㅎㅈㅣ ㅇㅏㄴㅎㅇㅡㄹ ㅁㅏㄴㅋㅡㅁ ㄱㅏㅅㅓ",
  "ㅁㅓㄹㅇㅓㅈㅕ ㄱㅏ",
  "ㄴㅣ ㄴㅜㄴㅇㅔㄴ ㄷㅓ ㅇㅣㅅㅏㅇ",
  "ㄴㅐㄱㅏ ㅂㅗㅇㅣㅈㅣ ㅇㅏㄴㅎㄴㅣ",
  "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ",
  "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ",
  "ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ",
  "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ",
  "ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  "ㄴㅓㄴ ㄴㅐㄱㅔ ㅇㅏㄴㅕㅇㅇㅣㄹㅏ ㅁㅏㄹㅎㅐㅆㅈㅣ",
  "ㅁㅐㅂㅓㄴ ㅈㅏㅁㄷㅡㄹ ㄸㅐㅁㅏㄷㅏ",
  "ㄴㅏㄴ ㄱㅡㄱㅔ ㅈㅜㄱㄱㅣㅂㅗㄷㅏ ㄷㅓ ㅅㅣㄹㅎㅇㅓㅆㅇㅓ",
  "ㅇㅣ ㅂㅏㅁㅇㅣ ㄱㅗㅐㄴㅎㅣ ㄴㅓㅇㅗㅏ ㄴㅐ ㄲㅡㅌㅇㅣㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏㅅㅓ",
  " ",
  " ",
  "ㅎㅔㅇㅓㅈㅣㅁㅇㅡㅣ ㅇㅜㅓㄴㅇㅣㄴㅇㅡㄴ ㄲㅗㅐㄴㅏ ㅅㅣㅁㅍㅡㄹㅎㅐㅆㅈㅣ",
  "ㅇㅣㅈㅔ ㄴㅐㄱㅏ ㄱㅡ ㅁㅏㄹㅇㅡㄹ ㅁㅏㄹㅎㅐ",
  "ㄴㅓㄴ ㅇㅏㄴㄴㅕㅇ ㅊㅓㄹㅓㅁ ㄴㅐ ㅅㅣㅈㅏㄱㄱㅗㅏ ㄲㅡㅌㅇㅔ",
  "ㄱㅡ ㄱㅗㅅㅇㅔ",
  "ㅁㅗㄷㅡㄴ ㄱㅔ ㅁㅓㅁㅊㅜㅓㅆㅈㅣ ㅇㅜㄹㅣㄴ ㅈㅓㄱㅅㅣㄴㅎㅗㅇㅣㄴㄷㅡㅅ",
  " ",
  "ㅎㅏㄹ ㅁㅏㄹㅇㅡㄴ ㄲㅡㅌㄴㅏㅆㅈㅣ ㄴㅜㄴㅁㅜㄹㄱㅗㅏ ㄴㅗㅎㅇㅣㄴㅡㄴ",
  " ",
  "ㅇㅣ ㅂㅜㅈㅓㅇㅇㅡㄹ ㅂㅏㄴㅂㅗㄱㅎㅐ",
  "ㄴㅐ ㅁㅏㅁㅇㅡㄹ ㅇㅡㄹㅍㅇㅡㄹ ㅅㅜ ㅇㅣㅆㄷㅏㅁㅕㄴ ㄴㅏㅇㄷㅗㄱㅎㅐ",
  "ㅇㅣㄱㅓㄴ ㅂㅏㄹㅇㅏㄱㅇㅣㅈㅏ ㅂㅏㄹㅏㅁㅇㅣㄴㄱㅓㄹ",
  "ㄲㅡㅌㅇㅓㅂㅅㄴㅡㄴ ㄴㅐ ㅅㅏㄹㅏㅇㅇㅣㅈㅏ ㅅㅏㄹㅏㅁㅇㅣㄴ ㄱㅓㄹ ㄴㅓㄴ",
  "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ",
  "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ",
  "ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  "ㅎㅏㅇㅅㅏㅇ ㄴㅣ ㅇㅏㅍㅇㅔㅅㅓㄴㅡㄴ ㅇㅜㅅㅈㅣ",
  "ㅅㅏㄹㅏㅇㅇㅣ ㄴㅐㄱㅔㄴㅡㄴ ㅂㅣㄱㅡㄱㅇㅣㄹㅏㄷㅗ",
  "ㄲㅗㄱ ㄲㅡㅌㄴㅏㄴ ㄷㅜㅣㅇㅔ ㅇㅜㄹㅈㅣ",
  "ㅇㅣㅂㅕㄹ ㄴㅓㅇㅔㄱㅔㄴㅡㄴ ㅎㅡㅣㄱㅡㄱㅇㅣㄹㅏㄷㅗ",
  "ㄱㅡㄹㅐ ㅇㅕㅇㅇㅜㅓㄴㅎㅏㄴ ㄱㅓㄴ ㅎㅏㄴㅏ ㅇㅓㅂㅅㅈㅣ",
  "ㅈㅜㄱㅇㅡㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏㄷㅗ ㅅㅏㄹㅇㅏ ㄴㅓ ㅇㅓㅂㅅㅇㅣ",
  "ㅇㅕㅇㅇㅜㅓㄴㅎㅏㄱㅣㄹ",
  " ",
  "ㅇㅣ ㄲㅡㅌㅇㅣ ㅇㅓㅂㅅㄴㅡㄴ ㅁㅣㄹㅗ ㅅㅗㄱㅇㅔㅅㅓ",
  "ㅇㅓㅅㅓ ㄴㅏㄹ ㄲㅓㄴㅐㅈㅜㅓ",
  "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ",
  "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ",
  "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  " ",
  " ",
  " ",
  " "
  // "ㄱㅡ ㄱㅣㄴ ㅂㅏㅁㅇㅣ ㄴㅓㄹ ㄸㅏㄹㅏ",
  // "ㅎㅡㄹㄹㅓㅁㅏㄴ ㄱㅏㄴㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅇㅣ ㅅㅣㄱㅏㄴㅇㅣ ㄴㅓㄹ ㄸㅏㄹㅏ",
  // "ㅎㅡㄹㅕㅈㅣㄴㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅇㅗㅐ ㅁㅓㄹㅇㅓㅈㅕ ㄱㅏ",
  // "ㅇㅗㅐ ㄷㅏㅎㅈㅣ ㅇㅏㄴㅎㅇㅡㄹ ㅁㅏㄴㅋㅡㅁ ㄱㅏㅅㅓ",
  // "Tell me why ㅁㅓㄹㅇㅓㅈㅕ ㄱㅏ Why",
  // "ㄴㅣ ㄴㅜㄴㅇㅔㄴ ㄷㅓ ㅇㅣㅅㅏㅇ",
  // "ㄴㅐㄱㅏ ㅂㅗㅇㅣㅈㅣ ㅇㅏㄴㅎㄴㅣ Uh",
  // "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ Yeah",
  // "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ",
  // "ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  // "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  // "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  // "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ Yeah",
  // "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ",
  // "ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  // "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  // "ㄴㅓㄴ ㄴㅐㄱㅔ ㅇㅏㄴㅕㅇㅇㅣㄹㅏ ㅁㅏㄹㅎㅐㅆㅈㅣ",
  // "ㅁㅐㅂㅓㄴ ㅈㅏㅁㄷㅡㄹ ㄸㅐㅁㅏㄷㅏ",
  // "ㄴㅏㄴ ㄱㅡㄱㅔ ㅈㅜㄱㄱㅣㅂㅗㄷㅏ ㄷㅓ ㅅㅣㄹㅎㅇㅓㅆㅇㅓ",
  // "ㅇㅣ ㅂㅏㅁㅇㅣ ㄱㅗㅐㄴㅎㅣ ㄴㅓㅇㅗㅏ ㄴㅐ ㄲㅡㅌㅇㅣㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅏㅅㅓ",
  // "I don't know you",
  // "you didn't know me",
  // "ㅎㅔㅇㅓㅈㅣㅁㅇㅡㅣ ㅇㅜㅓㄴㅇㅣㄴㅇㅡㄴ ㄲㅗㅐㄴㅏ ㅅㅣㅁㅍㅡㄹㅎㅐㅆㅈㅣ",
  // "ㅇㅣㅈㅔ ㄴㅐㄱㅏ ㄱㅡ ㅁㅏㄹㅇㅡㄹ ㅁㅏㄹㅎㅐ",
  // "ㄴㅓㄴ ㅇㅏㄴㄴㅕㅇ ㅊㅓㄹㅓㅁ ㄴㅐ ㅅㅣㅈㅏㄱㄱㅗㅏ ㄲㅡㅌㅇㅔ",
  // "ㄱㅡ ㄱㅗㅅㅇㅔ",
  // "ㅁㅗㄷㅡㄴ ㄱㅔ ㅁㅓㅁㅊㅜㅓㅆㅈㅣ ㅇㅜㄹㅣㄴ ㅈㅓㄱㅅㅣㄴㅎㅗㅇㅣㄴㄷㅡㅅ",
  // "stop",
  // "ㅎㅏㄹ ㅁㅏㄹㅇㅡㄴ ㄲㅡㅌㄴㅏㅆㅈㅣ ㄴㅜㄴㅁㅜㄹㄱㅗㅏ ㄴㅗㅎㅇㅣㄴㅡㄴ",
  // "dot",
  // "I'm not okay ㅇㅣ ㅂㅜㅈㅓㅇㅇㅡㄹ ㅂㅏㄴㅂㅗㄱㅎㅐ",
  // "ㄴㅐ ㅁㅏㅁㅇㅡㄹ ㅇㅡㄹㅍㅇㅡㄹ ㅅㅜ ㅇㅣㅆㄷㅏㅁㅕㄴ ㄴㅏㅇㄷㅗㄱㅎㅐ",
  // "ㅇㅣㄱㅓㄴ ㅂㅏㄹㅇㅏㄱㅇㅣㅈㅏ ㅂㅏㄹㅏㅁㅇㅣㄴㄱㅓㄹ",
  // "ㄲㅡㅌㅇㅓㅂㅅㄴㅡㄴ ㄴㅐ ㅅㅏㄹㅏㅇㅇㅣㅈㅏ ㅅㅏㄹㅏㅁㅇㅣㄴ ㄱㅓㄹ ㄴㅓㄴ",
  // "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ Yeah",
  // "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ",
  // "ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  // "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  // "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  // "ㅎㅏㅇㅅㅏㅇ ㄴㅣ ㅇㅏㅍㅇㅔㅅㅓㄴㅡㄴ ㅇㅜㅅㅈㅣ",
  // "ㅅㅏㄹㅏㅇㅇㅣ ㄴㅐㄱㅔㄴㅡㄴ ㅂㅣㄱㅡㄱㅇㅣㄹㅏㄷㅗ",
  // "ㄲㅗㄱ ㄲㅡㅌㄴㅏㄴ ㄷㅜㅣㅇㅔ ㅇㅜㄹㅈㅣ",
  // "ㅇㅣㅂㅕㄹ ㄴㅓㅇㅔㄱㅔㄴㅡㄴ ㅎㅡㅣㄱㅡㄱㅇㅣㄹㅏㄷㅗ",
  // "ㄱㅡㄹㅐ ㅇㅕㅇㅇㅜㅓㄴㅎㅏㄴ ㄱㅓㄴ ㅎㅏㄴㅏ ㅇㅓㅂㅅㅈㅣ",
  // "ㅈㅜㄱㅇㅡㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏㄷㅗ ㅅㅏㄹㅇㅏ ㄴㅓ ㅇㅓㅂㅅㅇㅣ",
  // "ㅇㅕㅇㅇㅜㅓㄴㅎㅏㄱㅣㄹ girl",
  // "Over over love is not over",
  // "ㅇㅣ ㄲㅡㅌㅇㅣ ㅇㅓㅂㅅㄴㅡㄴ ㅁㅣㄹㅗ ㅅㅗㄱㅇㅔㅅㅓ",
  // "ㅇㅓㅅㅓ ㄴㅏㄹ ㄲㅓㄴㅐㅈㅜㅓ",
  // "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ",
  // "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  // "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  // "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  // "ㅅㅏㄹㅏㅇㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㅇㅏㅍㅡㄴ ㄱㅓㅅ Yeah",
  // "ㅇㅣㅂㅕㄹㅇㅣㄹㅏㄴ ㅇㅏㅍㅡㄱㅗ ㄷㅓ ㅇㅏㅍㅡㄴ ㄱㅓㅅ ㄱㅏㅌㅇㅐ",
  // "ㄴㅣㄱㅏ ㅇㅓㅂㅅㅇㅡㅁㅕㄴ ㄴㅏ ㅇㅏㄴㄷㅗㅣㄹ ㄱㅓㅅ ㄱㅏㅌㅇㅏ",
  // "ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ ㅅㅏㄹㅏㅇㅎㅐㅈㅜㅓ",
  // "ㄷㅏㅅㅣ ㄴㅐ ㅍㅜㅁㅇㅡㄹㅗㅇㅗㅏㅈㅜㅓ",
  // "Love is not over over over",
  // "Love is not over over over",
  // "Love is not over over over",
  // "Love is not over over over"
]

var t = document.getElementById('korean');
var koreanTexts = [
  "그 긴 밤이 널 따라",
  "흘러만 가는 것 같아",
  "이 시간이 널 따라",
  "흐려지는 것 같아",
  "왜 멀어져 가",
  "왜 닿지 않을 만큼 가서",
  "Tell me why 멀어져 가 Why",
  "니 눈엔 더 이상",
  "내가 보이지 않니 Uh",
  "사랑이란 아프고 아픈 것 Yeah",
  "이별이란 아프고",
  "더 아픈 것 같애",
  "니가 없으면 나 안될 것 같아",
  "사랑해줘 사랑해줘",
  "다시 내 품으로 와줘",
  "사랑이란 아프고 아픈 것 Yeah",
  "이별이란 아프고",
  "더 아픈 것 같아",
  "니가 없으면 난 안될 것 같아",
  "사랑해줘 사랑해줘",
  "다시 내 품으로 와줘",
  "넌 내게 안녕이라 말했지",
  "매번 잠들 때마다",
  "난 그게 죽기보다 더 싫었어",
  "이 밤이 괜히 너와 내 끝인 것 같아서",
  "I don't know you",
  "you didn't know me",
  "헤어짐의 원인은 꽤나 심플했지",
  "이제 내가 그 말을 말해",
  "넌 안녕 처럼 내 시작과 끝에",
  "그 곳에",
  "모든 게 멈췄지 우린 적신호인듯",
  "stop",
  "할 말은 끝났지 눈물과 놓이는",
  "dot",
  "I'm not okay 이 부정을 반복해",
  "내 맘을 읊을 수 있다면 낭독해",
  "이건 발악이자 바람인걸",
  "끝없는 내 사랑이자 사람인 걸 넌",
  "사랑이란 아프고 아픈 것 yeah",
  "이별이란 아프고",
  "더 아픈 것 같애",
  "니가 없으면 나 안될 것 같아",
  "사랑해줘 사랑해줘",
  "다시 내 품으로 와줘",
  "항상 니 앞에서는 웃지",
  "사랑이 내게는 비극이라도",
  "꼭 끝난 뒤에 울지",
  "이별 너에게는 희극이라도",
  "그래 영원한 건 하나 없지",
  "죽을 것 같아도 살아 너 없이",
  "영원하길 girl",
  "Over over love is not over",
  "이 끝이 없는 미로 속에서",
  "어서 날 꺼내줘",
  "사랑이란 아프고 아픈 것",
  "이별이란 아프고 더 아픈 것 같애",
  "니가 없으면 나 안될 것 같아",
  "사랑해줘 사랑해줘",
  "다시 내 품으로 와줘",
  "사랑이란 아프고 아픈 것 yeah",
  "이별이란 아프고 더 아픈 것 같애",
  "니가 없으면 나 안될 것 같아",
  "사랑해줘 사랑해줘",
  "다시 내 품으로 와줘",
  "Love is not over over over",
  "Love is not over over over",
  "Love is not over over over",
  "Love is not over over over"
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
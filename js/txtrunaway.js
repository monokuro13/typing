var p = document.getElementById('text');
var textLists = [   
  "ㄴㅏㅁㅏㄴ ㅃㅐㄱㅗ ㄷㅏ ㅎㅐㅇㅂㅗㄱㅎㅏㄴ ㄱㅓㅅㅁㅏㄴ ㄱㅏㅌㅇㅏ",
  "ㅇㅜㄴㅡㄴ ㄱㅓㅅㅂㅗㄷㅏ ㅇㅜㅅㅇㅡㄹ ㄸㅐㄱㅏ ㄷㅓ ㅇㅏㅍㅏ",
  "ㅁㅐㄴㄴㅏㄹ ㅊㅏㅁㅇㅏㅂㅗㄹㅕ ㅎㅐㄷㅗ ㅂㅓㅌㅕㅂㅗㄹㅕ ㅎㅐㄷㅗ",
  "ㄱㅡㄱㅔ ㅈㅏㄹ ㅇㅏㄴㄷㅗㅐ ㅈㅣㄱㅡㅁ ㄴㅐㄱㅔㄴ ㄴㅔ ㅅㅗㄴㅇㅣ ㅍㅣㄹㅇㅛㅎㅐ",
  "ㄱㅡㄹㅓㄹ ㄸㅐㄴ ㄴㅜㄴㅁㅜㄹㅇㅣ ㄴㅏㄹ ㄸㅐㄴ",
  "ㄴㅐ ㅅㅗㄴㅇㅡㄹ ㄲㅗㅏㄱ ㅈㅏㅂㅇㅏ ㄷㅗㅁㅏㅇㄱㅏㄹㄲㅏ?",
  "ㅅㅜㅁㄱㅕㅈㅣㄴ 9ㅇㅗㅏ 4ㅂㅜㄴㅇㅡㅣ 3ㅇㅔㄴ",
  "ㅎㅏㅁㄲㅔㅇㅕㅇㅑ ㄱㅏㄹ ㅅㅜ ㅇㅣㅆㅇㅓ",
  "ㅂㅣㅂㅣㄷㅣ ㅂㅏㅂㅣㄷㅣ ㅇㅕㄹㅊㅏㄱㅏ ㅊㅜㄹㅂㅏㄹㅎㅏㄴㅔ",
  "ㅂㅣㅂㅣㄷㅣ ㅂㅏㅂㅣㄷㅣ ㅇㅜㄹㅣㅇㅡㅣ ㅁㅐㅈㅣㄱ ㅇㅏㅇㅣㄹㄹㅐㄴㄷㅡ",
  "ㅇㅣ ㅌㅓㄴㅓㄹㅇㅡㄹ ㅈㅣㄴㅏㅁㅕㄴ",
  "ㄴㅜㄴㅇㅡㄹ ㄸㅡㄱㅗ ㄴㅏㅁㅕㄴ",
  "ㄲㅜㅁㅅㅗㄱㅇㅡㄴ ㅎㅕㄴㅅㅣㄹㅇㅣ ㄷㅗㅐ",
  "ㄴㅐ ㅇㅕㅇㅇㅜㅓㄴㅇㅣ ㄷㅗㅐㅈㅜㅓ ㄴㅐ ㅇㅣㄹㅡㅁ ㅂㅜㄹㄹㅓㅈㅜㅓ",
  " ",
  "ㅅㅔㅅㅏㅇㅇㅡㅣ ㄲㅡㅌㅇㅔㅅㅓ",
  "ㄴㅐㄱㅔ ㄷㅐㄷㅏㅂ ㅎㅐㅈㅜㅓ",
  "ㅁㅏㄹㅎㅐㅈㅜㅓ 'ㅇㅏㄴㅣ'ㄴㅡㄴ",
  "ㅈㅏ ㅇㅣㅈㅔ",
  "ㄴㅓㅇㅗㅏ ㄴㅏ ㅎㅏㅁㄲㅔㄹㅏㅁㅕㄴ ㅎㅏㄴㅡㄹ ㅇㅜㅣㄹㅡㄹ ㄷㅏㄹㄹㅕ",
  "ㅁㅏㄹㅎㅐㅈㅜㅓ 'ㅇㅏㄴㅣ'ㄴㅡㄴ",
  "ㅈㅏ ㅇㅣㅈㅔ",
  "ㅈㅣㄱㅡㅁ ㄴㅏㄹ ㄷㅔㄹㅕㄱㅏ ㅈㅜㅓ ㅇㅜㄹㅣㄹㅏㄴㅡㄴ ㅁㅏㅂㅓㅂㅇㅔ",
  " ",
  "ㄴㅐ ㅈㅣㅍㅏㅇㅇㅣㄴㅡㄴ ㅇㅏㄹㄹㅏㅁ ㅂㅡㄹㅔㅇㅣㅋㅓ",
  "ㅇㅜㅈㅜ ㅅㅗㄱㅇㅡㄹ ㅇㅜㄹㅣㄴ ㅎㅔㅇㅓㅁ",
  "ㄷㅜ ㄱㅐㅇㅡㅣ ㄲㅗㄹㅣㅂㅕㄹㅇㅣ ㄷㅗㅣㅇㅓ",
  " ",
  "ㅇㅜㄹㅣㄱㅏ ㅎㅏㅁㄲㅔㅎㅐ",
  "ㅇㅣ ㅂㅏㅁㅇㅣ ㄲㅡㅌㄴㅏㄹㅕ ㅎㅏㄹ ㄸㅐㄴ",
  "ㅅㅣㄱㅖㄹㅡㄹ ㄷㅗㅣㄱㅏㅁㅇㅏ ㅈㅣㄱㅡㅁ",
  "ㄱㅡㅁㅈㅣㄷㅗㅣㄴ ㅈㅏㅇㄴㅏㄴㄱㅗㅏ ㅇㅣ",
  "ㅍㅜㄹㅡㄴ ㅂㅣㅊ ㅂㅜㄹㄲㅗㅊㅇㅣ ㅍㅣㅇㅓ",
  "ㅎㅏㄴㅡㄹㅂㅣㅊ ㅁㅏㅂㅓㅂㅈㅣㄴ ㄱㅛㅅㅣㄹㅇㅡㄹ ㅅㅐㄱㅊㅣㄹㅎㅏㄹㄹㅐ",
  "ㅅㅗㅎㅗㅏㄴㅇㅡㅣ ㅈㅜㅁㅜㄴㅇㅣ ㄴㅓㅇㅗㅏ ㄴㅏㄹ ㅇㅣㅇㅓ ㅈㅜㄱㅔ",
  "ㅇㅣ ㅌㅓㄴㅓㄹㅇㅡㄹ ㅈㅣㄴㅏㅁㅕㄴ ㄴㅜㄴㅇㅡㄹ ㄸㅡㄱㅗ ㄴㅏㅁㅕㄴ",
  "ㄲㅜㅁㅅㅗㄱㅇㅡㄴ ㅎㅕㄴㅅㅣㄹㅇㅣ ㄷㅗㅐ",
  "ㄴㅐ ㅇㅕㅇㅇㅜㅓㄴㅇㅣ ㄷㅗㅐㅈㅜㅓ ㄴㅐ ㅇㅣㄹㅡㅁ ㅂㅜㄹㄹㅓㅈㅜㅓ",
  " ",
  "ㅅㅔㅅㅏㅇㅇㅡㅣ ㄲㅡㅌㅇㅔㅅㅓ",
  "ㄴㅐㄱㅔ ㄷㅐㄷㅏㅂ ㅎㅐㅈㅜㅓ",
  "ㅁㅏㄹㅎㅐㅈㅜㅓ 'ㅇㅏㄴㅣ'ㄴㅡㄴ",
  "ㅈㅏ ㅇㅣㅈㅔ",
  "ㄴㅓㅇㅗㅏ ㄴㅏ ㅎㅏㅁㄲㅔㄹㅏㅁㅕㄴ ㅎㅏㄴㅡㄹ ㅇㅜㅣㄹㅡㄹ ㄷㅏㄹㄹㅕ",
  "ㅁㅏㄹㅎㅐㅈㅜㅓ 'ㅇㅏㄴㅣ'ㄴㅡㄴ",
  "ㅈㅏ ㅇㅣㅈㅔ",
  "ㅈㅣㄱㅡㅁ ㄴㅏㄹ ㄷㅔㄹㅕㄱㅏ ㅈㅜㅓ ㅇㅜㄹㅣㄹㅏㄴㅡㄴ ㅁㅏㅂㅓㅂㅇㅔ",
  "ㅋㅏㅁㅋㅏㅁㅎㅏㄴ ㅂㅏㅁ ㄱㅡ ㄱㅖㄷㅏㄴ ㅁㅣㅌㅇㅔㅅㅓ",
  "ㄴㅓㄹ ㅂㅗㄴ ㅅㅜㄴㄱㅏㄴ ㅁㅏㅂㅓㅂㅇㅡㄴ ㅅㅣㅈㅏㄱㄷㅗㅐㅆㅇㅓ",
  "ㄴㅔ ㄴㅜㄴㅁㅜㄹㄹㅗ ㅈㅜㅁㅜㄴㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㅈㅏ",
  "ㄷㅏㅅㅣㄴ ㅇㅜㄹㅈㅣ ㅇㅏㄴㅎㄱㅔ",
  "ㄴㅐ ㅇㅕㅇㅇㅜㅓㄴㅇㅣ ㄷㅗㅐㅈㅜㅓ ㄴㅐ ㅇㅣㄹㅡㅁ ㅂㅜㄹㄹㅓㅈㅜㅓ",
  " ",
  "ㅅㅔㅅㅏㅇㅇㅡㅣ ㄲㅡㅌㅇㅔㅅㅓ",
  "ㄴㅐㄱㅔ ㄷㅐㄷㅏㅂ ㅎㅐㅈㅜㅓ",
  "ㅁㅏㄹㅎㅐㅈㅜㅓ 'ㅇㅏㄴㅣ'ㄴㅡㄴ",
  "ㅈㅏ ㅇㅣㅈㅔ",
  "ㄴㅓㅇㅗㅏ ㄴㅏ ㅎㅏㅁㄲㅔㄹㅏㅁㅕㄴ ㅎㅏㄴㅡㄹ ㅇㅜㅣㄹㅡㄹ ㄷㅏㄹㄹㅕ",
  "ㅁㅏㄹㅎㅐㅈㅜㅓ 'ㅇㅏㄴㅣ'ㄴㅡㄴ",
  "ㅈㅏ ㅇㅣㅈㅔ",
  "ㅈㅣㄱㅡㅁ ㄴㅏㄹ ㄷㅔㄹㅕㄱㅏ ㅈㅜㅓ ㅇㅜㄹㅣㄹㅏㄴㅡㄴ ㅁㅏㅂㅓㅂㅇㅔ",
  // "ㄴㅏㅁㅏㄴ ㅃㅐㄱㅗ ㄷㅏ ㅎㅐㅇㅂㅗㄱㅎㅏㄴ ㄱㅓㅅㅁㅏㄴ ㄱㅏㅌㅇㅏ",
  // "ㅇㅜㄴㅡㄴ ㄱㅓㅅㅂㅗㄷㅏ ㅇㅜㅅㅇㅡㄹ ㄸㅐㄱㅏ ㄷㅓ ㅇㅏㅍㅏ",
  // "ㅁㅐㄴㄴㅏㄹ ㅊㅏㅁㅇㅏㅂㅗㄹㅕ ㅎㅐㄷㅗ ㅂㅓㅌㅕㅂㅗㄹㅕ ㅎㅐㄷㅗ",
  // "ㄱㅡㄱㅔ ㅈㅏㄹ ㅇㅏㄴㄷㅗㅐ ㅈㅣㄱㅡㅁ ㄴㅐㄱㅔㄴ ㄴㅔ ㅅㅗㄴㅇㅣ ㅍㅣㄹㅇㅛㅎㅐ",
  // "ㄱㅡㄹㅓㄹ ㄸㅐㄴ ㄴㅜㄴㅁㅜㄹㅇㅣ ㄴㅏㄹ ㄸㅐㄴ",
  // "ㄴㅐ ㅅㅗㄴㅇㅡㄹ ㄲㅗㅏㄱ ㅈㅏㅂㅇㅏ ㄷㅗㅁㅏㅇㄱㅏㄹㄲㅏ?",
  // "ㅅㅜㅁㄱㅕㅈㅣㄴ 9ㅇㅗㅏ 4ㅂㅜㄴㅇㅡㅣ 3ㅇㅔㄴ",
  // "ㅎㅏㅁㄲㅔㅇㅕㅇㅑ ㄱㅏㄹ ㅅㅜ ㅇㅣㅆㅇㅓ",
  // "ㅂㅣㅂㅣㄷㅣ ㅂㅏㅂㅣㄷㅣ ㅇㅕㄹㅊㅏㄱㅏ ㅊㅜㄹㅂㅏㄹㅎㅏㄴㅔ",
  // "ㅂㅣㅂㅣㄷㅣ ㅂㅏㅂㅣㄷㅣ ㅇㅜㄹㅣㅇㅡㅣ ㅁㅐㅈㅣㄱ ㅇㅏㅇㅣㄹㄹㅐㄴㄷㅡ",
  // "ㅇㅣ ㅌㅓㄴㅓㄹㅇㅡㄹ ㅈㅣㄴㅏㅁㅕㄴ",
  // "ㄴㅜㄴㅇㅡㄹ ㄸㅡㄱㅗ ㄴㅏㅁㅕㄴ",
  // "ㄲㅜㅁㅅㅗㄱㅇㅡㄴ ㅎㅕㄴㅅㅣㄹㅇㅣ ㄷㅗㅐ",
  // "ㄴㅐ ㅇㅕㅇㅇㅜㅓㄴㅇㅣ ㄷㅗㅐㅈㅜㅓ ㄴㅐ ㅇㅣㄹㅡㅁ ㅂㅜㄹㄹㅓㅈㅜㅓ",
  // "Run away run away run away with me",
  // "ㅅㅔㅅㅏㅇㅇㅡㅣ ㄲㅡㅌㅇㅔㅅㅓ Forever together",
  // "Run away babe ㄴㅐㄱㅔ ㄷㅐㄷㅏㅂ ㅎㅐㅈㅜㅓ",
  // "ㅁㅏㄹㅎㅐㅈㅜㅓ Yes 'ㅇㅏㄴㅣ'ㄴㅡㄴ No",
  // "Don't wanna stay ㅈㅏ ㅇㅣㅈㅔ Go",
  // "ㄴㅓㅇㅗㅏ ㄴㅏ ㅎㅏㅁㄲㅔㄹㅏㅁㅕㄴ ㅎㅏㄴㅡㄹ ㅇㅜㅣㄹㅡㄹ ㄷㅏㄹㄹㅕ",
  // "ㅁㅏㄹㅎㅐㅈㅜㅓ Yes 'ㅇㅏㄴㅣ'ㄴㅡㄴ No",
  // "Don't wanna stay ㅈㅏ ㅇㅣㅈㅔ Go",
  // "ㅈㅣㄱㅡㅁ ㄴㅏㄹ ㄷㅔㄹㅕㄱㅏ ㅈㅜㅓ ㅇㅜㄹㅣㄹㅏㄴㅡㄴ ㅁㅏㅂㅓㅂㅇㅔ",
  // "I don't I don't wanna wake up",
  // "ㄴㅐ ㅈㅣㅍㅏㅇㅇㅣㄴㅡㄴ ㅇㅏㄹㄹㅏㅁ ㅂㅡㄹㅔㅇㅣㅋㅓ",
  // "ㅇㅜㅈㅜ ㅅㅗㄱㅇㅡㄹ ㅇㅜㄹㅣㄴ ㅎㅔㅇㅓㅁ",
  // "ㄷㅜ ㄱㅐㅇㅡㅣ ㄲㅗㄹㅣㅂㅕㄹㅇㅣ ㄷㅗㅣㅇㅓ Bungee",
  // "It's okay don't be afraid",
  // "ㅇㅜㄹㅣㄱㅏ ㅎㅏㅁㄲㅔㅎㅐ",
  // "ㅇㅣ ㅂㅏㅁㅇㅣ ㄲㅡㅌㄴㅏㄹㅕ ㅎㅏㄹ ㄸㅐㄴ",
  // "ㅅㅣㄱㅖㄹㅡㄹ ㄷㅗㅣㄱㅏㅁㅇㅏ ㅈㅣㄱㅡㅁ Rewind",
  // "ㄱㅡㅁㅈㅣㄷㅗㅣㄴ ㅈㅏㅇㄴㅏㄴㄱㅗㅏ ㅇㅣ Magic hour",
  // "ㅍㅜㄹㅡㄴ ㅂㅣㅊ ㅂㅜㄹㄲㅗㅊㅇㅣ ㅍㅣㅇㅓ",
  // "ㅎㅏㄴㅡㄹㅂㅣㅊ ㅁㅏㅂㅓㅂㅈㅣㄴ ㄱㅛㅅㅣㄹㅇㅡㄹ ㅅㅐㄱㅊㅣㄹㅎㅏㄹㄹㅐ",
  // "ㅅㅗㅎㅗㅏㄴㅇㅡㅣ ㅈㅜㅁㅜㄴㅇㅣ ㄴㅓㅇㅗㅏ ㄴㅏㄹ ㅇㅣㅇㅓ ㅈㅜㄱㅔ",
  // "ㅇㅣ ㅌㅓㄴㅓㄹㅇㅡㄹ ㅈㅣㄴㅏㅁㅕㄴ ㄴㅜㄴㅇㅡㄹ ㄸㅡㄱㅗ ㄴㅏㅁㅕㄴ",
  // "ㄲㅜㅁㅅㅗㄱㅇㅡㄴ ㅎㅕㄴㅅㅣㄹㅇㅣ ㄷㅗㅐ",
  // "ㄴㅐ ㅇㅕㅇㅇㅜㅓㄴㅇㅣ ㄷㅗㅐㅈㅜㅓ ㄴㅐ ㅇㅣㄹㅡㅁ ㅂㅜㄹㄹㅓㅈㅜㅓ",
  // "Run away run away run away with me",
  // "ㅅㅔㅅㅏㅇㅇㅡㅣ ㄲㅡㅌㅇㅔㅅㅓ Forever together",
  // "Run away babe ㄴㅐㄱㅔ ㄷㅐㄷㅏㅂ ㅎㅐㅈㅜㅓ",
  // "ㅁㅏㄹㅎㅐㅈㅜㅓ Yes 'ㅇㅏㄴㅣ'ㄴㅡㄴ No",
  // "Don't wanna stay ㅈㅏ ㅇㅣㅈㅔ Go",
  // "ㄴㅓㅇㅗㅏ ㄴㅏ ㅎㅏㅁㄲㅔㄹㅏㅁㅕㄴ ㅎㅏㄴㅡㄹ ㅇㅜㅣㄹㅡㄹ ㄷㅏㄹㄹㅕ",
  // "ㅁㅏㄹㅎㅐㅈㅜㅓ Yes 'ㅇㅏㄴㅣ'ㄴㅡㄴ No",
  // "Don't wanna stay ㅈㅏ ㅇㅣㅈㅔ Go",
  // "ㅈㅣㄱㅡㅁ ㄴㅏㄹ ㄷㅔㄹㅕㄱㅏ ㅈㅜㅓ ㅇㅜㄹㅣㄹㅏㄴㅡㄴ ㅁㅏㅂㅓㅂㅇㅔ",
  // "ㅋㅏㅁㅋㅏㅁㅎㅏㄴ ㅂㅏㅁ ㄱㅡ ㄱㅖㄷㅏㄴ ㅁㅣㅌㅇㅔㅅㅓ",
  // "ㄴㅓㄹ ㅂㅗㄴ ㅅㅜㄴㄱㅏㄴ ㅁㅏㅂㅓㅂㅇㅡㄴ ㅅㅣㅈㅏㄱㄷㅗㅐㅆㅇㅓ",
  // "ㄴㅔ ㄴㅜㄴㅁㅜㄹㄹㅗ ㅈㅜㅁㅜㄴㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㅈㅏ",
  // "ㄷㅏㅅㅣㄴ ㅇㅜㄹㅈㅣ ㅇㅏㄴㅎㄱㅔ",
  // "ㄴㅐ ㅇㅕㅇㅇㅜㅓㄴㅇㅣ ㄷㅗㅐㅈㅜㅓ ㄴㅐ ㅇㅣㄹㅡㅁ ㅂㅜㄹㄹㅓㅈㅜㅓ",
  // "Run away run away run away with me",
  // "ㅅㅔㅅㅏㅇㅇㅡㅣ ㄲㅡㅌㅇㅔㅅㅓ Forever together",
  // "Run away babe ㄴㅐㄱㅔ ㄷㅐㄷㅏㅂ ㅎㅐㅈㅜㅓ",
  // "ㅁㅏㄹㅎㅐㅈㅜㅓ Yes 'ㅇㅏㄴㅣ'ㄴㅡㄴ No",
  // "Don't wanna stay ㅈㅏ ㅇㅣㅈㅔ Go",
  // "ㄴㅓㅇㅗㅏ ㄴㅏ ㅎㅏㅁㄲㅔㄹㅏㅁㅕㄴ ㅎㅏㄴㅡㄹ ㅇㅜㅣㄹㅡㄹ ㄷㅏㄹㄹㅕ",
  // "ㅁㅏㄹㅎㅐㅈㅜㅓ Yes 'ㅇㅏㄴㅣ'ㄴㅡㄴ No",
  // "Don't wanna stay ㅈㅏ ㅇㅣㅈㅔ Go",
  // "ㅈㅣㄱㅡㅁ ㄴㅏㄹ ㄷㅔㄹㅕㄱㅏ ㅈㅜㅓ ㅇㅜㄹㅣㄹㅏㄴㅡㄴ ㅁㅏㅂㅓㅂㅇㅔ",
]

var t = document.getElementById('korean');
var koreanTexts = [
  "나만 빼고 다 행복한 것만 같아",
  "우는 것보다 웃을 때가 더 아파",
  "맨날 참아보려 해도 버텨보려 해도",
  "그게 잘 안돼 지금 내겐 네 손이 필요해",
  "그럴 땐 눈물이 날 땐",
  "내 손을 꽉 잡아 도망갈까?",
  "숨겨진 9와 4분의 3엔",
  "함께여야 갈 수 있어",
  "비비디 바비디 열차가 출발하네",
  "비비디 바비디 우리의 매직 아일랜드",
  "이 터널을 지나면",
  "눈을 뜨고 나면",
  "꿈속은 현실이 돼",
  "내 영원이 돼줘 내 이름 불러줘",
  "Run away run away run away with me",
  "세상의 끝에서 Forever together",
  "Run away babe 내게 대답 해줘",
  "말해줘 Yes '아니'는 No",
  "Don't wanna stay 자 이제 Go",
  "너와 나 함께라면 하늘 위를 달려",
  "말해줘 Yes '아니'는 No",
  "Don't wanna stay 자 이제 Go",
  "지금 날 데려가 줘 우리라는 마법에",
  "I don't I don't wanna wake up",
  "내 지팡이는 알람 브레이커",
  "우주 속을 우린 헤엄",
  "두 개의 꼬리별이 되어 Bungee",
  "It's okay don't be afraid",
  "우리가 함께해",
  "이 밤이 끝나려 할 땐",
  "시계를 되감아 지금 Rewind",
  "금지된 장난과 이 Magic hour",
  "푸른 빛 불꽃이 피어",
  "하늘빛 마법진 교실을 색칠할래",
  "소환의 주문이 너와 날 이어 주게",
  "이 터널을 지나면 눈을 뜨고 나면",
  "꿈속은 현실이 돼",
  "내 영원이 돼줘 내 이름 불러줘",
  "Run away run away run away with me",
  "세상의 끝에서 Forever together",
  "Run away babe 내게 대답 해줘",
  "말해줘 Yes '아니'는 No",
  "Don't wanna stay 자 이제 Go",
  "너와 나 함께라면 하늘 위를 달려",
  "말해줘 Yes '아니'는 No",
  "Don't wanna stay 자 이제 Go",
  "지금 날 데려가 줘 우리라는 마법에",
  "캄캄한 밤 그 계단 밑에서",
  "널 본 순간 마법은 시작됐어",
  "네 눈물로 주문을 만들자",
  "다신 울지 않게",
  "내 영원이 돼줘 내 이름 불러줘",
  "Run away run away run away with me",
  "세상의 끝에서 Forever together",
  "Run away babe 내게 대답 해줘",
  "말해줘 Yes '아니'는 No",
  "Don't wanna stay 자 이제 Go",
  "너와 나 함께라면 하늘 위를 달려",
  "말해줘 Yes '아니'는 No",
  "Don't wanna stay 자 이제 Go",
  "지금 날 데려가 줘 우리라는 마법에"
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
var p = document.getElementById('text');
var textLists = [
  "ㄴㅏㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  "ㄴㅏㄴ ㅇㅏㅈㅣㄱㄷㅗ ㄱㅣㄴ ㄲㅜㅁㅇㅡㄹ ㄲㅜㄱㅗ ㅇㅣㅆㅇㅓ",
  "ㄱㅡ ㅇㅓㄸㅓㄴ ㅇㅣㅇㅔㄱㅔㄷㅗ ㅁㅏㄹㅎㅏㅈㅣ ㅁㅗㅅㅎㅐㅆㄷㅓㄴ",
  "ㅇㅏㅊㅣㅁ ㅎㅐㅅㅅㅏㄹㅇㅣ ㄴㅏㄹ ㄷㅜㄷㅡㄹㅣㅁㅕ",
  "ㅁㅐㅇㅣㄹ ㅁㅓㅁㅜㄹㄹㅓㅆㄷㅏ ㄱㅏㄴㅡㄴㄷㅔ ㅁㅗㄹㅡㅈㅣ",
  "ㅊㅓㅇㅡㅁㅇㅡㄹㅗ ㄴㅓㅇㅔㄱㅔㅁㅏㄴ ㅂㅗㅇㅕㅈㅜㄹㄱㅔ",
  "ㄴㅏㄹㅡㄹ ㄸㅏㄹㅏ",
  "ㅅㅗㄴㅇㅡㄹ ㅈㅏㅂㅇㅏ",
  "ㄴㅐ ㅇㅏㄴㅇㅔ ㅅㅗㅈㅜㅇㅎㅏㄴ ㅎㅗㄴㅈㅏㅁㅏㄴㅇㅡㅣ ㅈㅏㅇㅅㅗㄱㅏ ㅇㅣㅆㅇㅓ",
  "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅂㅕㄹㄱㅓ ㅇㅏㄴㅣㄴ ㅍㅜㅇㄱㅕㅇㅇㅣㅈㅣㅁㅏㄴ",
  "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㄱㅗㄷ ㅁㅏㄴㄴㅏㄱㅔ ㄷㅗㅣㄹ ㄱㅓㄹ",
  "ㅇㅣ ㅇㅏㄴㅇㅔ ㅁㅓㅅㅈㅣㄱㅗ ㄴㅗㄹㄹㅏㅇㅜㄴ ㄱㅓㄹ ㅅㅣㅁㅇㅓㄷㅜㅓㅆㄴㅡㄴㄷㅔ",
  "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴ ㅂㅗㅇㅣㅈㅣㅁㅏㄴ",
  "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㅇㅏㄹㄱㅔ ㄷㅗㅣㄹ ㄱㅓㅇㅑ",
  "ㄴㅏㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  "ㄴㅓㅁㅜ ㄷㅏㄴㅅㅜㄴㅎㅐ ㄱㅡ  ㅅㅏㄹㅏㅁㄷㅡㄹㅇㅡㄴ ㅁㅏㄹㅇㅑ",
  "ㄴㅜㄴㅇㅡㄹㅗ ㅂㅗㄴㅡㄴ ㄱㅓㅅㅁㅏㄴ ㅁㅣㄷㅇㅡㄹㅕ ㅎㅏㄴㅡㄴ ㄱㅓㄹ",
  "ㅂㅣㅅㅂㅏㅇㅇㅜㄹㅇㅡㄴ ㄴㅏㄹ ㄷㅏㄷㅗㄱㅇㅣㅁㅕ ㅈㅏㅁㅅㅣ",
  "ㄴㅐㄱㅔ ㄸㅗ ㅎㅣㅁㅇㅡㄹ ㅈㅜㄱㅗㄴ ㅎㅐ ㄷㅏㅈㅓㅇㅎㅣ",
  "ㅇㅗㄴㅡㄹ ㅎㅏㄹㅜ ㅎㅏㄴ ㅅㅏㄹㅏㅁㅁㅏㄴ ㅊㅗㄷㅐㅎㅏㄹㄱㅔ",
  "ㄴㅏㄹㅡㄹ ㄸㅏㄹㅏ",
  "ㅅㅏㅇㅅㅏㅇㅎㅐㅂㅗㅏ",
  "ㄴㅐ ㅇㅏㄴㅇㅔ ㅅㅗㅈㅜㅇㅎㅏㄴ ㅎㅗㄴㅈㅏㅁㅏㄴㅇㅡㅣ ㅈㅏㅇㅅㅗㄱㅏ ㅇㅣㅆㅇㅓ",
  "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅂㅕㄹㄱㅓ ㅇㅏㄴㅣㄴ ㅍㅜㅇㄱㅕㅇㅇㅣㅈㅣㅁㅏㄴ",
  "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㄱㅗㄷ ㅁㅏㄴㄴㅏㄱㅔ ㄷㅗㅣㄹ ㄱㅓㄹ",
  "ㅇㅣ ㅇㅏㄴㅇㅔ ㅁㅓㅅㅈㅣㄱㅗ ㄴㅗㄹㄹㅏㅇㅜㄴ ㄱㅓㄹ ㅅㅣㅁㅇㅓㄷㅜㅓㅆㄴㅡㄴㄷㅔ",
  "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴ ㅂㅗㅇㅣㅈㅣㅁㅏㄴ",
  "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㅇㅏㄹㄱㅔ ㄷㅗㅣㄹ ㄱㅓㅇㅑ",
  "ㄴㅏㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  "ㅇㅏㅁㅏ ㅇㅓㄴㅈㅔㄴㄱㅏ ㅁㅏㄹㅇㅑ",
  "ㅇㅣ ㄲㅜㅁㄷㅡㄹㅇㅣ ㅎㅕㄴㅅㅣㄹㅇㅣ ㄷㅗㅣㅁㅕㄴ",
  "ㅎㅏㅁㄲㅔ ㄴㅏㄴㅜㄴ ㅅㅜㄴㄱㅏㄴㄷㅡㄹㅇㅡㄹ ㅇㅣ ㄱㅏㄴㅡㅇㅅㅓㅇㄷㅡㄹㅇㅡㄹ",
  "ㄲㅗㄱ ㄷㅏㅅㅣ ㄱㅣㅇㅓㄱㅎㅐㅈㅜㅓ",
  "ㄴㅔ ㅇㅏㄴㅇㅔ ㅇㅕㄹㄹㅕㅆㄷㅓㄴ ㅁㅜㄴㅌㅡㅁㅇㅡㄹㅗ ㅂㅗㄴ ㅈㅓㄱㅇㅣ ㅇㅣㅆㅇㅓ",
  "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅂㅕㄹㄱㅓ ㅇㅏㄴㅣㄴ ㅍㅜㅇㄱㅕㅇㅇㅣㅈㅣㅁㅏㄴ",
  "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㄱㅗㄷ ㅁㅏㄴㄴㅏㄱㅔ ㄷㅗㅣㄹ ㄱㅓㄹ",
  "ㄱㅡ ㅇㅏㄴㅇㅔ ㅁㅓㅅㅈㅣㄱㅗ ㄴㅗㄹㄹㅏㅇㅜㄴ ㄱㅓㄹ ㅅㅣㅁㅇㅓㄷㅜㅓㅆㄴㅡㄴㄷㅔ",
  "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴ ㅂㅗㅇㅣㅈㅣㅁㅏㄴ",
  "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㅇㅏㄹㄱㅔ ㄷㅗㅣㄹ ㄱㅓㅇㅑ",
  "ㄴㅓㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  "ㅁㅜㄹㅓㄱㅁㅜㄹㅓㄱ ㅇㅓㅅㅓㅇㅓㅅㅓ ㅈㅏㄹㅏㄴㅏ ㅈㅜㅓ"
  // "ㄴㅏㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  // "ㄴㅏㄴ ㅇㅏㅈㅣㄱㄷㅗ ㄱㅣㄴ ㄲㅜㅁㅇㅡㄹ ㄲㅜㄱㅗ ㅇㅣㅆㅇㅓ",
  // "ㄱㅡ ㅇㅓㄸㅓㄴ ㅇㅣㅇㅔㄱㅔㄷㅗ ㅁㅏㄹㅎㅏㅈㅣ ㅁㅗㅅㅎㅐㅆㄷㅓㄴ",
  // "ㅇㅏㅊㅣㅁ ㅎㅐㅅㅅㅏㄹㅇㅣ ㄴㅏㄹ ㄷㅜㄷㅡㄹㅣㅁㅕ Hello",
  // "ㅁㅐㅇㅣㄹ ㅁㅓㅁㅜㄹㄹㅓㅆㄷㅏ ㄱㅏㄴㅡㄴㄷㅔ ㅁㅗㄹㅡㅈㅣ",
  // "ㅊㅓㅇㅡㅁㅇㅡㄹㅗ ㄴㅓㅇㅔㄱㅔㅁㅏㄴ ㅂㅗㅇㅕㅈㅜㄹㄱㅔ",
  // "ㄴㅏㄹㅡㄹ ㄸㅏㄹㅏ Come with me bae",
  // "ㅅㅗㄴㅇㅡㄹ ㅈㅏㅂㅇㅏ You and me",
  // "ㄴㅐ ㅇㅏㄴㅇㅔ ㅅㅗㅈㅜㅇㅎㅏㄴ ㅎㅗㄴㅈㅏㅁㅏㄴㅇㅡㅣ ㅈㅏㅇㅅㅗㄱㅏ ㅇㅣㅆㅇㅓ",
  // "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅂㅕㄹㄱㅓ ㅇㅏㄴㅣㄴ ㅍㅜㅇㄱㅕㅇㅇㅣㅈㅣㅁㅏㄴ",
  // "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㄱㅗㄷ ㅁㅏㄴㄴㅏㄱㅔ ㄷㅗㅣㄹ ㄱㅓㄹ",
  // "ㅇㅣ ㅇㅏㄴㅇㅔ ㅁㅓㅅㅈㅣㄱㅗ ㄴㅗㄹㄹㅏㅇㅜㄴ ㄱㅓㄹ ㅅㅣㅁㅇㅓㄷㅜㅓㅆㄴㅡㄴㄷㅔ",
  // "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴ ㅂㅗㅇㅣㅈㅣㅁㅏㄴ",
  // "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㅇㅏㄹㄱㅔ ㄷㅗㅣㄹ ㄱㅓㅇㅑ",
  // "ㄴㅏㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  // "ㄴㅓㅁㅜ ㄷㅏㄴㅅㅜㄴㅎㅐ ㄱㅡ  ㅅㅏㄹㅏㅁㄷㅡㄹㅇㅡㄴ ㅁㅏㄹㅇㅑ",
  // "ㄴㅜㄴㅇㅡㄹㅗ ㅂㅗㄴㅡㄴ ㄱㅓㅅㅁㅏㄴ ㅁㅣㄷㅇㅡㄹㅕ ㅎㅏㄴㅡㄴ ㄱㅓㄹ",
  // "ㅂㅣㅅㅂㅏㅇㅇㅜㄹㅇㅡㄴ ㄴㅏㄹ ㄷㅏㄷㅗㄱㅇㅣㅁㅕ ㅈㅏㅁㅅㅣ",
  // "ㄴㅐㄱㅔ ㄸㅗ ㅎㅣㅁㅇㅡㄹ ㅈㅜㄱㅗㄴ ㅎㅐ ㄷㅏㅈㅓㅇㅎㅣ",
  // "ㅇㅗㄴㅡㄹ ㅎㅏㄹㅜ ㅎㅏㄴ ㅅㅏㄹㅏㅁㅁㅏㄴ ㅊㅗㄷㅐㅎㅏㄹㄱㅔ",
  // "ㄴㅏㄹㅡㄹ ㄸㅏㄹㅏ Come with me bae",
  // "ㅅㅏㅇㅅㅏㅇㅎㅐㅂㅗㅏ You and me",
  // "ㄴㅐ ㅇㅏㄴㅇㅔ ㅅㅗㅈㅜㅇㅎㅏㄴ ㅎㅗㄴㅈㅏㅁㅏㄴㅇㅡㅣ ㅈㅏㅇㅅㅗㄱㅏ ㅇㅣㅆㅇㅓ",
  // "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅂㅕㄹㄱㅓ ㅇㅏㄴㅣㄴ ㅍㅜㅇㄱㅕㅇㅇㅣㅈㅣㅁㅏㄴ",
  // "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㄱㅗㄷ ㅁㅏㄴㄴㅏㄱㅔ ㄷㅗㅣㄹ ㄱㅓㄹ",
  // "ㅇㅣ ㅇㅏㄴㅇㅔ ㅁㅓㅅㅈㅣㄱㅗ ㄴㅗㄹㄹㅏㅇㅜㄴ ㄱㅓㄹ ㅅㅣㅁㅇㅓㄷㅜㅓㅆㄴㅡㄴㄷㅔ",
  // "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴ ㅂㅗㅇㅣㅈㅣㅁㅏㄴ",
  // "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㅇㅏㄹㄱㅔ ㄷㅗㅣㄹ ㄱㅓㅇㅑ",
  // "ㄴㅏㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  // "ㅇㅏㅁㅏ ㅇㅓㄴㅈㅔㄴㄱㅏ ㅁㅏㄹㅇㅑ",
  // "ㅇㅣ ㄲㅜㅁㄷㅡㄹㅇㅣ ㅎㅕㄴㅅㅣㄹㅇㅣ ㄷㅗㅣㅁㅕㄴ",
  // "ㅎㅏㅁㄲㅔ ㄴㅏㄴㅜㄴ ㅅㅜㄴㄱㅏㄴㄷㅡㄹㅇㅡㄹ ㅇㅣ ㄱㅏㄴㅡㅇㅅㅓㅇㄷㅡㄹㅇㅡㄹ",
  // "ㄲㅗㄱ ㄷㅏㅅㅣ ㄱㅣㅇㅓㄱㅎㅐㅈㅜㅓ",
  // "ㄴㅔ ㅇㅏㄴㅇㅔ ㅇㅕㄹㄹㅕㅆㄷㅓㄴ ㅁㅜㄴㅌㅡㅁㅇㅡㄹㅗ ㅂㅗㄴ ㅈㅓㄱㅇㅣ ㅇㅣㅆㅇㅓ",
  // "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅂㅕㄹㄱㅓ ㅇㅏㄴㅣㄴ ㅍㅜㅇㄱㅕㅇㅇㅣㅈㅣㅁㅏㄴ",
  // "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㄱㅗㄷ ㅁㅏㄴㄴㅏㄱㅔ ㄷㅗㅣㄹ ㄱㅓㄹ",
  // "ㄱㅡ ㅇㅏㄴㅇㅔ ㅁㅓㅅㅈㅣㄱㅗ ㄴㅗㄹㄹㅏㅇㅜㄴ ㄱㅓㄹ ㅅㅣㅁㅇㅓㄷㅜㅓㅆㄴㅡㄴㄷㅔ",
  // "ㅇㅏㅈㅣㄱㅇㅡㄴ ㅇㅏㅁㅜㄱㅓㅅㄷㅗ ㅇㅏㄴ ㅂㅗㅇㅣㅈㅣㅁㅏㄴ",
  // "ㅈㅗㄱㅡㅁㅁㅏㄴ ㄱㅣㄷㅏㄹㅣㅁㅕㄴ ㅇㅏㄹㄱㅔ ㄷㅗㅣㄹ ㄱㅓㅇㅑ",
  // "ㄴㅓㅇㅡㅣ ㅂㅣㅁㅣㄹㅈㅓㅇㅇㅜㅓㄴ",
  // "ㅁㅜㄹㅓㄱㅁㅜㄹㅓㄱ ㅇㅓㅅㅓㅇㅓㅅㅓ ㅈㅏㄹㅏㄴㅏ ㅈㅜㅓ Beautiful"
];

var t = document.getElementById('korean');
 var koreanTexts = [
  "나의 비밀정원",
  "난 아직도 긴 꿈을 꾸고 있어",
  "그 어떤 이에게도 말하지 못했던",
  "아침 햇살이 날 두드리며 Hello",
  "매일 머물렀다 가는데 모르지",
  "처음으로 너에게만 보여줄게",
  "나를 따라 Come with me bae",
  "손을 잡아 You and me",
  "내 안에 소중한 혼자만의 장소가 있어",
  "아직은 별거 아닌 풍경이지만",
  "조금만 기다리면 곧 만나게 될 걸",
  "이 안에 멋지고 놀라운 걸 심어뒀는데",
  "아직은 아무것도 안 보이지만",
  "조금만 기다리면 알게 될 거야",
  "나의 비밀정원",
  "너무 단순해 그 사람들은 말야",
  "눈으로 보는 것만 믿으려 하는 걸",
  "빗방울은 날 다독이며 잠시",
  "내게 또 힘을 주곤 해 다정히",
  "오늘 하루 한 사람만 초대할게",
  "나를 따라 Come with me bae",
  "상상해봐 You and me ",
  "내 안에 소중한 혼자만의 장소가 있어",
  "아직은 별거 아닌 풍경이지만",
  "조금만 기다리면 곧 만나게 될 걸",
  "이 안에 멋지고 놀라운 걸 심어뒀는데",
  "아직은 아무것도 안 보이지만",
  "조금만 기다리면 알게 될 거야",
  "나의 비밀정원",
  "아마 언젠가 말야",
  "이 꿈들이 현실이 되면",
  "함께 나눈 순간들을 이 가능성들을",
  "꼭 다시 기억해줘",
  "네 안에 열렸던 문틈으로 본 적이 있어",
  "아직은 별거 아닌 풍경이지만",
  "조금만 기다리면 곧 만나게 될 걸",
  "그 안에 멋지고 놀라운 걸 심어뒀는데",
  "아직은 아무것도 안 보이지만",
  "조금만 기다리면 알게 될 거야",
  "너의 비밀정원",
  "무럭무럭 어서어서 자라나 줘 Beautiful"
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
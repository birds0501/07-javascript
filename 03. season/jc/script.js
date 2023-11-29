//대상을 변수에 저장
const $body = document.body;
const $date = document.querySelector('.date');
const $season = document.querySelector('.season');

//날짜와 시간에 대한 정보 얻기(기본적으로 스크립트에서 제공하는 객체 변수로 가져오기)
const now = new Date();
console.log(now);
console.log(now.getFullYear()); //년도

//월, 일
console.log(now.getMonth() + 1); //월은 0부터 카운트-->1더해주면 됨
console.log(now.getDate());

//요일 : 0-일, 1-월, 2-화, 3-수, 4-목, 5-금, 6-토
console.log(now.getDay());
//요일을 정리하자. 숫자로 요일이 표현되면 안되니께
const dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log(now.getDate());

//시간, 분, 초
console.log(now.getHours()); //0~23으로 표기됨
console.log(now.getMinutes());
console.log(now.getSeconds());

//$date에 넣을 정보를 변수에 저장
const dateText = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
console.log(dateText);

//$date에 접근해서 textContent사용 $date(.date)에 날짜 뿌리기
$date.textContent = dateText;

//계절 확인 및 인사말 작성
//월을 좀 더 짧게 쓰기 위해 변수에 저장
const month = now.getMonth() + 1;
let seasonText; //const는 변수 선언과 동시에 값을 넣어줘야 하는데, 봄 인삿말을 바로 넣기에는 인사말이 바뀌어야해서, let해야함

if (month >= 3 && month <= 5) {
  //봄
  $body.classList.add('spring');
  seasonText = '☘화창한 봄입니다.';
} else if (month >= 6 && month <= 8) {
  //여름
  $body.classList.add('summer');
  seasonText = '🍺무더운 여름입니다.';
} else if (month >= 9 && month <= 11) {
  //가을
  $body.classList.add('fall');
  seasonText = '🐴🐷천고마비';
} else {
  //겨울
  $body.classList.add('winter');
  seasonText = '🕸시원한 겨울입니다.';
}

$season.textContent = seasonText;

//낮과 밤 구별 :0~17 낮, 18~23 밤
//낮이면 body에 day클래스 부여 밤이면 night클래스 부여
const hours = now.getHours();

// if (hours >= 0 && hours <= 17) {
//   $body.classList.add('day');
// } else {
//   $body.classList.add('night');
// }

//삼항조건연산자(if문을 간단히 쓸 수 있음...! 단 if else만 대체할 수 있음)
// 조건 ? (true일 경우)실행문1 : (false일 경우)실행문2 실행
const test = '';
test ? console.log('참') : console.log('거짓');

//삼항조건연산자 사용하여 위의 이프 엘스문 대체하기
hours >= 0 && hours <= 17 ? $body.classList.add('day') : $body.classList.add('night');

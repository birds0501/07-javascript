//html 요소를 파악한 후에 js실행 - 스타일 시트, 이미지, 하위 프레임 등의 로딩은 기다리지 않는다.(먼저 js를 써도 적용 가능해진다.)
document.addEventListener('DOMContentLoaded', function () {
  //대상을 변수에 저장
  const $bomb = document.querySelector('.bomb');
  const $info = document.querySelector('.info');
  const $spark = document.querySelector('.spark');
  const $btnGo = document.querySelector('#go');
  const $btnStop = document.querySelector('#stop');
  const $beep = document.querySelector('#beep-sound');
  const $boom = document.querySelector('#boom-sound');

  let count = 10;
  let timer;

  //각각의 버튼을 클릭했을 떄
  $btnGo.addEventListener('click', function () {
    clearInterval(timer); //중복되게 하지 않기 위해서 무조건 고 버튼 누르면 타이머 초기화 후 동작하도록.
    timer = setInterval(counter, 1000);
    $spark.classList.add('sparkling');
    bombReset();
  });
  $btnStop.addEventListener('click', function () {
    clearInterval(timer);
    $spark.classList.remove('sparkling');
  });

  //동작을 함수로 정의
  function counter() {
    //0이 되면 줄어들기 종료, 숫자를 감소
    if (count === 0) {
      $bomb.classList.add('boom');
      $boom.play();
      $spark.classList.remove('sparkling');
      $info.style.opacity = 0;

      //타이머 해제
      clearInterval(timer);
      count = 10;

      //3초 후에 초기화
      setTimeout(bombReset, 3000);
    } else {
      count--;
      $beep.play();
    }
    $info.textContent = count;
  }

  //초기화 동작 -함수로 정의
  function bombReset() {
    $bomb.classList.remove('boom');
    $info.style.opacity = 1;
  }
});

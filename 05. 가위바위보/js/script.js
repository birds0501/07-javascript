//HTML 요소들의 파악이 끝나면 실행하라
document.addEventListener('DOMContentLoaded', () => {
  //대상을 변수로 저장
  const $body = document.body;
  const $resultUser = document.querySelector('.result-user');
  const $resultCom = document.querySelector('.result-com');
  const $resultText = document.querySelector('.result-text');
  const $wrap = document.querySelector('.wrap');
  const $audio = document.querySelector('#rps-sound');
  const $beep = document.querySelector('#beep-sound'); /* 이겼을때 소리 나도록 */

  //컴퓨터가 선택할 수 있는 옵션//객체를 값으로 넣기.(배열의 요소르 객체를 씀-이미지와 값을 같이 가져올 수 있음/ 키+값=프로퍼티->choice: '가위';)
  const options = [
    { choice: '가위', img: './img/scissors.png' },
    { choice: '바위', img: './img/rock.png' },
    { choice: '보', img: './img/paper.png' },
  ];

  //사용자가 이미지를 클릭하면//(e)는 이벤트인 'click'을 의미
  $wrap.addEventListener('click', playGame);

  //함수 정의
  function playGame(e) {
    //console.log(e.target);

    //짱꺰뽀
    $audio.play();

    //이미지를 클릭한게 아니라면 종료
    if (e.target.tagName !== 'IMG') return;
    //사용자의 선택을 변수에 각각 담자(텍스트, 이미지)
    const userChoice = e.target.alt;
    const userChoiceImg = e.target.src;
    console.log(userChoice, userChoiceImg);

    //컴퓨터의 선택을 변수에 각각 담자(텍스트, 이미지)
    //배열에 접근하는 방식? 배열[인덱스]
    //객체에 접근하는 방식? 객체['키'] or 객체.키
    // console.log(options[1].choice);
    // console.log(options[2].img);
    // console.log(options[2]['img']);

    const comIdx = Math.floor(Math.random() * 3);
    const comChoice = options[comIdx].choice;
    const comChoiceImg = options[comIdx].img;
    console.log(comChoice, comChoiceImg);

    // 경우의 수를 비교 : 비길경우, 이길경우, 질경우
    let result;
    if (userChoice === comChoice) {
      result = '비겼다';
    } else if (
      (userChoice === '가위' && comChoice === '보') ||
      (userChoice === '바위' && comChoice === '가위') ||
      (userChoice === '보' && comChoice === '바위')
    ) {
      result = '이겼다';

      setTimeout(() => {
        $beep.play();
        $resultUser.classList.add('shake-vertical');
      }, 1500);
    } else {
      result = '졌다';
    }

    //결과 값을 각각의 영역에 뿌리자
    $resultText.textContent = result;
    // $resultUser.innerHTML = '<img src="' + userChoiceImg + '">';
    $resultUser.innerHTML = `<img src="${userChoiceImg}">`; /* 위와 같은 코드 */
    $resultCom.innerHTML = `<img src="${comChoiceImg}">`;

    //결과를 보여주는 애니메이션의 시작은 body에 active 클래스 부여
    setTimeout(() => {
      $body.classList.add('active');
    }, 1000);

    //3초 후에 원상복구 = body에 클래스 삭제
    // setTimeout(function(){},3000);
    setTimeout(() => {
      $body.classList.remove('active');
      $resultUser.classList.remove('shake-vertical');
    }, 3000);
  }
});

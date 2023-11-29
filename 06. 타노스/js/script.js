document.addEventListener('DOMContentLoaded', () => {
  //대상을 변수에 저장
  const $resultBox = document.querySelector('.result-box');

  const resultArr = [
    { text: '너 살았어!', value: 'alive' },
    { text: '우주를 위해 희생되어라 닝겐!', value: 'dead' },
  ];

  //타노스가 1초후에 손가락을 튕긴다(함수 호출 1초 뒤로)
  setTimeout(fingerSnap, 1000);

  //기존 코드를 함수로 정의
  function fingerSnap() {
    const $card = document.querySelector('.card');
    $card.classList.add('action');
    //스토리지에 저장된 값 불러오기 : localStorage.getItem(key);
    const saveValue = localStorage.getItem('resultValue');

    let result;
    if (saveValue === null) {
      //값이 없다면 심판을 받아야죠! == 0혹은 1의 숫자 생성
      result = Math.floor(Math.random() * 2);
    } else {
      //만약 저장된 값이 있다면? 심판이 이루어진것이니 그 결과를 그대로 뿌려주고
      result = saveValue === 'alive' ? 0 : 1;
    }

    //해야 할 작업
    $resultBox.textContent = resultArr[result].text;

    //결과를 뿌려주는 class가 0.9초 후에 적용
    setTimeout(() => {
      $resultBox.classList.add(resultArr[result].value);
    }, 600);
    localStorage.setItem('resultValue', resultArr[result].value);
  }
});

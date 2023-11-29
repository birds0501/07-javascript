document.addEventListener('DOMContentLoaded', () => {
  //대상을 변수에 저장
  const $body = document.body;
  const $toggle = document.querySelector('#mode');

  //로컬 스토리지에 저장된 값을 변수에 담아
  const colorMode = localStorage.getItem('saveMode');
  // console.log(colorMode);

  //다크모드가 선택되었다면 body에 dark클래스 부여(반대는 dark클래스 삭제)
  // if (colorMode === 'dark') {
  //   //다크모드가 선택된 상황
  //   applyDark();
  // } else {
  //   //다크모드가 선택되지 않은 상황
  //   releaseDark();
  // }

  colorMode === 'dark' ? applyDark() : releaseDark();

  //체크박스를 클릭했을 떄
  $toggle.addEventListener('click', () => {
    $body.classList.contains('dark') ? releaseDark() : applyDark();
    // if ($body.classList.contains('dark')) {
    //   // console.log('다크모드임');
    //   applyDark();
    // } else {
    //   // console.log('다크모드 아님');
    //   releaseDark();
    // }
  });

  //공통의 동작을 함수로 정의
  //1. dark모드 적용
  function applyDark() {
    $body.classList.add('dark');
    localStorage.setItem('saveMode', 'dark');
    $toggle.nextElementSibling.textContent = 'DARK'; //탐색 선택자(nextElementSibling)
    $toggle.checked = true;
  }

  //2.dark모드 해제
  function releaseDark() {
    $body.classList.remove('dark');
    localStorage.setItem('saveMode', 'light');
    $toggle.nextElementSibling.textContent = 'LIGHT'; //탐색 선택자(nextElementSibling)
    $toggle.checked = false;
  }
});

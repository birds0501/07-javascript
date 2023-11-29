document.addEventListener('DOMContentLoaded', () => {
  //대상을 변수에 저장
  const $body = document.body;
  const $toggle = document.querySelector('#mode');

  //로컬 스토리지에 저장된 값을 변수에 담아
  const colorMode = localStorage.getItem('saveMode');
  // console.log(colorMode);

  //다크모드가 선택되었다면 body에 dark클래스 부여(반대는 dark클래스 삭제)
  if (colorMode === 'dark') {
    //다크모드가 선택된 상황
    $body.classList.add('dark');

    $toggle.nextElementSibling.textContent = 'DARK'; //탐색 선택자(nextElementSibling)
    $toggle.checked = true;
  } else {
    //다크모드가 선택되지 않은 상황
    $body.classList.remove('dark');

    $toggle.nextElementSibling.textContent = 'LIGHT'; //탐색 선택자(nextElementSibling)
    $toggle.checked = false;
  }

  //체크박스를 클릭했을 떄
  $toggle.addEventListener('click', () => {
    // console.log($toggle.checked);

    if ($body.classList.contains('dark')) {
      // console.log('다크모드임');
      $body.classList.remove('dark');
      localStorage.setItem('saveMode', 'light');
      $toggle.nextElementSibling.textContent = 'LIGHT'; //탐색 선택자(nextElementSibling)
      $toggle.checked = false;
    } else {
      // console.log('다크모드 아님');
      $body.classList.add('dark');
      localStorage.setItem('saveMode', 'dark');
      $toggle.nextElementSibling.textContent = 'DARK'; //탐색 선택자(nextElementSibling)
      $toggle.checked = true;
    }
  });
});

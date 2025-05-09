// JSON.parse
// JSON.stringify
// const json = '{"result":true, "count":42}';
// console.log(JSON.parse(json));
// localStorage 가져오기: localStorage.getItem('key');
// localStorage 저장하기: localStorage.setItem('key', 'value');
// document.createElement('tag name'): 태그 생성

// 기능
// 1. input 창에 할일 입력 후 추가 버튼 클릭 또는 엔터
// 2. 할일 목록 로컬 스토리지에 저장
// 3. 로컬 스토리지 데이터 화면에 렌더링
// 4. 추가된 할일 데이터를 바탕으로 DOM 요소 추가
// 5. 삭제 버튼 클릭 시 삭제 기능 실행
// 6. 완료 버튼 클릭 시 데이터 DOM 이동 기능 실행

// localStorage.setItem('a', 'b');
// const a = localStorage.getItem('a');

// console.log(a);

//  체크박스 선택 > comp으로 이동
// del 선택 > l해당 li 삭제

// 1. 체크박스 선택시 이동

// const todo = document.querySelector('.show');
// const com = document.querySelector('.complete');
// const box = document.querySelectorall('input[type="checkbox"]');

// box.addEventListener('click', function () {
//   com.appendChild(li);
// });

// 2. +선택시 이동
const button = document.querySelector('.bt');
const pluse = document.querySelector('.show2');
const input = document.querySelector('.add');

button.addEventListener('click', function () {
  const value = input.value.trim();

  if (value !== '') {
    const li = document.createElement('li');
    li.textContent = value;
    pluse.appendChild(li);
  }
});

// delete
const del = document.querySelectorall('del');

del.addEventListener('click', function () {
  const li2 = document.querySelector('.complete > li');
  li.remove();
});

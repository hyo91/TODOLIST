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

//  ---------------------------------------------------------------------

// // delete
// const del = document.querySelectorAll('del');
// const complete = del.addEventListener('click', function () {
//   const li = document.querySelector('.complete > li');
//   complet.removeChild(li);
// });

const plus = document.querySelector('.bt');
const input = document.querySelector('.add');
const uladd = document.querySelector('.show2');
const lihtml = document.querySelector('.show2 li');
const comadd = document.querySelector('complete');

// ---------------------------------------list 추가----------
plus.addEventListener('click', function addPlus() {
  const input2 = input.value.trim();
  const liadd = document.createElement('li');
  const checkadd = document.createElement('input');
  checkadd.type = 'checkbox';
  const spanadd = document.createElement('span');
  const editadd = document.createElement('button');
  editadd.classList.add('edit');
  editadd.innerText = 'edit';
  const deladd = document.createElement('button');
  deladd.classList.add('del'); //HTML에서 사용할 클래스 이름
  deladd.textContent = 'delete';

  spanadd.textContent = input2;
  liadd.appendChild(checkadd);
  liadd.appendChild(spanadd);
  liadd.appendChild(editadd);
  liadd.appendChild(deladd);
  uladd.appendChild(liadd);
  //--------delate
  deladd.addEventListener('click', function () {
    liadd.remove();
  });

  editadd.addEventListener('click', function () {});
  checkadd.addEventListener('click', function () {
    comadd.appendChild(liadd);
  });
});
addPlus();

//---------------------------

// 요소안에 다른 요소 넣기
// 1. textContent > 가장 기본. 텍스트만넣음
// 2.innerText > ? 위에거랑 뭔차이임
// 3.innerHTML > 외에는 전부 텍스트 전용
// 4.insertAdjacentText(position, text)
// 5.append() / appendChild()

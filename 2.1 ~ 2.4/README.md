# Java Script
## 함수
* function 함수이름(인수) { 실행 구문 }
* 같은 내용의 실행을 여러번 시킬 때, 함수를 생성하고 호출하여 사용
* console.log, alert() 등은 내장함수
* log는 console 객체가 포함하는 함수
* 인수는 함수 안에서 사용하는 변수의 이름, 함수를 호출할 때 넣어줌.
* 함수는 return 문의 내용을 반환, 없을 시 undefined 반환
## DOM : 자바스크립트에서 HTML 문서를 가져와 이용할 수 있다.
* -> const title = document.getElementById("title");
* -> title.style.color = "red";
<br>
* 자바스크립트는 웹사이트에서 발생하는 이벤트 반응이 가능함.
* -> target.addEventListener(이벤트 이름, 함수 이름) //함수에 () 붙이지 않는다!
* -> window.addEventListener("resize", handleResize);
* -> function handleResize() { console.log("I have been resized"); }

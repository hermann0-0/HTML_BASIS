// JavaScript : web client에서 실행되는 언어 /  요즘에는 서버용 개발언어로 사용되기도(Node.js)
// python은 그냥 변수를 선언 => my_var = 100
var my_var = 100 //var = 변수 만들 때 사용하는 키워드
var tmp = 3.14 // number 정수와 실수 따로 구분하지 않고 그냥 숫자로(파이썬과 동일)
var tmp1 = "hello" // string "" '' 구분하지 않음(파이썬과 동일)
var tmp2 = true // boolean (pythond은 True)
var tmp3 = [1,2,3,4.555] // array (파이썬의 list와 동일)

// 객체 표현
var tmp4 = { name : "홍길동", age : 25}
console.log(tmp4.name)

// 함수
// 함수는 2가지 존재
// 1. 선언적 함수(python의 일반적인 함수 정의하는 방법) => 선언적 함수는 함수 이름이 존재
function my_add(x,y) {
    return x + y
}
// def my_add(x,y):
//     return x + y

// 2. 익명 함수(함수의 이름 없음) => 파이썬의 일급함수
// 함수의 이름이 없고 변수에 저장해서 사용. 일급함수의 특징을 가지게 됨.
// 함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용
// javascript에서 익명 함수를 람다(함수)라고 함 / 파이썬에서는 람다는 코드를 변경해주는 역할. 함수가 인자를 넣으면 연산을 해서 결과값을 도출하는 거라면 람다는 일련의 과정에서 특정 부분을 변경해주는 역할.
var my_add = function(x,y){
   return x + y
}

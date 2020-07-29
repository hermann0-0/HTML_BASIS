// jQuery CDN 불러왔기 때문에 jQuery 코드 사용 가능

function my_func(){
    // 0. jQuery를 공부할 때 가장 먼저 배워야 하는 건 selector
    // jQuery 규칙 : 무조건 $로 시작
    // $("selector") 이런 형태로
    // 1. 전체 선택자(universal selector)
    // $("*").css("color", "red") // jQuery로 모든 element를 다 선택해서 css 메소드 실행해서 색을 빨간색으로 해
    // 2. 태그 선택자(tag selector)
    // $("li").remove()
    // 3. 아이디 선택자(id selector)
    // $("#haha").text() //# = id // text 메소드 : 인자가 없으면 값을 알아 오라는 의미 => 인천
    // $("#haha").text("제주") // 인자가 있으면 값을 변경 하라는 의미 => 인천이 제주로 바뀜
    // 4. 클래스 선택자(class selector)
    // $(".region").css("background-color", "yellow") // "."이 클래스를 의미
    // 5. 구조 선택자(자식 선택자 후손 선택자)
    // $("ol > *").css("color", "steelblue") // ol 태그에 자식으로 있는 *(모든 것) 찾아
    // $("div li").css("color", "pink") // 한 칸 띄기(스페이스바 한 번 누른 거) = 후손. div의 후손으로 있는 li
    // 6. 구조 선택자(형제 선택자
    // $("#haha + li").remove() // 아이디가 haha인 거 찾고 그거의 바로 뒤에(+) 나오는 li를 선택해라
    // $("#hong ~ li").remove() // ~ 뒤에 나오는 형제 전부 => hong을 찾고 뒤에 나오는 모든 li 선택
    // 7. 속성 선택자
    // $(["id"]).css("color","yellow") // id라는 속성을 가지고 있는 것을 선택 => []: 속성
    // $(["id=haha"]).css("color","yellow")
    // 이 7가지를 조합하면 웬만한 element는 지정하는 게 가능
}
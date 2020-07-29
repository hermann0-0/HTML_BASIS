$(document).ready(function () {
    // document = html 화면 지칭(즉, body 부분) // 문서(document)가 준비되면(ready) 안에 있는 람다 함수(function) 호출해 =>
    // 안에 있는 람다 함수 browser에 내용이 완전히 출력되면 그 시점에 실행
    // li를 찾아서 각각에 대해 event 처리를 지정
    // on = ~ 할 때. on("mouseover", 람다함수) => mouseover(마우스가 위에 올라오는 거) 할 때 람다 함수 실행
    $("ul>li").on("mouseover", function () {
        $(this).addClass("mystyle")
    })
    $("ul>li").on("mouseleave", function () {
        $(this).removeClass("mystyle")
    })
})

// function set_active() {
//     // 현재 이벤트가 발생한 이벤트 소스에 CSS 적용
//     // 이벤트 소스 : 이벤트가 발생한 element => this
//     $(this).addClass("mystyle")
//
// }

function insert_text() {
    // $("#myDiv").text("<h1>버튼</h1>") // text() : 문자를 그냥 가져다가 넣음. 태그 적용 안 됨 => <h1>버튼</h1> 이렇게 그대로 출력
    $("#myDiv").html("<h1>버튼</h1>") // html() : text()와 달리 동일하게 동작하는데 태그 적용 됨 => 버튼 출력되고 스타일이 태그가 적용되어 헤드라인으로 출력

}

function delete_div() {
    // $("#deleteDiv").remove() // 자신을 포함해 후손들도 삭제
    $("#deleteDiv").empty() // 자신을 제외한 후손들만 삭제

}

function add_list() {
    // 없는 태그를 만들려면?
    // "<li></li>"
    // <li class="mystyle">박길동</li>
    // var my_li = $("<li></li>").text("박길동").attr("class", "mystyle")
    var my_li = $("<li></li>").text("박길동").addClass("mystyle")
    // 태그를 생성 후 원하는 위치에 복붙
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙음
    // $("ul").append(my_li)
    // 2. prepend() : 자식으로 붙이고 첫 번째 자식으로 붙음
    // 3. after() : 형제로 붙이고 다음 형제로 붙음
    $("ul>li:nth-child(3)").after(my_li)
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙음
    $("ul>li:last").before(my_li)

}
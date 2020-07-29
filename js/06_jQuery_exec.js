function print_text(){
    // 버튼을 눌렀을 때 실행할 코드 기술
    // alert("호출")
    console.log($("#apple").text())
    console.log($("#pineapple").text()) // text : 여는 태그와 닫는 태그 사이의 글자를 가져오는 method
    console.log($("ul > li.myList").text())
    console.log($("ul > li[class]").text()) // [] : 속성 의미 => ul 자식 중에 li의 속성이 class인 것
    console.log($("input[type=text]").val()) //val(value) : 입력한 속성 값들을 가져오는 method
    console.log($("ol > li.myList:first").text())
    console.log($("ol > li.myList:last").text())
    console.log($("ol > li.myList:first+li").text())
    console.log($("ol > li.myList:nth-child(1)").text()) // nth-child = 몇 번 째 자식이냐(몇 번 째 순번이냐), 1부터 시작
    $("input[type=text]").attr("size", 10) //attr(attribute) : 속성을 이용하겠다는 method / ("size")만 있으면 size값 불러오기 .("size", 10) size를 10으로 변경

}


// 사용자가 하는 행동 = event, event 발생 시점을 잡아서 원하는 작업 수행하게

// select에서 event 발생

function my_func() {
    // select box 에서 과일이 바뀌면 실행
    // 1. 선택한 과일이 어떤 과일인지 알아내야 함
    var fruit = $("select > option:selected").text()
    var my_list = $("ul > li")
    my_list.each(function (idx,item) {
        // console.log($(item).text())
        if($(item).text() == fruit) {
            $(item).css("color","red")
        }
        else {
            $(item).css("color","black")
        }
    }) // each : for문처럼 하나씩 뽑아서 반복하라는 method, () 안에 람다 함수가 옴 => my_list가 가지고 있는 거 하나씩 가져와서 람다 함수 실행 반복.
    // idx(index) = 순번(0부터), item = 해당 순번의 태그? 값? => 순번 돌리며 반복할 때 my_list에 있는 거 0번째 꺼 뽑아서 순번을 돌릴 때 그 순번에 해당하는 값이 item => my_list에 있는 0(idx)번째 있는 li(item) 반복하면서 바뀔 거임.
}
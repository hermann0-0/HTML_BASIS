function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는 게 아니라 enter key일 경우에만 처리
    // if( event.keyCode == 13 ){
    //     // AJAX call을 이용해서 데이터를 받아오는 코드가 나오면 됨
    //     alert("호출")
    if (event.keyCode == 13){
        // event가 발생한 keycode가 13이면 이라는 의미 / enter keycode가 13
        // 만약 입력된 key가 enter key이면 이 부분을 수행
        // 서버쪽 프로그램을 호출해서 결과를 받는다
        // jQuery를 이용해서 AJAX 처리
        // $.ajax("서버프로그램을 어떻게 호출할 건지를 작성(어떤 프로그램, 어떤 방식, 데이터를 어떻게 처리할 지 등 방대한 양을 담아야 함 그래서 ajax의 인자로 javascript 객체를 넣어줌")
        // ajax의 인자로 방대한 양이 입력되야 하다보니 JavaScript 객체를 넣어줌
        // JavaScript 객체는 => {key : value, key : value,....}
        // => javascript의 객체 표현 방식이 python의 dict와 표현 방식이 같고. 이런 데이터 표현 방식을 JSON이라고 함
        // data : 서버프로그램에게 넘겨줄 데이터들 =>
        $.ajax({
            async : true,  //비동기 방식의 호출 => async = 비동기 방식, false면 동기 방식. 비동기가 default
            url : "http://192.168.0.200:8080/bookSearch/search",
            data : { keyword : $("input[type=text]").val() }, // 넘겨줄 데이터가 하나면 그 데이터 적으면 되지만, 여러 개일 경우 javascript 객체 형태로
            type : "GET",
            timeout : 3000, // 3초 안에 서버로부터 결과가 안 오면 잘 못 된 호출로 간주하겠다. 결과값 호출의 시간제한을 두는 것.
            dataType : "json", // 서버로부터 정상적인 데이터가 왔을 때 이 데이터의 타입을 정하는 => 똑같이 생겼지만 사실 결과는 json으로 받는 문자열임. 그래서 처리하기 힘들어서 객체 형태로 받는 게 편함. 그래서 결과 JSON을 JavaScript 객체로 변환. jQuery가 자동으로 변환해줌.
            success : function (result) {
                $("tbody").empty()

                // $("h1").each() => selector에 의해서 선택된 것을 반복할 때 => h1에 있는 것들을 각각 반복
                $.each(result, function (idx, item) { //=> result에 있는 것을 idx 만큼(result의 개수)만큼 result 값들을 반복해서 함수해
                    var tr = $("<tr></tr>") // <tr></tr>
                    var imgTd = $("<td></td>") //<td></td>
                    var img = $("<img/>").attr("src",item.img) // <img src=~~>이미지 태그는 시작 태그만 있음
                    var titleTd = $("<td></td>").text(item.title)
                    var authorTd = $("<td></td>").text(item.author)
                    var priceTd = $("<td></td>").text(item.price)
                    var delTd = $("<td></td>")
                    var delBtn= $("<input/>").attr("type", "button").attr("value", "삭제")
                    delBtn.on("click", function () {
                        // 현재 클리된 버튼에 대한 책 정보를 찾아서 화면에서 삭제
                        $(this).parent().parent().remove() // this => 현재 이벤트가 발생된 객체를 지정 => this가 버튼. this의 parent는 td. td의 parent가 ㅅㄱ

                    })
                    imgTd.append(img)
                    delTd.append(delBtn)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(delTd)
                    $("tbody").append(tr)
                })

                // for(i=0;i<result.length;i++){
                //
                //     // <tr>
                //     //     <td><img src = ....></td>
                //     //     <td>Lorem</td>
                //     //     <td>ipsum</td>
                //     //     <td>dolor</td>
                //     //     <td>sit</td>
                //     // </tr>
                //     var tr = $("<tr></tr>") // <tr></tr>
                //     var imgTd = $("<td></td>") //<td></td>
                //     var img = $("<img/>").attr("src",result[i].img) // <img src=~~>이미지 태그는 시작 태그만 있음
                //     var titleTd = $("<td></td>").text(result[i].title)
                //     var authorTd = $("<td></td>").text(result[i].author)
                //     var priceTd = $("<td></td>").text(result[i].price)
                //     var buttonTd = $("<td></td>")
                //     var button= $("<input/>").attr("type","button").attr("value","삭제")
                //     button.on("click", function () {
                //         $(this).parent().parent().empty()
                //
                //     })
                //     imgTd.append(img)
                //     buttonTd.append(button)
                //     tr.append(imgTd)
                //     tr.append(titleTd)
                //     tr.append(authorTd)
                //     tr.append(priceTd)
                //     tr.append(buttonTd)
                //     $("tbody").append(tr)
                // }
                // alert(result[0].title) // 제목

            }, // success : 이 호출이 만약에 성공하면이라는 의미여서 전부 값인 위의 명령어와 달리 success는 함수가 와야 함 // result : 서버가 보내준 json 문자열을 객체로 바꾼 결과값
            error : function (error) {
                alert("서버호출 실패")
            } // error : 호출이 실패했을 때의 의미로 success처럼 함수 입력
            }

        )

    }
}

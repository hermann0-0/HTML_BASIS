function start_clock() {
    // alert("버튼 클릭")
    // 시계 출력
    // 현재 시간을 구한다
    // 현재 날짜의 시분초를 구할 수 있다
    // 이 시간은 HTML 특정 영역에 출력
    // 위의 작업을 1초마다 반복하면 됨
    // JavaScript는 특정 시간마다 특정 함수를 반복해주는 함수를 제공

    setInterval(function () {
        var today = new Date() // 날짜 객체 생성
        console.log(today.toLocaleString()) // today에는 세계 표준 시 형태로 들어가 있음. local에 맞게 문자열로(string) 변환(to)
        // HTML의 특정 위치를 지정
        var my_div = document.getElementById("myDiv") // document : HTML의 body 부분, 실제 browser 상에서 화면에 보이는 전체를 의미

        my_div.innerText = today.toLocaleString()
    }, "1000") // setInterval: 함수를 인자로 갖는 함수 / timeout 밀리세컨 그래서 1000이 1초

}
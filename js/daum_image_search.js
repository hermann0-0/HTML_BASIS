function search_image() {
    // enter key를 입력하면
    if (event.keyCode == 13) {

        // ajax를 이용해서 DAUM 쪽 Open API를 호출
        $.ajax({
            async : true,
            url : "https://dapi.kakao.com/v2/search/image",
            data : {
                query : $("#movie_name").val() + " 포스터",
                sort : "accuracy"
            },
            beforeSend : function(xhr){
                xhr.setRequestHeader("Authorization", "KakaoAK f51f828abedb9a842511066af98288e0")
            }, // 보내기 전에(beforeSend) 람다함수해라 => 람다 함수의 인자로 들어오는 xhr에 대해서 header 부분에 요청을 설정한다는 의미
                // => 다음 Open API의 경우 눈에 보이지 않지만 Header에 인증을 걸어움 그래서 사용을 위해서는 인증을 위한 rest key 코드를 헤더에 넣어서 요청을 보내야 함.
            type : "GET",
            timeout : "3000",
            dataType : "json",
            success : function (result) {
                // 가져오는 데이터가 어떤 형태, 배열로 돼있는지 보고 정렬 방식에 맞게 표현해야 데이터를 불러올 수 있음
                var img_list = result.documents
                var li = $("<li></li>")
                var img = $("<img />").attr("src", img_list[0].thumbnail_url).addClass("myImage")
                li.append(img)
                $("ul").append(li)

            },
            error : function (error) {
                alert("실패")
            }
        })

    }

}

function call_BoxOffice() {

        data = $("input[type=date]").val().replace(/-/g, '')

        $.ajax({
            async : true,
            url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
            data : { key : "0c0217b54848dbcd5aa2bbf757f5afea", targetDt : data },
            type : "GET",
            timeout : 5000,
            dataType : "json",


            success : function (result) {

                $("tbody").empty()

                $.each(result.boxOfficeResult.dailyBoxOfficeList , function (idx, item) {

                    var tr = $("<tr></tr>")
                    var rankTd = $("<td></td>").text(item.rank + "등")
                    var imgTd = $("<td></td>")
                    var img = $("<img/>").attr("src", search_image(item.movieNm)).css({width : "auto", height : "100%"}).attr("id",item.movieNm)
                    var movieNmTd = $("<td></td>").text(item.movieNm)
                    var salesAccTd = $("<td></td>").text(item.salesAcc)
                    var audiCntTd = $("<td></td>").text(item.audiCnt)
                    var buttonTd = $("<td></td>")
                    var movieCdTd = item.movieCd
                    var button = $("<input/>").attr("type", "button").attr("value", "상세정보")
                    button.on("click", function () {

                        $.ajax({

                            async: true,
                            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                            data: {key : "0c0217b54848dbcd5aa2bbf757f5afea", movieCd : movieCdTd},
                            type: "GET",
                            timeout: 5000,
                            dataType: "json",

                            success : function (result) {

                                var my_list = result.movieInfoResult.movieInfo
                                var prdtYearVar = "제작연도 : " + my_list.prdtYear
                                var genrelist = []
                                var directorslist = []
                                var actorslist = []
                                for(i=0;i<my_list.genres.length;i++){
                                    genrelist.push(my_list.genres[i].genreNm)
                                }
                                for(i=0;i<my_list.directors.length;i++){
                                    directorslist.push(my_list.directors[i].peopleNm)
                                }
                                for(i=0;i<my_list.actors.length;i++){
                                    actorslist.push(my_list.actors[i].peopleNm)
                                }

                                if (genrelist == undefined) {
                                    genrelist = "자료 없음"
                                }
                                if (directorslist == undefined) {
                                    genrelist = "자료 없음"
                                }
                                if (actorslist == undefined) {
                                    genrelist = "자료 없음"
                                }

                                var genresVar = "영화장르 : " + genrelist
                                var directorsVar = "감독 : " + directorslist
                                var actorsVar = "배우 : " + actorslist

                                alert(prdtYearVar + "\n"
                                    + genresVar + "\n"
                                    + directorsVar + "\n"
                                    + actorsVar)

                                $("#my_li").empty()
                                $("#my_text1").remove()
                                $("#my_text2").remove()
                                $("#my_text3").remove()
                                $("#my_text4").remove()

                                var boardLi = $("<li></li>").attr("id", "my_li").css("text-align", "center")
                                var boardImg = $("<img/>").attr("src", search_image(item.movieNm)).css({width : "200px", heigh : "auto"}).attr("id",item.movieNm)
                                $("ul>li.nav-item").after(boardLi)
                                boardLi.append(boardImg)

                                var textLi1 = $("<li></li>").attr("id", "my_text1").text(prdtYearVar)
                                var textLi2 = $("<li></li>").attr("id", "my_text2").text(genresVar)
                                var textLi3 = $("<li></li>").attr("id", "my_text3").text(directorsVar)
                                var textLi4 = $("<li></li>").attr("id", "my_text4").text(actorsVar)
                                $("ul[class]").append(textLi1)
                                $("ul[class]").append(textLi2)
                                $("ul[class]").append(textLi3)
                                $("ul[class]").append(textLi4)

                            },

                            error : function (error) {
                                alert("서버호출 실패")
                            }

                        })
                    })
                    tr.append(rankTd)
                    imgTd.append(img)
                    buttonTd.append(button)
                    tr.append(imgTd)
                    tr.append(movieNmTd)
                    tr.append(salesAccTd)
                    tr.append(audiCntTd)
                    tr.append(buttonTd)
                    $("tbody").append(tr)
                    })

            },

            error : function (error) {
                alert("서버호출 실패")
            }
        })
}

function search_image(text) {
    var img_url
    text += " 영화 포스터";
   $.ajax({
       async : false,
       url : "https://dapi.kakao.com/v2/search/image",
       data : {
           query : text ,
           sort : "accuracy"
       },
       beforeSend : function(xhr){
           xhr.setRequestHeader("Authorization", "KakaoAK f51f828abedb9a842511066af98288e0")
       },
       type : "GET",
       timeout : "3000",
       dataType : "json",
       success : function (result) {
           console.log(result)
           img_url = result.documents[0].thumbnail_url
       },
       error : function (error) {
           alert("실패")
       }

   })
    return img_url
}


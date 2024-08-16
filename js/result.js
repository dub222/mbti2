import {result,mbtis, results} from "./data.js"

const mbti =new URLSearchParams(location.search).get('mbti');
console.log(location.search)
console.log(mbti);

// 가져온 mbti 유형의 번호를 출력
// 1. ?mbti=isfp === 2인 것을 출력
console.log(mbtis[mbti]);


// 2. 위의 result 중 1번 결과에 해당
// 하는 자료를 출력
console.log(results[mbtis[mbti]])
let result = results[mbtis[mbti]];

// 3. 그 중 결과의 제목을 출력
console.log(results[mbtis[mbti]].title)

// 4. querySelector로 변수 선언
//  --- innerHTML로 넣을것

const title = document.querySelector('page-title');
const resultCharacter = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');
const jobs = document.querySelectorAll('.job');
const lecture = document.querySelector('.lecture');
const lectureImage = document.querySelector('.lecture img')

title.innerHTML =  result.title;
resultCharacter = result.character;
boxes.forEach(function(boxE1, index){
    boxE1.innerHTML = result.results(index)
});
jobs.forEach(job , index);{
    job.innerHTML = result.job[index]
}
lectureImage.scr= result.lectureImg;
lectureUrl.href = result(lectureUrl);
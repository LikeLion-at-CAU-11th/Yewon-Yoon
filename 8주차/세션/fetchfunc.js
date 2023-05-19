/*특정 방명록 가져오기
async function getData(){
  let getData=await fetch(("http://likelion-toy.kro.kr:8000/posts/1/"))
  .then(res =>res.json())
  .then(json =>console.log(json));
}


//아래는 그냥 참고 코드
fetch("http://likelion-toy.kro.kr:8000/posts/all/")
.then(res =>res.json())
.then(json =>console.log(json));
fetch("http://likelion-toy.kro.kr:8000/posts/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    author:"이기웅",
    title: "방명록1",
    content: "멋사 파이팅!"
  }),
}).then((response) => console.log(response));

fetch("https://jsonplaceholder.typicode.com/posts/3/")
.then(res =>res.json())
.then(json =>console.log(json));
fetch("https://jsonplaceholder.typicode.com/posts/3/", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));
*/
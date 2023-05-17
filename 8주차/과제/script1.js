//1.방명록 작성기능
//2. 방명록 리스트 기능
//3. 방명록 삭제 기능
const form=document.getElementById('namelist');

const container=document.getElementById('container');
const num=document.getElementById('num');
const writerInput = document.getElementById('writer');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
writerInput.addEventListener('input', function(event) {
  writerInput.value = event.target.value;
});
titleInput.addEventListener('input', function(event) {
  titleInput.value = event.target.value;
});
contentInput.addEventListener('input', function(event) {
  contentInput.value = event.target.value;
});
//새 방명록 추가하기
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let formdata = new FormData(form);
  let formDataJson = {};
  for (let [key, value] of formdata.entries()) {
    formDataJson[key] = value;
  }
  fetch("http://likelion-toy.kro.kr:8000/posts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataJson),
  })
  .then(res => console.log(res.json()))
  .then(data=>console.log(data));
});

//모든 방명록 가져오기
async function getAllData(){
  // await fetch(API요청을 받는 백엔드 주소), {API요청에 담을 정보}
  let response = await fetch("http://likelion-toy.kro.kr:8000/posts/all/", {
      mode: 'no-cors'
  })
  console.log(response);
  // await로 백엔드에서 리턴을 받은 후 다음 라인이 실행
  if (response.status == 200){
      toJson = await response.json();
      let data=await toJson.response.body.items.item;
      console.log(data);
  }
  else {
      console.log(response.status, "유저 활동 데이터가 없습니다");
      return response.status;
  }
}

//특정 방명록 가져오기
async function getData(){
  let getData=await fetch(("http://likelion-toy.kro.kr:8000/posts/1/"))
  .then(res =>res.json())
  .then(json =>console.log(json));
}
//특정 방명록 삭제하기
async function deleteData(){
  let deleteData=await fetch("http://likelion-toy.kro.kr:8000/posts/1/", {
    method: "DELETE",
    }).then((response) => console.log(response));
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
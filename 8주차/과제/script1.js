//1.방명록 작성기능
//2. 방명록 리스트 기능
//3. 방명록 삭제 기능
const container=document.getElementById('container')
async function getData(){
  // await fetch(API요청을 받는 백엔드 주소), {API요청에 담을 정보}
  let response = await fetch("http://likelion-toy.kro.kr:8000/posts/all/", {
      mode: 'no-cors'
  })
  console.log(response);
  // await로 백엔드에서 리턴을 받은 후 다음 라인이 실행
  if (response.status == 200){
      data = await response.json()
      console.log(data);
  }
  else {
      console.log(response.status, "유저 활동 데이터가 없습니다");
      return response.status;
  }
}
async function postData(){
  let fetchData=await fetch("http://likelion-toy.kro.kr:8000/posts/", {
    method: "POST",
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author:"이기웅",
      title: "방명록1",
      content: "멋사 파이팅!"
    }),
  }).then((response) => console.log(response));
  const toJson=await fetchData.json();
  console.log(toJson);
  const data = await toJson.response.body.items.item;
  console.log(data);
  {data.map((datas,i)=>{
    const text = document.createElement('span');
    text.innerHTML=`
    작성자
    내용
    `
    container.appendChild('text');
  })}

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
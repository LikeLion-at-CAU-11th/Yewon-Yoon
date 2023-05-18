const container=document.getElementById('container');
let count=-1;
function newPage()  {
    window.open('http://127.0.0.1:5500/7%EC%A3%BC%EC%B0%A8%EA%B3%BC%EC%A0%9C/week7/prac2/%EB%8D%94%EB%B3%B4%EA%B8%B0.html');
}
async function getData(){
    const random = Math.floor(Math.random()*100+1);
    const url=`https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=${random}&MobileOS=ETC&MobileApp=ETC&arrange=a&_type=json&serviceKey=sWUTaJy8gAPQz2%2F8V%2BB0RaHkFsZ4PJ%2Bwlqn6FT2bFd5VGmdwFJ5DT97wLQJyZ8sWJEz5v5RKeDTvI64Y%2FPBmmg%3D%3D`;
    const fetchData=await fetch(url);
    console.log(fetchData);
    const toJson = await fetchData.json();
    console.log(toJson);
    const data=await toJson.response.body.items.item;
    console.log(data);
    {data.map((datas,i)=>{
        const link=document.createElement('div');
        link.id='list';
        const image = document.createElement('img');
        image.src=datas.galWebImageUrl;
        console.log(image.src);
        const text = document.createElement('span');
        text.innerHTML=`
        ${i+1+5*(count+1)}번째 사진
        제목:${datas.galTitle}
        장소:${datas.galPhotographyLocation}
        `
        const button = document.createElement('button');
        button.innerText='더보기';
        container.appendChild(link);
        link.appendChild(image);
        link.appendChild(text);
        link.appendChild(button);

    })}
    count+=1
}
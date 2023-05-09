const container=document.getElementById('container');
let count=-1;
//1㏗ 날짜㏖galCreatedtime㏗ 㜍 파싱해서 년도/월/일
//2㏗ 촬영자㏖직접 찾아보기㏗
//3㏗ 키워드㏖직접 찾아보기㏗
async function getAdditionalData(){
    const url='https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=ETC&arrange=A&_type=json&serviceKey=sWUTaJy8gAPQz2%2F8V%2BB0RaHkFsZ4PJ%2Bwlqn6FT2bFd5VGmdwFJ5DT97wLQJyZ8sWJEz5v5RKeDTvI64Y%2FPBmmg%3D%3D';
    const fetchData=await fetch(url);
    console.log(fetchData);
    const toJson = await fetchData.json();
    console.log(toJson);
    const data=await toJson.response.body.items.item;
    console.log(data);
    {data.map((datas,i)=>{       
        const link=document.createElement('div');
        link.id='list';
        const text=document.createElement('span');
        timedetails=datas.galCreatedtime;
        const year= timedetails.substring(0, 4);
        const month = timedetails.substring(4, 6);
        const day = timedetails.substring(6, 8);
        text.innerHTML = `
        ${i+1+5*(count+1)}번째 사진
        ${year}년 ${month}월 ${day}일 /
        촬영자:${datas.galPhotographer}/
        키워드:${datas.galSearchKeyword}
        `        
        container.appendChild(link);
        link.appendChild(text);

    })}
    count+=1
}
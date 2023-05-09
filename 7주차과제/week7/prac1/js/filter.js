function filterData(){
    const container = document.getElementById('container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    fetch(url)
    .then((response)=>
        response.json()
    )
    .then((datas)=>{
        {datas.filter((data)=>(
            data.state=='아기사자')
        ).map((d)=>{
            const list=document.createElement('div');
            list.innerHTML = `제 이름은 ${d.name}이요
            좋아하는 과일은 ${d.fruit}이요`;
            container.appendChild(list)
        })}
    })
    .catch((error)=>{
        console.log(error);
        container.innerText='에러에러에러';
    })
}
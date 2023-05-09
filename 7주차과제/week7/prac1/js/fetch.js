const url='./data/data.json';
const container = document.getElementById('container');
function fetchData(){
    fetch(url)
    .then((response)=>(
        response.json()
    )
    )
    .then((response)=>{
        console.log(response);
        {response.map((data)=>{
            const list=document.createElement('div');
            list.innerHTML=data.name;
            container.appendChild(list);
        })}
    })
    .catch((error)=>{
        console.log(error);
        container.innerText='에러에러에러';
    })
}
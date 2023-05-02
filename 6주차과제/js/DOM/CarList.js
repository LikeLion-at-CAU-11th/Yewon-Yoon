import Car from './Car';
const gameResult = document.getElementById("result");
export default class CarList {
    constructor(){
        this.cars=[];
        this.winners=[];
    }
    addCar(name){
        this.cars.push(name);
    }
    getWinners(){
        let carScoreList=[];
        for (let i =0; i<this.cars.length;i++){
            carScoreList.push(this.cars[i].position);
        }
        const maxPosition = Math.max(...carScoreList);
        carScoreList.forEach((dist)=>{
            if(dist == maxPosition){
                const j = carScoreList.index(dist);
                this.winners.push(this.cars[j].name);
            }
        });
        return this.winners.join(", ");
    }
}

const gameResult = document.getElementById("result");
class Car {
    constructor(name){
        this.name = name;
        this.position = 0;
        this.score="";
    }
    move(){
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber >=4){
            this.position+=1;
            this.score="-".repeat(this.position);
        }
    }
}
export default Car;
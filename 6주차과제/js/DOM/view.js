import Car from "./Car";
import CarList from "./CarList";

const gameResult = document.getElementById("result");
const gameWinner = document.getElementById("racing-winners");

function gameResultView(carList, gameCount) {
    carList.cars.forEach((car)=>{
        car.move();
        const newDiv= document.createElement('div');
        const textInDiv = document.createTextNode(`${car.name}: ${car.score}`);
        gameResult.appendChild(newDiv);
        newDiv.appendChild(textInDiv);
    })
}
function gameWinnerView() {
    gameWinner.innerText = CarList.getWinners();
}
export default function gameView(CarList, gameCount){
    for (let i=0; i<gameCount; i++){
        gameResultView();
    }
    gameWinnerView();
};
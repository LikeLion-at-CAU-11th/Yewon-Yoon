import Car from "./DOM/Car.js";
import CarList from "./CarList.js";
import {gameView} from "./DOM/view.js";
const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");
const carNamesSubmitBtn = document.getElementById("car-names-submit");
const racingCountSubmitBtn = document.getElementById("racing-count-submit");
const carList = new CarList();
const gameResult = document.getElementById("result");
const gameCount = inputCount.value;  
const gameRun = (e)=>{  
    e.preventDefault();
    try{
        if(inputName.value.length === 0){
            throw "inputNameError";
        }
        if(inputCount.value.length === 0){
            throw "inputCountError";
        }
        if (inputName.value.includes(",")){
            const carNames = inputName.value.split(',');
            carNames.forEach((carName)=>{
                carName = carName.trim()
                if (carName.length > 5){
                    throw "inputNameLengthError"
                }
                else{
                    carList.addCar(new Car(carName));
                }
            });            
        }else{
            const carName = inputName.value;
            carName = carName.trim()
            if (carName.length > 5){
                throw "inputNameLengthError";
            }
            else{
                carList.addCar(new Car(carName));                
            }
                       
        }
        gameView(carList, gameCount); 
        

    } catch(err){
        if(err == "inputNameError"){
            alert("글자 입력해주세요.");
        }
        else if(err == "inputCountError"){
            alert("숫자 입력해주세요.");
        }
        else if(err == "inputNameLengthError"){
            alert("5자이내로 입력해주세요.")

        }
    }
}
carNamesSubmitBtn.addEventListener("click", gameRun);
racingCountSubmitBtn.addEventListener("click", gameRun);

import Car from ".js/DOM/Car.js";
import CarList from ".js/DOM/CarList.js";
import {gameView} from ".js/DOM/view.js";
const inputName = document.getElementById("car-names-input");
const inputCount = document.getElementById("racing-count-input");
const carNamesSubmitBtn = document.getElementById("car-names-submit");
const racingCountSubmitBtn = document.getElementById("racing-count-submit");
const carList = new CarList();
const gameResult = document.getElementById("result");

carNamesSubmitBtn.addEventListener("click", (e)=>{
    try{e.preventDefault();
        if(inputName.value.length === 0){
            throw "inputNameError";
        }
        
        if (inputName.value.includes(",")){
            const carNames = inputName.value.split(",");
            carList.resetList();
           for (const name of carNames){
                name = name.trim()            
                if (name.length > 5){
                    throw "inputNameLengthError";
                }
                else{
                    const car = new Car(name.trim());
                    carList.addCar(car);
                }
            }            
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
    }
    catch(err){
        if(err == "inputNameError"){
            alert("글자 입력해주세요.");
        }
        else if(err == "inputNameLengthError"){
            alert("5자이내로 입력해주세요.")

        }
    }
});
racingCountSubmitBtn.addEventListener("click",(e)=>{
    try{
        e.preventDefault();
        const gameCount = parseInt(inputCount.value);
        if(gameCount.length === 0){
            throw "inputCountError";
        }
        else{
            gameResult.innerHTML = "";
            for(let i=0; i<gameCount; i++){
                gameView(carList, gameCount);
            }
        }
    }
    catch(err){
        if(err == "inputCountError"){
            alert("숫자 입력해주세요.");
        }
    }    
});


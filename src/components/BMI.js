import React,{useState} from "react";

function BMI(){

    const [weight, setweight] = useState("0");
    const [height, setheight] = useState("0");
    const [result, setresult] = useState("");

    const UpdateWeight = (e) =>{
        setweight(e.target.value)
    }

    const Updateheight = (e) =>{
        setheight(e.target.value)
    }

    let imgSrc;

    if(result < 1 ){
        imgSrc =  null
    }else {
        if(result < 18.5){
            imgSrc = require('/home/v-mmansuri/Mohd_Khalid/Project_s/BMI/bmi/src/assests/Slim.jpeg')
        }
        else if (result >= 18.5 && result < 24.99){
            imgSrc = require('/home/v-mmansuri/Mohd_Khalid/Project_s/BMI/bmi/src/assests/Health.png')
        }else{
            imgSrc = require('/home/v-mmansuri/Mohd_Khalid/Project_s/BMI/bmi/src/assests/Obese.png')
        }
    }   

    const UpdateResult = () =>{
        if (result >= 18.5 && result <= 24.99) {
            return <div>"You are in a healthy weight range"</div>;
          } else if (result >= 25 && result <= 29.9) {
            return <div> "You are overweight"</div>;
          } else if (result >= 30) {
            return <div> "You are obese"</div>;
          } else if (result < 18.5 && result > 0) {
            return <div> "You are underweight"</div>;
        }
    }


          function calculateBMIValue() {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            const roundedOffBMIValue = bmiValue.toFixed(2);
            setresult(roundedOffBMIValue);
          }
   
    return(
        <div className="App">
            <div className="Container">
                
                <label>Enter The Weight (kg)</label>
                <input
                    type="text"
                    value={weight}
                    onChange={UpdateWeight}
                ></input>

               <label>Enter The Height (cm)</label>
                <input
                    type="text"
                    value={height}
                    onChange={Updateheight}
                ></input>

                <button onClick={calculateBMIValue}>Click Me</button>
                <div>
                    <label>{result}</label>
                    <div className="result">{UpdateResult()}</div>
                </div>
                <div className="img-container">
                    <img src={imgSrc} alt=""></img>
                </div>


            </div>
        </div>
    )
}

export default BMI
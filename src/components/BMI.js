import React,{useState} from "react";

function BMI(props){

    const [weight, setweight] = useState("0");
    const [height, setheight] = useState("0");
    const [result, setresult] = useState("");

    const UpdateWeight = (e) =>{
        setweight(e.target.value)
    }

    const Updateheight = (e) =>{
        setheight(e.target.value)
    }

    const UpdateResult = () =>{
        if (result >= 18.5 && result <= 24.99) {
            return <div>"You are in a healthy weight range"</div>;
          } else if (result >= 25 && result <= 29.9) {
            return <div> "You are overweight"</div>;
          } else if (result >= 30) {
            return <div> "You are obese"</div>;
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
                
                <label>Enter The Weight</label>
                <input
                    type="text"
                    value={weight}
                    onChange={UpdateWeight}
                ></input>

               <label>Enter The Height</label>
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


            </div>
        </div>
    )
}

export default BMI
import { useState, React } from "react";

export default function Form(){
    const [inputs, setInputs]= useState ({
        topText: "",
        bottomText: "",
        imgUrl: "",
    });

    const [list,setList]= useState ([])

    function handleSubmit (e) {
        e.preventDefault ()
        setList (prevList=>{
            return[
                ...prevList,
                inputs
            ]
        })
    }


    function handleChange (e){
        const {name,value}= e.target;
        setInputs((prevIputs)=>{
            return{
            ...prevInputs,
            [name]: value,
            };
        });
        }

        console.log (inputs);

        return(
            <>
            <form onSubmit={handleSubmit}>
                <input
                placeholder= "top text"
                onChange={handleChange}
                name= "topText"
                value= {inputs.topText}
            />
            <input
            placeholder="bottom text"
            onChange={handleChange}
            name= "bottomText"
            value= {inputs.bottomText}
            />
            <input
            placeholder="imgUrl"
            name= "imgUrl"
            value= {inputs.imgUrl}
            />
            <button>Submit</button>
            </form>
            <div>
            <p>{inputs.topText}</p>
            <p>{inputs.bottomText}</p>
            <img src={inputs.imgUrl}/>
            </div>
            </>
        );
    }
            
            
            

            
        


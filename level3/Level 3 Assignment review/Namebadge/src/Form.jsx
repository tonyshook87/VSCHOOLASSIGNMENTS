import React,{useState} from "react"

export default function Form ({addBadge}){


    

    const [initState, setInitState]= useState({
        name:'',
        description:'',
        number:'',
        occupation:'',
        agree: false,
    })
//prev formData copies all of the properties from the previous data.
    const [formData, setFormData] = useState(initState)

    function handleChange (e) {
        const {name, value, type, checked} = e.target
        setFormData (prevFormData => ({
        
            ...prevFormData,
                [name]: value
        
    }))
    }
    console.log
    function handleSubmit (e){
        e.preventDefault ()
        addBadge(formData)
        setFormData(initState)
    }

        

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="name" value={formData.name} onChange= {handleChange}/>

                <input type="text" placeholder="number" name="number" value={formData.number} onChange= {handleChange}/>

                <input type="text" placeholder="description" name="description" value={formData.description} onChange= {handleChange}/>

                <label htmlFor="employee">employee</label>

                <input type="radio" name="occupation" value= "employee" checked={formData.occupation==="employee"} onChange= {handleChange}/>

                <label htmlFor="guest"> guest </label>

                <input type="radio" name="occupation"  value= "guest" checked={formData.occupation==="guest"} onChange= {handleChange}/>

                <h2>Agree to Terms</h2>

                <input type="checkbox" name="agree" checked={formData.agree} onChange= {handleChange}/>

                <button>Submit</button>

            </form>
        )
}
import React from 'react';
import { FaMinus } from "react-icons/fa";

const BlueBoxStyle = {
    "border": "5px solid blue",

    "padding": "20px",
    //  "background-color": "#008080",
}


const BlueBox = () => {
    const [schemaArray,setSchemaArray] =React.useState( [
        { label: "First Name", value: "first_name",selected:false },
        { label: "Last Name", value: "last_name",selected:false },
        { label: "Gender", value: "gender",selected:false },
        { label: "Age", value: "age",selected:false },
        { label: "Account Name", value: "account_name",selected:false },
        { label: "City", value: "city" ,selected:false},
        { label: "State", value: "state",selected:false }
    ])

    const [selector,setSelector]=React.useState(null)
 

    function handleChangeOption(event,selectedArrIndex){

        let temp = schemaArray.map((obj,i)=>{
            if(i==selectedArrIndex)return {...obj,selected:false}
            if(event.target.value==i)return {...obj,selected:true}
            return {...obj}
        })
        setSchemaArray(temp);
    }
    function handleChange(event){
        setSelector(event.target.value);
        
    }
    function handleAddSchema(selector){
        if( selector==null)return
        let temp=schemaArray.map((sch,i)=>{
            if(i==selector)return {...sch,selected:true}
            return {...sch}
        })
        setSchemaArray(temp)
        setSelector(null)
    }
    return (
        <>
            <div className='Blue-box' >

                <div className="dropdown" style={BlueBoxStyle}>
                    <div>
                    {
                        schemaArray?.map((sc,i)=>( 
                            sc.selected == true?
                            <select id="schema-dropdown" style={{ "width": "25rem", "height": "2rem" }}
                                onChange={(event)=>handleChangeOption(event,i)}
                            >
                               <option value="" disabled selected hidden>{sc.label}</option>
                                { schemaArray.map((schema,key)=>(
                                        schema.selected == false?
                                            <option value={key} >{schema.label}</option>
                                            :
                                            null        
                                    
                                )
                                )}
                                
                            </select>:null
                             
                           
                            
                        )
                        )
                    }
                   
                    </div>
                   
                </div>


                <br></br>

                <div>
                    <select id="schema-dropdown" style={{ "width": "25rem", "height": "2rem" }}
                        onChange={handleChange} 

                    >
                        <option value="" disabled selected hidden>Add schema to segment</option>
                        { schemaArray.map((schema,key)=>(
                            schema.selected ==false?
                           <option key={"select"+key} value={key}  >{schema.label} </option>
                           :  <option value="" disabled selected hidden>Add schema to segment</option>
                        ))}
                    </select>
                </div>

                <a href="#" onClick={()=>handleAddSchema(selector)} className="add-schema-link">+ Add new schema</a>
            </div>
        </>
    )
}

export default BlueBox
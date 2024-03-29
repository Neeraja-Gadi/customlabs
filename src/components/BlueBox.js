import React, { useState,useEffect } from 'react';
import { FaMinus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import '../App.css'

const BlueBoxStyle = {
    border: "2px solid #0baeae",
    "margin-top": "20px",     
}


const BlueBox = (props) => {
    const [schemaArray, setSchemaArray] = useState([
        { label: "First Name", value: "first_name", selected: false, trait: "user" },
        { label: "Last Name", value: "last_name", selected: false, trait: "user" },
        { label: "Gender", value: "gender", selected: false, trait: "user" },
        { label: "Age", value: "age", selected: false, trait: "user" },
        { label: "Account Name", value: "account_name", selected: false, trait: "group" },
        { label: "City", value: "city", selected: false, trait: "group" },
        { label: "State", value: "state", selected: false, trait: "group" }
    ])

    
    const [selector, setSelector] = useState(null)

    const [selectedSchemaList, setSelectedSchemaList] = useState([])

    function handleChangeOption(event, selectedAddArrIndex) {

        let tempSchema = schemaArray.map((obj, i) => {

            if (obj.value == selectedSchemaList[selectedAddArrIndex].value) return { ...obj, selected: false }
            if (event.target.value == i) return { ...obj, selected: true }
            return { ...obj }
        })

        let tempSelectedSchema = selectedSchemaList.map((obj, i) => {
            if (i == selectedAddArrIndex) return { ...tempSchema[event.target.value] }
            return { ...obj }
        })


        setSchemaArray(tempSchema);
        setSelectedSchemaList(tempSelectedSchema);
    }
    function handleChange(event) {
        setSelector(event.target.value);

    }
    function handleAddSchema(selector) {
        if (selector == null) return
        let tempSchema = schemaArray.map((sch, i) => {
            if (i == selector) return { ...sch, selected: true }
            return { ...sch }
        })

        setSelectedSchemaList([...selectedSchemaList, { ...tempSchema[selector] }])
        setSchemaArray(tempSchema)
        setSelector(null)
    }

    function handleRemoveSchema(index) {
        let tempSchemaArray = [...selectedSchemaList]

        let updatedSchemaArray = schemaArray.map((obj, ind) => {
            if (obj.value == tempSchemaArray[index].value) return { ...obj, selected: false }
            return { ...obj }
        })
        setSchemaArray(updatedSchemaArray);

        tempSchemaArray.splice(index, 1)

        setSelectedSchemaList(tempSchemaArray)


    }

    useEffect(() => {
        props.getBlueBoxData(selectedSchemaList);

    }, [selectedSchemaList]);
    return (
        <>
            <div className='Blue-box' >


                <div className="blue-box-Content" style={selectedSchemaList.length ? BlueBoxStyle : null}>
                    {selectedSchemaList?.map((sc, i) => (

                        <div key={i} className="dropBox">

                            <GoDotFill style={{ color: (sc.trait == "user" ? 'green' : 'red') }} />
                            <select key={i}  id={`schema-dropdown-${i}`} style={{ width: "25rem", height: "2rem", }}
                                onChange={(event)=>handleChangeOption(event,i)}
                            >
                                <option value="" >{sc.label}</option>
                                {schemaArray.map((schema, key) => (
                                    !schema.selected ?
                                        <option key={key} value={key} >{schema.label}</option>
                                        :
                                        null
                                ))}
                            </select>
                            <FaMinus className='remove-schema-icon' key={`icon-${i}`} onClick={() => handleRemoveSchema(i)} />
                        </div>

                    ))}
                </div>

            </div>


            <br></br>

            <div className='add-schema-to-segment-box'>
                <GoDotFill style={{ color: "gray" }} />
                <select id="schema-dropdown" style={{ width: "25rem", height: "2rem",}}
                    onChange={handleChange}

                >
                    <option value="" style={{width:"10px"}} disabled selected hidden>Add schema to segment</option>
                    {schemaArray.map((schema, key) => (
                        schema.selected == false ?
                            <option key={"select" + key} value={key}  >{schema.label} </option>
                            : <option value="" disabled selected hidden>Add schema to segment</option>
                    ))}
                </select>
            </div>
            <br></br>

            <a href="#" onClick={() => handleAddSchema(selector)} className="add-schema-link">+ Add new schema</a>
        </>
    )
}

export default BlueBox
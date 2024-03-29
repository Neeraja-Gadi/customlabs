import React from 'react';
import '../App.css';
import axios from 'axios';

const Footer = (props) => {

    const segmentName = props.segmentName

    const blueBoxSchemaData = props.blueBoxData ? props.blueBoxData : []

    const schemaData = blueBoxSchemaData?.map((obj) => {
        return { [obj.value]: obj.label }
    })

    const data = {
        "segment_name": segmentName,
        "schema": schemaData

    }
    const body = JSON.stringify(data);



    const handleSaveSegment = () => {

        if (!segmentName || schemaData.length < 1) {
            alert('Please Fill Segment')
            return
        }
        axios.post("https://webhook.site/43cf22c0-9c46-49da-a329-4e502337773d", body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                console.info(response.data, "rrr")
            }).catch((err) => {
                console.error(err)
            })

        props.onClose()
    }



    return (
        <>
            <div className='segment-footer'>
                <button className='segment-save-button' onClick={handleSaveSegment}>Save Segment</button>
                <button className='segment-close-button' onClick={props.onClose}>Cancel</button>
            </div>
        </>
    )
}

export default Footer;
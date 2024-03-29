# ReactJS Segment Creation Page

## 1. Overview
This project implements a segment creation page using ReactJS. It allows users to create segments with custom names and associated schemas. The application provides a user-friendly interface with features such as dynamic addition of schemas and sending segment data to the server.

## 2. Deployment Link
https://schema-creator-rgpq896s4-neeraja-gadis-projects.vercel.app/


## Setup

   
 1.  git clone 'https://github.com/Neeraja-Gadi/customlabs.git'

 2. cd customlabs

 3. npm  i

 4. npm start 


## 3. Usage : 
### (i). Segment Creation Page:

Navigate to the segment creation page after starting the development server. You will see a button labeled "Save segment".
Creating a Segment:

Click on the "Save segment" button to open a popup. Enter the segment name in the text box provided.

### (ii). Adding Schemas:

In the popup, select the desired schema from the "Add schema to segment" dropdown.

### (iii). Adding a New Schema:

Click on the "+Add new schema" link to add a new dropdown to the blue box.

### (iv). Changing New Dropdown:

Newly added dropdowns in the blue box can be changed by selecting different options.

### (v). Resetting Schema Dropdown:

After adding a new dropdown to the blue box, the "Add schema to segment" dropdown will reset with unselected options.


### (vi). Saving the Segment:

Click on the "Save the segment" button to send segment data to the server.


## 4. Server Communication 
When the user clicks on "Save the segment", the segment data is sent to the server in the following format:

```json

{ 
    "segment_name": "last_10_days_blog_visits", 
    "schema": [ 
        {"first_name": "First name"}, 
        {"last_name": "Last name"} 
    ] 
}

```

## 5. Technologies Used

ReactJS

HTML/CSS


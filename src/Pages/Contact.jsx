import React from 'react'
const contacts = [
    "email : abhishekhkushwah.118@gmail.com",
    "contact no : 6367697913",
  ];

const Contact = () => {
  return (
     <div>
        <h3>contact:</h3>
        <ul style={{ border: "0px" }}>
          {contacts.map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </ul>
      </div>
 
  )
}

export default Contact

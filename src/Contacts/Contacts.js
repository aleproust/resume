import React from "react";
import "./Contacts.css";
const Contacts = () => (
    <div className="Contacts">
        <a href="mailto:antoine.leproust@gmail.com?Subject=Hello%20Antoine!" target="_top">
            <i  className="Contacts__icons fas fa-envelope" ></i>
        </a>
        <a href="https://github.com/aleproust/" target="_blank" rel="noopener noreferrer">
            <i  className="Contacts__icons fab fa-github" ></i>
        </a>
        <a href="https://www.linkedin.com/in/antoineleproust/" target="_blank" rel="noopener noreferrer">
            <i  className="Contacts__icons fab fa-linkedin" ></i>
        </a>
    </div>
  );
  
  export default Contacts;
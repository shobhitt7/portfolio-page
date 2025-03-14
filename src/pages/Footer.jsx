import React from "react";

export default function Footer(){
   console.log("footer")
    return(
    <footer>

       <h1>Shobhit sharma ©2025</h1>

    <div>
       <a href="https://www.facebook.com/profile.php?id=100004921746161&mibextid=rS40aB7S9Ucbxw6v">
       <img src="/facebooklogo.png"
       alt="Clickable Image" className="logo-img"/>
       </a>

       <a href="https://www.instagram.com/shobhitsharmaa_?utm_source=qr&igsh=MW92b2loYzJ4ZTRkMA==">
       <img src="/instagramlogo.jpg"
       alt="Clickable Image" className="logo-img"/>
       </a> 

       <a href="https://www.linkedin.com/in/shobhit-sharma-59b230303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
       <img src="/linkedin.png"
       alt="Clickable Image"   className="logo-img"/>
       </a>

    </div>    
    </footer>
      
    )
}
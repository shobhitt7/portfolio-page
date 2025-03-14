import React from "react"

export default function Home(){
  console.log("home")
    return(
       <div className="container">
        <div className="first-container">
          <p  className="name-line">Hi all, I am</p>
          <h1 className="name-line">Shobhit Sharma</h1>
          <p className="frontend-line">  front-end developer</p>
        </div> 
        <div className="container">
        <p><span className="first-line">➤ // my number</span>
            <br />
             <span className="const-line">const </span> 
            <span className="detail-line">telephoneNum =</span>
            <span className="link-line"><a href="tel:+917851864873">+91 7851864873</a></span>
             <br /> 
             <span className="first-line">➤ //my-e-mail</span>  
             <br/> 
             <span className="const-line">const </span> 
             <span className="detail-line">Email =</span>  
             <a href="mailto:shobhitgs2011@gmail.com?subject=Job%20Offer&body=Hello%20Shobhit,%0D%0A%0D%0AWe%20would%20like%20to%20offer%20you%20a%20job%20opportunity.%20Please%20let%20us%20know%20your%20availability%20for%20a%20discussion.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]">"shobhitgs2011@gmail.com"</a>

             <br />
            <span className="first-line">➤ // you can also see it on my github page </span>
            <br />
            <span className="const-line">const </span>
             <span className="detail-line">GithubLink = </span>
            <a href="https://github.com/shobhitt7">"github.com/shobhitsharma"</a>
            <br />
            <span className="first-line">➤ // you can check my LinkedIn page </span>
            <br />
            <span className="const-line">const </span> 
            <span className="detail-line">linkedinPage = </span> 
            <span className="link-line"><a href="https://www.linkedin.com/in/shobhit-sharma-59b230303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">"linkedin/in/shobhitsharma"</a> </span>
        </p>
        </div>
       </div>
    )
}
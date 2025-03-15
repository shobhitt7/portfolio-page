export default function Contact() {
  return (
    <div className="container">
      <div className="first-container">
        <p className="comment">{"// Hi all, I am"}</p>
        <h1 className="name">Shobhit Sharma</h1>
        <p className="comment">{"// Front-end Developer"}</p>
      </div>

      <div className="code-container">
        <p>
          <span className="comment">{"➤ // my number"}</span>
          <br />
          <span className="keyword">const</span> <span className="variable">phoneNum = </span> 
          <span className="string">
            <a href="tel:+917851864873">"+91 7851864873"</a>
          </span>;
          <br />
          <br />
          <span className="comment">{"➤ // my email"}</span>
          <br />
          <span className="keyword">const</span> <span className="variable">Email = </span>
          <span className="string">
            <a href="mailto:shobhitgs2011@gmail.com?subject=Job%20Offer&body=Hello%20Shobhit,%0D%0A%0D%0AWe%20would%20like%20to%20offer%20you%20a%20job%20opportunity.%20Please%20let%20us%20know%20your%20availability%20for%20a%20discussion.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]">
              "shobhitgs2011@gmail.com"
            </a>
          </span>;
          <br />
          <br />
          <span className="comment">{"➤ // my GitHub"}</span>
          <br />
          <span className="keyword">const</span> <span className="variable">GithubLink = </span>
          <span className="string">
            <a href="https://github.com/shobhitt7">"github.com/shobhitsharma"</a>
          </span>;
          <br />
          <br />
          <span className="comment">{"➤ // my LinkedIn"}</span>
          <br />
          <span className="keyword">const</span> <span className="variable">linkedinPage =  </span> 
          <span className="string">
            <a href="https://www.linkedin.com/in/shobhit-sharma-59b230303">
              "linkedin/in/shobhitsharma"
            </a>
          </span>;
        </p>
      </div>
    </div>
  );
}

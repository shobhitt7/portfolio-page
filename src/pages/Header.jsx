// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// 
// export default function Header(){
//   console.log("header")
//     return(
//         <header>
//         <Link className="site-logo" to="/">shobhit_sharma</Link>
//         <nav id='nav-bar'>
//           <NavLink to="/about"
//           >About</NavLink>
// 
//           <NavLink to="/contact"
//           >Contact</NavLink>
// 
//           <NavLink to="/projects"
//           >Project</NavLink>
// 
//         </nav>
//       </header>
//     )
// }
// import { Link, NavLink } from "react-router-dom";
// 
// export default function Header() {
//   return (
//     <header className="header">
//       <pre className="code-block">
//         <code>
//           <span className="comment">// Navigation bar</span> {"\n"}
//           <span className="keyword">const</span> <span className="variable">siteLogo</span> ={" "}
//           <span className="string">
//             <Link to="/" className="site-logo">"shobhit_sharma"</Link>
//           </span>;
//           {"\n\n"}
// 
//           <span className="comment">// Navigation links</span> {"\n"}
//           <span className="keyword">const</span> <span className="variable">navLinks</span> = {"["}
//           {"\n"} &nbsp; {"{ "}
//           <span className="key">name:</span> <span className="string">"About"</span>,{" "}
//           <span className="key">link:</span>{" "}
//           <span className="string">
//             <NavLink to="/about">"/about"</NavLink>
//           </span>{" "}
//           {"},"}
//           {"\n"} &nbsp; {"{ "}
//           <span className="key">name:</span> <span className="string">"Contact"</span>,{" "}
//           <span className="key">link:</span>{" "}
//           <span className="string">
//             <NavLink to="/contact">"/contact"</NavLink>
//           </span>{" "}
//           {"},"}
//           {"\n"} &nbsp; {"{ "}
//           <span className="key">name:</span> <span className="string">"Projects"</span>,{" "}
//           <span className="key">link:</span>{" "}
//           <span className="string">
//             <NavLink to="/projects">"/projects"</NavLink>
//           </span>{" "}
//           {"}"}
//           {"\n"} {"];"}
//         </code>
//       </pre>
//     </header>
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className="site-logo" to="/">shobhit_sharma</Link>
      <nav id="nav-bar">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  );
}


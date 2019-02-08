import React from "react";

import "./Post.css";

const post = props => (
  <div>
  <div className="container">
    <ul className="nospace group services">
      <li className="one_third">
        <article
          className="bgded overlay"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className="txtwrap">
            <i className="block fa fa-4x fa-ioxhost" />
            <h6 className="heading">{props.author}</h6>
            <p>{props.title} [&hellip;]</p>
            <footer>
              <button onClick={props.clicked} className="btn">
                Read More &raquo;
              </button>
            </footer>
          </div>
        </article>
      </li>
    </ul>
  </div>
  </div>
 
);
export default post;

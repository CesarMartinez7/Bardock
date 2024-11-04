import React from "react";



export const Footer = ({name = "FastData"}) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>{name}</strong> by Caesar Martinez
          The source code is licensed
          . The
          website content is licensed
        </p>
      </div>
    </footer>
  )
}


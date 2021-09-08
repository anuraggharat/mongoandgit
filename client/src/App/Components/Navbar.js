import React from 'react'

export default function Navbar({user}) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Marks Tracker
          </a>
         <p>{user.id}</p>
         
        </div>
      </nav>
    );
}

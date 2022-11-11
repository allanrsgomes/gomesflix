import React from 'react'
import './Header.css'

export default ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://allanrsgomes.github.io/allan-gomes/img/logo/icon.png" alt="code" />
                </a>
                <div className="header-title">
                    Gomes Flix
                </div>
            </div>
            
            <div className="header-user">
                <a href="/">
                    <img src="https://github.com/allanrsgomes.png" alt="user" />
                </a> 
            </div>
        </header>
  ) 

}
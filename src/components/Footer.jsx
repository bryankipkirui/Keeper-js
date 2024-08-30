import React from "react";

function Header(){
    
    const newYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Copyright ©️{newYear}</p>
        </footer>
    );
}

export default Header;
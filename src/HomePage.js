import React from 'react';
const HomePage = () => {
    const logOutOnClick = (event) =>{
        localStorage.removeItem("customerToken")
        window.location.href = "/"
    }
    return (
        <React.Fragment>
            <h2>My HomePage</h2>
            <button className="btn btn-secondary" onClick={logOutOnClick}>Log out</button>
        </React.Fragment>
        
    );
}

export default HomePage;
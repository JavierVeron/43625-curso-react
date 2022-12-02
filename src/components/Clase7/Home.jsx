import React from "react";

const Home = ({mensaje}) => {
    return (
        <div>
            <h1>Página Principal</h1>
            <h3>{mensaje}</h3>
        </div>
    )
}

export default Home;
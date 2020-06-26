import React from 'react';
import Card from './Cards.jsx';
import Sdata from './Sdata.jsx';
import "./index.css";


function App() {
    return (
        <>
            <h1 className="heading_style"> My Favourite top 6 Netflix Show </h1>
            {/* Array mappping */} 
             {Sdata.map((value) => {
                return (
                    <Card
                        key={value.id}
                        imgsrc={value.imgSource}
                        title={value.stitle}
                        seriesName={value.sName}
                        link={value.links}
                    />
                );
            })}
        </>
    );
}

export default App;
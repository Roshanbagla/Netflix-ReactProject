import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards.jsx';
import Sdata from './Sdata.jsx';
import "./index.css";

ReactDOM.render(
  <>
    <h1 className="heading_style"> My Favourite top 5 Netflix Show </h1>

    <Card
      imgsrc={Sdata[0].imgSource}
      title={Sdata[0].stitle}
      seriesName={Sdata[0].sName}
      link={Sdata[0].links}
    />

    <Card
      imgsrc={Sdata[1].imgSource}
      title={Sdata[1].stitle}
      seriesName={Sdata[1].sName}
      link={Sdata[1].links}
    /> 

     <Card
      imgsrc={Sdata[2].imgSource}
      title={Sdata[2].stitle}
      seriesName={Sdata[2].sName}
      link={Sdata[2].links}
    />

    <Card
      imgsrc={Sdata[3].imgSource}
      title={Sdata[3].stitle}
      seriesName={Sdata[3].sName}
      link={Sdata[3].links}
    />

    <Card
      imgsrc={Sdata[4].imgSource}
      title={Sdata[4].stitle}
      seriesName={Sdata[4].sName}
      link={Sdata[4].links}
    />
  </>
  , document.getElementById("root")
)
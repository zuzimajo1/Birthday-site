import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {data} from './data'


const BookList = () => {
  return (
    <>
    <Section />
    </>
  );
};

const Section = ()=>{
  const [people,setPeople] = React.useState(data);
  const RemoveID = (id)=>{
    const remove = people.filter((items)=> items.id !== id);
    setPeople(remove);
    }
  
  return (
    <>
      <div className="container">
        <div>
          <h3>{people.length} birthdays today</h3>
          <div className="container2">
            {people.map((items) => {
              const { id, name, age, image } = items;
              return (
                <section key={id} className="wrapper">
                  <div className="wrapper1">
                    <img className="dataimage" src={image} alt={name}></img>
                    <div className="wrapperdiv1">
                      <h2>{name}</h2>
                      <p>{`${age} years`}</p>
                    </div>
                  </div>
                  <div className="wrapperdiv2">
                    <button
                      className="button"
                      type="button"
                      onClick={() => RemoveID(id)}
                    >
                      Remove
                    </button>
                  </div>
                </section>
              );
            })}
          </div>
          <button type="button" onClick={() => setPeople([])}>
            clear all
          </button>
        </div>
      </div>
      <h4 className="author">
        Coded by:{" "}
        <span className="authorname">
         Zuzim Ajo
        </span>
      </h4>
    </>
  );
}





ReactDOM.render(
  <>
    <BookList />
  </>,
  document.getElementById("root")
);

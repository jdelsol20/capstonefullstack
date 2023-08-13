
import { Fragment, createContext, useEffect, useState } from "react"
// Content being pulled with function below using imported useEffect/State
const Cart = createContext()
// https://fakestoreapi.com/
const Context = ({ children }) => {
    const [item, setItem] = useState([]);

    const getItem = async () => {
        const url = 'https://fakestoreapi.com/products/1';
        const items = await fetch(url);
        const itemApi = await items.json();

        // console.log(itemApi); //<-- used to see data in console
        setItem(itemApi)
    }

    useEffect(() => {
        getItem()
    }, [])
     
    const containerStyle = {
      backgroundColor: 'lightgray',
    };

    const rowStyle = {

    };



  return (
    <Cart.Provider>
      <div style={containerStyle}>
        <div style={rowStyle}>
          {/* Check if item is an array before mapping */}
          {Array.isArray(item) &&
            item.map((item1, idx) => {
            return (
              <Fragment>
                <div className="col-4">
                  <h4>(item1.category)</h4>
                </div>
              </Fragment>
            )
          })}
        {children}
        </div>
      </div>
    </Cart.Provider>
  )
};

export default Context;
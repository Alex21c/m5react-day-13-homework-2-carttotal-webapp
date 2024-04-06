import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import DB_PRODUCTS from './DB.json';
import Products from './Components/Products';
import Cart from './Components/Cart';
import { useEffect, useReducer } from 'react';

function App() {
  // //console.log(DB_PRODUCTS)
  // //console.log(Object.entries(DB_PRODUCTS))
  // return;
  function reducer(state, action){
    let productIds = [];
    switch (action.type){
      case 'updateQuantity':
        // //console.log(action.payload, 'hmm');
        // //console.log(state.products['productID'])
        if(Number(action.payload.quantity) === 0){
          productIds =  state.productIds.filter(id => id!==Number(action.payload.productID));
        }else{
          productIds = [...state.productIds, Number(action.payload.productID)];
        }

        return {
          ...state, 
          products : {
            ...state.products,
            [action.payload.productID] : {
              ...state.products[action.payload.productID],
              quantity: Number(action.payload.quantity)
            }
          },
          productIds: [...productIds]
          

          
          // productIds : [...state.productIds, Number(action.payload)]
        }
        
      default:
        return state;

    }
  }
  function initializeStateTeammembersWebApp(){
    return {
      products: DB_PRODUCTS,
      productIds : [] // all the members who are in the team 
    }
  }
  let [stateCartTotalWebApp, dispatch] = useReducer(reducer, initializeStateTeammembersWebApp());
  // useEffect(()=>{//console.log(stateCartTotalWebApp)}, [stateCartTotalWebApp]);
  // ////console.log(DB_productS)
  return (
    <div id='wrapperWebApp' className='mt-[.5rem] pt-[1rem] p-[2rem] w-[70rem]   rounded-md  text-[1.2rem] text-slate-200 flex gap-[1rem]  justify-center  m-auto'>
      <Products stateCartTotalWebApp={stateCartTotalWebApp} dispatch={dispatch}/>
      <Cart stateCartTotalWebApp={stateCartTotalWebApp} dispatch={dispatch}/>
    </div>

  );
}

export default App;

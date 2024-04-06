import { useEffect, useState } from "react";
export default function Team({stateCartTotalWebApp, dispatch}){
  // ////console.log(stateCartTotalWebApp)
  
    // let data=stateCartTotalWebApp.products.filter((product)=>stateCartTotalWebApp.productIds.includes( product.id));
    // ////console.log(data);
  let [stateProductsInsideCart, updateStateProductsInsideCart]  = useState([]);
  
  useEffect(()=>{
    let products = Object.entries(stateCartTotalWebApp.products);
    //console.log(products)
    // // //console.log( products)
    let filteredProducts = products.filter((product)=>{
      product= product[1];
      //console.log(stateCartTotalWebApp.productIds.includes( product.id))
      return stateCartTotalWebApp.productIds.includes( product.id)
    });
    //console.log(filteredProducts)
    updateStateProductsInsideCart(filteredProducts);

  }, [stateCartTotalWebApp]);

  // useEffect(()=>{//console.log(stateProductsInsideCart)}, [stateProductsInsideCart])
 
  let cartTotal=0;
  return (
    <section className="wrapperTeam border-[.8rem] border-blue-900 p-[2rem] rounded-md flex flex-col  items-center min-w-[20rem]  pb-[1rem] justify-between" >
      <div className="flex flex-col items-center gap-[1rem] pb-[2rem]">
        <h2 className="font-semibold text-[2rem]">Cart</h2> 
           
        <div className="flex flex-col gap-[1rem]  max-h-[30rem] overflow-y-scroll scrollbar-blue pr-[1rem] rounded-md">

          {stateProductsInsideCart.map((product)=>{
            product= product[1];
            // //console.log(product)
            cartTotal+=(product.price * product.quantity);
            return (
              <div key={product.id} className="product flex gap-[1rem] bg-blue-300 p-[1rem] text-slate-900 rounded-md items-center justify-between text-[1.5rem] font-semibold ">
                <span className="text-[3rem]">{product.name}</span>
                <span className="text-stone-800">{product.quantity}x ₹{product.price}</span>
                
            </div>
            );
          }
            
          )}
        </div>
      </div>
      <div className=" w-[100%] ">
        {
          stateCartTotalWebApp.productIds.length >0 && 
            <div  className="flex gap-[1rem] bg-blue-900 p-[1rem] py-[.5rem] text-slate-200 rounded-md items-center justify-between text-[1.5rem] font-semibold">
              <span>Total:</span>
              <span className="text-[2rem]">₹{Math.round(cartTotal)}</span>            
          </div>        
        }
      </div>
    </section>
  );
}
export default function Products({stateCartTotalWebApp, dispatch}){
  // Object.entries(stateCartTotalWebApp.products).map((item, idx)=>{
  //   //console.log(item[1])
  //   // //console.log('key is' + key + 'value is ' + value)
  // })

  // return;
  // ////console.log(stateCartTotalWebApp)
  function handleInputChange(event){

    let productID = event.target.getAttribute('data-product-id');
    let quantity = event.target.value;
    if(quantity<0){
      quantity = quantity;
      event.target.value = quantity;
    }
    //console.log(productID, quantity)
    dispatch({type: 'updateQuantity', payload: {productID: productID, quantity: quantity} });
  }

  function isFruitAlreadyInCart(productID){    
    return stateCartTotalWebApp.productIds.includes(productID);
  }
  return (
    <section className="border-[.8rem] border-blue-900 p-[2rem] rounded-md flex flex-col gap-[1rem] items-center" >
      <h2 className="font-semibold text-[2rem]">Products</h2>
      <div className="flex flex-col gap-[1rem]  max-h-[30rem] overflow-y-scroll scrollbar-blue pr-[1rem] rounded-md">
        {Object.entries(stateCartTotalWebApp.products).map((product)=>
          {
            product = product[1];
            // let flagIsFruitAlreadyInCart  = isFruitAlreadyInCart(product.id);
            // //console.log(flagIsFruitAlreadyInCart)
         
            return (

            <div key={product.id} className={`product flex gap-[1rem] bg-blue-300 p-[1rem] text-slate-900 rounded-md items-center justify-between text-[1.5rem] font-semibold `}>
              <span className="text-[3rem]">{product.name}</span>
              <span>₹{product.price}</span>
              <input min={0} type='Number' defaultValue={product.quantity} className={`btn select-none   outline outline-2 outline-amber-50  hover:bg-yellow-400 transition cursor-pointer px-[.5rem] py-[.3rem] rounded-md  text-slate-900    bg-yellow-300 hover:text-white text-[1.3rem] w-[5rem] `} onChange={handleInputChange} data-product-id={product.id} />
              
            </div>

            );

        })}
      </div>
    </section>
  );
}
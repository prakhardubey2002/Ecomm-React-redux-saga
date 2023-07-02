export  const addToCart=(data)=>{
    console.warn("Data",data.quantity,data.name);
    return{
        type:"ADD_TO_CART",
        data
    }
}
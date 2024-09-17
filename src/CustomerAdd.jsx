import { useState } from "react"
// import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd(){
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    // const [customers,setCustomers] = useState([]);

    function addCustomer(){
        if(input){
            // setCustomers((prevState)=>[...prevState,input])
            // console.log(customers);
            dispatch(addCustomerAction(input));
            setInput("");
        }
    }

    return(
        <>
     
        <div>
        <h1>Add New Customer</h1>      
        <input type="text"  value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={addCustomer}>Add</button>  
        </div>
        {/* <CustomerView customers={customers} setCustomers={setCustomers}/> */}
        </>
    )
}
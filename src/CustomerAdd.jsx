import { useState } from "react"
import { addCustomer as addCustomerAction } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd(){
    const [input,setInput] = useState("");
    const dispatch = useDispatch();

    function addCutomer(){
        if(input){
            dispatch(addCustomerAction(input));
            setInput("");
        }
       
    }
    return(
       
        <div>
            <h3>Add New Customer</h3>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addCutomer}>Add</button>
        </div>
    )
}
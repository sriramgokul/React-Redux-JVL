import { useSelector } from "react-redux"
import { deleteCustomer } from "./slices/CustomerSlice"
import { useDispatch } from "react-redux"

export default function CustomerView(){
    const customers =useSelector((state)=> state.customers)
    const dispatch = useDispatch();

    function deleteHandler(idx){
        dispatch(deleteCustomer(idx));
    }
    return (
        <div>
            <h3>Customers List</h3>
            <ul style={{listStyle:"none"}}>
                {
                    customers.map((customer,idx)=>(
                        <div key={idx}>
                        <li>{customer} <button onClick={()=>deleteHandler(idx)}>Delete</button></li>

                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
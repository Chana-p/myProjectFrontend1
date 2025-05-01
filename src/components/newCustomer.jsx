import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { addCustomerThunk } from "../redux/slices/addCustomerThunk";



export const NewCustomer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customername = useSelector(state => state.customer.customername);
    const password = useSelector(state => state.customer.password);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const CID = useSelector(state => state.customer.CID);
    const EID = useSelector(state => state.customer.EID);
    useEffect(() => {
        console.log(customername + "customername");
    }, [])

    // useEffect(() => {
    //     if (CID !== -1) {
    //         navigate(`/Home`)
    //     }
    // }, [CID])
    useEffect(() => {
        if (CID !== -1)
            navigate(`Home`)
        if (EID === 10000) {
            navigate(`Manager`)
        }
        if (EID !== -1 && EID !== 10000)
            navigate(`service`)//employee    
    }, [CID, EID])
    return <div className="newcustomer-container">
        <input className="newcustomerInput" type="text" value={customername} />
        <input className="newcustomerInput" type="text" value={password} />
        <input className="newcustomerInput" type="text" onChange={(e) => setPhone(e.target.value)} placeholder="your phone number" />
        <input className="newcustomerInput" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="your Email" />
        <input className="newcustomerInput" type="text" onChange={(e) => setAddress(e.target.value)} placeholder="your address" />
        <button className="newcustomerButton" onClick={async () => {
            dispatch(addCustomerThunk({
                custId: password,
                custName: customername,
                custAddress: address,
                custEmail: email,
                custPhone: phone
            }))
        }}
        >logOn</button>
    </div>
}


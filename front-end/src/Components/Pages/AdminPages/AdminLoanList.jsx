import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function AdminLoanList(props){
    const[text,setText]=useState("")
    const handleOnClick=(event)=>{
        event.preventDefault();
        console.log(text)
        if(props.loanName === "Vehicle loan"){
            
            axios.put("http://localhost:8082/v1/vehicleLoan/",{
                vehicleLoanId:props.vehicleLoanId,
                vehicleName:props.vehicle,
                customerMobileNo:props.customer,
                loanName:props.loanName,
                loanamount:props.loanamount,
                rateOfInterest:props.roi,
                status:text
            })
            .then((res)=>{
                toast.success(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })

        }
        if(props.loanName === "Education loan"){
            console.log("condition")
            axios.put("http://localhost:8082/v1/educationalLoan/",{
                educationalLoanId:props.educationalLoanId,
                customerMobileNo:props.customer,
                collegeName:props.education,
                loanName:props.loanName,
                loanamount:props.loanamount,
                rateOfInterest:props.roi,
                status:text
            })
            .then((res)=>{
                toast.success(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        if(props.loanName === "Housing loan"){
            axios.put("http://localhost:8082/v1/housingLoan/",{
                housingLoanId:props.housingLoanId,
                customerMobileNo:props.customer,
                address:props.housing,
                loanName:props.loanName,
                loanamount:props.loanamount,
                rateOfInterest:props.roi,
                status:text
            })
            .then((res)=>{
                toast.success(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        if(props.loanName === "Business loan"){
            axios.put("http://localhost:8082/v1/businessLoan/",{
                businessLoanId:props.businessLoanId,
                businessName:props.business,
                customerMobileNo:props.customer,
                loanName:props.loanName,
                loanamount:props.loanamount,
                rateOfInterest:props.roi,
                status:text
            })
            .then((res)=>{
                toast.success(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    var loanId;
    if(props.vehicleLoanId){
        loanId=props.vehicleLoanId;
        }
    else if(props.businessLoanId){
        loanId = props.businessLoanId
    }
    else if(props.educationalLoanId){
        loanId = props.educationalLoanId
    }
    else if(props.housingLoanId){
        loanId = props.housingLoanId
    }
    var specific;
    if(props.vehicle){
        specific = props.vehicle
    }
    else if(props.business){
        specific = props.business
    }
    else if(props.housing){
        specific = props.housing
    }
    else if(props.education){
        specific = props.education
    }
return(<>
<h4>{props.loanName}</h4>
<ul>
    
    <li>{loanId}</li>
    <li>{props.loanamount}</li>
    <li>{specific}</li>
    <li>{props.roi}</li>
    <li>{props.customer}</li>
    <li> update Status: <input type="text" onChange={(e)=>setText(e.target.value)}></input> </li>
    <button onClick={handleOnClick}>update</button>
</ul>
</>);
}
export default AdminLoanList
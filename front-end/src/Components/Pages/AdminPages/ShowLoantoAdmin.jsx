import { useState,useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AdminLoanList from "./AdminLoanList";
function ShowLoanToAdmin(props){
    
    const [businessLoan,setBusinessLoan] = useState({
        "businessLoanId":"",
        "businessName":"",
        "customerMobileNo":null,
        "loanName":"",
        "loanamount":null,
        "rateOfInterest":null,
        "status":""
      })
      const[educationalLoan,setEducationalLoan] = useState({
        "educationalLoanId":"",
        "customerMobileNo":null,
        "collegeName":"",
        "loanName":"",
        "loanamount":null,
        "rateOfInterest":null,
        "status":""
      })
      const[vehicleLoan,setVehicleLoan] = useState({
        "vehicleLoanId":"",
        "vehicleName":"",
        "customerMobileNo":null,
        "loanName":"",
        "loanamount":null,
        "rateOfInterest":null,
        "status":""
      })
      const[housingLoan,setHousingLoan] = useState({
        "housingLoanId":"",
        "cusotmerMobileNo":null,
        "address":"",
        "loanName":"",
        "loanamount":null,
        "rateOfInterest":null,
        "status":""
      })
    var allLoan = []
    useEffect(()=>{
        var customerMobileNo = props.phoneNumber;
        axios.get("http://localhost:8081/v1/businessLoan/customerMobileNo/"+customerMobileNo)
        .then((response)=>{
          setBusinessLoan(response.data)
          console.log(response.data)
          
        })
        .catch((error)=>{
          console.log(error)
        })
        axios.get("http://localhost:8081/v1/educationalLoan/customerMobileNo/"+customerMobileNo)
        .then((res)=>{
          setEducationalLoan(res.data)
          console.log(res.data)
          
        })
        .catch((err)=>{
          console.log(err)
        })
        axios.get("http://localhost:8081/v1/housingLoan/customerMobileNo/"+customerMobileNo)
        .then((res)=>{
          setHousingLoan(res.data)
          console.log(res.data)
          
        })
        .catch((err)=>{
          console.log(err)
        })
        axios.get("http://localhost:8081/v1/vehicleLoan/customerMobileNo/"+customerMobileNo)
        .then((res)=>{
          setVehicleLoan(res.data)
          console.log(res.data)
          
        })
        .catch((err)=>{
          console.log(err)

        })
    },[])

    if(businessLoan.customerMobileNo){
        allLoan.push(businessLoan)
    }
    if(educationalLoan.customerMobileNo){
        allLoan.push(educationalLoan)
    }
    if(vehicleLoan.customerMobileNo){
        console.log("housing>>>>>>>.")
        console.log(housingLoan.customerMobileNo)
        allLoan.push(vehicleLoan)
    }
    if(housingLoan.customerMobileNo){
        allLoan.push(housingLoan)
    }
    
    return (<>
    {console.log(allLoan)}
    {allLoan.map(u=><AdminLoanList vehicleLoanId={u.vehicleLoanId} businessLoanId={u.businessLoanId} educationalLoanId={u.educationalLoanId} housingLoanId={u.housingLoanId} vehicle={u.vehicleName} business={u.businessName} housing={u.address} education={u.collegeName} customer={u.customerMobileNo} loanName = {u.loanName} loanamount={u.loanamount} roi={u.rateOfInterest} />)}
          </>);
}
export default ShowLoanToAdmin
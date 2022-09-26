import React from "react"
import AdminNavBar from "./AdminNavBar"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShowLoanToAdmin from "./ShowLoantoAdmin";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 400,
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll'
};
function Temp(props){
    const[user,setUser] = useState([])
    const[open,setOpen] = useState(false)
    const handleOpen=()=>setOpen(true)
    const handleClose=()=>setOpen(false)
    /*useEffect(()=>{
        axios.get("http://localhost:8091/v1/customer")
        .then((res)=>{
            setUser(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])*/

    

    return (
        
        <>
        
        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
       { <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
    </TableHead>}
        <TableBody>
            <TableRow
              key={props.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {props.name}
              </TableCell>
              <TableCell align="center">{props.phoneNumber}</TableCell>
              <TableCell align="center">{props.adhar}</TableCell>
              <TableCell align="center">{props.panNumber}</TableCell>
              <TableCell align="center">{props.email}</TableCell>
              <TableCell align="center">{props.dateOfBirth}</TableCell>
              <TableCell align="center"> <Button onClick={handleOpen}>show details</Button></TableCell>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Loan status of the customer
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ShowLoanToAdmin phoneNumber={props.phoneNumber}/>
                    </Typography>
                </Box>
              </Modal>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default Temp
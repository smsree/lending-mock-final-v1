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
};
function AdminStatus(){
    const[user,setUser] = useState([])
    const[open,setOpen] = useState(false)
    const handleOpen=()=>setOpen(true)
    const handleClose=()=>setOpen(false)
    useEffect(()=>{
        axios.get("http://localhost:8091/v1/customer")
        .then((res)=>{
            setUser(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    

    return (
        
        <>
        <AdminNavBar/>
        <div>Admin status</div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer name</TableCell>
            <TableCell align="center">Phone number</TableCell>
            <TableCell align="center">Adhar number</TableCell>
            <TableCell align="center">pan number</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">DOB</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((temp) => (
            <TableRow
              key={temp.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {temp.name}
              </TableCell>
              <TableCell align="center">{temp.phoneNumber}</TableCell>
              <TableCell align="center">{temp.adhar}</TableCell>
              <TableCell align="center">{temp.panNumber}</TableCell>
              <TableCell align="center">{temp.email}</TableCell>
              <TableCell align="center">{temp.dateOfBirth}</TableCell>
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
                       
                        Admin put mapping page should be here
                        Hello
                        {temp.name}
                    </Typography>
                </Box>
              </Modal>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default AdminStatus
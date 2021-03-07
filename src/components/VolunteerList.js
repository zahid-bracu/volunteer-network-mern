import React, { useState , useEffect} from 'react';
import { Table } from 'reactstrap';
import TableData from './TableData';
const VolunteerList = () => {
  const [datas,setData]=useState([]);
  useEffect(() => {
    fetch('http://localhost:3006/info')
    .then(response => response.json())
    .then(data => {
        setData(data)
    });
  },[]);

 

    return (
        <>
        <h4 className="text-center mt-5">Registered Volunteer List</h4>
        <Table style={{maxWidth:"1000px"}} className="mx-auto mt-5">
        <thead>
          <tr>
             
            <th>Name</th>
            <th>Email</th>
            <th>Registration Date</th>
            <th>Volunteer Work</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          datas.map(key => <TableData info={key}/>)
        }
        
      </Table>
      </>
    );
};

export default VolunteerList;
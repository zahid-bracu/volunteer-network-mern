import React from 'react';

const TableData = (props) => {
  const {name,date,mail,description,organize,_id}=props.info;
    return (
        <tbody>
          <tr>
            
            <td>{name}</td>
            <td>{mail}</td>
            <td>{date}</td>
            <td>{organize}</td>
            <td><button className="btn btn-danger btn-sm">Delete</button></td>
          </tr>
        </tbody>
    );
};

export default TableData;
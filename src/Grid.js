import React from "react";

const Grid = ({ config, data }) => {
  return (<table>
    <thead>
      <tr>
        {config.map((col) => (
          <th key={col.title}>{col.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>      
        {data.map((row, i) => {
          return(
            <tr key = {i}>
              {config.map((col, j)=> {               
                if(Object.keys(col).includes("component")) {
                  return <td key = {j}>
                    <col.component data= {row[config[j].field]} />
                  </td>                  
                }else {
                  return <td key = {j}>{row[config[j].field]}</td>
                }
                })}
            </tr> 
          )
        })}      
    </tbody>
  </table>
  )};

export default Grid;

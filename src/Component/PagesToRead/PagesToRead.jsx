import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getBookReadDetails } from '../Utlite/localStroge';
import { useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';
const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

   
    
    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

     const dataLoaded = useLoaderData();
     const [dataa,setDataa]= useState([]);
    useEffect(()=>{
        const datas =getBookReadDetails();
        if (dataLoaded.length){
            const filterdata = dataLoaded.filter(book=>datas.includes(book.bookId))
        setDataa(filterdata)
        }
    },[dataLoaded])
const {totalPages,bookName}=dataa
    // console.log(totalPages)
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };  
    return (
<BarChart
      width={1000}
      height={300}
      data={dataa}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis  dataKey="totalPages" />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {dataa.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}




export default PagesToRead;
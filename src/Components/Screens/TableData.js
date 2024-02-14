import React,{useState,useEffect} from "react";
import {Container,Table} from 'react-bootstrap';
import axios from 'axios';
import {ToWords} from 'to-words';

const TableData =({studentId}) =>{
   // console.log("id",studentId)
   const toWords = new ToWords();

    const[resultDetails,setResultDetails]= useState([])

    useEffect(()=> {
        axios.get('http://localhost:3002/studentInfo')
        .then((response) => {
            console.log("resss",response.data)
            let temp=[]
            temp = response.data.filter((d)=>d.registerId === studentId)
            setResultDetails(temp)
        })
        .catch((error) => console.log("error",error))
    },[studentId])

    console.log("state2",resultDetails)

    const getTotalMarks =(value) =>{
        let sum=0
        resultDetails.map((d) =>{
            sum+=parseInt(d[value])
        })
        return sum
    }

    const scoreHandler = () => {
        let count=0;
        resultDetails.map((d) => {
            if(d.result === 'FAIL'){
                count++
            }
        })
        console.log("count",count)
        if(count >= 1){
            return 'FAIL'
        }else{
            return 'PASS'
        }
    }

    const finalResult = () => {
        let sum=0;let count=1,status
        resultDetails.map((d) =>{
            sum += Number(d.obtained_marks)
            if(count >=1 && d.result ==='FAIL'){
                status ='FAIL'
            }else if(sum >=260){
                status ='DISTINCTION'
            }else if(sum < 260 && sum >= 220){
                status = 'FIRST CLASS'
            }else{
                status ='SECOND CLASS'
            }
            }
        )
        return status
    }
    
    const findPercentage = () =>{
        let obtained = getTotalMarks('obtained_marks')
        let max = getTotalMarks('max_marks')
        let x ='%',
        percent = Math.floor((obtained/max)*100)
        return [percent,x]
    }

    const totalMarksInWords =() =>{
        let a = getTotalMarks('obtained_marks')
        let text = toWords.convert(a);
        return text

    }
    
    return(
        <Container>
           
            <Table className="my-5" responsive bordered>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Sl No </th>
                        <th colspan={2}>Subject
                             <th style={{padding:"0px 7rem"}}>code</th>
                             <th style={{padding:" 0px 7rem"}}>subject</th>
                        </th>
                        <th colspan={3}>Examination Marks Obtained
                            <th style={{paddingLeft:"10rem"}}>Max</th>
                            <th style={{paddingLeft:"10rem"}}>Min</th>
                            <th style={{paddingLeft:"10rem"}}>Obtained</th>
                        </th>
                        <th style={{padding:" 0px 5rem"}}>Subject Result</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    resultDetails.map((data,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                    ))
                   }
                </tbody>
                <thead>
                    <tr>
                        <th colspan={3}>Grand Total</th>
                        <td>{getTotalMarks('max_marks')}</td>
                        <td>{getTotalMarks('min_marks')}</td>
                        <td>{getTotalMarks('obtained_marks')}</td>
                        <td>{scoreHandler()}</td>
                    </tr>
                </thead>
            </Table>
            <p><b>Total Marks Obtained [In Words]</b>:{totalMarksInWords()}</p>
            <p><b>Result of Semester</b>:{finalResult()}</p>
            <p><b>Percentage</b>:{findPercentage()}</p>
            <p><b>Date</b>:05 DEC 2024</p>
    
        </Container>
    )
}
export default TableData;
import React,{useState,useEffect} from 'react';
import {Row,Col, FormGroup,Form} from 'react-bootstrap';
import TableData from './TableData';
import axios from 'axios';
import { useParams,Link} from 'react-router-dom';

const ResultPage = () =>{

    const[studentDetails,setStudentDetails] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        axios.get('http://localhost:3002/studentInfo')
        .then((response)=>{
            response.data.map((data)=>{
                console.log("data",data)
                if(data.registerId == id){
                    setStudentDetails(data)
                }
            })
            console.log("state1",studentDetails)
        })
        .catch((error)=>
        console.log("error", error))
    },)
    console.log("state",studentDetails)


    return(
        <>
         <Link to='/result/loginpage'
           className="btn btn-dark"
           style={{marginTop:"1rem"}}>Go Back</Link>

            <Row className='justify-content-center my-3'>
                <Col sm={12} md={6}>
                    <h4>  Visvesvaraya Technological University,Belagavi </h4>
                    <h6 style={{marginLeft:'4rem',fontSize:"15px"}}>
                        VII - Semester B.E Examination Result, Nov/Dec-2024
                    </h6>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col sm={12} md={6}>
                    <FormGroup>
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Label style={{marginLeft:"4.5rem"}}>{studentDetails.studentName}</Form.Label><br/>
                        <Form.Label>Father's/Mother's Name:</Form.Label>
                        <Form.Label style={{marginLeft:"0.5rem"}}>{studentDetails.FatherName}</Form.Label><br/>
                        <Form.Label>College Name:</Form.Label>
                        <Form.Label style={{marginLeft:"4.5rem"}}>{studentDetails.CollegeName}</Form.Label>
                    </FormGroup>
                </Col>

                <Col sm={12} md={6} style={{float:"right"}}>
                    <FormGroup>
                        <Form.Label  style={{float:"right"}}>Register No:{studentDetails.registerId}</Form.Label>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <TableData studentId ={studentDetails.registerId}/>
            </Row>
           
        </>
    )
}
export default ResultPage;
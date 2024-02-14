import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom';
import {Row,Col,Form,Button,Alert } from 'react-bootstrap';
import axios from 'axios';

const ResultLoginPage =() =>{

    const[registerInput,setRegisterInput] = useState("")
    const[error,setError] = useState("")
    const navigate = useNavigate()

    const submitHandler =(e) =>{
        e.preventDefault()
        if(registerInput === ''){
            setError("Please enter register id")
        }else{
        axios.get('http://localhost:3002/studentInfo')
        .then((response)=>{
            console.log("res",response.data)
            response.data.map((data,index)=>{
                if(data.registerId === registerInput){
                    navigate(`/resultpage/${registerInput}`)
                }else{
                    setError("Invalid Register id")
                }
            })
        })
        }
    }

    return(
        <>
          <Link to='/'
           className="btn btn-dark"
           style={{marginTop:"1rem"}}>Go Back</Link>

           <Row className="text-center">
            <Col>
            <h3>Check your Results here... </h3>
            </Col>
           </Row>
           <br/>
           <Row>
            <Col></Col>
            <Col style={{marginLeft:"-20rem"}}> 
            <Form onSubmit={(e) => submitHandler(e)}>
                <Form.Label>Enter your Register No:</Form.Label>
                <Form.Control type='text' placeholder="Enter your register no" 
                style={{width:"70%"}} value={registerInput} onChange={(e) =>setRegisterInput(e.target.value)}/>
                <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
            </Form>
            </Col>
           </Row>

           <Row className="justify-content-center my-3">
           { error ? <Alert variant='danger'>{error}</Alert>:''}
           </Row>
        </>
    )
}
export default ResultLoginPage;

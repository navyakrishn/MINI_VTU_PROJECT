import React from "react";
import {Row,Col,Image} from "react-bootstrap";

const AboutUs =() =>{
    return(
        <>
           <Row style={{marginTop:"2rem"}}>
            <Col>
           <Image src='images/vision.jpg' height='350px'></Image>
           </Col>
           
           <Col> 
           <h3  className="Vision">Vision</h3>
           <p style={{textAlign:"justify",marginRight:"1rem"}}>To become an outstanding Technological University at the cutting
               edge of Science and Technology that produces world class Knowledge-delivery,
               Research, Extension and Leadership in Technology innovation for Industry and
                Society.<br/><br/>

               To become an outstanding Technological University at the cutting
                edge of Science and Technology that produces world class Knowledge-delivery,
                 Research, Extension and Leadership in Technology innovation for Industry and
              Society.</p>
            </Col>
           </Row>
           <br/>

           <Row>
           <Col> 
           <h3  className="Mission">Mission</h3>
           <p style={{textAlign:"justify",marginRight:"1rem"}}>To become an outstanding Technological University at the cutting
               edge of Science and Technology that produces world class Knowledge-delivery,
               Research, Extension and Leadership in Technology innovation for Industry and
                Society.<br/><br/>

               To become an outstanding Technological University at the cutting
                edge of Science and Technology that produces world class Knowledge-delivery,
                 Research, Extension and Leadership in Technology innovation for Industry and
              Society.</p>
            </Col>

            <Col>
           <Image src='images/mission.jpg' height='360px'></Image>
           </Col>
           </Row>
           <br/>

           <Row>
            <Col>
           <Image src='images/mandate.jpg' height='360px'></Image>
           </Col>
           
           <Col> 
           <h3  className="Mandate">Mandate</h3>
           <p style={{textAlign:"justify",marginRight:"1rem"}}>To become an outstanding Technological University at the cutting
               edge of Science and Technology that produces world class Knowledge-delivery,
               Research, Extension and Leadership in Technology innovation for Industry and
                Society.<br/><br/>

               To become an outstanding Technological University at the cutting
                edge of Science and Technology that produces world class Knowledge-delivery,
                 Research, Extension and Leadership in Technology innovation for Industry and
              Society.</p>
            </Col>
           </Row>


          

        </>

    )
}
export default AboutUs
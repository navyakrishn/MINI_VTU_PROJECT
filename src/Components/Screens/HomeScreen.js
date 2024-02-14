import React from 'react';
import {Carousel,Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const HomeScreen =() => {

    return(
       <> 
        <div>
            <marquee> VTU Results 2024 out - check Exam results Here!!! 
                <Link to='/result/loginpage'>click here...</Link> Best of Luck!!!
            </marquee>
        </div>

        <div>
            <Carousel>
                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="images/img1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="images/img2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="images/img3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="images/img4.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="500px"
                    className="d-block w-100"
                    src="images/img5.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
<br/>

            <div>
                <Row>
                    <Col>
                        <h3><Link to="/about">Vision</Link></h3>
                        <p className='p-style'>To become an outstanding Technological University at the cutting
                           edge of Science and Technology that produces world class Knowledge-delivery,
                        Research, Extension and Leadership in Technology innovation for Industry and
                        Society.</p>

                        <p className='p-style'>To become an outstanding Technological University at the cutting
                             edge of Science and Technology that produces world class Knowledge-delivery,
                          Research, Extension and Leadership in Technology innovation for Industry and
                        Society.</p>

                        <Link to='/about' className='btn btn-warning'>Read more</Link>  
                    </Col>

                    <Col>
                        <h3><Link to="/about">Mission</Link></h3>
                        <p className='p-style'>To plan the development of technical education, to establish value-based and need-based
                             education and training in engineering and technology, with a view to generate 
                             qualified and competent manpower, responsive to technological and societal needs.
                        </p>

                        <p className='p-style'>To plan the development of technical education, to establish value-based and need-based
                             education and training in engineering and technology, with a view to generate 
                             qualified and competent manpower, responsive to technological and societal needs.
                        </p>

                        <Link to='/about' className='btn btn-warning'>Read more</Link>  
                    </Col>

                    <Col>
                    <h3><Link to="/about">Mandate </Link></h3>
                    <p className='p-style'>
                    The Visvesvaraya Technological University has been established by the Government of the
                     Karnataka in order to Promote planned and sustainable development of technical education 
                     consistent with state and national policies.
                     </p>
                     <p className='p-style'> *Design need based programs that ensure adequate human resource of the right kind.<br/><br/>
                        *Establish objective evaluation and certification systems for students,programs and institutions.
        
                    </p>
                    <Link to='/about' className='btn btn-warning'>Read more</Link>  
                    </Col>
                </Row>
            </div>
        </div>

        </>
    )
}
export default HomeScreen


import React from 'react'
import Button from '@mui/material/Button';
import { GrFormAdd } from "react-icons/gr";
import TextField from '@mui/material/TextField';


function Electronics() {
    return (
        <>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-lg-6'>


                        <div className="accordion" style={{ width: '250px' }} id="accordionExample-1">
                            <div className="accordion-item border-0 border-bottom">
                                <h5 className="accordion-header m-0 p-0" id="headingAudio">
                                    <button style={{backgroundColor:'white'}} className="accordion-button collapsed m-0 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAudio" aria-expanded="true" aria-controls="collapseAudio">
                                      <span className='text-dark' >Audio system</span> 
                                    </button>
                                </h5>
                                <div id="collapseAudio" className="accordion-collapse collapse" aria-labelledby="headingAudio" data-bs-parent="#accordionExample-1">
                                    <div className="accordion-body">
                                        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        <p className='m-0 p-0 ms-3'>
                                            <small>
                                                Laptops

                                            </small>                             </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-bottom ">
                                <h5 className="accordion-header m-0 p-0" id="headingHeadphones">
                                    <button style={{backgroundColor:'white'}} className="accordion-button m-0 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHeadphones" aria-expanded="false" aria-controls="collapseHeadphones">
                                    <span className='text-dark'>Headphones</span>
                                    </button>
                                </h5>
                                <div id="collapseHeadphones" className="accordion-collapse collapse" aria-labelledby="headingHeadphones" data-bs-parent="#accordionExample-1">
                                    <div className="accordion-body">
                                        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        <p className='m-0 p-0 ms-3'>
                                            <small>
                                                Details 2
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-bottom">
                                <h5 className="accordion-header m-0 p-0" id="headingCellphones">
                                    <button style={{backgroundColor:'white'}} className="accordion-button m-0 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCellphones" aria-expanded="false" aria-controls="collapseCellphones">
                                    <span className='text-dark' >Cell phones</span>
                                    </button>
                                </h5>
                                <div id="collapseCellphones" className="accordion-collapse collapse" aria-labelledby="headingCellphones" data-bs-parent="#accordionExample-1">
                                    <div className="accordion-body">
                                        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        <p className='m-0 p-0 ms-3'>
                                            <small>
                                                Details 2
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='d-flex py-2' >
                                <TextField
                                    size="small"
                                    id="outlined-basic" label="Category" variant="outlined" />

                                <Button variant="outlined" className="text-capitalize text-success ms-4" style={{ borderColor: 'green' }} >
                                    <span style={{ fontColor: 'green' }} ><GrFormAdd /></span> Add
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='d-flex align-items-center'>
                            <span className='me-5' style={{ width: 50 }}>
                                Condition:
                            </span>
                            <span>
                                <select className="form-select" style={{ width: 250 }} aria-label="">
                                    <option selected>Choose a condition</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                        </div>

                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                Specifics:
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>Version</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>
                        
                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>Screen size</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>

                        
                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>OS</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>
                       
                        
                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>Processor</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>
                        
                       
                        
                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>Battery</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>
                         
                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>Memory</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>
                         
                        <div className='d-flex align-items-center mt-3'>
                            <span className='me-5' style={{ width: 50 }}>
                                
                            </span>
                            <span style={{ width: 250 }}>
                                <select className="form-select" aria-label="">
                                    <option selected>HDD</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </span>
                            <span className='ms-3'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </span>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                            </div>
                        </div>
                        <div className='mt-3'>
                            
                            <div className='d-flex py-2' >
                            <span className='me-5' style={{ width: 50 }}>
                                
                                </span>
                                <TextField
                                    size="small"
                                    id="outlined-basic" label="Category" variant="outlined" />

                                <Button variant="outlined" className="text-capitalize text-success ms-4" style={{ borderColor: 'green' }} >
                                    <span style={{ fontColor: 'green' }} ><GrFormAdd /></span> Add
                                </Button>
                            </div>

                        </div>
                    </div>
                    

                </div>



            </div>

        </>
    )
}

export default Electronics
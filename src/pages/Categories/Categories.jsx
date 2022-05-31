import React from "react";
import Button from '@mui/material/Button';
import { GrFormAdd } from "react-icons/gr";
import TextField from '@mui/material/TextField';
import Electronics from "./items/electronics/electronics";
const Categories = () => {
  return (
    <>
      {/* <main id="main" className="admin_categories">
        <div className="cs_section">
          <div className="container">
            <h1 className="top_head">Customer Support</h1>
            <div className="container">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <img src="assets/img/plus-circle (1).png" />
                        Electronics{" "}
                        <img
                          src="assets/img/plus-circle (1).SVG"
                          className="menu-i"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <img src="assets/img/plus-circle (1).png" />
                        Sporting goods{" "}
                        <img
                          src="assets/img/plus-circle (1).SVG"
                          class="menu-i"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <img src="assets/img/plus-circle (1).png" /> Hobby &
                        Toys{" "}
                        <img
                          src="assets/img/plus-circle (1).SVG"
                          class="menu-i"
                        />
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingforth">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseforth"
                        aria-expanded="false"
                        aria-controls="collapseforth"
                      >
                        <img src="assets/img/plus-circle (1).png" />
                        Fashion
                      </a>
                      <img
                        src="assets/img/plus-circle (1).SVG"
                        class="new_icon"
                      />
                      <div class="popup_div">
                        <ul>
                          <li>
                            <a href="#">
                              <img src="assets/img/edit-2.svg" />
                              Rename
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/img/arrow-right.svg" />
                              Move to
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="assets/img/trash.svg" />
                              Rename
                            </a>
                          </li>
                        </ul>
                      </div>
                    </h4>
                  </div>
                  <div
                    id="collapseforth"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingforth"
                  >
                    <div class="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
              <div class="out_secform">
                  <form class="sc+form">
                     <div class="col-md-12 offset-md-12">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group has-float-label">
                                 <input type="text" class="form-control" id="Add a category" placeholder="Category" required />
                                 <label for="fullname">Add a category</label>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <button type="submit" class="btn btn-Add"><img src="assets/img/plus_icon.SVG"/>Add</button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
          </div>
        </div>

      </main> */}
<div className="" >
<div className="container-fluid d-flex justify-content-center mt-5 " style={{}}>


<div className="accordion" style={{ width: '75%' }} id="accordionExample">
<p className="text-center h3 mb-3">Customer Support</p>

  <div className="accordion-item border">
    <h5 className="accordion-header m-0 p-0" id="headingOne">
      <button style={{backgroundColor:'white'}} className="accordion-button m-0 p-2 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <img src="assets/img/plus-circle (1).png" />
        <span className="ms-2 text-dark ">Electronics  </span>
      </button>
    </h5>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
        <p className='m-0 p-0 ms-3 py-3'>
          
            <Electronics />

                                    </p>
      </div>
    </div>
  </div>
  <div className="accordion-item border  mt-3">
    <h5 className="accordion-header m-0 p-0" id="headingTwo">
      <button style={{backgroundColor:'white'}} className="accordion-button m-0 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <img src="assets/img/plus-circle (1).png" />
        <span className="ms-2 text-dark">Sporting goods  </span>
      </button>
    </h5>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
        <p className='m-0 p-0 ms-3'>
          <small>
            Panel 1
          </small>
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item border mt-3">
    <h5 className="accordion-header m-0 p-0" id="headingThree">
      <button style={{backgroundColor:'white'}} className="accordion-button m-0 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <img src="assets/img/plus-circle (1).png" />
        <span className="ms-2 text-dark ">Hobby & Toys  </span>
      </button>
    </h5>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
        <p className='m-0 p-0 ms-3'>
          <small>
            Panel 4
          </small>
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item border mt-3">
    <h5 className="accordion-header m-0 p-0" id="headingfour">
      <button style={{backgroundColor:'white'}} className="accordion-button m-0 collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
        <img src="assets/img/plus-circle (1).png" />
        <span className="ms-2 text-dark">Electronics  </span>
      </button>
    </h5>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
        <p className='m-0 p-0 ms-3'>
          <small>
            Panel 1
          </small>
        </p>
      </div>
    </div>
  </div>

</div>

</div>

<div className="container-fluid d-flex justify-content-center ">

<div className='mt-3 ' style={{ width: '75%' }}>
  <div className='d-flex py-2' >
    <TextField
      style={{ width: '320px' }}
      size="small"
      id="outlined-basic" label="Category" variant="outlined" />

    <Button variant="outlined" className="text-capitalize text-success ms-4" style={{ borderColor: 'green' }} >
      <span style={{ fontColor: 'green' }} ><GrFormAdd /></span> Add
    </Button>
  </div>

</div>

</div>
</div>
     




    </>
  );
};

export default Categories;

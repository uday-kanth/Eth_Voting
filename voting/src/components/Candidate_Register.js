import React from 'react';
import axios from 'axios';



const Candidate_Register = (props) => {


    async function check_block(e) {

        e.preventDefault();
        let formvar = document.getElementById('candi_form');

        try {

            console.log(e)
            console.log(formvar.FirstName.value + " " + formvar.LastName.value)
            axios.post('http://localhost:5000/add_candi', {
            chainaddress:props.chainaddress,
            chainkey:props.chainkey,
            FirstName:formvar.FirstName.value,
            LastName:formvar.LastName.value,
            Mobile:formvar.Mobile.value,
            DOB:formvar.DOB.value,
        })
            console.log(formvar.FirstName.value)

        }
        catch (err) {
            console.log(err);
            return false;
        }



    }
    return (

        <div style={{ fontSize: "30px" }} >

            <div className='container  shadow-lg my-5 rounded-5 myback2'>

                <div className='display-3 justify-content-center row'> FILL THE DETAILS</div>

                <form onSubmit={(e) => check_block(e)} id='candi_form' >


                    <div className='row p-3'>

                        <div className='col-lg my-3'>
                            <input type="text" className='form-control form-control-lg border border-3 border-dark' id='FirstName' name='FirstName' placeholder='First Name' />
                        </div>

                        <div className='col-lg my-3'>


                            <input type="text" className='form-control form-control-lg border border-3 border-dark' id="LastName" name='LastName' placeholder='Last Name' />
                        </div>


                    </div>


                    <div className='row p-3 justify-content-center'>

                        <div className='form-group'>
                            <label htmlFor="Mobile" className='form-label'>Phone No :</label>
                            <input type="tel" className='form-control form-control-lg border border-3 border-dark' id='Mobile' name='Mobile' placeholder='Enter Your Phone Number' />
                        </div>

                    </div>


                    <div className='row p-3 justify-content-center'>

                        <div className='form-group'>
                            <label htmlFor="DOB" className='form-label'>DOB :</label>
                            <input type="tel" className='form-control form-control-lg border border-3 border-dark' id='DOB' name='DOB' placeholder='Enter Your DOB' />
                        </div>

                    </div>




                    <div className='row my-3 p-3 justify-content-center'>
                        <button className="btn btn-dark text-center " type="submit" style={{ width: "120px", fontSize: "25px" }} onSubmit={()=>{check_block()}} >Submit</button>
                    </div>


                </form>
            </div>

        </div>




    );



};

export default Candidate_Register;
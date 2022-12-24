
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

const Candidate_Register=(props)=>{

//    const [Fname,setFname]=useState("");
  
//    const [Lname,setLname]=useState("")
   
//    const [Email,setEmail]=useState("")
//    const [Aadhar,setAadhar]=useState("")
//    const [Mobile,setMobile]=useState("")
//    const [Party,setParty]=useState("")





    async function add_candidate(para){

        
        
        console.log(para);
        console.log(props.chainaddress);
        // await props.chaininstance.methods.addCandidates(para).send({from:props.chainaddress}).then(()=>{
        //     const formvar=document.getElementById("candi_form");
        //     axios.post('http://localhost:5000/put_candi', {
        //             FirstName:formvar.Fname.value,
        //             LastName:formvar.Lname.value,
        //             Email:formvar.Email.value,
        //             Aadhar:formvar.Aadhar.value,
        //             Mobile:"+91"+formvar.Mobile.value,
        //             image:stringify(formvar)
                    
        //         })
        // });
        await props.chaininstance.methods.get_candidates_list().call().then(data=>console.log(data));
        alert("Added "+para+" Successfully");
        
        

      }
      async function check_block(e){
          
          e.preventDefault();
          let formvar=document.getElementById('candi_form');

          try{

          console.log(e)
          //await props.chaininstance.methods.addCandidates(formvar.Fname.value+" "+formvar.Lname.value).send({from:props.chainaddress}).then(()=>{formvar.submit()})
          await props.chaininstance.methods.get_candidates_list().call().then((data)=>{console.log(data);formvar.submit()});
          alert("Added "+e+" Successfully");
          console.log(formvar.Fname.value)

          }
          catch(err){
            console.log(err);
            return false;
          }
          
          
          // add_candidate(formvar.Fname.value+formvar.Lname.value);
        
      }

        
    

return(

<div style={{fontSize:"30px"}} >

    <div className='container bg-white shadow-lg my-5 rounded-5 myback2'>

    <div className='display-3 justify-content-center row'> FILL THE DETAILS</div>


    <form id='candi_form' onSubmit={(e)=>check_block(e)} method='POST' action="http://localhost:5000/put_candi" encType='multipart/form-data' >


        <div className='row p-3'>

        <div className='col-lg my-3'>
            <input name="Fname" type="text" className='form-control form-control-lg border border-3 border-dark' defaultValue=" " id='fname' placeholder='First Name'/>
        </div>

        <div className='col-lg my-3'>
            <input name='Lname' type="text" className='form-control form-control-lg border border-3 border-dark' id="lname"  placeholder='Last Name'/>
        </div>
        </div>

        <div className='row p-3 justify-content-center'>

            <div className='form-group'>
        <label htmlFor="mail" className='form-label'>Email :</label>
        <input name="Email" type="email" className='form-control form-control-lg border border-3 border-dark'   id='mail' placeholder='Enter Email' />
         </div>
         
         </div>


         <div className='row p-3 justify-content-center'>

            <div className='form-group'>
        <label htmlFor="aadhar" className='form-label'>Aadhar :</label>
        <input name="Aadhar" type="text" className='form-control form-control-lg border border-3 border-dark' id='aadhar' placeholder='Enter Aadhar Number'  required pattern="[0-9]{12}"/>
         </div>
         
         </div>


         <div className='row p-3 justify-content-center'>

            <div className='form-group'>
        <label htmlFor="phone" className='form-label'>Phone No :</label>
        <input name="Mobile" type="tel" className='form-control form-control-lg border border-3 border-dark'   id='phone' placeholder='Enter Phone Number' />
         </div>
         
         </div>


         <div className='row my-3 p-3 '>
         <div className='form-group'>
            <label htmlFor="Party" className='form-label'>Select Party :</label>
         <select   id="Party" name="Party" className="form-select form-select-lg border border-3 border-dark" aria-label="">
                <option value="0">Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
         </select>
        </div>

         </div>



         <div className='row p-3 justify-content-center'>

            <div className='form-group'>
        <label htmlFor="image" className='form-label'>upload image :</label>
        <input name='image' type="file" className='form-control form-control-lg border border-3 border-dark'  id='image' placeholder='upload image' accept="image/*" />
         </div>
         
         </div>

         


    <div className='row my-3 p-3 justify-content-center'>
    <button  type='submit' className='btn btn-lg btn-outline-dark fw-bold border-4 border border-dark' style={{ width:"250px", wordWrap:"break-word"}}>ADD</button>
    </div>
    












    </form>










    </div>











</div>




);



};

export default Candidate_Register;
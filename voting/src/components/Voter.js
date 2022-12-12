import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Getweb3 from './Getweb3'
const votingABI=require('./Votingcon.json');

const Voter=()=>{

    const [clicked,setclicked]=useState('');

    const connectwallet=async()=>{
        try{
        console.log('hello')
        const web3=await Getweb3();
        const wallet_addresses=await web3.eth.requestAccounts();
        const walletbalance=await web3.eth.getBalance(wallet_addresses[0]);
        console.log(walletbalance);
        const walletbalance_inEth=Math.round(web3.utils.fromWei(walletbalance)*1000)/1000;
        console.log(walletbalance_inEth);
        document.getElementById("connet_wallet").innerHTML='connected';
        setclicked("disabled");
        const net_id=    await web3.eth.net.getId();
        console.log('injected web3 detected',wallet_addresses,net_id);
        const deployednetwork=await votingABI.networks[net_id];
        const instance=new web3.eth.Contracts(
            votingABI.abi,deployednetwork.address
        );



        }catch(error){
            console.log(error);
        }

    }


    return(

        <div>

        <div className='container shadow-lg bg-white rounded-5 p-3 mt-5 myback2' >

        <div className='row display-1 justify-content-center my-3'> <p className='text-decoration-underline text-center'>Voter</p></div>
        <div className='row justify-content-center my-5 text-center'> 

         <NavLink to='/Voter/Login' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold ' style={{width:"50%"}} >Voter Login</button>
        </NavLink>
        </div>

        <div className='row justify-content-center my-5 text-center'> 

        <NavLink to='/Voter/Register' style={{cursor:"pointer"}}><button type='button' className='btn btn-lg btn-outline-dark border-4 border border-dark fw-bold' style={{width:"50%"}} > Voter Register</button></NavLink>
        
        </div>


        <div className='row justify-content-center my-5 text-center'> 

        <button type='button'  id='connet_wallet' className={'btn btn-lg btn-outline-dark border-4 border border-dark fw-bold'} style={{width:"50%"}} onClick={connectwallet} > Connect Wallet</button>
        
        </div>




        </div>


        





        </div>




    )




};

export default Voter;
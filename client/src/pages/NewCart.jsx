import React, { useEffect, useState } from 'react'
import UserNav from '../components/navbar/UserNav'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function NewCart() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
const {id}= useParams()
   
  const token = localStorage.getItem('user')
  console.log(token);

  const [total,setTotal] = useState({})
  const [cartview,setcartview] = useState([])

  
  const [carddata,setcarddata]= useState({
    cardusername:"",
    cardnum:"",
    date:"",
    cvv:""
  })





  const inrementcart = (id)=>{
    axios.get(`http://localhost:8000/cart/increacevalue/${id}`).then((response)=>{
      window.location.reload()
      }).catch((error)=>{
       console.log(error);
      })
  }

  
  const derementcart = (id)=>{
    axios.get(`http://localhost:8000/cart/decreacevalue/${id}`).then((response)=>{
      window.location.reload()
      }).catch((error)=>{
       console.log(error);
      })
  }
  const deleteproduct=(id)=>{
    axios.delete(`http://localhost:8000/cart/delete/${id}`).then((response)=>{
         window.location.reload()
         }).catch((error)=>{
          console.log(error);
         })
    }
    
 
  useEffect(() => {
    axios.get(`http://localhost:8000/cart/viewcart`,
    { headers:{"Authorization" : `Bearer ${token}`} }).then((data) => {
      console.log(data);
      setTotal(data.data);
      setcartview(data.data.data);
      
    });
  }, []);

  console.log(cartview);
  const [formErrors,setFormErrors] =useState({})
  const [isSubmit,setisSubmit] =useState(false)
 
  const change = (e)=>{
    const {name,value} = e.target
    setcarddata({ ...carddata,[name]:value})
  }

  const validate = (value) =>{
    var error ={}
    console.log("error",error);
    if(!value.cardusername){
        error.cardusername ="enter card users name"
    }
    if(!value.cardnum){
       error.cardnum = "enter the card number"
    }
    if(!value.date){
      error.date = "select expire date "
    }
    if(!value.cvv){
      error.cvv = "enter the card number"
    }
    return error
    }
  
    const submit = () =>{
      // setFormErrors(validate(carddata));
      // setIsSubmit(true);
      // if(Object.keys(formErrors).length === 0 && isSubmit){
    // try{
      axios.post(`http://localhost:8000/order/save-order-details`,{body:{}},
       { headers:{'Authorization' : `Bearer ${token}`} }).then((data)=>{
        toast.success(data.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
          }).catch((error)=>{
        console.log(error);
       }) 
      // }catch(error){}
    }
      
    
 
  return (
    <>
    <UserNav/>
   

    <ToastContainer/>
<section class="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-lg-7" >
                {/* <div  data-aos="flip-down"  data-aos-delay="50" data-aos-duration="1000"> */}
                <h5 class="mb-3"><a href="/products" class="text-body">
                  
                  <i
                      class="fas fa-long-arrow-alt-left me-2" ></i>Continue shopping</a>
                      </h5>
                      {/* </div> */}
                <hr/>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Shopping cart</p>
                    <p class="mb-0">You have  items in your cart</p>
                  </div>
                  <div>
                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a onClick={handleOpen}
                        class="text-body">price<i class="fas fa-angle-down mt-1"></i></a></p>
                  </div>
                </div>
                {cartview.map((data)=>(
                  
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img src={`assets/${data.image}`}
                            class="img-fluid rounded-3" alt="Shopping item" style={{width: "85px"}}/>
                        </div>
                        <div class="ms-3">
                          <h5>{data.pname}</h5>
                        </div>
                      </div>
        {/* quantity */} 
        
        <div class="d-flex flex-row align-items-center">
        <button type='submit' id="incrementButton" onClick={()=>{inrementcart(data._id)}}>+</button>&nbsp;&nbsp;&nbsp;
                            
          <div style={{width: "50px"}}>
          
           
                          <h5 class="mb-0">{data.quantity}Kg</h5>
                          
                        </div>
                        <button type='submit' id='decrementButton' onClick={()=>{derementcart(data._id)}}>-</button>
                          
                       
                            </div>
                            

                      <div class="d-flex flex-row align-items-center">
                      
                        <div style={{width: "80px"}}>
                          <h6 class="mb-0">Total : {data.total}$</h6>
                        </div>
                        <DeleteIcon onClick={()=>{deleteproduct(data._id)}}/>
                        {/* <a href="#!" style={{color: "#cecece"}}><i class="fas fa-trash-alt"></i></a> */}
                      </div>
                    </div>

                  
                  </div>
         
                </div>
                )
                )}  
                   
              </div>
             
              <div class="col-lg-5">
                <div class="card bg-primary text-white rounded-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5 class="mb-0">Card details</h5>
                     
                    </div>
                    <p class="small mb-2">Card type</p>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
                    <form class="mt-4">
                      <div class="form-outline form-white mb-4">
                        <input type="text" id="typeName" name="cardusername" placeholder='card users name' onChange={change}
                        onClick={()=>{setFormErrors({...formErrors,cardusername:""})}} 
                        style={{borderColor:formErrors.cardusername? "red":""}} 
                        class="form-control form-control-lg" siez="17"/>
                        <label class="form-label" for="typeName">Cardholder's Name</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input type="text" id="typeText" placeholder='card number' name="cardnum" onChange={change} 
                        onClick={()=>{setFormErrors({...formErrors,cardnum:""})}} 
                        style={{borderColor:formErrors.cardnum? "red":""}}
                        class="form-control form-control-lg" siez="17"
                        minlength="19" maxlength="19" />
                        <label class="form-label" for="typeText">Card Number</label>
                      </div>

                      <div class="row mb-4">
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            <input type="text" id="typeExp" placeholder='expire date' name='date' onChange={change}
                            class="form-control form-control-lg"
                            onClick={()=>{setFormErrors({...formErrors,date:""})}} 
                            style={{borderColor:formErrors.date? "red":""}}
                               size="15"  minlength="15" maxlength="15" />
                            <label class="form-label" for="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            <input type="password" id="typeText" placeholder='cvv' name="cvv" onChange={change} 
                            onClick={()=>{setFormErrors({...formErrors,cvv:""})}} 
                            style={{borderColor:formErrors.cvv? "red":""}}
                            class="form-control form-control-lg"
                               size="1" minlength="3" maxlength="3" />
                            <label class="form-label" for="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr class="my-4"/>
                    
                    <h5> Grant Total :  {total.TotalPrice}$ </h5> 
  
                    <div class="d-flex justify-content-between mb-4">
                    
                    </div>

                    <button type="button"  class="btn btn-info btn-block btn-lg" onClick={submit}>
                      <div class="d-flex justify-content-between">
                         
         
                        <span>Pay Amount <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           sdqsdqd Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
</section>
    </>
  )
}

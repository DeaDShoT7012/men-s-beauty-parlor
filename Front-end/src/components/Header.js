import React,{useState,useRef} from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function Header() {
 const [uname,setuname] = useState('')
 const [email,setemail] = useState('')
 const [password,setpassword] = useState('')

 const handlesignup =async(e)=>{
  // e.preventDefault()
  const body ={
    uname,
    email,
    password
  }
  const result = await axios.post('signup',body)
  console.log(result);
  alert(result.data.message)
 }

 const handlelogin = async(e)=>{
  // e.preventDefault()
  const body ={
    email,
    password
  }
  const result = await axios.post('login',body)
  console.log(result);
  localStorage.setItem('name',result.data.uname)
  localStorage.setItem('email',result.data.email)
  alert(result.data.message)
 }



  const switchers = useRef([]);
  const handleSwitcherClick = (e) => {
    switchers.current.forEach(item => item.parentElement.classList.remove('is-active'));
    e.target.parentElement.classList.add('is-active');
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='navbar'>
         <Navbar>
             <Link to={'/'}>
               <img
                      id='img1'
                    alt=""
                    src="https://demo2wpopal.b-cdn.net/barbero/wp-content/uploads/2021/09/logo_2.svg"/>
             </Link >
      </Navbar>
      <Nav  id='items' className="me-auto">
            <Nav.Link className='text-white'><Link to={'/'}>HOME</Link ></Nav.Link>
            <Nav.Link  className='text-white'>SERVICES</Nav.Link>
              <Nav.Link  className='text-white'>TATOOS</Nav.Link>
            <Nav.Link  className='text-white'><Link to={'/shop'}>SHOP</Link ></Nav.Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link ><i  onClick={handleShow} class='fa-solid fa-user'></i></Nav.Link>
            <Nav.Link><Link to={'/cart'}><i class="fa-solid fa-cart-shopping"></i></Link ></Nav.Link>
     </Nav>
     
     <Modal  show={show} onHide={handleClose}>
    <Modal.Body  style={{background:'#f7f7f7'}}>
    <section className="forms-section">
      <div className="forms">
        <div className="form-wrapper is-active">
          <button type="button" className="switcher switcher-login" onClick={handleSwitcherClick} ref={el => switchers.current.push(el)}>
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login" >
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" name='email' onChange={(e)=>setemail(e.target.value)}  required/>
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" name='password' onChange={(e)=>setpassword(e.target.value)} required/>
              </div>
            </fieldset>
            <button type="submit" onClick={(e)=>handlelogin(e)}  className="btn-login">Login</button>
          </form>
        </div>
        <div className="form-wrapper">
          <button type="button" className="switcher switcher-signup" onClick={handleSwitcherClick} ref={el => switchers.current.push(el)}>
            Sign Up
            <span className="underline"></span>
          </button>
          <form   className="form form-signup">
            <fieldset>
              <legend>Please, enter your email, password and password confirmation for sign up.</legend>
              <div className="input-block">
                <label htmlFor="signup-email">User Name</label>
                <input id="signup-email" type="text" name='uname' onChange={(e)=>setuname(e.target.value)}  required/>
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">E-Mail</label>
                <input id="signup-password" type="email" name='email' onChange={(e)=>setemail(e.target.value)}  required/>
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">Password</label>
                <input id="signup-password-confirm" type="password" name='password' onChange={(e)=>setpassword(e.target.value)}  required/>
              </div>
            </fieldset>
            <button type="submit" onClick={(e)=>handlesignup(e)}   className="btn-signup">Signup </button>
          </form>
        </div>
      </div>
    </section>
    </Modal.Body>
      </Modal>
    </div>
  )
}

export default Header

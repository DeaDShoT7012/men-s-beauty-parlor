import React,{useState,useEffect} from 'react'
import './Home.css'
import Header from './Header'
import Footer from './Footer'
import axios from "axios"
import Modal from 'react-bootstrap/Modal';

function Home() {
  const [allPrice,setallPrice] = useState([])
  const [allbarber,setallbarber] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async ()=>{
 const result =   await axios.get('get-price')
 setallPrice(result.data.price);
  }

  const fetchBarber = ()=> async()=>{
    const result = await axios.get('get-barbers')
    console.log(result);
  }

  // console.log(allPrice);

  useEffect(()=>{
    fetchData();
    fetchBarber()
    
  },[])
  return (
    <div>
      <Header/>
      <div className='first'>
        <div className='img1'>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------- */}
      <div className='second'>
      <div className='row'>
      {/* <div className='col-1  mt-5 ' ></div> */}
      <div className='col-6 mx-5  mt-5'>
        <img className='img2' src='https://media.discordapp.net/attachments/1008571023047798794/1083347521117618186/maxgunner_american_barber_with_beard_and_tatoos_holding_sicoors_ae34007e-5622-4468-ac52-0558c3dfc54b.png?width=904&height=904'/>
      </div>
      <div id='aboutus' className='col-4  mt-5 '>
      <h3 className='mt-5 text-white'>About Us</h3>
      <h1 className='writting'>BARBERSHOP WITH YOUR <br/> PERSONALITY</h1>
      <h5 className='text-white'>
      We have everything what a real man needs: atmosphere of masculinity, a spirit of good fellowship, professionalism of barbers and keeping European barbering traditions, as well as fine coffee and pleasant company.<br/>
      We offer a range of services including haircuts, styling, coloring, highlights, balayage, ombre, perms, and hair extensions. Our stylists are trained to work with all hair types and textures, and will work with you to create a look that enhances your natural features and complements your individual style.
      <br/>

      In addition to hair services, we also offer a variety of beauty treatments such as facials, waxing, and makeup application. Our experienced estheticians use high-quality products to ensure that your skin is left glowing and refreshed.<br/>

      At our salon, we believe in using only the best products for our clients. We carry a wide range of professional hair and beauty products from top brands such as Redken, Moroccanoil, and Dermalogica. Our team is knowledgeable about the products we use, and can recommend the best ones for your specific hair and skin type.<br/>
      We are committed to providing a clean and safe environment for our clients. Our salon is regularly sanitized and disinfected, and we follow all CDC guidelines to ensure the health and safety of our clients and staff.

      Thank you for choosing our salon for your beauty needs. We look forward to serving you and helping you feel and look your best!
      </h5>
      </div>
      </div>
      </div>
       {/* -------------------------------------------------------------------------------------------------- */}
      <div className='third'>
        <h3 className='text-center text-white pt-4'>What We Do</h3>
        <h1  className='text-center'><span className='services'>A RANGE OF PREMIUM <br/> BARBERO SERVICES</span ></h1>

        <div className='servicecontainer container p-5'>
       
        <div className='card1'>
        <img className='imgbox' src='https://img.freepik.com/free-photo/confident-elegant-businessman-receive-beard-care-from-female-with-nice-manicure_613910-3469.jpg?size=626&ext=jpg&ga=GA1.2.723237688.1674969810&semt=ais'/> 
        <div id='block1' className='info'>
          <img className='scissors' src='/scissors.png'/>
        <h5>Style & mastership</h5>
              <h1>Haircut</h1>
        </div>
      </div>

      <div className='card1'>
        <img className='imgbox' src='https://img.freepik.com/free-photo/tattooed-caucasian-male-barber-cutting-beard-black-stylish-man_613910-8354.jpg?size=626&ext=jpg&ga=GA1.2.723237688.1674969810&semt=ais'/> 
        <div  className='info mb-2'>
          <img className='shave' src='/shave.png'/>
        <h5>FOR CONNOISSEURS</h5>
              <h1>ROYAL SHAVING</h1>
        </div>
      </div>  

      <div className='card1'>
        <img className='imgbox' src='https://img.freepik.com/premium-photo/barber-shop-equipment-barbershop-concept-serious-bearded-man-holds-razor-looking-through-paper_378307-9366.jpg?size=626&ext=jpg&ga=GA1.2.723237688.1674969810&semt=ais'/> 
        <div className='info'>
          <img className='beard' src='/beard.png'/>
        <h5>BEST PROFESSIONALS</h5>
              <h1>BEARD STYLING</h1>
        </div>
      </div>

      <div className='card1'>
        <img className='imgbox' src='https://img.freepik.com/premium-photo/professional-tattoo-artist-working-his-tattoo-studio_255667-21253.jpg?size=338&ext=jpg&ga=GA1.1.723237688.1674969810&semt=ais'/> 
        <div id='block4' className='info'>
          <img className='tatoo' src='https://tristero.qodeinteractive.com/dark/wp-content/uploads/2020/03/h1-dark-client-5.png'/>
        <h5>BEST REALISTIC</h5>
              <h1>TATOOING</h1>
        </div>
      </div>

      </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <div className='fourth'>
      <p className='p'>OUR PRICING</p>
      <div className='row mt-5'>

         {
          allPrice.map((item)=>(
            <div className='col-6'>
            <div className='row'>
            <div className='col-1'></div>
            <div className='col-10 ms-5'>
              <h2 className='price'> {item.name} ................................................................{item.price}</h2>
              <h5 className='text-white'>{item.desc}</h5>
            </div>
          </div>  <br/><br/>
          </div>
          ))
         }
          
      </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <div className='fifth'>
        <h1 className='text-white pt-3'>OUT TEAM</h1>
        <p className='p1'>MEET WITH OUR PROFESSIONALS</p>

        <div className='servicecontainer1 container p-5 '>
       
       <div>
         <div className='card1'>
         <img className='imgbox' src='https://img.freepik.com/premium-photo/portrait-man-with-scissors-blade-his-hand_120960-2469.jpg?size=626&ext=jpg&ga=GA1.1.723237688.1674969810&semt=ais'/> 
         <div id='nameblock' className='info'>
         <h5>Barber</h5>
               <h1>Peter Hobbs</h1>
         </div>
       </div>
       <button className='button mt-4' onClick={handleShow}>BOOK SCHEDULE</button>
       </div>

    <div>
       <div className='card1'>
         <img className='imgbox' src='https://img.freepik.com/free-photo/smiling-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-holding-scissors-comb-isolated-white-background-with-copy-space_141793-32060.jpg?size=626&ext=jpg&ga=GA1.2.723237688.1674969810&semt=ais'/> 
         <div id='nameblock'  className='info mb-2'>
         <h5>Barber</h5>
               <h1>Alvin Sherman</h1>
         </div>
       </div>
       <button className='button mt-4' onClick={handleShow}>BOOK SCHEDULE</button>
    </div>

     <div>
       <div className='card1'>
         <img className='imgbox' src='https://img.freepik.com/premium-photo/portrait-tattooed-male-barber-holds-sharp-scissors-blade_613910-8228.jpg?size=626&ext=jpg'/> 
         <div id='nameblock' className='info'>
         <h5>Barber</h5>
               <h1>Fred John</h1>
         </div>
       </div>
       <button className='button mt-4' onClick={handleShow}>BOOK SCHEDULE</button>
     </div>

     </div>        
      </div>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!

        </Modal.Body>
      </Modal>
    {/* --------------------------------------------------------------------------------------------------------------------- */}
      <Footer/>
    </div>
    
  )
}

export default Home
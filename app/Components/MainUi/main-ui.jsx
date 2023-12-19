import React from 'react'
import Modes from '../SelectMode/Modes'
import { useAppContext } from '../Content/AppContext'
import Outstation from '../Outstation'
import Local from '../Local'
import Airport from '../Airport'
import SvgIcons from '@/icons/SvgIcons'

function MainUi() {
   const {mode}=useAppContext() 
  return (
   <>
   <main className='bg-white'>  
    <div className=' p-10'
    style={
        {
         backgroundImage: 'url("/bg1.png")',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
        }
    }>
        
    <div className='bg-white m-auto w-[80%] p-3 rounded-xl'>
      
    <Modes/>
    {mode === "Outstation" ? <Outstation /> : (mode === "Local" ? <Local /> : <Airport />)}
        
    </div>
      
    <div className='flex gap-7 justify-center mt-4'>      
    {mode === "Outstation" ? SvgIcons.selected : SvgIcons.select}
    {mode === "Local" ? SvgIcons.selected : SvgIcons.select}
    {mode === "Airport" ? SvgIcons.selected : SvgIcons.select}
    </div> 
      
    </div>

<div className='bg-white'>
<h1 className='text-center mt-5' style={{
fontFamily: 'Rounded Mplus 1c',
fontStyle: "normal",
fontWeight: "800",
fontSize: "35px",
lineHeight:" 64px",
textTransform: "uppercase",
color:"#60A547"
}}> ​India's Leading One-Way Inter-City Cab Service Provider</h1>

<div className='flex '>

<div className='flex-1'>
<img className='mb-3' src='/car.png'/>
</div>

<div className='flex flex-1 flex-col items-center m-2'>

{SvgIcons.hand}    

<h1 className='text-center m-2 ' style={{
fontFamily: 'Rounded Mplus 1c',
fontStyle: "normal",
fontWeight: "450",
fontSize: "15px",
textTransform: "uppercase",
color:"#60A547"
}}>Return Fare, Not Fair!</h1>
<p className='m-2' style={{
fontFamily: 'Lato',
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
lineHeight: "25px",
textAlign: "center",
textTransform: "uppercase",
color:" #000000"
}}>Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.</p>
</div>

<div className='flex flex-1  flex-col items-center m-2'>

{SvgIcons.driving}    

<h1 className='text-center m-2' style={{
fontFamily: 'Rounded Mplus 1c',
fontStyle: "normal",
fontWeight: "450",
fontSize: "15px",
lineHeight:" 25px",
textTransform: "uppercase",
color:"#60A547"
}}>Now available routes are!</h1>
<p className='m-2' style={{
fontFamily: 'Lato',
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
lineHeight: "25px",
textAlign: "center",
textTransform: "uppercase",

color:" #000000"

}}>Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly</p>
</div>

</div>    
</div>

  <div className=' p-10'
    style={
        {
         backgroundImage: 'url("/bg2.png")',
         backgroundSize: 'cover',
         backgroundPosition: 'center',
        }
    }>
    <div className='w-7/12 '>
     <h1 className='text-5xl leading-normal  text-white font-bold'>Why choose AC Bus or AC Train for your One-way Journey?</h1>
     <p className='text-xl mt-4 leading-normal tracking-wide text-white font-normal'>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly
    </p> 
    <p className='mt-8 font-bold text-white '>Read More....</p>  
    </div>    
    </div>


    <div className='w-[95%] mt-10 m-auto border rounded-lg border-[#60A547] bg-white'>
       <div className='flex p-4 justify-around items-center'>
        <img className='m-2' src='/image 5.png'></img>        
        
        <div className='flex flex-col items-center m-2 p-2'>
        <h1 className='text-5xl font-bold text-center text-[#60A547]'>Why choose Yatri Car Rental?</h1>
        <div className='grid grid-cols-2 mt-5 m-auto'>
            <div className='flex m-2'>
                {SvgIcons.flag}
                <div className='flex flex-col'>
                    <h1 className='text-[#60A547] m-2 font-normal text-xl '>FAST RESPONSE TIME</h1>
                    <h1 className='text-black m-2 tracking-wide text-xs font-semibold leading-relaxed'>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</h1>
                </div>
            </div>
             <div className='flex m-2'>
                {SvgIcons.community}
                <div className='flex flex-col'>
                    <h1 className='text-[#60A547] m-2 font-normal text-xl'>FAST RESPONSE TIME</h1>
                    <h1 className='text-black m-2 tracking-wide text-xs font-semibold leading-relaxed'>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</h1>
                </div>
            </div>
             <div className='flex m-2'>
                {SvgIcons.mobile}
                <div className='flex flex-col'>
                    <h1 className='text-[#60A547] m-2  font-normal text-xl'>FAST RESPONSE TIME</h1>
                    <h1 className='text-black m-2 tracking-wide  text-xs font-semibold leading-relaxed'>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</h1>
                </div>
            </div>
             <div className='flex m-2'>
                {SvgIcons.money}
                <div className='flex flex-col'>
                    <h1 className='text-[#60A547] m-2 font-normal text-xl'>FAST RESPONSE TIME</h1>
                    <h1 className='text-black m-2 tracking-wide  text-xs font-semibold leading-relaxed'>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</h1>
                </div>
            </div>
        </div>
        </div>  
    </div>
   </div>
  
<div className='flex flex-col mt-4 '>
    
<h1 className='text-4xl font-bold text-center text-[#60A547] tracking-wide'>Why Choose Oneway Cab?</h1>

<div className='flex flex-row  items-center mt-5 gap-x-20 w-3/4 m-auto justify-evenly'>
  
  <div className='flex flex-col items-baseline'>
     
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Instant Booking & Confirmation</li>
     </div>
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Pick-up from your house</li>
     </div>
  
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Confirmed Booking Immediately</li>
     </div>
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Dedicated Cab just for you</li>
     </div>
  
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>No Return Fare for One-Way Trip</li>
     </div>

  </div>

  <div className='flex flex-col items-baseline'>

     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Drop to your desired destination</li>
     </div>
  
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Clean & Professional Cab Services</li>
     </div>
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Completed more than 20,000+ One-Way Trips</li>
     </div>
  
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>No Night or Luggage Charges</li>
     </div>
     <div className='=  text-center m-2 '>
     <li className='text-black  text-sm'>Multiple Payment Option including Credit Card.</li>
     </div>
  
  </div>

</div>
 
</div>

<div className='bg-[#2F313C] mt-4 p-4 font-[Rounded Mplus 1c]'>
<h1 className='text-[#60A547] mt-4  font-bold text-3xl text-center'>Discovering India's diverse landscapes, one scenic road trip at a time</h1>
<div className='p-3'>
   <ul className='text-white m-5 list-disc'>
    <li className='m-5'>
      Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.
    </li>
  
    <li className='m-5'>
      Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.
    </li>
    
    <li className='m-5'>
      We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service.
    </li>
    
    <li className='m-5'>
      No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.
    </li>
    
    <li className='m-5'>
      Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.
    </li>
    
    <li className='m-5'>
      Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip.
    </li>
  </ul>  
</div>

</div>


<div className='bg-[#60A547]'>
   <table className='w-full'>
  <thead>
    <tr>
      <th className='border  border-t-0 border-l-0 p-3'>
        <div className='flex justify-center gap-2'>
          {SvgIcons.cab}
          <h1 className='text-black text-center font-medium text-lg'>Cab Type</h1>
        </div>
      </th>
      <th className='border border-t-0 border-l-0 p-3'>
        <div className='flex justify-center gap-2'>
          {SvgIcons.model}
          <h1 className='text-black text-center font-medium text-lg'>Models Include</h1>
        </div>
      </th>
      <th className='border border-t-0 border-l-0 p-3'>
        <div className='flex justify-center gap-2'>
          {SvgIcons.passengers}
          <h1 className='text-black text-center font-medium text-lg'>Passengers</h1>
        </div>
      </th>
      <th className='border border-t-0 border-l-0 p-3'>
        <div className='flex justify-center gap-2'>
          {SvgIcons.fare}
          <h1 className='text-black text-center font-medium text-lg'>Fare</h1>
        </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='border border-t-0 border-b-0 border-l-0 p-3'>
        <h1 className='text-white font-medium text-center m-2'>AC Sedans</h1> 
        <h1 className='text-white font-medium text-center m-2'>AC Hatchbacks</h1>
        <h1 className='text-white font-medium text-center m-2'>AC SUV</h1>
      </td>
      <td className='border border-t-0 border-b-0 border-l-0 p-3'>
        <h1 className='text-white font-medium text-center m-2'>Etios, Amaze, Dzire etc.</h1> 
        <h1 className='text-white font-medium text-center m-2'>Wagon R, Celerio, Micra etc.</h1>
        <h1 className='text-white font-medium text-center m-2'>Ertiga, Xylo etc.</h1>
      </td>
      <td className='border border-t-0 border-l-0 border-b-0 p-3'>
        <h1 className='text-white font-medium text-center m-2'>Comfortable trips with small families</h1> 
        <h1 className='text-white font-medium text-center m-2'>Budget trips over short distances</h1>
        <h1 className='text-white font-medium text-center m-2'>Premium trips with large families</h1>
      </td>
      <td className='border border-t-0 border-b-0 border-l-0 p-3'>
        <h1 className='text-white font-medium text-center m-2'>Rs.11/KM</h1> 
        <h1 className='text-white font-medium text-center m-2'>Rs.11/KM</h1>
        <h1 className='text-white font-medium text-center m-2'>Rs.13/KM</h1>
      </td>
    </tr>
  </tbody>
</table>


</div>


<div className='p-3 mt-3 mb-30'>
    <h1 className='text-[#60A547] font-semibold text-3xl font-[Rounded Mplus 1c]'>Why Choose Yatri Car Rental?</h1>
    <ul className='list-disc p-2'>

<li className='text-black m-2 mt-4  font-medium  font-[MTTMilano-Medium]'>Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we take great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in INDIA.</li> 

<li className='text-black m-2 mt-4 font-medium  font-[MTTMilano-Medium]'>
    <span className='font-bold '>Service You Can Trust -</span> At Yatri Car Rental, we are dedicated to providing dependable services in INDIA. We guarantee that we won't cancel any bookings without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients.</li>

<li className='text-black m-2 mt-4 font-medium  font-[MTTMilano-Medium]'>
    <span className='font-bold'>Safety is Our Priority -</span> 
    Safety and comfort are paramount at Yatri Car Rental in INDIA. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers.</li>

<li className='text-black m-2 mt-4 font-medium  font-[MTTMilano-Medium]'>
    <span className='font-bold'>Expert Chauffeurs at Your Service -</span> Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients.</li>

<li className='text-black m-2 mt-4 font-medium  font-[MTTMilano-Medium]'>
    <span className='font-bold'>Extensive Industry Experience -</span> With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services in Lucknow, Uttar Pradesh.</li>

<li className='text-black m-2 mt-4 font-medium  font-[MTTMilano-Medium]'> 
<span className='font-bold'>Proven Track Record -</span> We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher. </li>

</ul>
</div>

<div className='bg-[#2F313C] p-2 mt-40'>
    
    <div className='flex mt-6 justify-center'>
        <img src='/logo.png'></img>
    </div>
  
   <div className='w-3/ mt-4 m-auto'>
   
    <div className='flex justify-center gap-8'>
        <span className='text-white'>Home</span>
        <span className='text-white'>About</span>
        <span className='text-white'>Services</span>
        <span className='text-white'>News</span>
        <span className='text-white'>Contact</span>       
    </div>
   
   </div> 

<div className='flex justify-center items-center mt-10'>

<div className='flex justify-center gap-4  items-center'>
<h1 className='text-white font-normal'>Newsletter</h1>
<input type='text' placeholder='Email' className=' p-3 rounded-s-3xl outline-none rounded-e-none'/>
</div>

<button className=' p-3 h-12 flex items-center  rounded-s-none rounded-e-3xl border border-l-0'>{SvgIcons.arrow}</button>

</div>
<div className='mt-10 mb-3'>
    <h1 className='text-center text-white font-[MTTMilano-Medium]'>All Copyrights are reserved my Mamdou Ghaneemy</h1>
</div>
</div>


</main>
  </>
  )
}

export default MainUi
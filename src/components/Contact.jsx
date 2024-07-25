import map from '../assets/google_maps.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import social from '../assets/social.png'

export default function Contact() {
  return (
    <>
      {/* <!-- Contact section starts here --> */}
      <div className="contact pt-[5rem] bg-custom-gradient" id="contact">
        <div className="flex justify-center">
          <div className="blue-box"></div>
          <h1 className="text-[3rem] font-serif text-center font-semibold">Get In Touch</h1>
        </div><br/>
        <div className="bg-custom-gradient flex flex-wrap max-lg:justify-center">
          <div className="max-w-[60%] max-lg:max-w-[80%]">
            <a href="https://www.google.com/maps/dir//5770+Hurontario+St,+Mississauga,+ON+L5R+3G5,+Canada/@43.6209671,-79.7565609,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b413736db8579:0x50c11bde93b07c7f!2m2!1d-79.6741602!2d43.6209967?entry=ttu">
              <img src={map} alt="" className="w-[55rem] h-[30rem] rounded-lg" />
            </a>
          </div>
          <div className="pt-10 pl-12 flex flex-col gap-2.5 max-lg:mx-5 max-lg:justify-center max-sm:pl-2">
            <input type="text" placeholder="Name" className="p-4 w-[450px] rounded-lg max-sm:w-[300px]" />
            <input type="text" placeholder="Email" className="p-4 w-[450px] rounded-lg max-sm:w-[300px]" />
            <input type="number" placeholder="Phone Number" className="p-4 w-[450px] rounded-lg max-sm:w-[300px]" />
            <textarea name="" id="" cols="75" rows="8" className="p-4 w-[450px] rounded-lg max-sm:w-[300px]">Message...</textarea>
            <button className="w-[150px] p-2.5 bg-green-800 rounded-2xl text-white">SEND</button>
          </div>   
        </div>
      </div>
      <div className="footer bg-custom-gradient pt-12">
        <div className="flex justify-evenly max-sm:flex-col max-sm:items-center text-white gap-5">
          <div className="flex flex-col gap-2.5 w-[15%] max-sm:w-[80%]">
            <h2 className='font-bold text-[1rem] max-sm:text-[1.5rem] font-serif'>About Us</h2>
            <div className="flex gap-2.5 justify-center items-center">
              <img className="filter invert" src={location} alt="" width="20px" height="30px"/>
              <p>123 Education Lane, Cityville,London, 520-365</p>
            </div>
            <div className="flex gap-2.5">
              <img className="filter invert" src={phone} alt=""/>
              <p>+1 (123) 456-7890</p>
            </div> 
            <div className="flex gap-2.5"> 
              <img className="filter invert" src={mail} alt=""/>  
              <p>info@Edusity.edu</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 w-[15%] max-sm:w-[80%]">
            <h2 className='font-bold text-[1rem] max-sm:text-[1.5rem] font-serif'>Infrastructure and Facilities:</h2> 
            <p>"State-of-the-art science and computer labs"</p>
            <p>"Spacious and well-equipped classrooms"</p>
            <p>"Library with a vast collection of books and digital resources"</p>
          </div>
          <div className="flex flex-col gap-2.5 w-[15%] max-sm:w-[80%]">
            <h2 className='font-bold text-[1rem] max-sm:text-[1.5rem] font-serif'>Useful Link</h2>
            <ul className="flex flex-col gap-1">
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#home">Home</a></li>
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#about">About</a></li>
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#academic">Academics</a></li>
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#admission">Admissions</a></li>
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#faculty">Faculty</a></li>
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#gallery">Gallery</a></li>
              <li className="text-white cursor-pointer text-md hover:text-green-500"><a href="#contact">Contact</a></li>
            </ul>
            {/* <p>There are many variations of passages of Lorem ispum available,but this Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, incidunt.</p> */}
          </div>
          <div className="flex flex-col gap-2.5 w-[15%] max-sm:w-[80%]">
            <h2 className='font-bold text-[1rem] max-sm:text-[1.5rem] font-serif'>Newsletter</h2>
            <input type="email" className="p-2.5 rounded-lg" placeholder="Enter Your Email" />
            <button className="w-[130px] p-2.5 bg-green-800 text-white rounded-lg">SUBSCRIBE</button>
            <img src={social} alt="" width="150px" className='cursor-pointer'/> 
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-white gap-5 pt-7 pb-2.5">
          <div className="w-[40rem] h-px bg-white max-sm:w-full"></div>
          <h4>@2024All Rights Reserved. Made by sunaina</h4>
        </div>
      </div>
    </>
  )
}

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import bg from '../assets/faculty.jpg'
export default function Faculty() {
    return (
        <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat max-sm:h-[400vh] max-lg:h-[120vh]" style={{ backgroundImage: `url(${bg})` }} >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div class="relative z-10 max-w-[1080px] mx-auto text-white pt-20 pb-32 text-center max-sm:p-8" id="faculty">   
                <h1 class="font-serif font-bold text-[3rem]">Our Faculty</h1>
                <br/><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit
                    dicta totam odio, ex porro! Quod ut expedita labore. Expedita excepturi commodi 
                    consequatur accusantium officiis doloribus quod laboriosam cumque amet? Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Ipsum sunt a cupiditate quae odit illum 
                    itaque nihil architecto accusamus quas?</p>

                <div class="flex flex-row max-lg:px-7 max-sm:flex-col gap-5 justify-center items-center text-center mt-8">
                    <div class="hover:scale-110 transition-all duration-200">
                        <img src={img1} alt="" class="rounded-xl mx-auto"/>
                        <h3 class="font-serif font-bold text-[23px] mt-7">John Doe</h3>
                        <p className='opacity-40'>Principal, M.Ed, 20 years of experience in educational administration.</p>
                    </div>
                    <div class="hover:scale-110 transition-all duration-200">
                        <img src={img2} alt="" class="rounded-xl mx-auto"/>
                        <h3 class="font-serif font-bold text-[23px] mt-7">Emily Johnson</h3>
                        <p className='opacity-40'>English Teacher, M.A. in English, 10 years of teaching experience.</p>
                    </div>
                    <div class="hover:scale-110 transition-all duration-200">
                        <img src={img3} alt="" class="rounded-xl mx-auto"/>
                        <h3 class="font-serif font-bold text-[23px] mt-7">Jane Smith</h3>
                        <p className='opacity-40'>Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
                    </div>
                    <div class="hover:scale-110 transition-all duration-200">
                        <img src={img4} alt="" class="rounded-xl mx-auto" />
                        <h3 class="font-serif font-bold text-[23px] mt-7">Susan Kare</h3>
                        <p className='opacity-40'>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
                    </div>
                    <div class="hover:scale-110 transition-all duration-200">
                        <img src={img5} alt="" class="rounded-xl mx-auto" />
                        <h3 class="font-serif font-bold text-[23px] mt-7">Sophia Davis</h3>
                        <p className='opacity-40'>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}
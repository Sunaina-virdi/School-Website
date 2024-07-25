import bg from '../assets/academic.jpg'

export default function Academics() {
    return (
        <div className="relative h-screen w-screen bg-cover bg-center bg-no-repeat max-sm:h-[270vh] max-lg:h-[180vh] overflow-y-hidden" 
        style={{ backgroundImage: `url(${bg})` }} id="academic">
            <div className='absolute inset-0 bg-black opacity-40 max-sm:h-[270vh] max-lg:h-[180vh] overflow-y-hidden'></div>
            <h1 className='relative z-10 p-8 text-[3rem] font-serif text-center pb-[2rem] text-white'>Academics</h1>

            <div className='relative z-10 p-5 pt-2 flex flex-row flex-wrap gap-8 justify-center '>
                <div className='p-4 max-sm:p-10 text-center w-[40%] bg-custom-gradient shadow-md shadow-black rounded-lg max-sm:w-full cursor-pointer hover:scale-105 transition-all duration-200'>
                    <h1 className='text-4xl font-bold text-white mb-4 font-mono'>PRIMARY</h1>
                    <p className='text-white mb-4'>Our primary school curriculum is designed to provide a strong foundation in core academic subjects while fostering creativity and curiosity. Key areas of focus include:</p>
                    <ul className='text-white list-disc list-inside flex flex-row flex-wrap gap-5 justify-center items-center'>
                        <li>Language Arts</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Arts and Physical Education</li>
                        <li>Technology Integration</li>
                    </ul>
                </div>
                <div className='p-4 max-sm:p-10 text-center w-[40%] max-sm:w-full bg-custom-gradient shadow-md shadow-black rounded-lg cursor-pointer hover:scale-105 transition-all duration-200'>
                    <h1 className='text-4xl font-bold text-white mb-4 font-mono'>SECONDARY</h1>
                    <p className='text-white mb-4'>Our secondary school curriculum builds on the primary foundation, offering more specialized and in-depth study. Key areas include:</p>
                    <ul className='text-white list-disc list-inside flex flex-row flex-wrap gap-5 justify-center items-center'>
                        <li>Language Arts</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>Arts and Physical Education</li>
                        <li>Foreign Languages</li>
                        <li>Technology and Innovation</li>
                    </ul>
                </div>
                <div className='p-3 max-sm:p-10 text-center w-[40%] max-sm:w-full bg-custom-gradient shadow-md shadow-black rounded-lg cursor-pointer hover:scale-105 transition-all duration-200'>
                    <h1 className='text-4xl font-bold text-white mb-4 font-mono'>SENIOR SECONDARY</h1>
                    <p className='text-white mb-4'>Our senior secondary curriculum prepares students for higher education and career pathways with a focus on specialization and advanced studies. Key areas include:</p>
                    <ul className='text-white list-disc list-inside flex flex-row flex-wrap gap-5 justify-center items-center'>
                        <li>Advanced Language Arts</li>
                        <li>Advanced Mathematics</li>
                        <li>Sciences</li>
                        <li>Social Studies</li>
                        <li>Electives</li>
                        <li>College and Career Readiness</li>
                        <li>Technology and Vocational Training</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

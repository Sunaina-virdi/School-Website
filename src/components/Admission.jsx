import download from '../assets/downloads.png'
import form from '../assets/admission-form.jpeg'
import './style.css'
export default function Admission() {
    return (
        <div className=" bg-black pt-[5rem] h-[100vh] max-sm:h-[160vh] max-lg:h-[120vh] max-sm:p-5 max-lg:p-8 overflow-y-hidden" id="admission">
            <div className="max-w-[1080px] mx-auto flex flex-col justify-center items-center text-white">
                <h1 className="text-[3rem] font-serif text-center pb-[2rem] ">Admission</h1>
                <div className="flex flex-row justify-evenly px-10 shadow-2xl max-sm:p-10 flex-wrap shadow-green-800 rounded-xl">
                    <h1 className="flex justify-center items-center text-2xl p-5">DOCUMENT REQUIRED</h1>
                    <div className="border-l-2 p-5 pl-8 flex flex-col gap-3">
                        <p>1) Birth Certificate(Original from the Govt. Health Dept.) Nursery and K.G</p>
                        <p>2) Coloured Photograph (3) of the student</p>
                        <p>3) Bona Fide Certificate: From the school Presently attending</p>
                        <p>4) Progress Report (previous school)</p>
                        <p>5) School Leaving Cert./Transfer Certificate (Classes I to X)</p>
                        <p>6) For "NRI"/Foreigners: Passport (Attested Photocopy)</p>
                        <p>7) Parents IDs and coloured photograph of both the parent</p>
                        <p>8) Parivar Pehchan Patra (If residing in Panchkula)</p>
                    </div>
                </div>   
                <a href={form} download>
                    <button className="mt-7 p-3 bg-black shadow-lg shadow-green-800 rounded-lg flex flex-row justify-center items-center gap-4 hover:text-red-400">
                        Download admission form
                        <img src={download} width="20px" height="20px" className="invert-color"/>
                    </button>
                </a>

            </div>
            <div className='flex flex-row justify-evenly mt-6 animate-marquee whitespace-nowrap max-sm:w-[400px]'>
                <p className="text-red-400 p-3">"Admission Form Availability: March 1st"</p>
                <p className="text-red-400 p-3">"Last Date for Submission: March 31st"</p>
                <p className="text-red-400 p-3">"Entrance Test: April 15th"</p>
                <p className="text-red-400 p-3">"Announcement of Results: April 30th"</p>
             </div>
        </div>
    )
}



import annual from '../assets/annual-day.jpeg'
import classroom from '../assets/classroom.jpg'
import culture from '../assets/culture-img.jpg'
import library from '../assets/library.jpeg'
import science from '../assets/science-fair.jpg'
import sport from '../assets/sport-day.jpg'
export default function Gallery(){
    return(
        <div className="h-[130vh] flex flex-col items-center bg-black justify-center max-sm:h-[380vh] max-lg:h-[200vh] max-sm:pt-[1rem] overflow-y-hidden" id="gallery">
            <h1 className="text-[3rem] font-serif text-center font-semibold pb-[2rem] text-white">Gallery</h1>
            <div className="grid grid-cols-3 gap-20 items-center max-sm:grid-cols-1 max-lg:grid-cols-2 max-sm:gap-20 max-sm:mt-[5vh]">
                <img className = "h-[300px] w-[300px] ml-12 max-lg:ml-0 rounded-xl max-sm:ml-6 hover:scale-105 transition-all duration-200" src={classroom}  />
                <img className = "h-[300px] w-[300px] ml-12 max-lg:ml-0 rounded-xl max-sm:ml-6 hover:scale-105 transition-all duration-200" src={culture} />
                <img className = "h-[300px] w-[300px] ml-12 max-lg:ml-0 rounded-xl max-sm:ml-6 hover:scale-105 transition-all duration-200" src={annual} />
                <img className = "h-[300px] w-[300px] ml-12 max-lg:ml-0 rounded-xl max-sm:ml-6 hover:scale-105 transition-all duration-200" src={library} />
                <img className = "h-[300px] w-[300px] ml-12 max-lg:ml-0 rounded-xl max-sm:ml-6 hover:scale-105 transition-all duration-200" src={science}/>
                <img className = "h-[300px] w-[300px] ml-12 max-lg:ml-0 rounded-xl max-sm:ml-6 hover:scale-105 transition-all duration-200" src={sport}/>
            </div>
        </div>
    )
}
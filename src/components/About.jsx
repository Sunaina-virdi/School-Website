export default function About() {
    return (
      // background: radial-gradient(circle at 50% 50%, rgba(6, 122, 111, 1) 20%, rgba(0, 0, 0, 1) 86%);
      <div className=" bg-black pt-[5rem] h-[100vh] max-sm:h-[220vh]  max-lg:h-[160vh] overflow-y-hidden" id="about">
        <h1 className="text-[3rem] font-serif text-center text-white pb-[2rem]">
          About Us
        </h1>
        <div className="max-w-[1200px] mx-auto text-white flex flex-col ">
          <div className="flex  justify-evenly gap-10 pt-[3rem] flex-wrap max-sm:p-6">
            <div className=" rounded-lg max-w-[22rem] p-4 shadow-2xl shadow-green-800 hover:shadow-md hover:bg-orange-100 hover:shadow-orange-100 hover:cursor-pointer hover:text-black hover:scale-105 transition-all duration-200">
              <h1 className="text-[30px] font-serif text-center">HISTORY</h1>
              <br />
              <p className="text-center">
                "Our school was established in 1985 by Dr. Jane Smith with a
                vision to provide quality education to the community. Over the
                past three decades, we have grown from a small institution to a
                renowned educational establishment. Notable milestones include the
                opening of our new science wing in 2000 and the launch of our
                international exchange program in 2015.{" "}
              </p>
            </div>
            <div className="rounded-lg max-w-[22rem] p-4 shadow-2xl shadow-green-800 hover:shadow-md hover:bg-orange-100 hover:shadow-orange-100 hover:cursor-pointer hover:text-black hover:scale-105 transition-all duration-200">
              <h1 className="text-[30px] font-serif text-center">VISION</h1>
              <br />
              <p className="text-center">
                "We envision a future where every student is empowered to achieve
                their fullest potential. Our goal is to foster a learning
                environment that encourages innovation, critical thinking, and a
                passion for lifelong learning. We strive to be a leader in
                education, making a significant impact on the local and global
                community."
              </p>
            </div>
            <div className="rounded-lg max-w-[22rem] p-4 shadow-2xl shadow-green-800 hover:shadow-md hover:bg-orange-100 hover:shadow-orange-100 hover:cursor-pointer hover:text-black hover:scale-105 transition-all duration-200">
              <h1 className="text-[30px] font-serif text-center">MISSION</h1>
              <br />
              <p className="text-center">
                "Our mission is to provide a comprehensive education that prepares
                students for success in a rapidly changing world. We are dedicated
                to academic excellence, character development, and community
                service. Our inclusive approach ensures that every student is
                valued and given the opportunity to thrive."
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-center pt-[70px] max-sm:p-10">
          "At Edusity, we are dedicated to fostering excellence, integrity, and
          innovation in every student's educational journey."
        </p>
    </div>
    );
  }
  
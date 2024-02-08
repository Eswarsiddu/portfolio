function HeroSection({ NavBarHeight }) {
  // const HeroSectionHeight = window.innerHeight - NavBarHeight;
  return (
    <section
      className="h-[100vh] bg-slate-400"
      // style={{
      //   backgroundImage: `url("https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      //   // backgroundColor: "lineargradient(red,green)",
      //   // backgroundPosition: "center",
      //   // backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   // filter: "blur(2px)",
      //   // backgroundFilter: "blur(10px)",
      //   // backgroundOpacity: "0.1",
      //   // backgroundBlendMode: "overlay",
      // }}
    >
      <div
        className="container mx-auto"
        style={{ paddingTop: `${NavBarHeight + 15}px` }}
      >
        {/* <div className="flex"> */}
        {/* <div className=""> */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="wow fadeInUp" data-wow-delay=".2s">
            <span>Hi there, I am</span>
            <span className=" block text-7xl">Siddu Eswar</span>
            <span className=" text-4xl">A Frontend Developer</span>
          </h1>
          <p className="wow fadeInUp" data-wow-delay=".4s">
            I am a software engineer with more than two years of experience.
            Recognized as a practical and effective developer, experienced in
            leading cross-functional teams.
          </p>
        </div>
        {/* </div> */}
        {/* <div className="w-1/2"> */}
        {/* <img className=" w-[100px] h-[150px] " src="./images/eswar.jpg" /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default HeroSection;

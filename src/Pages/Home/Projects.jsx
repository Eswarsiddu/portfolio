export default function Projects() {
  return (
    <div className="my-6">
      {/* <p>Projects</p> */}
      <h2 className="my-10 text-3xl text-white text-center">Projects</h2>
      <div className="container mx-auto px-4 flex justify-between">
        <div className="w-1/2">
          <img
            src="/images/spearSecurityScreenshot.jpg"
            alt="Spear Security Force"
            className="w-1/2 mx-auto"
          />
        </div>
        <div className="w-1/2 text-white flex flex-col gap-4">
          <h3 className="text-2xl">Spear security Force</h3>
          <p className=" ">
            description of the project (Include a gif to the project image)
          </p>
          <div className="flex gap-4">
            <button className="p-2 bg-red-400 rounded text-white hover:bg-red-500">
              Visit site
            </button>
            <button className="p-2 bg-red-400 rounded text-white hover:bg-red-500">
              Read More
            </button>
          </div>
        </div>
        {/* <a
          href="https://www.spearsecurityforce.in/"
          target="_blank"
          rel="noreferrer"
          className=" text-white"
        >
          Spear security Force
        </a> */}
      </div>
    </div>
  );
}

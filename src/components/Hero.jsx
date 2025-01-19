

const Hero = () => {
  return (
    <>
      <div className="flex justify-center w-50 mt-28 mb-28 ">
          <div className="w-full max-w-3xl px-4 mt-5 border-2 rounded-3xl border-black  text-white justify-left shadow-2xl mr-80"> 
            <h1 className="text-center  mt-3 typewriter  "> <span className="text-4xl font-extrabold text-pretty text-purple-800  bg-clip-text text-transparent">  thatGreatSloth</span></h1>
            <p className="p-5 text-3xl mb-10">I am a dedicated and hardworking software engineer with a passion for coding and problem-solving. My journey into software engineering was driven by a desire to prove to myself that I could succeed in this dynamic and challenging field. With a love for books and a thirst for knowledge, I approach every project with curiosity and a commitment to continuous learning. Life is an adventure, and I embrace it by living in the moment and overcoming challenges with a resilient mindset. Every challenge is an opportunity to grow, and I am always eager to tackle new problems and push the boundaries of what I can achieve.</p>
          </div>
          <div className=""> 
            <img src="/src/assets/Me.jpg" alt="Me"  className="rounded-full w-80 h-82 object-cover shadow-lg border-2 rounded-s-full border-black mt-19 "/>
          </div>
      </div>
    </>
  )
}

export default Hero

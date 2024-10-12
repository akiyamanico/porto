import { useEffect, useRef } from "react";
import Navbar from "../../Component/Navbar";
import Listing from "../../Component/Listing";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/LinkedIn.png";
import SocialLink from "../../Component/SocialLink";
import Footer from "../../Component/Footer";
import Experience from "../../Component/Experience";

const Home = () => {
  const canvasRef = useRef(null);
  const decelerationRate = 0.99;
  const listingRef = useRef(null);
  const experienceRef = useRef(null);
  
  const handleScrollToSection = () => {
    listingRef.current?.scrollIntoView({ behavior: "smooth" });
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 70;
    let maxVelocity = 5;
    const minVelocity = 0.3;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Set initial size

    const createParticle = () => {
      const size = Math.random() * 1 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const velocityX = (Math.random() - 0.5) * maxVelocity;
      const velocityY = (Math.random() - 0.5) * maxVelocity;
      return { x, y, velocityX, velocityY, size };
    };

    const drawSunlight = () => {
      const gradient = ctx.createLinearGradient(500, -500, 300, canvas.height);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSunlight();
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        particle.velocityX *= decelerationRate;
        particle.velocityY *= decelerationRate;

        if (Math.abs(particle.velocityX) < minVelocity)
          particle.velocityX = minVelocity * (particle.velocityX > 0 ? 1 : -1);
        if (Math.abs(particle.velocityY) < minVelocity)
          particle.velocityY = minVelocity * (particle.velocityY > 0 ? 1 : -1);

        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          Object.assign(particle, createParticle());
        }
      });
    };

    const updateParticles = () => {
      drawParticles();
      requestAnimationFrame(updateParticles);
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    updateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="h-full w-full bg-indigo-900">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="fixed top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 flex flex-col h-full px-4 md:px-8">
        <Navbar handleScrollToSection={handleScrollToSection} />
        <div className="text-6xl text-center text-white font-extrabold mb-4 mt-8">
          <p className="glow-text">I Write Code for You</p>
        </div>
        <div className="text-xl text-center text-gray-300 mb-6">
          <p>Making your tasks easier and more comfortable.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <SocialLink
            href="https://github.com/akiyamanico"
            imgSrc={github}
            altText="Github Icon"
            text="Github Repositories"
          />
          <SocialLink
            href="https://www.linkedin.com/in/fi-zilalil-huda-90371324a/"
            imgSrc={linkedin}
            altText="LinkedIn Icon"
            text="LinkedIn Profile"
          />
        </div>
        <div className="relative bg-cover bg-center">
          <div className="flex items-center justify-between flex-wrap">
            <div className="text-white text-lg ml-8 mt-20 md:mt-40">
              <p className="font-bold">☼ Don't Forget to Sleep</p>
              <p className="mt-1">Coding is great, but health comes first!</p>
            </div>
            <div className="text-white text-lg mr-8 mt-20 md:mt-40">
              <p className="font-bold">What are Sigma Individuals Searching For? ☼</p>
              <p className="mt-1">Skibidi Stars</p>
            </div>
          </div>
          <div className="mt-2" ref={listingRef}>
            <Listing />
            <div className="" ref={experienceRef}></div>
            <Experience />
            <div className="text-white pt-2 pb-12">
              <div className="flex justify-center">
                <p className="text-3xl font-semibold underline underline-offset-4">
                  Connect with me through these social media platforms!
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-16 mt-4">
                <a
                  href="https://instagram.com/fizilalilhuda_"
                  className="text-2xl text-center"
                >
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm">@fizilalilhuda_</p>
                </a>
                <a href="#" className="text-2xl text-center">
                  <p className="font-semibold">Discord</p>
                  <p className="text-sm">sandaranpangsit</p>
                </a>
              </div>
              <div className="bg-white bg-opacity-20 backdrop:blur-md p-6 rounded-lg shadow-md hover:shadow-lg   transition-transform duration-300 hover:-translate-y-2 text-2xl text-center mt-12">
                <p>
                  If you are interested in hiring me, feel free to reach out via
                  LinkedIn or any of my social media listed above!
                </p>
                <p>I will send you my CV ASAP!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

const Experience = () => {
    return (
      <section className="pb-12 px-8 md:px-16 lg:px-48 text-white">
         <div className="bg-white bg-opacity-20 backdrop:blur-md p-6 rounded-lg shadow-md hover:shadow-lg   transition-transform duration-300 hover:-translate-y-2">
        <div className="flex flex-col md:flex-row">
          <div className="border-r-4 pr-5 text-3xl mb-8 md:mb-0">
            <p className="font-semibold">Experience</p>
          </div>
          <div className="border-r-4 pl-5 mb-8 md:mb-0 pr-2">
            <p className="underline underline-offset-4 text-xl">Organizational</p>
            <div className="text-lg mt-2">
              <p>Forum Studi Informatika</p>
              <p>Backend Developer / Consultant · May 2018 - September 2023</p>
            </div>
          </div>
          <div className="pl-5 pr-2 border-r-4  mb-8 md:mb-0 ">
            <p className="underline underline-offset-4 text-xl">Work Experience</p>
            <div className="text-lg mt-2">
              <p>CV. Mediatama Web Indonesia (Intern)</p>
              <p>Fullstack Developer · June - October 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  
import GridComponent from '../components/GridComponent.jsx';

const Experience = () => {
  const experiences = [
    {
      role: "TinkerHub Campus Lead",
      time: "June 2025 – June 2026",
    },
    {
      role: "Perplexity Campus Ambassador",
      time: "Nov 2025 – Jan 2026",
    },
    {
      role: "Lifelong Learner",
      time: "Infinite",
    },
  ];

  return (
    <div id="about" className="p-8 max-w-2xl h-[100dvh]">


      <h1 className="text-3xl font-bold mb-10">Experience</h1>

      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            {/* TIMELINE VISUAL */}
            <div className="flex flex-col items-center">
              {/* The Diamond Shape */}
              <div className="w-3 h-3 border-2 border-gray-500 rotate-45 bg-white dark:bg-[#252525] z-10" />
              {/* The Vertical Line (Hide for the last item) */}
              {index !== experiences.length - 1 && (
                <div className="w-[1px] h-60 bg-gray-300 my-1" />
              )}
            </div>

            {/* CONTENT */}
            <div className="pb-8">
              <h2 className="text-xl font-semibold leading-none">{exp.role}</h2>
              <p className="text-sm text-gray-500 mt-2 italic">{exp.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

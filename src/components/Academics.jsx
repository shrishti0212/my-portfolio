const academics = [
  {
    title: "10th Grade",
    institution: "St. Denis School",
    year: "2019",
    score: "89.67%",
  },
  {
    title: "12th Grade",
    institution: "BSP Senior Secondary School",
    year: "2021",
    score: "82.8%",
  },
  {
    title: "B.Tech in Electrical Engineering",
    institution: "MCKV Institute Of Engineering",
    year: "2022 - 2026",
    score: "8.51 CGPA",
  },
];

const AcademicsSection = () => {
  return (
    <section
      id="academics"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-purple-400 mb-10 font-sans text-center">
        Academics
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-xl sm:max-w-3xl">
        {academics.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-xl p-5 sm:p-6 bg-white/10 border border-white/10 backdrop-blur-md shadow-md hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400">{item.title}</h3>
            <p className="text-base sm:text-lg text-gray-300">{item.institution}</p>
            <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-400">
              <span>{item.year}</span>
              <span className="font-semibold text-purple-300">{item.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicsSection;

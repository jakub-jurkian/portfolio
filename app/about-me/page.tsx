import Link from "next/link";

// 1. Define the content for the timeline section
const timelineEvents = [
  {
    year: "2025 - Present",
    title: "Contributor, University Programming Club (WIP)",
    description:
      "Technical contributor to the 'Work In Progress' club. Collaborating in an Agile environment to build a web application, participating in code reviews, and exchanging knowledge with peers.",
    tags: ["Team Collaboration", "Git Workflow", "Code Review"],
  },
  {
    year: "2024 - Present",
    title: "B.Sc. Computer Science - University of Gdańsk",
    description:
      "Specializing in Systems Programming (Golang) and Databases. Core coursework includes Algorithms & Data Structures, Operating Systems, Cloud Technologies, Computer Networks, and Automated Testing. Building fullstack systems with .NET/React and deploying containerized applications to Azure.",
    tags: ["Systems Programming", "Databases & SQL", "Cloud & DevOps"],
  },
  {
    year: "2019 - 2023",
    title: "IT Technician Diploma: Software Dev & Systems Administration",
    description:
      "Completed a comprehensive dual-specialization program. Infrastructure: Mastered system administration, hardware diagnostics, and Linux/Windows environments. Development: Built web applications using JavaScript, PHP, and Python, backed by relational SQL database design and network management.",
    tags: [
      "Full-Stack Fundamentals",
      "Linux/Windows Admin",
      "Hardware/OS",
      "SQL Databases",
    ],
  },
];

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="w-full max-w-[1200px] py-8 px-6 md:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="text-(--text-secondary) hover:text-accent transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{" "}
          Back to Home
        </Link>
        <h1 className="text-xl font-bold">About Me</h1>
      </header>

      <main className="w-full max-w-[1200px] px-6 md:px-12 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-10">
          <article className="bg-card border border-border-color rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-4 text-(--text-primary)">
              Logic, Structure, Design.
            </h2>
            <p className="text-lg text-(--text-secondary) leading-relaxed">
              I am an aspiring IT professional{" "}
              <span className="font-semibold text-(--text-primary)">
                programming since 2021
              </span>
              , dedicated to delivering clean, reliable, and efficient technical
              solutions. I combine a strong analytical background with hands-on
              expertise in{" "}
              <span className="font-semibold text-(--text-primary)">
                solving complex problems
              </span>{" "}
              and understanding how{" "}
              <span className="font-semibold text-(--text-primary)">
                software
              </span>{" "}
              and{" "}
              <span className="font-semibold text-(--text-primary)">
                systems
              </span>{" "}
              work together.
            </p>

            <p className="text-lg text-(--text-secondary) leading-relaxed mt-4">
              My drive is to approach challenges with precision, prioritizing{" "}
              <span className="font-semibold text-(--text-primary)">
                efficiency
              </span>{" "}
              and{" "}
              <span className="font-semibold text-(--text-primary)">
                practical functionality
              </span>
              . Although early in my professional career, I treat every task
              with{" "}
              <span className="font-semibold text-(--text-primary)">
                industrial rigor
              </span>
              —currently looking for an opportunity to apply my technical
              mindset in a dynamic environment.
            </p>
          </article>

          {/* KEY SKILLS / TECH STACK - USING CARD STYLING */}
          <article>
            <h3 className="text-2xl font-bold mb-6 text-(--text-primary)">
              Professional Toolkit
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Java / Spring Boot",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AI Tools",
                "Node / Express.js",
                "Python",
                "TypeScript",
                "React",
                "Microsoft Azure",
                "C# / .NET",
                "Git",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-card min-w-28 border border-border-color rounded-xl text-wrap p-4 text-center hover:border-accent transition-colors duration-200"
                >
                  <p className="font-medium text-base text-(--text-primary) text-wrap">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* RIGHT COLUMN: Timeline / History (1/3 width) */}
        <section className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-6 text-(--text-primary)">
            My Journey
          </h3>
          <div className="relative border-l-2 border-border-color ml-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-8 pl-6 relative">
                {/* Timeline Dot (Accent Color) */}
                <div className="absolute w-4 h-4 rounded-full bg-accent -left-2 top-1.5 border-4 border-main"></div>

                <h4 className="text-lg font-bold text-(--text-primary) mb-1">
                  {event.title}
                </h4>
                <p className="text-sm text-(--text-secondary) mb-3">
                  {event.year}
                </p>
                <p className="text-base text-(--text-secondary) leading-relaxed mb-3">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#2a2a2a] text-(--text-secondary) border border-[#333]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Final Timeline Event Placeholder */}
            <div className="mb-8 pl-6 relative">
              <div className="absolute w-4 h-4 rounded-full bg-accent -left-2 top-1.5 border-4 border-main opacity-50"></div>
              <p className="text-sm text-(--text-secondary) italic mt-6">
                ...and beyond
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

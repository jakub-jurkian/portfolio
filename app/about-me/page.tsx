import Link from "next/link";

const timelineEvents = [
  {
    year: "2025 - Present",
    title: "Contributor, University Programming Club (WIP)",
    description:
      "Technical contributor to the 'Work In Progress' club. Collaborating in an Agile team to build scalable backend architectures, participating in rigorous code reviews, and establishing robust Git workflows.",
    tags: ["Backend Systems", "Git Workflow", "Code Review"],
  },
  {
    year: "2024 - Present",
    title: "B.Sc. Computer Science - University of Gdańsk",
    description:
      "Specializing in Systems Programming (Golang) and Databases. Core coursework covers Algorithms & Data Structures, Operating Systems, Cloud Technologies, and Automated Testing. Designing concurrent backend systems and deploying containerized applications to cloud environments.",
    tags: ["Systems Programming", "Databases & SQL", "Cloud Infrastructure"],
  },
  {
    year: "2019 - 2023",
    title: "IT Technician Diploma: Software Dev & Systems Administration",
    description:
      "Completed a comprehensive four-year technical program. Solidified core computing roots: mastered Linux/Windows system administration, network management, and relational SQL database design alongside fundamental web development.",
    tags: [
      "Computing Fundamentals",
      "Linux Administration",
      "SQL Databases",
      "Network Infrastructure",
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-balance text-(--text-primary)">
              Logic, Structure, Design.
            </h2>
            <p className="text-[1.0625rem] md:text-lg text-(--text-secondary) leading-[1.7] text-pretty">
              I am a software engineer specializing in backend development,{" "}
              <span className="font-semibold text-(--text-primary)">
                programming since 2021
              </span>
              . I am dedicated to delivering clean, testable, and highly
              efficient server-side solutions. My approach combines a strong
              analytical foundation from my computer science studies with
              hands-on expertise in solving complex problems and understanding
              how{" "}
              <span className="font-semibold text-(--text-primary)">
                software architecture and infrastructure
              </span>{" "}
              work together.
            </p>

            <p className="text-[1.0625rem] md:text-lg text-(--text-secondary) leading-[1.7] mt-4 text-pretty">
              My drive is to tackle backend challenges with engineering
              precision, prioritizing data consistency and practical
              functionality. I treat every project with professional discipline
              — ensuring solid test coverage, automated CI/CD pipelines, and
              secure API designs while looking for an opportunity to contribute
              to a production environment.
            </p>
          </article>

          {/* REORDERED & CLEANED UP TOOLKIT (12 ITEMS PERFECT FOR THE GRID) */}
          <article>
            <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-(--text-primary)">
              Professional Toolkit
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Java / Spring Boot",
                "PostgreSQL",
                "Docker",
                "Testcontainers",
                "GitHub Actions",
                "Apache Kafka",
                "Cloud (Azure/AWS)",
                "MongoDB",
                "C# / .NET Core",
                "Go (Golang)",
                "Node.js / Express",
                "Git",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-card min-w-28 border border-border-color rounded-xl p-4 text-center hover:border-accent transition-colors duration-200 flex items-center justify-center"
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
          <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-(--text-primary)">
            My Journey
          </h3>
          <div className="relative border-l-2 border-border-color ml-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-8 pl-6 relative">
                {/* Timeline Dot (Accent Color) */}
                <div className="absolute w-4 h-4 rounded-full bg-accent -left-2 top-1.5 border-4 border-main"></div>

                <h4 className="text-lg font-bold text-(--text-primary) mb-1 tracking-tight text-balance">
                  {event.title}
                </h4>
                <p className="text-sm text-(--text-secondary) mb-3 tabular-nums">
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

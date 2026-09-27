import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Computer Science student at the University of Gdańsk focused on Java / Spring Boot backend engineering.",
};

const timelineEvents = [
  {
    year: "2024 - Present",
    title: "B.Sc. Computer Science – University of Gdańsk",
    description:
      "Full-time, practical-profile programme: the 6th semester (from January 2027) is a 720-hour professional internship with no classes. Relevant coursework includes Algorithms & Data Structures, Industrial Applications (Spring Boot, ORM, REST API design), Databases (relational & NoSQL, polyglot persistence), Concurrent Programming, Web Application Security (OAuth2/Keycloak), and Microservices Architecture Patterns.",
  },
  {
    year: "2019 - 2023",
    title: "IT Technician Diploma – Maciej Rataj ZS (Reszel)",
    description:
      "Four-year technical programme (Administration and Programming): Linux/Windows system administration, networking, relational database design with SQL, and web development fundamentals.",
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
              A few words about me
            </h2>
            <p className="text-[1.0625rem] md:text-lg text-(--text-secondary) leading-[1.7] text-pretty">
              I am a Computer Science student at the University of Gdańsk,
              focused on backend engineering with{" "}
              <span className="font-semibold text-(--text-primary)">
                Java and Spring Boot
              </span>
              . I care about writing well-tested, maintainable code I&apos;d be
              comfortable handing off to someone else: I write critical logic{" "}
              <span className="font-semibold text-(--text-primary)">
                test-first
              </span>{" "}
              and record architectural decisions as{" "}
              <span className="font-semibold text-(--text-primary)">ADRs</span>.
            </p>

            <p className="text-[1.0625rem] md:text-lg text-(--text-secondary) leading-[1.7] mt-4 text-pretty">
              I am looking for a Java Backend Developer or Software Engineering
              internship – available{" "}
              <span className="font-semibold text-(--text-primary)">
                now, part-time
              </span>{" "}
              alongside my studies – or a full-time junior role starting{" "}
              <span className="font-semibold text-(--text-primary)">
                January 2027
              </span>
              .
            </p>
          </article>

          <article>
            <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-(--text-primary)">
              Professional Toolkit
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Java 21+",
                "Spring Boot 3+ / JPA",
                "Spring Security (JWT)",
                "PostgreSQL",
                "Redis",
                "Liquibase / Flyway",
                "Testcontainers",
                "JUnit 5 / Mockito",
                "Docker",
                "GitHub Actions CI/CD",
                "MongoDB",
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
            <p className="mt-6 text-base text-(--text-secondary)">
              Also exploring: React, Node.js / Express, AWS / Azure.
            </p>
          </article>
        </section>

        <section className="lg:col-span-1">
          <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-(--text-primary)">
            Education
          </h3>
          <div className="relative border-l-2 border-border-color ml-4">
            {timelineEvents.map((event) => (
              <div key={event.title} className="mb-8 pl-6 relative">
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
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend projects in Java / Spring Boot, Node.js and .NET: concurrency-safe reservations, LLM-as-a-judge evaluation, a microservices marketplace and an Azure-hosted IoT simulator.",
};

const projects = [
  {
    title: "Fleet Management API (VeloCity)",
    description:
      "Spring Boot REST API for an e-bike rental platform, with a separate React / TypeScript client. Double-booking is prevented at the database level by a PostgreSQL exclusion constraint over date ranges, mapped to a clean HTTP 409 and verified by a Testcontainers concurrency test. The reservation lifecycle is a domain state machine with @Version optimistic locking against lost updates. Stateless JWT auth with a Redis-backed token blacklist for logout. BigDecimal pricing engine written test-first; 40+ tests run in GitHub Actions, and a deploy workflow ships the Docker image to Oracle Cloud.",
    stack: [
      "Java 25",
      "Spring Boot 4",
      "PostgreSQL",
      "Redis",
      "Liquibase",
      "Testcontainers",
      "Docker",
      "GitHub Actions",
    ],
    liveUrl: "https://velocityfleet.dev",
    repos: [
      { label: "API", url: "https://github.com/jakub-jurkian/velocity-api" },
      {
        label: "Client",
        url: "https://github.com/jakub-jurkian/velocity-client",
      },
    ],
  },
  {
    title: "LLM Evaluation API (MockBean)",
    description:
      "Spring Boot + LangChain4j API that grades technical interview answers with an LLM as judge, in RAG (PostgreSQL + pgvector) or plain-prompt mode; Claude, Gemini or a local Llama 3.1 is selected via Spring profiles. Benchmarked 3 models × 2 modes on 40 labelled answers with bootstrap confidence intervals: Claude reached 92.5% accuracy, and RAG did not improve accuracy for any model. Schema managed by Flyway migrations instead of Hibernate auto-DDL; every evaluation is persisted for analysis.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "LangChain4j",
      "PostgreSQL",
      "pgvector",
      "Flyway",
      "Python",
    ],
    repos: [{ label: "Code", url: "https://github.com/jakub-jurkian/mockbean" }],
  },
  {
    title: "E-Commerce Marketplace API (Grailkits)",
    description:
      "Marketplace backend split into four containerized services (API Gateway, Catalog, Order, Review). Login uses Keycloak (OAuth 2.0 Authorization Code + PKCE); the gateway validates JWTs against Keycloak's JWKS and applies Redis-backed rate limiting before proxying to the services. Polyglot persistence: PostgreSQL for transactional order state, MongoDB for flexible product details and reviews.",
    stack: [
      "Node.js",
      "Express.js",
      "Keycloak",
      "OAuth 2.0",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    repos: [
      { label: "Code", url: "https://github.com/jakub-jurkian/grailkits" },
    ],
  },
  {
    title: "Smart Home Simulator (IoT)",
    description:
      "IoT platform that simulates smart-home hardware talking to an ASP.NET Core (.NET 10) backend over TCP and MQTT, with real-time dashboard updates via SignalR and persistence through Entity Framework Core. 83 xUnit tests (unit, integration and Reqnroll BDD) run in the GitHub Actions pipeline.",
    stack: [
      "C#",
      ".NET 10",
      "EF Core",
      "MQTT",
      "SignalR",
      "Docker",
      "xUnit",
    ],
    repos: [
      {
        label: "Code",
        url: "https://github.com/jakub-jurkian/smart-home-simulator",
      },
    ],
  },
];

export default function Projects() {
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
          Back
        </Link>
        <h1 className="text-xl font-bold">Selected Works</h1>
      </header>

      <main className="w-full max-w-[1200px] px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-card border border-border-color rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 flex flex-col p-6 h-full"
            >
              <div className="flex flex-col grow">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-balance text-(--text-primary) mb-4">
                  {project.title}
                </h2>

                <p className="text-[0.9375rem] md:text-base text-(--text-secondary) leading-[1.65] mb-6 grow text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-[#2a2a2a] text-(--text-secondary) border border-[#333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-32 bg-accent text-main py-3 rounded-lg font-semibold text-center transition-colors hover:bg-[#fde047]"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.repos.map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-32 border border-border-color text-(--text-primary) py-3 rounded-lg font-medium text-center hover:bg-[#2a2a2a] transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      {repo.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

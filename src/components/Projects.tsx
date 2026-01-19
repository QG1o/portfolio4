import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Product Store App",
    description: "Full-stack PERN application with authentication, REST API, and complete CRUD functionality for product management.",
    tech: ["PostgreSQL", "Express.js", "React", "Node.js", "TypeScript"],
    liveUrl: "https://github.com/QG1o/product-store-app",
    githubUrl: "https://github.com/QG1o/product-store-app",
    thumbnail: "",
  },
  {
    title: "Portfolio Website 3",
    description: "Modern portfolio website with sleek design and interactive elements.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://qg1o.netlify.app/",
    githubUrl: "https://github.com/QG1o",
    thumbnail: "/projects/project33.png",
  },
  {
    title: "Portfolio Website 2",
    description: "Responsive portfolio showcasing web development skills with clean design and smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://qg1o.github.io/portfolio2/",
    githubUrl: "https://github.com/QG1o/portfolio2",
    thumbnail: "/projects/project22.png",
  },
  {
    title: "Portfolio Website 1",
    description: "First portfolio website demonstrating frontend development capabilities.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://qg1o.github.io/portfolio1/",
    githubUrl: "https://github.com/QG1o/portfolio1",
    thumbnail: "/projects/project11.png",
  },
  {
    title: "Portfolio Website 4",
    description: "Latest portfolio iteration with modern design patterns and optimized performance.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://qg1o2.netlify.app/",
    githubUrl: "https://github.com/QG1o/portfolio4",
    thumbnail: "/projects/project44.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-4">{'// projects'}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">work</span>
          </h3>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group card-gradient border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative overflow-hidden rounded-xl border border-border group-hover:border-primary/50 transition-all duration-300"
                    >
                      {project.thumbnail ? (
                        <>
                          <img
                            src={project.thumbnail}
                            alt={`${project.title} preview`}
                            className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </>
                      ) : (
                        <div className="w-full aspect-video bg-secondary/50 flex items-center justify-center">
                          <span className="text-muted-foreground text-sm font-mono">Coming Soon</span>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/QG1o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              View more on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
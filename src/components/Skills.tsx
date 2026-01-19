import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "PostgreSQL", level: 80 },
  { name: "Python", level: 70 },
  { name: "Bash", level: 85 },
];

const tools = [
  "Git", "Linux", "Windows", "Active Directory", "PowerShell", "Docker"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-4">{'// skills'}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Technologies I <span className="text-gradient">work with</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills with progress */}
            <div className="space-y-6">
              <h4 className="font-medium text-lg mb-6">Core Stack</h4>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-cyan-300 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Tools grid */}
            <div>
              <h4 className="font-medium text-lg mb-6">Tools & Platforms</h4>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="card-gradient border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
                  >
                    <span className="font-mono text-sm">{tool}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 card-gradient border border-border rounded-xl p-6">
                <p className="font-mono text-xs text-muted-foreground mb-2">Currently building</p>
                <p className="text-primary font-medium">PERN Stack Applications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
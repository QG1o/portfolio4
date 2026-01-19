import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-primary text-sm mb-4">{'// about me'}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            System Administration & <span className="text-gradient">Web Developer</span>
          </h3>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 20 years of IT experience since childhood, I've developed a deep
                passion for technology. I specialize in IT security and system administration,
                having designed, implemented, and managed complete IT infrastructures.
              </p>
              <p>
                My expertise spans across web development, IT administration, and cybersecurity.
                I'm committed to continuous learning and staying current with the latest
                technologies and security practices.
              </p>
              <p>
                When I'm not working on projects, you'll find me practicing on HackTheBox and
                TryHackMe, contributing to open source, or exploring new web technologies
                and security tools.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <div className="card-gradient border border-border rounded-xl p-6 space-y-4">
                <h4 className="font-mono text-sm text-primary">Quick Facts</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-muted-foreground">Based in Germany</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-muted-foreground">20+ years experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-muted-foreground">370 GitHub followers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">→</span>
                    <span className="text-muted-foreground">Security enthusiast</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
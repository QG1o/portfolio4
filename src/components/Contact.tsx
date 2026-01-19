import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/QG1o", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/QG1o", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/QG1o_", label: "Twitter/X" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-mono text-primary text-sm mb-4">{'// contact'}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-gradient">connect</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm always interested in new opportunities, collaborations, and interesting projects.
            Whether you have a project in mind or just want to chat about tech, feel free to reach out!
          </p>

          <motion.a
            href="mailto:g@mioo.slmail.me"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-lg border-glow"
          >
            <Mail size={20} />
            g@mioo.slmail.me
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mt-12"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
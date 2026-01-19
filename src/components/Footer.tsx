const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p className="font-mono text-xs">
            © {currentYear} QG1o.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
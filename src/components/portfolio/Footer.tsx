const Footer = () => (
  <footer className="border-t border-border py-8 px-4 md:px-8">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Oluwabusola Noah Ruth. All rights reserved.</p>
      <p className="font-mono text-xs">Built with passion for fintech 💳</p>
    </div>
  </footer>
);

export default Footer;

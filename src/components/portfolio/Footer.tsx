const Footer = () => (
  <footer className="border-t border-border py-10 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-baseline gap-3">
        <span className="font-serif italic text-primary text-2xl leading-none">TheGlobalBusola</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Oluwabusola Noah Ruth
        </span>
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Product · Fintech · Payments
      </p>
    </div>
  </footer>
);

export default Footer;

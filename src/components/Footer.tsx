export default function Footer() {
  return (
    <footer
      className="themed-section border-t"
      style={{
        background: "var(--theme-bg)",
        borderColor: "var(--theme-line)",
        color: "var(--theme-ink-muted)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span style={{ fontFamily: "var(--theme-font-body)" }}>
          &copy; {new Date().getFullYear()} VDT Test
        </span>
        <a
          href="https://vdtsites.com"
          target="_blank"
          rel="noreferrer"
          className="font-mono uppercase tracking-[0.18em] text-[10px] transition-opacity hover:opacity-80"
          style={{ color: "var(--theme-ink-muted)" }}
        >
          Website Designed and Custom Built by{" "}
          <span className="underline underline-offset-2" style={{ color: "var(--theme-accent)" }}>
            VDTSites.com
          </span>
        </a>
      </div>
    </footer>
  );
}

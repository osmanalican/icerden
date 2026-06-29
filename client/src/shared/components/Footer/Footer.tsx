export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm text-zinc-500">
        <span>İçerden</span>

        <div className="flex gap-5">
          <a href="/privacy" className="hover:text-zinc-900">
            Gizlilik
          </a>
          <a href="/contact" className="hover:text-zinc-900">
            İletişim
          </a>
          <a href="https://github.com/osmanalican/icerden" className="hover:text-zinc-900">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export function Surfer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden"
      aria-hidden
    >
      <svg
        className="surfer-drift absolute left-0 top-[54%] w-10 sm:w-12 text-isle-ink/80"
        viewBox="0 0 44 18"
        fill="currentColor"
      >
        <ellipse cx="22" cy="15.2" rx="17" ry="1.6" opacity="0.28" />
        <path d="M6.5 13.6c8-2.2 23-2.4 31.2.2l-1.4 1.1c-8-1.8-20.8-1.7-28.4.1z" />
        <circle cx="24.2" cy="5.1" r="1.55" />
        <path d="M23.6 6.6 22.2 12.4l-3.2 1.4.6-1.3 2.1-.8 1.1-5.1z" />
        <path d="M23.8 8.4h4.2l.2 1.1-4.1.3z" opacity="0.85" />
      </svg>
    </div>
  );
}

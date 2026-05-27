export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      <span className="text-[1.5rem] font-bold tracking-tight leading-none">
        CS
      </span>
      <span className="hidden sm:block text-[0.6rem] font-semibold uppercase tracking-[0.15em] leading-tight opacity-70">
        Digital
        <br />
        Marketing
      </span>
    </div>
  );
}

export default function LiquidButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="liquid-glass px-6 py-3 font-medium transition hover:scale-105 hover:glow">
      {children}
    </button>
  );
}

/**
 * Signature ambient backdrop for the whole page.
 *
 * A quiet blueprint grid + two slow-drifting glow orbs, fixed behind all
 * content. This is the page's one deliberate visual bet: a schematic /
 * precision field appropriate for an engineer's site, kept subtle enough
 * to never compete with content. Pure CSS animation, no JS, so it costs
 * nothing on the main thread and respects prefers-reduced-motion globally.
 */
function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-bg-theme"
    >
      <div className="grid-field" />
      <div
        className="glow-orb glow-orb--a"
        style={{
          top: "-10%",
          left: "8%",
          width: "38vw",
          height: "38vw",
          background: "radial-gradient(circle, rgba(45,212,199,0.16), transparent 70%)",
        }}
      />
      <div
        className="glow-orb glow-orb--b"
        style={{
          top: "35%",
          right: "-8%",
          width: "32vw",
          height: "32vw",
          background: "radial-gradient(circle, rgba(242,177,85,0.08), transparent 70%)",
        }}
      />
      <div
        className="glow-orb glow-orb--a"
        style={{
          bottom: "-15%",
          left: "30%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, rgba(22,163,148,0.12), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}

export default Backdrop;

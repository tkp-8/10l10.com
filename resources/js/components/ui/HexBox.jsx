export default function HexBox({ children, ...props }) {
  return (
    <li className="hex-container stack">
      <div
        className={props.hexClass}
        style={{ rotate: `${props.rotation}deg` }}
      ></div>
      <div className="timer timer-label">{props.label}</div>
      <div className="timer timer-remaining">{children}</div>
    </li>
  );
}

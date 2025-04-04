import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <p>A</p>
      <div>
        <Image src="/img/dfr-logo/dfr-white.jpg" fill />
      </div>
      <p>event in partnership with</p>
      <div>
        <Image src="/img/sponsors/tcs.svg" fill />
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <p>A</p>
      <div>
        <Image src="/img/dfr-logo/dfr.png" fill />
      </div>
      <p>event sponsored by</p>
      <div>
        <Image src="/img/sponsors/tcs.png" fill />
      </div>
    </footer>
  );
}

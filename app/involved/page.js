import Image from "next/image";

export default function Involved() {
  return (
    <main className="involved">
      <h1>get involved</h1>
      <p>
        Dancing Family Festival is a <span>community run festival</span>.
        <br></br> This means that we need you all !
      </p>
      <p>
        We are <span>looking for general volunteers</span> but also people who
        want to create something specific for the festival whether it be an art
        installation, a game, a workshop.
      </p>
      <div>
        <button className="button1">
          {" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfiQHoeu1reM7PH0xSK9CwivuYdtOtptnPRo62F0nXWl-hz-g/viewform"
            target="_blank"
          >
            Volunteer
          </a>
        </button>
        <button className="button1">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScAiZZqd0rwzYPIZrh07_G85k1lYpLGBne6H1USUGIPMYAmyw/viewform?usp=sf_link"
            target="_blank"
          >
            Open Call
          </a>
        </button>
      </div>
      <div className="involved_img">
        <Image fill src="/img/dancers/line.png" />
      </div>
    </main>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <main className="about">
      <h1>about us</h1>
      <div>
        <div>
          <Image fill src="/img/pics/yohanandtatiana.jpg" />
        </div>
        <p>
          Dancing Family was founded by <span>Yohan & Tatiana, 2 siblings</span>{" "}
          who want to share their love for music and Family partying with the
          world.
        </p>

        <p>
          The family led event platform announces their{" "}
          <span>first festival at Three Pools farm</span> in South Wales from{" "}
          <span>July 3-5, 2025</span>. Run by siblings Yohan and Tatiana de
          Ricard, Dancing Family has been facilitating events in South-East
          London since 2020. With appearances at venues like Corsica Studios,
          The Carpet Shop and Peckham Audio, the family run platform has been
          fostering a space for up-and coming artists within the London circuit
          for over 4 years.
        </p>
        <p>
          <span>
            {" "}
            In search of another challenge and always looking to broaden their
            programming, the brother-sister duo will be bringing their family
            b2b programming to new heights.
          </span>
        </p>
        <p>
          <span> The family-centric gathering</span> will take place on a
          permaculture farm near the small Welsh town of{" "}
          <span>Abergavenny</span>. As firm believers that intimate spaces make
          for the best dances, the festival will host{" "}
          <span>400 people over the 3 day festivities</span>. Guests will be{" "}
          <span>encouraged to come with their family and chosen family</span>.
          Spread over 3 days, Dancing Family will host over 30 family b2bs on
          two intimate stages.
        </p>
        <p>
          At the heart of this project is the siblings’{" "}
          <span>
            goal to bring together families within the realm of underground
            electronic dance music
          </span>
          , and subsequently enable{" "}
          <span>intergenerational partying within the scene</span>.
        </p>
        <p>
          They are one of the only (if not the only in the UK) to{" "}
          <span>program their events in this family b2b style</span> and are
          strong advocates for a more
          <span>wholesome party space</span>. Yohan states that “creating a
          space where DJs can go b2b with their family facilitates a{" "}
          <span>welcoming environment</span> that shies away from intense and
          sometimes very dark atmospheres”. 
        </p>
        <p></p>
        <p>
          General Queries:{" "}
          <a href="mailto:info@dancingfam.com"> info@dancingfam.com </a>
          <br></br>
          Art & Design Queries:{" "}
          <a href="mailto:arts@dancingfam.com"> arts@dancingfam.com </a>
          <br></br>
          Technical Queries:{" "}
          <a href="mailto:fred@dancingfam.com"> fred@dancingfam.com </a>
          <br></br>
        </p>
      </div>
    </main>
  );
}

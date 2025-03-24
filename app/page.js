import Image from "next/image";

export default function Home() {
  return (
    <main>
      {" "}
      <section className="hero">
        <div className="hero_image">
          <Image src="/img/posters/pink-no-info.png" fill />
        </div>
        <div className="hero_info">
          <div className="hero_text">
            <h1>3-5 JULY 2025</h1>
            <div>
              <div className="hero_location">
                <Image src="/img/icons/location-white.png" fill />
              </div>
              <h2>THREE POOLS FARM</h2>
            </div>
            <button className="button1">buy tickets</button>
          </div>
          <div className="hero_sponsors">
            <div>
              <Image src="/img/sponsors/tcs.png" fill />
            </div>
            <div>
              <Image src="/img/sponsors/threepools.png" fill />
            </div>
            <div>
              <Image src="/img/dfr-logo/dfr.png" fill />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

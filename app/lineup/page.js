export default function Lineup() {
  const thursday = [
    "Bushbby b2b Papaoul",
    "Calm Stiege b2b DJ Double Oh!",
    "Social Records Society: Soph and Disco Fucks",
  ];
  const friday = [
    "BAY-BUSH-KA b2b Ray Gibbons",
    "DJ Dapper Dan b2b Edred",
    "Domingo b2b Thom Parris",
    "Eff b2b e-kitty b2b Skari",
    "FAFF",
    "Kojay b2b The Don",
    "Leztopia: Elianne b2b Madelic",
    "Louise Plus One & Hughesee",
    "Naima Adams b2b Fab",
    "Rago & Family",
    "Sachana b2b Isa",
    "Small Crab b2b Angel Cat",
    "Sway of the Verses b2b Zar",
    "OurSoul Soundsystem (FREDDREDD, UFO, Dogma + ??)",
  ];

  const saturday = [
    "bigox b2b Stinky PT",
    "ELEANOR b2b Tom Lea",
    "Fita b2b Yohan",
    "Floorless: Cam Joon b2b Meku & Yimying b2b FNKD",
    "Hipsters Don't Dance",
    "Hortus",
    "Limi b2b DJ Programma",
    "Little & Swifty",
    "Lucia b2b blines",
    "Luma b2b DJ Janey G b2b Baghdaddy Naz",
    "Misscotèque",
    "passer b2b kelly",
    "Rohan Rakhit b2b Donut",
    "S-candalo",
    "Sonic Verse",
    "Vaquita (iona & calan)",
  ];
  return (
    <main className="lineup">
      <h1>lineup</h1>

      <div>
        <h2>Thursday - 03/07</h2>
        <ul>
          {thursday.map((thursday) => {
            return <li key={thursday}>{thursday}</li>;
          })}
        </ul>
        <h2>Friday - 04/07</h2>
        <ul>
          {friday.map((friday) => {
            return <li key={friday}>{friday}</li>;
          })}
        </ul>
        <h2>Saturday - 05/07</h2>
        <ul>
          {saturday.map((thursday) => {
            return <li key={thursday}>{thursday}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}

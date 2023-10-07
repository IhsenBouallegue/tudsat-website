export default function page() {
  return (
    <div className="min-h-screen px-6 py-32 md:max-w-screen-lg m-auto flex flex-col gap-6">
      <h1 className="text-5xl font-bold">CanSat</h1>
      <p className="text-accent font-bold">Lead: Kai Wördehoff</p>
      <p>
        A CanSat is a mini satellite in the format of a can. Due to its small
        size it is ideal for rapid prototyping and learning about the process of
        designing, building and launching a mission. At TUDSaT we invite every
        newcomer, with or without any prior knowledge to participate on this
        project to get some hands on experience. Be it a freshman or someone who
        never has done anything before in the field of space technologies, here
        you can learn for yourself how awesome any space projects are.
      </p>
      <h2 className="text-3xl font-bold">WiSe 2021/22 –</h2>
      <p>
        Ever wanted to be a lead and manage a satellite project or get some
        hands-on experience with hardware, software or 3d-printing? This could
        be your chance, no prior knowledge required. Interested? Then
        participate at our Kick-Off meeting on Wednesday (24. November 2021) at
        18:00 on our discord server. When you join, let us know if you are a
        human being and we’ll grant you access to the whole server.
      </p>
      <h2 className="text-3xl font-bold">WiSe 2020/21 – SoSe 2021</h2>
      <p>
        Our first ever CanSat project launched at the beginning of the winter
        term 2020. Facing multiple challenges like
        <ul>
          <li>Designing the case and structure of the CanSat using CAD</li>
          <li>
            Reading multiple sensors at once using the GPIO pins of a Raspberry
            Pi Zero W
          </li>
          <li>
            Creating an ejection mechanism to be used on our ION rocket to eject
            the CanSat
          </li>
          <li>
            Building a launch rocket to carry the payload of a CanSat up into
            the air
          </li>
          <li>And many more…</li>
        </ul>
      </p>
    </div>
  );
}

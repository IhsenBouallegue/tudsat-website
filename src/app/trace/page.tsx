export default function page() {
  return (
    <div className="min-h-screen px-6 py-32 md:max-w-screen-lg m-auto flex flex-col gap-6">
      <h1 className="text-5xl font-bold">Trace</h1>
      <p className="text-accent font-bold">Lead: Leo Jung</p>
      <p>
        The CubeSat project TRACE (TU Darmstadt ReseArch Cubesat for Education) currently consists
        of 25 students from different fields of study and universities in the vicinity of Darmstadt.
        The project is divided into different subsystems, the so-called subsections. Each of the
        subsections is led by a team leader who coordinates the work and is also the contact person
        for technical-related questions. The aim of the project is the development of a 2U CubeSat,
        the training of the members regarding space technologies, and networking with the industry.
      </p>
      <h2 className="text-3xl font-bold">What is a CubeSat?</h2>
      <p>
        CubeSats are a concept for nanosatellites initiated by Stanford University and California
        Polytechnic State University. It defines a uniform framework for the construction and launch
        of satellites. The smallest satellite described in the CubeSat standard is the so-called 1U
        (1 Unit) CubeSat, which has external dimensions of 10 cm x 10 cm x 11.35 cm and a maximum
        weight of 1.33 kg. Further CubeSats are then multiples of this size (e.g. 1.5U, 2U, 3U, …).
        The CubeSat project of TUDSaT focuses on the development of a 2U CubeSat.
      </p>
      <h2 className="text-3xl font-bold">Mission Objectives</h2>
      <p>
        The payload of the CubeSat project can be divided into scientific and educational mission
        objectives.
      </p>
      <h2 className="text-3xl font-bold">Primary Scientific Objectives</h2>
      <p>
        Considering the decreasing launch costs due to new rocket technologies and the growing
        number of large constellations of small satellites, one of the most crucial challenges in
        astronautics is the sustainable use of the earth’s orbital environment. For this reason, the
        CubeSat Mission addresses the increasing problem of space debris regarding small satellites
        and non-cooperative targets. Nominal operations of satellites depend on the clear
        identification of the individual satellites. This identification is conventionally achieved
        by a combination of NORAD-published TLE data and received datasets from the satellite.
        Because of their simple design, mostly built by amateurs or educational institutes, small
        satellites suffer from an increased risk of not being fully operational after launch.
        Thereby and by difficulties regarding identification through TLE data, caused by many
        satellites in similar orbits after mass launches, many of these satellites cannot be
        identified properly. Historical data show that this can take up to 200 days. Consequently,
        we as a student group have made it our mission to demonstrate and test independent
        identification technologies during our CubeSat mission, which are supposed to enable the
        early localization and identification after deployment and the collection of data about its
        movement and orbit. Please check out the Mission page for a deeper understanding of our
        mission and its motivation.
      </p>
      <h2 className="text-3xl font-bold">Secondary Scientific Objectives</h2>
      <p>
        When planning a space mission, one must always take into account the radiation dose to which
        the subsystems are exposed. For this reason, the scientific secondary payload is composed of
        two components: A gamma sensor and an experiment to measure free charges within the high
        atmosphere. The objective of this experiment is first to test the concept and, if
        successful, to learn conclusions about the state of the high atmosphere.
      </p>
      <h2 className="text-3xl font-bold">How We Work</h2>
      <p>
        Unlike other space projects, the CubeSat team does not follow the classical approach of
        project phases as described by ECSS, but an iterative development approach. This decision is
        based on two advantages: „rapid prototyping“ allows to optimize the design at an early stage
        the iterative approach allows a flexible handling of changing requirements The iterative
        approach is essentially based on the phase model, which means that all phases of the
        traditional model are run through per iteration. Each iteration lasts 6 months (semester
        cycle), starts with the conception and definition of milestones, and goes seamlessly into
        the implementation of a prototype. Towards the end of the cycle, the iteration is completed
        with the integration of the subsystems and their documentation. After each iteration, the
        results are evaluated, and based on these results the milestones for the next iteration are
        defined. Thus, the functional scope is increased with each cycle until the complete product
        is finally achieved. This iterative cycle is then concluded by a final test campaign to
        ensure the functionality of the finished CubeSat.
      </p>
      <h2 className="text-3xl font-bold">Curious?</h2>
      <p>
        Then just drop by one of our meetings without obligation. Our weekly project meeting takes
        place every other week on Thursday at 5 pm on our Discord Server or in S306 / 126 @ TU
        Darmstadt or join or workdays every month on the first Saturday or third Monday in the
        CE-Lab (L101/368). If you have any questions, please feel free to contact the CubeSat
        Project Management.
      </p>
    </div>
  );
}

export default function page() {
  return (
    <div className="min-h-screen px-6 py-32 md:max-w-screen-lg m-auto flex flex-col gap-6">
      <h1 className="text-5xl font-bold">Rapid</h1>
      <p className="text-accent font-bold">
        Lead: Jonas Klein and Manuel Schlüsener
      </p>
      <p>
        In addition to developing a CubeSat, we have set ourselves the goal of
        developing, building and operating our own experimental rockets. The
        focus is on deepening the theoretical knowledge that is taught in
        lectures at the TU Darmstadt and expanding it to include a practical
        part. The complex overall system „rocket“ is not only ideally suited to
        imparting content to our members, but also the indispensable cooperation
        in an interdisciplinary team. The work should ultimately lead to
        breaking the European altitude record of 32 km for rockets developed by
        students. Ultimately, the team aims to break the European height record
        of student rocketry.
      </p>
      <h2 className="text-3xl font-bold">Current Rocket Developement:</h2>
      <p>
        The Fantastic rocket of Darmstadt Origin FRoDO is our newest rocket
        generation. Our goal with the FRoDO rockets is to take part at
        international student rocketry competitions such as the European
        Rocketry Challenge (EuRoC). At EuRoC, which is promoted and organized by
        the Portuguese Space Agency, the competing student teams launch their
        rockets to heights between 3000 m and 9000 m. The FRoDO rockets use
        solid propellant rocket motors and are designed to carry several
        payloads such as CanSats. The first demo rocket of this generation –
        FRoDO-H – did two successful flights to 400 m in end of 2022. The
        FRoDO-J rocket was launched to a height of 983 m in September 2023. In
        addition to a more sophisticated dual stage recovery system and updated
        avionics, this rocket was able to carry 3 CanSat payloads to the apogee.
        Furthermore, the materials and the manufacturing methods used were
        improved to withstand the increased loads during flight and landing.
        Next, our goal is the development of a new rocket in the FRoDO family,
        which will be able to launch to 3000m and which fulfills all the
        requirements set by the European Rocketry Challenge that will take place
        in October 2024. We will use the experience from our past launches to
        improve the overall rocket concept even more. In addition to some
        upgrades to our recovery, we will set a great focus on collecting
        valuable sensor data from several subsystems of the rocket. Besides all
        general sensor data from our flight computer like barometer, gps and
        acceleration, we also want to further analyze structural and aerodynamic
        behaviors live during our tests and flight. We are still looking for
        motivated students of all disciplines and semesters to join us on our
        mission! No prior knowledge is required and we always have interesting
        tasks for everyone. For more details, check out our subsystems below.
      </p>
      <h2 className="text-3xl font-bold">So far:</h2>
      <p>
        The Athena 0 project was our first rocket generation. Powered by a water
        jet accelerated under a pressure of 20 bar from the tank into the
        environment, Athena 0 mainly served as a test vehicle. At low costs, we
        researched and tested avionics/telemetry, recovery by parachute,
        attitude stabilisation and pressure tank construction. We have launched
        our Athena 0.1 and Athena 0.2 rockets in 2021 and 2022.
      </p>
      <h2 className="text-3xl font-bold">Long term project:</h2>
      <p>
        The long term goal of the rocket team is the developement of an
        experimental rocket powered by a specifically developed liquid
        propellant rocket engine. The propellants used are ethanol and nitrous
        oxide, also known as laughing gas. These represent a suitable compromise
        between performance and easy and safe handling. The engine is designed
        to develop a thrust of 2 kN at a combustion chamber pressure of 21 bar.
        Thus, the composite tanks are required to withstand an internal pressure
        of about 40 bar and an oxidant temperature of -70 °C. The Propulsion
        Subsection is currently working on the engine developement for that
        rocket.
      </p>
      <h2 className="text-3xl font-bold">Curious?</h2>
      <p>
        Then just drop by one of our meetings without obligation. Our weekly
        project meeting takes place every Tuesday at 4:00pm in our workshop or
        on our Discord server. If you have any questions, please contact our
        sectionleads Jonas or Manu via rocket@tudsat.space or Discord.
      </p>
    </div>
  );
}

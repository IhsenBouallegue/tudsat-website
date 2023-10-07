import MemberCard from "./member-card";

export interface Member {
  name: string;
  picture: string;
  position: string;
  socials: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

const team: Member[] = [
  {
    name: "Marta Smith",
    picture: "https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg",
    position: "Frontend Developer",
    socials: {
      github: "",
      twitter: "",
      linkedin: "",
    },
  },
  {
    name: "Darren Randolph",
    picture: "https://mdbcdn.b-cdn.net/img/new/avatars/7.jpg",
    position: "Marketing Expert",
    socials: {
      github: "",
      twitter: "",
      linkedin: "",
    },
  },
  {
    name: "Ayat Black",
    picture: "https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg",
    position: "Web Designer",
    socials: {
      github: "",
      twitter: "",
      linkedin: "",
    },
  },
];

export default function Team() {
  return (
    <section className="flex-col text-center">
      <h2 className="mb-32 text-3xl font-bold">Meet the Team</h2>
      <div className="m-auto grid gap-x-6 grid-cols-1 md:grid-cols-3 w-full md:max-w-screen-lg place-items-center">
        {team.map((member) => {
          return <MemberCard key={`membercard-${member}`} member={member} />;
        })}
      </div>
    </section>
  );
}

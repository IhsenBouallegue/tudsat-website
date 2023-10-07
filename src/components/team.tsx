import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
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
    <section className="mb-32 text-center">
      <h2 className="mb-32 text-3xl font-bold">
        Meet the <u className="text-primary dark:text-primary-400">team</u>
      </h2>
      <div className="grid gap-x-6 grid-cols-2 md:grid-cols-3 w-full place-items-center auto-cols-max">
        {team.map((member) => {
          return <MemberCard member={member} />;
        })}
      </div>
    </section>
  );
}

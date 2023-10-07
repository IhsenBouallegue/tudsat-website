import Image from "next/image";
import { Member } from "./team";
import { Icons } from "./icons";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="block w-64 h-full rounded-lg bg-white shadow-md shadow-primary/10">
      <div className="flex justify-center">
        <div className="flex justify-center -mt-[75px]">
          <Image
            src={member.picture}
            width={150}
            height={150}
            className="mx-auto rounded-full shadow-lg dark:shadow-black/20"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-4 text-lg font-bold">{member.name}</h5>
        <p className="mb-6 text-accent">{member.position}</p>
        <div className="mx-auto flex gap-3 list-inside justify-center">
          <Icons.gitHub className="h-4 w-4 text-primary dark:text-primary-400" />
          <Icons.twitter className="h-4 w-4 text-primary dark:text-primary-400" />
          <Icons.pizza className="h-4 w-4 text-primary dark:text-primary-400" />
        </div>
      </div>
    </div>
  );
}

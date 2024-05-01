import Image from "next/image";
import { Member } from "./team";
import { Icons } from "./icons";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="w-64 h-full backdrop-blur-sm backdrop-saturate-200 rounded-lg border-2 border-primary/10">
      <Image
        src={member.picture}
        width={150}
        height={150}
        className="-mt-[75px] h-[150px] min-h-[150px] mx-auto rounded-full shadow-lg object-cover"
        alt="Avatar"
      />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-bold">{member.name}</h5>
        <p className="mb-6 text-sm text-accent tracking-widest">{member.position}</p>
      </div>
    </div>
  );
}

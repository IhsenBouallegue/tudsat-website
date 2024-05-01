import Bounded from "@/components/bounded";
import MemberCard from "@/components/member-card";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamMembers`.
 */
export type TeamMembersProps = SliceComponentProps<Content.TeamMembersSlice>;

/**
 * Component for "TeamMembers" Slices.
 */
const TeamMembers = ({ slice }: TeamMembersProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <h2 className="mb-32 text-3xl font-bold">Meet our Leaders</h2>
      <div className="m-auto grid gap-x-6 gap-y-32 grid-cols-1 md:grid-cols-3 w-full md:max-w-screen-lg place-items-center">
        {slice.items.map((item) => (
          <div
            key={item.name}
            className="w-64 h-full backdrop-blur-sm backdrop-saturate-200 rounded-lg border-2 border-primary/10"
          >
            <PrismicNextImage
              field={item.photo}
              width={150}
              height={150}
              className="-mt-[75px] h-[150px] min-h-[150px] mx-auto rounded-full shadow-lg object-cover"
            />
            <div className="p-6 text-center">
              <h5 className="mb-2 text-xl font-bold">{item.name}</h5>
              <p className="mb-6 text-sm text-accent tracking-widest">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamMembers;

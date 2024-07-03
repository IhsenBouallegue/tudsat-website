import Bounded from "@/components/bounded";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

/**
 * Props for `TeamMembers`.
 */
export type TeamMembersProps = SliceComponentProps<Content.TeamMembersSlice>;

/**
 * Component for "TeamMembers" Slices.
 */
const TeamMembers = async ({ slice }: TeamMembersProps) => {
  const client = createClient();
  const teamMembers = await client.getSingle("team_members");
  const sections = [...new Set(teamMembers.data.team_members.map((member) => member.section))];

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      withExtraPadding
    >
      {slice.variation === "full" ? (
        <div className="flex flex-col gap-32">
          {sections.map((section) => (
            <div key={section}>
              <h2 className="mb-16 text-3xl font-bold">{section}</h2>
              <div className="m-auto grid gap-x-6 gap-y-32 grid-cols-1 md:grid-cols-3 w-full md:max-w-screen-lg place-items-center">
                {teamMembers.data.team_members
                  .filter((member) => member.section === section)
                  .map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h2 className="mb-32 text-3xl font-bold">{slice.primary.title}</h2>
          <div className="m-auto grid gap-x-6 gap-y-32 grid-cols-1 md:grid-cols-3 w-full md:max-w-screen-lg place-items-center">
            {teamMembers.data.team_members
              .filter((member) => member.highlight)
              .map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
          </div>
        </>
      )}
    </Bounded>
  );
};

export default TeamMembers;

function TeamMemberCard({ member }: { member: Content.TeamMembersDocumentDataTeamMembersItem }) {
  return (
    <Card key={member.name} className="w-64 h-full">
      <PrismicNextImage
        field={member.image}
        width={150}
        height={150}
        className="w-full h-72 rounded-t-lg object-cover"
      />
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <CardDescription className="text-accent tracking-widest">{member.position}</CardDescription>
      </CardHeader>

      <CardFooter className="justify-center p-4">
        <Button asChild variant="outline" size="sm">
          <a
            href={`mailto:${member.email}`}
            className="text-xs text-accent tracking-widest flex align-middle justify-center"
          >
            <Icons.mail className="w-4 h-4 mr-2" />
            Contact
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

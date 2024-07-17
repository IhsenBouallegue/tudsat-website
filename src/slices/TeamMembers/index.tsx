import Bounded from "@/components/bounded";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { isFilledRelatedData } from "@/lib/isFilledRelatedData";
import { createClient } from "@/prismicio";
import { ColorField, Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { cx } from "class-variance-authority";

/**
 * Props for `TeamMembers`.
 */
export type TeamMembersProps = SliceComponentProps<Content.TeamMembersSlice>;

/**
 * Component for "TeamMembers" Slices.
 */
const TeamMembers = async ({ slice }: TeamMembersProps) => {
  const client = createClient();
  const teamMembers = await client.getSingle("team_members", {
    fetchLinks: ["section.name", "section.color"],
  });
  const sections = await client.getAllByType("section");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      withExtraPadding
    >
      {slice.variation === "full" ? (
        <div className="flex flex-col gap-32">
          {sections.reverse().map((section) => (
            <div key={section.data.name}>
              <h2 className="mb-16 text-3xl font-bold">{section.data.name}</h2>
              <div className="m-auto grid gap-x-6 gap-y-32 grid-cols-1 md:grid-cols-3 w-full md:max-w-screen-lg place-items-center">
                {teamMembers.data.team_members
                  .filter(
                    (member) =>
                      isFilledRelatedData(member.section, "section", "name") &&
                      member.section.data.name === section.data.name,
                  )
                  .map((member) => (
                    <TeamMemberCard
                      key={member.name}
                      member={member}
                      color={
                        isFilledRelatedData(member.section, "section", "color")
                          ? member.section.data.color
                          : undefined
                      }
                    />
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
                <TeamMemberCard
                  key={member.name}
                  member={member}
                  color={
                    isFilledRelatedData(member.section, "section", "color")
                      ? member.section.data.color
                      : undefined
                  }
                />
              ))}
          </div>
        </>
      )}
    </Bounded>
  );
};

export default TeamMembers;

function TeamMemberCard({
  member,
  color,
}: { member: Content.TeamMembersDocumentDataTeamMembersItem; color?: ColorField }) {
  return (
    <Card
      key={member.name}
      className={"w-64 h-full"}
      style={{ ...(isFilled.color(color) && { outlineColor: hexToRgba(color, 0.8) }) }}
    >
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
    </Card>
  );
}

function hexToRgba(hex: string, opacity: number): string {
  const hexValue = hex.replace("#", "");
  const r = Number.parseInt(hexValue.substring(0, 2), 16);
  const g = Number.parseInt(hexValue.substring(2, 4), 16);
  const b = Number.parseInt(hexValue.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

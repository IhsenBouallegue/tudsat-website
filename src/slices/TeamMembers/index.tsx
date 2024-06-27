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

/**
 * Props for `TeamMembers`.
 */
export type TeamMembersProps = SliceComponentProps<Content.TeamMembersSlice>;

/**
 * Component for "TeamMembers" Slices.
 */
const TeamMembers = ({ slice }: TeamMembersProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      withExtraPadding
    >
      <h2 className="mb-32 text-3xl font-bold">Meet our Leaders</h2>
      <div className="m-auto grid gap-x-6 gap-y-32 grid-cols-1 md:grid-cols-3 w-full md:max-w-screen-lg place-items-center">
        {slice.items.map((item) => (
          <Card key={item.name} className="w-64 h-full">
            <PrismicNextImage
              field={item.photo}
              width={150}
              height={150}
              className="w-full h-72 rounded-t-lg object-cover"
            />
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{item.name}</CardTitle>
              <CardDescription className="text-accent tracking-widest">
                {item.position}
              </CardDescription>
            </CardHeader>

            <CardFooter className="justify-center p-4">
              <Button asChild variant="outline" size="sm">
                <a
                  href={`mailto:${item.email}`}
                  className="text-xs text-accent tracking-widest flex align-middle justify-center"
                >
                  <Icons.mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamMembers;

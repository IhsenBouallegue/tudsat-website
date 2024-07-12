import { KeyTextField, isFilled } from "@prismicio/client";
import { Icons, RenderIcon } from "./icons";
import { Card } from "./ui/card";

export function InfoCard({
  icon,
  title,
  description,
  isTransparent = false,
}: {
  icon: KeyTextField;
  title: KeyTextField;
  description: KeyTextField;
  isTransparent?: boolean;
}): JSX.Element {
  const WrapperComponent = isTransparent ? "div" : Card;
  return (
    <WrapperComponent className="flex items-center p-4 flex-1">
      <RenderIcon
        // TODO: Asserting while we know it might be wrong is bad.
        name={(icon as string) || "arrowsRight"}
        className="w-6 h-6 mr-4"
      />
      <div>
        <p className="text-sm font-medium text-muted">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </WrapperComponent>
  );
}

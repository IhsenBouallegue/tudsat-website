import { Icon } from "./icons";
import { Card } from "./ui/card";

export default function InfoCard({
  Icon,
  title,
  description,
}: { Icon: Icon; title: string; description: string }) {
  return (
    <Card className="flex items-center p-4 bg-gray-800">
      <Icon className="w-6 h-6 text-primary mr-4" />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </Card>
  );
}

import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideIcon,
  LucideProps,
  Mail,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  User,
  UserRound,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons: { [key: string]: Icon } = {
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: SiGithub,
  check: Check,
  x: SiX,
  instagram: SiInstagram,
  youtube: SiYoutube,
  linkedin: SiLinkedin,
  discord: SiDiscord,
  mail: Mail,
  userRound: UserRound,
  calendar: Calendar,
};

export type IconProps = {
  name: keyof typeof Icons;
} & React.ComponentProps<(typeof Icons)[keyof typeof Icons]>;

export const RenderIcon = ({ name, ...props }: IconProps) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

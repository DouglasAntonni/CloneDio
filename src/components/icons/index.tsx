// IconComponent.tsx
import { Email as MdMail, Lock as MdLock, ThumbUp as MdThumbUp, Person as MdPerson } from "@mui/icons-material";
import { IconWrapper } from "./styles";
import { IconProps } from "./types";

const Icon = ({ icon: IconComponent, className }: IconProps) => (
  <IconWrapper className={className}>
    <IconComponent />
  </IconWrapper>
);

export const MailIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={MdMail} {...props} />;
export const LockIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={MdLock} {...props} />;
export const ThumbUpIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={MdThumbUp} {...props} />;
export const PersonIcon = (props: Omit<IconProps, 'icon'>) => <Icon icon={MdPerson} {...props} />;

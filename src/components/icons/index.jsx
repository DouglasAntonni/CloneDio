import React from "react";
import { Email as MdMail, Lock as MdLock, ThumbUp as MdThumbUp, Person as MdPerson } from "@mui/icons-material";
import { IconWrapper } from "./styles";

const Icon = ({ icon: IconComponent, className }) => (
  <IconWrapper className={className}>
    <IconComponent />
  </IconWrapper>
);

export const MailIcon = (props) => <Icon icon={MdMail} {...props} />;
export const LockIcon = (props) => <Icon icon={MdLock} {...props} />;
export const ThumbUpIcon = (props) => <Icon icon={MdThumbUp} {...props} />;
export const PersonIcon = (props) => <Icon icon={MdPerson} {...props} />;

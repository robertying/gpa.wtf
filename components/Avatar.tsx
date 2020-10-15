import { Avatar, AvatarProps } from "@material-ui/core";

const MyAvatar: React.FC<
  AvatarProps & { srcSize?: "small" | "medium" | "large" }
> = ({ src, srcSize, ...restProps }) => (
  <Avatar
    {...restProps}
    src={
      src
        ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/avatar-${
            srcSize ?? "medium"
          }`
        : undefined
    }
  />
);

export default MyAvatar;

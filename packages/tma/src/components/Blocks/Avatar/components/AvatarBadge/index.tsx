import styles from "./AvatarBadge.module.css";

import { classNames } from "@/helpers/classNames";

import { Badge, type BadgeProps } from "@/components/blocks/Badge";

export interface AvatarBadgeProps extends BadgeProps {}

export const AvatarBadge = ({
  type,
  className,
  ...restProps
}: AvatarBadgeProps) => {
  if (type !== "number") {
    throw new Error('[ImageBadge]: Component supports only type="number"');
  }

  return (
    <Badge
      type="number"
      className={classNames(styles.wrapper, className)}
      {...restProps}
    />
  );
};

"use client";

import type { HTMLAttributes } from "react";
import styles from "./SectionFooter.module.css";

import { classNames } from "@/helpers/classNames";
import { usePlatform } from "@/hooks/usePlatform";

import type { TypographyProps } from "@/components/typography";
import { Caption } from "@/components/typography/Caption";
import { Subheadline } from "@/components/typography/Subheadline";

export interface SectionFooterProps extends HTMLAttributes<HTMLElement> {
  /** Centering text, adding additional indents */
  centered?: boolean;
}

const FooterTypography = ({ ...restProps }: TypographyProps) => {
  const platform = usePlatform();

  if (platform === "ios") {
    return <Caption {...restProps} />;
  }

  return <Subheadline level="2" {...restProps} />;
};

export const SectionFooter = ({
  className,
  children,
  centered,
  ...restProps
}: SectionFooterProps) => {
  const platform = usePlatform();

  return (
    <footer
      className={classNames(
        styles.wrapper,
        platform === "ios" && styles["wrapper--ios"],
        centered && styles["wrapper--centered"],
        className,
      )}
      {...restProps}
    >
      <FooterTypography className={styles.text}>{children}</FooterTypography>
    </footer>
  );
};

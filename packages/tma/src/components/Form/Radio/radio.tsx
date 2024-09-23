import type { InputHTMLAttributes } from "react";
import styles from "./radio.module.css";

import { classNames } from "@/helpers";

import { VisuallyHidden } from "@/components/service/visually-hidden";
import { IconRadio } from "./icons/radio";
import { IconRadioChecked } from "./icons/radio-checked";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * Renders a custom radio button, visually hiding the actual input while displaying custom icons for unchecked and checked states.
 * It supports all standard properties and events of an HTML input element of type "radio".
 */
export const Radio = ({
  style,
  className,
  disabled,
  ...restProps
}: RadioProps) => (
  <label
    className={classNames(
      styles.wrapper,
      disabled && styles["wrapper--disabled"],
      className,
    )}
  >
    <VisuallyHidden
      {...restProps}
      Component="input"
      type="radio"
      className={styles.input}
      disabled={disabled}
    />
    <IconRadio className={styles.icon} aria-hidden />
    <IconRadioChecked className={styles.checkedIcon} aria-hidden />
  </label>
);

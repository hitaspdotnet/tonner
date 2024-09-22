import type { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

import { classNames } from "@/helpers/classNames";

import { VisuallyHidden } from "@/components/service/VisuallyHidden";
import { IconCheckbox } from "./icons/checkbox";
import { IconCheckboxChecked } from "./icons/checkbox_checked";
import { IconCheckboxIndeterminate } from "./icons/checkbox_indeterminate";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** If true, displays the checkbox with an indeterminate icon instead of checked or unchecked. */
  indeterminate?: boolean;
}

/**
 * Renders a checkbox input with custom styling and optional indeterminate state.
 * The component visually hides the actual input element for accessibility while providing a custom styled appearance.
 */
export const Checkbox = ({
  style,
  className,
  disabled,
  indeterminate,
  ...restProps
}: CheckboxProps) => (
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
      type="checkbox"
      className={styles.input}
      disabled={disabled}
    />
    <IconCheckbox className={styles.icon} aria-hidden />
    <div aria-hidden className={styles.checkedIcon}>
      {indeterminate ? <IconCheckboxIndeterminate /> : <IconCheckboxChecked />}
    </div>
  </label>
);

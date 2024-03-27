import { Checkbox as KCheckbox } from "@kobalte/core";
import styles from './Checkbox.module.css';

export function Checkbox() {
  return (
    <KCheckbox.Root class={styles.checkbox}>
      <KCheckbox.Input class={styles.checkbox__input} />
      <KCheckbox.Control class={styles.checkbox__control}>
        <KCheckbox.Indicator>
          X
        </KCheckbox.Indicator>
      </KCheckbox.Control>
      <KCheckbox.Label class={styles.checkbox__label}>
        Test
      </KCheckbox.Label>
    </KCheckbox.Root>
  );
}
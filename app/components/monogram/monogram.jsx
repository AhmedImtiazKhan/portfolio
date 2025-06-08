import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="160"
      height="50"
      viewBox="0 0 160 50"
      ref={ref}
      {...props}
    >
   <text
  x="50%"
  y="60%"
  dominantBaseline="middle"
  textAnchor="middle"
  fontSize="32"
  fontFamily="Pacifico, cursive"
  fill="currentColor"
>
  Ahmed
</text>

    </svg>
  );
});

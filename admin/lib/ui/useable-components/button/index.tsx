// Interfaces
import { ICustomButtonProps } from '@/lib/utils/interfaces';

// Prime React
import { Button } from 'primereact/button';

// Estilos
import classes from './button.module.css';

export default function CustomButton({
  className,
  label,
  type,
  ...props
}: ICustomButtonProps) {
  return (
    <Button
      className={`${classes['btn-custom']} ${className}`}
      label={label}
      type={type}
      {...props}
    ></Button>
  );
}

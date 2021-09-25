import { FunctionComponent, ReactNode } from "react"
import { themeClass, exampleStyle } from './Button.css';

type ButtonProps = {
    label: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({
    label,
}) => {
    return (
        <button
            type="button"
            className={themeClass}
        >
            <span className={exampleStyle}>{label}</span>
        </button>
    );
};

export default Button;

import {StrictMode} from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/Button";

ReactDOM.render(
    <StrictMode>
        <Button label="Test" />
    </StrictMode>,
    document.getElementById("root")
);

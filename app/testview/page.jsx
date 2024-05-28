import { PrimaryButton } from "../../components/buttons/buttons";
import { TextField } from "../../components/fields/fields";

export default function TestView(params) {
    return (
        <div>
            <div>
                <h3>Primary Button</h3>
                <PrimaryButton></PrimaryButton>
            </div>
            <div>
                <h3>Text Field</h3>
                <TextField></TextField>
            </div>
        </div>
    )
}
import { Grid } from "@mui/material"
import "./input.css";

export default function Input(props) {
	const { showValidation, label: labelText, icon, validationMessage, ...otherProps } = props;

	return <Grid item className="input">
		<label>
			<span className="label">
				{labelText}
			</span>
			<div className="input-container">
				<input
					{...otherProps}
				></input>
				<span className="icon material-symbols-outlined">
					{icon}
				</span>
			</div>
		</label>
		<div className={showValidation ? 'inValid-input' : 'valid-input'}>{validationMessage}</div>
	</Grid>
}

import "./simplified-button.css";

export default function SimplifiedButton(props) {
	const { children, ...otherProps } = props;
	return <button className="simplified-button" {...otherProps}>{children}</button>
}
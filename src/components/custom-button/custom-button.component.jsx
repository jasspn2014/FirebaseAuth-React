import "./custom-button.styles.scss";

const CustomButton = (props) => (
  <div>
    <button className="skewBtn brick" type={props.type}>{props.children}</button>
  </div>
);

export default CustomButton;

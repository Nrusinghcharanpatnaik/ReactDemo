import Input from "./Input";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <div class="Sign up">Sign up Form</div>
      <div class="Form">
        <Input name="First Name" type="text" />
        <Input name="Last Name" type="text" />
        <Input name="email" type="email" />
      </div>
      <div id="name-error" class="error-container"></div>
      <div class="button-container">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
      </div>
    </div>
  );
};

export default Form;

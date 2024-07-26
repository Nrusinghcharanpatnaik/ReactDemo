import Input from './Input';

const Form = () => {
  return (
    <div>
      <div>Sign up Form</div>
      <Input name="fName" type="text"/>
      <Input name="lName" type="text"/>
      <Input name="email" type="email"/>
      <div id="name-error" class="error-container"></div>
    </div>
  );
};

export default Form;

import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className=" h-screen grid place-items-center">
      <Form
        action="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className=" text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" name="username" label="username" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;

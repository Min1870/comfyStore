import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account Created Successfully");
    return redirect("/login");
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please Double Check Your Credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className=" h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className=" text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          name="username"
          label="username"
          defaultValue="jamespete"
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          defaultValue="jamespete@gmail.com"
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          defaultValue="qwer4321"
        />
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

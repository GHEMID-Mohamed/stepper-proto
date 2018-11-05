import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class Basic extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          ref={this.props.formRef}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Empty password field";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Basic;
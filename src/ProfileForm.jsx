import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './ProfileForm.css'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
}

const MyForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div className="form-div">
      <p className="profile-heading">My Profile</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-control fname"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control lname"
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
          </div>

          <div className="form-group">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <Field
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="form-control"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="error"
            />
          </div>

          <div className="form-group">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <Field
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            ADD NEW ADDRESS
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default MyForm

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import contact from '../assets/img/contact.png'

const Contact = () => {

  const formik = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        message: ""
      },
      validationSchema: Yup.object(
        {
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Invalid email format").required("Email is required"),
          message: Yup.string().required("Message is required")
        }
      ),

      onSubmit: (values) => {
        console.log(values);
      }

    })

  return (
    <>
      <section className="contact-section container d-flex justify-content-start align-items-center pt-5 mt-5 ">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 contact-form m-0 p-0 text-center">
            <h2>Contact us</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-outline mb-4">
                <input type="text" id="form4Example1" name="name" className="form-control" placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {
                  formik.touched.name && formik.errors.name
                    ?
                    <div>
                      <small className="text-danger">{formik.errors.name}</small>
                    </div>
                    :
                    null
                }
              </div>


              <div className="form-outline mb-4">
                <input type="email" id="form4Example2" name="email" className="form-control" placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {
                  formik.touched.email && formik.errors.email
                    ?
                    <div>
                      <small className="text-danger">{formik.errors.email}</small>
                    </div>
                    :
                    null
                }
              </div>


              <div className="form-outline mb-4">
                <textarea className="form-control" name='message' id="form4Example3" rows="4" placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {
                  formik.touched.message && formik.errors.message
                    ?
                    <div>
                      <small className="text-danger">{formik.errors.message}</small>
                    </div>
                    :
                    null
                }
              </div>
              <button type="submit" className="px-5 py-2 rounded-3 mb-4">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <img src={contact} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
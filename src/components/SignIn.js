import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SignIn = () => {

  const formik = useFormik(
    {
      initialValues: {
        email: "",
        password: ""
      },
      validationSchema: Yup.object(
        {
          email: Yup.string().email("Invalid email format").required("Email is required"),
          password: Yup.string().required("Password is required")
        }
      ),
      onSubmit: (values) => {
        console.log(values);
      }
    })

  return (
    <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content"
          style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(5px)'
          }}
        >
          <div className="modal-header">
            <h1 className="modal-title fs-5 m-auto text-white fw-bold " id="exampleModalLabel">Sign in</h1>
          </div>
          <div className="modal-body p-3">
            <form onClick={formik.handleSubmit}>
              <div className="mb-3 text-center">
                <label htmlFor="exampleInputEmail1" className="form-labe text-white mb-2 ">Email address</label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
              <div className="mb-3 text-center">
                <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  type="password" name='password' className="form-control" id="exampleInputPassword1" />
                {
                  formik.touched.password && formik.errors.password
                    ?
                    <div>
                      <small className="text-danger">{formik.errors.password}</small>
                    </div>
                    :
                    null
                }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                <button type="submit" className="btn btn-danger">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SignIn
import { useState } from "react";
import { useFormik } from "formik";
import "./CommentsForm.css";
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required!";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   let handleInputChange = (event) => {
  //     setFormData((currData) => {
  //       return { ...currData, [event.target.name]: event.target.value };
  //     });
  //   };

  //   let handleSubmit = (event) => {
  //     console.log(formData);
  //     addNewComment(formData);
  //     event.preventDefault();
  //     setFormData({
  //       username: "",
  //       remarks: "",
  //       rating: 5,
  //     });
  //   };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="info">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            placeholder="UserName"
            value={formik.values.username}
            onChange={formik.handleInputChange}
            name="username"
            className="typeHere"
          />
          <div>
            {formik.errors.username ? (
              <p className="error">{formik.errors.username}</p>
            ) : null}
          </div>
        </div>

        <div className="info">
          <label htmlFor="remark">Remarks</label>
          <textarea
            id="remark"
            placeholder="Add few remarks"
            value={formik.values.remarks}
            onChange={formik.handleInputChange}
            name="remarks"
            className="typeHere"
          >
            Remarks
          </textarea>
        </div>

        <div className="info">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            min={1}
            max={5}
            value={formik.values.rating}
            placeholder="rating"
            onChange={formik.handleInputChange}
            name="rating"
            id="rating"
            className="typeHere"
          />
        </div>

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

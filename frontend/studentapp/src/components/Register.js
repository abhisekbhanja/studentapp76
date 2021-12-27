import React, { useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import "../css/register.css";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const [math, setMath] = useState();
  const [physics, setPhysics] = useState();
  const [chemistry, setChemistry] = useState();
  const [setUsertotal] = useState();
  const [setUserpercent] = useState();
  const [rollnoexist, setRollnoexist] = useState("");
  const [registration, setRegistration] = useState(false);

  //post data to api
  const onSubmit = async (data) => {
    await axios

      .post("yoururl/add", data)
      .then((res) => {
        setRegistration(true);
        setRollnoexist("marks submitted successfully");
      })

      .catch((err) => {
        setRollnoexist("this roll no already exists");
      });
  };

  const total = parseInt(math) + parseInt(physics) + parseInt(chemistry);
  const percentage = ((total / 300) * 100).toFixed(2);

  return (
    <div className="container w-50 mt-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Add Marks</h4>
          <hr></hr>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Roll No</label>
              <input
                type="number"
                className={classNames("form-control m", {
                  "is-invalid": errors.rollno,
                })}
                {...register("rollno", { required: "this field is required" })}
              />
              {errors.rollno && (
                <div className="invalid-feedback">{errors.rollno.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.name,
                })}
                {...register("name", { required: "this field is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
            <h5>Subjects</h5>
            <hr></hr>
            <div className="form-group">
              <label>Math</label>
              <input
                type="number"
                name="math"
                className={classNames("form-control", {
                  "is-invalid": errors.math,
                })}
                {...register("math", {
                  required: "this field is required",
                  maxLength: {
                    value: 3,
                    message: "the length should be less than 3",
                  },
                })}
                onChange={(e) => {
                  setMath(e.target.value);
                }}
              />
              {errors.math && (
                <div className="invalid-feedback">{errors.math.message}</div>
              )}
            </div>
            <div className="form-group">
              <label>Physics</label>
              <input
                type="number"
                name="physics"
                className={classNames("form-control", {
                  "is-invalid": errors.physics,
                })}
                {...register("physics", {
                  required: "this field is required",
                  maxLength: {
                    value: 3,
                    message: "the length should be less than 3",
                  },
                })}
                onChange={(e) => {
                  setPhysics(e.target.value);
                }}
              />
              {errors.physics && (
                <div className="invalid-feedback">{errors.physics.message}</div>
              )}
            </div>

            <div className="form-group">
              <label>Chemistry</label>
              <input
                type="number"
                name="chemistry"
                className={classNames("form-control", {
                  "is-invalid": errors.chemistry,
                })}
                {...register("chemistry", {
                  required: "this field is required",
                  maxLength: {
                    value: 3,
                    message: "the length should be less than 3",
                  },
                })}
                onChange={(e) => {
                  setChemistry(e.target.value);
                }}
              />
              {errors.chemistry && (
                <div className="invalid-feedback">
                  {errors.chemistry.message}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Total</label>
              <input
                type="number"
                value={total}
                name="total"
                className="form-control"
                onChange={(e) => {
                  setUsertotal(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>percentage</label>
              <input
                type="number"
                value={percentage}
                name="percentage"
                className="form-control"
                onChange={(e) => {
                  setUserpercent(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                add marks
              </button>
            </div>
            <div>
              {registration ? (
                <div className="alert alert-primary" role="alert">
                  {rollnoexist}
                </div>
              ) : (
                " "
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

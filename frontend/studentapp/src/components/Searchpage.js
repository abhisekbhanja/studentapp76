import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../css/register.css";
export default function Searchpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);
  const [studentmarks, setStudentmarks] = useState("");
  const [load, setload] = useState(false);

  const onSubmit = async (studentmark) => {
    await axios
      .post(`https://student65.herokuapp.com/`, studentmark)
      .then((res) => {
        console.log("user details", res.data);
        setStudentmarks("");
        setload(true);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log("Errorrrrrrr");
        setload(false);
        setStudentmarks("not found");
      });
  };

  return (
    <div className="container mt-3 p-5 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="font-weight-bold">Enter your total marks</label>
        <input
          className="form-control"
          placeholder="search here"
          {...register("total", { required: true })}
        />
        {errors.total && (
          <div className="text-danger">Please enter your  marks</div>
        )}
        <br></br>
        <button type="submit" className="btn btn-primary">
          search
        </button>

        <div>
          <h3 className="mt-2">{studentmarks}</h3>
        </div>
      </form>
      <div>
        {load ? (
          <div className="p-5 border">
            <p>Name : {users.name}</p>
            <p>Roll No : {users.rollno}</p>

            <p>Marks :</p>
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Math</th>
                  <th>Physics</th>
                  <th>Chemistry</th>
                  <th>Total</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{users.math}</td>
                  <td>{users.physics}</td>
                  <td>{users.chemistry}</td>
                  <td>{users.total}</td>
                  <td>{users.percentage}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

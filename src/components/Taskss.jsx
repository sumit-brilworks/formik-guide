import { Button, Input } from "@material-tailwind/react";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

function Taskss() {
  //   const formik = useFormik({ initialValues: { tasks: [{ name: "Task 1" }] } });
  return (
    <div>
      <div>Tasks</div>
      <Formik
        initialValues={{ tasks: ["names"] }}
        onSubmit={(values) => {
          console.log("Form is submitted");
          console.log("Values", values);
        }}
      >
        {({ values, setFieldValue, setFieldTouched, status }) => {
          console.log("Status : ", status);
          return (
            <Form>
              <FieldArray name="tasks">
                {({ push, remove }) => (
                  <div>
                    {values.tasks.map((task, index) => (
                      <div key={index} style={{ marginBottom: "10px" }}>
                        <Field
                          label={`Task ${index + 1}`}
                          value={task}
                          onChange={(e) =>
                            setFieldValue(`tasks[${index}]`, e.target.value)
                          }
                          onBlur={() =>
                            setFieldTouched(`tasks[${index}]`, true)
                          }
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          disabled={values.tasks.length === 1}
                        >
                          Remove Task
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={() => push("")}>
                      Add Task
                    </button>
                  </div>
                )}
              </FieldArray>
              <button type="submit">Submit</button>
            </Form>
          );
          //   values.tasks.map((item, index) => {-});
        }}
      </Formik>
    </div>
  );
}

export default Taskss;

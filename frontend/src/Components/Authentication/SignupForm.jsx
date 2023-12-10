import {
  Button,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Store/Auth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" },
  { value: 12, label: "12" },
];

const SignupForm = () => {
  const dispath = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      birthDate: {
        day: "",
        month: "",
        year: "",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const { day, month, year } = values.birthDate;
      const birthDate = `${year}-${month}-${day}`;
      values.birthDate = birthDate;
      console.log("form value ", values);
      dispath(registerUser(values));
    },
  });

  const handleDateChange = (name) => (event) => {
    formik.setFieldValue("birthDate", {
      ...formik.values.birthDate,
      [name]: event.target.value,
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            variant="outlined"
            size="large"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="large"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            size="large"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Date</InputLabel>
          <Select
            fullWidth
            name="day"
            onChange={handleDateChange("day")}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate.day}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Month</InputLabel>
          <Select
            fullWidth
            name="month"
            onChange={handleDateChange("month")}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate.month}
          >
            {months.map((month) => (
              <MenuItem key={month.label} value={month.value}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Year</InputLabel>
          <Select
            fullWidth
            name="year"
            onChange={handleDateChange("year")}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate.year}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid className="mt-20" item xs={12}>
          <Button
            sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
            type="submit"
            fullWidth
            variant="contained"
            size="large"
          >
            Siginup
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;

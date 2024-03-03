"use client";

import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./page.module.css";

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Box className={styles.mentBox}>
            <TextField
              id="standard-basic"
              label="멘트"
              variant="standard"
              placeholder="멘트를 입력하세요."
              {...register("ment", { required: true })}
            />
            {errors.ment && <p>ment is required.</p>}
            <Button type="submit" variant="contained">
              추가
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

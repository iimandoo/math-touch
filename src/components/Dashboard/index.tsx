"use client";
import React, { useRef, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import styles from "./page.module.css";
import TouchCanvas from "../TouchCanvas";

type FormValues = {
  formMent: string;
};

interface Point {
  x: number;
  y: number;
}
export default function Dashboard() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ment, setMent] = useState<Array<string>>([""]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setMent([...ment, data.formMent]);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className={styles.mentBox}>
                <TextField
                  label="멘트"
                  variant="standard"
                  placeholder="멘트를 입력하세요."
                  sx={{ m: 1, width: "100%" }}
                  {...register("formMent", { required: true })}
                />
                {errors.ment && <p>ment is required.</p>}
                <Button type="submit" variant="contained">
                  추가
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={6}>
            <div>
              {ment?.map((text, key) => {
                return <p key={key}>{text}</p>;
              })}
            </div>

            <TouchCanvas />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from 'next/image'
import {
  Box, Button, CircularProgress,
  FormGroup, Grid, Link, Paper, TextField
} from "@material-ui/core";
import {
  doWithLoggedInUser,
  renderWithLoggedInUser
} from "../../../lib/login";
import { MyCard, MyCardContent, MyCardHeader } from "../../../component/my-card/my-card";
import styles from "./product.module.css";

export async function getServerSideProps(ctx) {
  return await doWithLoggedInUser(ctx, (ctx) => {
    return loadIngredientData(ctx);
  });
}

export async function loadIngredientData(ctx) {
  let data = {
    props: {
      data: [],
    }
  };
  let id = ctx.query.productId;
  await fetch(process.env.API_HOST + '/api/products/' + id)
    .then(response => response.json())
    .then(res => {
      data.props.data.push({ ...res.data.attributes, id: res.data.id })
    });
  return data;
}

export default function EditPage(props) {
  return renderWithLoggedInUser(props, render);
}


function render(props) {
  // let _client = getIngredientClient();
  const [loading, setLoading] = useState(false);
  const data = props.data[0]
  if (props.status && props.status !== "OK") {
    return (
      <AppCMS select="/cms/ingredient">
        <Head>
          <title>Chi tiết sản phẩm</title>
        </Head>
        <MyCard>
          <MyCardHeader title="Chi tiết sản phẩm" />
          <Box component={Paper} display="block">
            <FormGroup>
              <form>
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                  className={styles.contentPadding}
                >
                  <Grid item xs={12} md={12} sm={12}>
                    <span>{props.message}</span>
                  </Grid>
                </Grid>
              </form>
            </FormGroup>
          </Box>
          <Box component={Paper} display="block"></Box>
        </MyCard>
      </AppCMS>
    );
  }

  const { register, handleSubmit, errors, setValue, reset } = useForm({
    defaultValues: data,
    mode: "onChange",
  });

  async function updateIngredient(formData) {
    let data = { props: {} };
    setLoading(true);
    data.props = await _client.updateIngredient(formData);
    setLoading(false);
    if (data.props.status === "OK") {
      success("Cập nhật thông tin sản phẩm thành công");
      reset({})
    } else {
      error(
        data.props.message || "Thao tác không thành công, vui lòng thử lại sau"
      );
    }
  }

  // func onSubmit used because useForm not working with some fields
  async function onSubmit(formData) {
    try {
      formData.name = formData?.name.trim().replace(/\s+/g, " ");
      formData.code = data.code
      await updateIngredient(formData);
    } catch (err) {
      setLoading(false);
      error(err.message || err.toString());
    }
  }

  return (
    <div select="/cms/ingredient">
      <Head>
        <title>Cập nhật sản phẩm</title>
      </Head>
      <MyCard>
        <MyCardHeader title={"sản phẩm #" + data.id} />
        <FormGroup>
          <MyCardContent>
            <form>
              <Grid container item xs={12} md={6} sm={12}>
                <Grid style={{ margin: "20px" }} item xs={12} md={12} sm={6}>
                  <Image src={data.imageUrl} height={120} width={120} />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Tên sản phẩm"
                    placeholder=""
                    helperText={errors.name?.message}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ margin: 12, width: "calc(100% - 24px)" }}
                    error={errors.name ? true : false}
                    required
                    inputRef={register({
                      required: "Vui lòng nhập tên sản phẩm",
                      maxLength: {
                        value: 250,
                        message: "Tên sản phẩm có độ dài tối đa 250 kí tự",
                      },
                      minLength: {
                        value: 1,
                        message: "Tên sản phẩm có độ dài tối thiểu 1 kí tự",
                      },
                      pattern: {
                        value: /^(?!.*[ ]{2})/,
                        message: "Tên không hợp lệ (không được dư khoảng trắng)."
                      },
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={12} sm={6}>
                  <TextField
                    id="price"
                    name="price"
                    label="Giá"
                    placeholder=""
                    variant="outlined"
                    size="small"
                    margin="normal"
                    multiline
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ margin: 12, width: "calc(100% - 24px)" }}
                    inputRef={register}
                  />
                </Grid>
                <Grid item xs={12} md={12} sm={6} />
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <Link href="/cms/product">
                  <Button
                    variant="contained"
                  >
                    Trở lại
                                    </Button>
                </Link>
              </Grid>
            </form>
          </MyCardContent>
        </FormGroup>
      </MyCard>
    </div>
  );
}

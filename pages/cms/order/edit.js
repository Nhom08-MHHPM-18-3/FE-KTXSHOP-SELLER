import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Box, Button, CircularProgress,
    FormGroup, Grid, Link, Paper, TextField
} from "@material-ui/core";
import {
    doWithLoggedInUser,
    renderWithLoggedInUser
} from "../../../lib/login";
import { MyCard, MyCardContent, MyCardHeader } from "../../../component/my-card/my-card";
import styles from "./order.module.css";

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
    let id = ctx.query.orderId;
    await fetch(process.env.API_HOST + '/api/orders/' + id)
        .then(response => response.json())
        .then(res => {
            data.props.data.push({ ...res.data.attributes, id: id })
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
            <AppCMS select="/cms/ingredient" breadcrumb={breadcrumb}>
                <Head>
                    <title>Cập nhật hóa đơn</title>
                </Head>
                <MyCard>
                    <MyCardHeader title="Cập nhật hóa đơn" />
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
            success("Cập nhật thông tin hóa đơn thành công");
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

    let breadcrumb = [
        {
            name: "Trang chủ",
            link: "/cms"
        },
        {
            name: "Danh sách hóa đơn",
            link: "/cms/ingredient"
        },
        {
            name: "Cập nhật hóa đơn",
        }
    ]


    return (
        <div select="/cms/ingredient" breadcrumb={breadcrumb}>
            <Head>
                <title>Cập nhật hóa đơn</title>
            </Head>
            <MyCard>
                <MyCardHeader title={"hóa đơn #" + data.id} />
                <FormGroup>
                    <MyCardContent>
                        <form>

                            <Grid container item xs={12} md={6} sm={12}>
                                <Grid item xs={12} md={12} sm={12}>
                                    <TextField
                                        id="AccountID"
                                        name="AccountID"
                                        label="ID Khách hàng"
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
                                            required: "Vui lòng nhập tên hóa đơn",
                                            maxLength: {
                                                value: 250,
                                                message: "Tên hóa đơn có độ dài tối đa 250 kí tự",
                                            },
                                            minLength: {
                                                value: 1,
                                                message: "Tên hóa đơn có độ dài tối thiểu 1 kí tự",
                                            },
                                            pattern: {
                                                value: /^(?!.*[ ]{2})/,
                                                message: "Tên không hợp lệ (không được dư khoảng trắng)."
                                            },
                                        })}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} sm={6}>
                                    <TextField
                                        id="ProductID"
                                        name="ProductID"
                                        label="ID Sản phẩm"
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
                                <Grid item xs={12} md={6} sm={6}>
                                    <TextField
                                        id="Quantity"
                                        name="Quantity"
                                        label="Số lượng"
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
                                <Grid item xs={12} md={6} sm={6}>
                                    <TextField
                                        id="UnitCost"
                                        name="UnitCost"
                                        label="Giá sản phẩm"
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
                                <Grid item xs={12} md={6} sm={6}>
                                    <TextField
                                        id="Subtotal"
                                        name="Subtotal"
                                        label="Tổng tiền"
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
                                <Grid item xs={12} md={6} sm={6}>
                                    <TextField
                                        id="PurchaseDate"
                                        name="PurchaseDate"
                                        label="Ngày tạo đơn"
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
                                <Grid item xs={12} md={6} sm={6}>
                                    <TextField
                                        id="Status"
                                        name="Status"
                                        label="Trạng thái"
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
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <Link href="/cms/order">
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

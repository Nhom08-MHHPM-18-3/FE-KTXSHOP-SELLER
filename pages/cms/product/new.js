import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Tab,
    Tabs,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Divider,
    TextField,
} from "@material-ui/core";
import Image from 'next/image'
import LabelBox from "../../../component/editor/label-box/index";
import RichTextField from "../../../component/editor/rich-text-field/index";
import { doWithLoggedInUser, renderWithLoggedInUser } from "../../../lib/login";
import stylesGlobal from "../../../component/css-global.module.css";
import ImageUploadField from "../../../component/image-upload-field";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";
import { MyCard, MyCardActions, MyCardContent, MyCardHeader } from "../../../component/my-card/my-card";
import { useRouter } from "next/router";

export async function loadProductData(ctx, createNew) {
    return {
        props: {
            data: {}
        },
    };
}

export async function getServerSideProps(ctx) {
    return await doWithLoggedInUser(ctx, (ctx) => {
        return loadProductData(ctx);
    });
}

export default function EditPage(props) {
    return renderWithLoggedInUser(props, render);
}

function render(props) {

    const [loading, setLoading] = useState(false);
    const product = props?.product?.data[0];

    const [price, setPrice] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState("Ăn uống");
    const [description, setDescription] = useState();
    const [imgUrl, setImgUrl] = useState();
    const router = useRouter()

    async function createProduct() {
        var myHeaders = new Headers();
        console.log(description, category)
        myHeaders.append("Content-Type", "application/json")
        await fetch(process.env.API_HOST + '/api/products', {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    name: name,
                    price: parseInt(price),
                    imageUrl: imgUrl,
                    category: category,
                    description: description
                }
            }),
            headers: myHeaders
        })
            .then(response => response.json())
            .then(result => {
                router.push("/cms/product")
            })
    }

    async function uploadImage(value) {
        var formData = new FormData();
        formData.append("files", value)
        await fetch(process.env.API_HOST + '/api/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                setImgUrl(process.env.API_HOST + result[0].url)
            })
    }

    // func onSubmit used because useForm not working with some fields
    async function onSubmit(formData) {
        try {
            await updateProduct(formData);
        } catch (err) {
            setLoading(false);
            error(err.message || err.toString());
        }
    }

    return (
        <div select="/cms/product">
            <Head>
                <title>Thông tin sản phẩm</title>
            </Head>
            <form >
                <MyCard>
                    <MyCardHeader title="Thông tin cơ bản" small={true} />
                    <MyCardContent>

                        <Grid container spacing={6}>
                            <Grid item xs={12} sm={12} md={4}>
                                <TextField
                                    id="name"
                                    name="name"
                                    variant="outlined"
                                    size="small"
                                    label="Tên sản phẩm"
                                    placeholder="Sản phẩm A"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: "100%" }}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    id="description"
                                    name="description"
                                    variant="outlined"
                                    size="small"
                                    label="Mô tả sản phẩm"
                                    placeholder="Sản phẩm này tốt"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: "100%" }}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <TextField
                                    id="price"
                                    name="price"
                                    variant="outlined"
                                    size="small"
                                    label="Giá tiền"
                                    placeholder="100000"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ width: "100%" }}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Loại</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Loại"
                                        onChange={(e) => {
                                            setCategory(e.target.value)
                                        }}
                                    >
                                        <MenuItem value={"Ăn uống"}>Ăn uống</MenuItem>
                                        <MenuItem value={"Đồ dùng"}>Đồ dùng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <input type="file" id="actual-btn" onChange={(e) => uploadImage(e.target.files[0])} hidden />
                                <label style={{
                                    backgroundColor: "indigo",
                                    color: "white",
                                    padding: "0.5rem",
                                    borderRadius: "0.3rem",
                                    cursor: "pointer"
                                }} for="actual-btn">Chọn ảnh</label>
                            </Grid>
                            {imgUrl ? <Grid style={{ padding: "0", marginLeft: "25px" }} item xs={12} sm={12} md={12}>
                                <Image src={imgUrl} height={100} width={100} />
                            </Grid> : null}
                        </Grid>
                    </MyCardContent>
                </MyCard>
                <MyCard>
                    <MyCardActions>
                        <Grid container spacing={1} xs={12}>
                            <Grid item>
                                <Link href="/cms/product">
                                    <Button variant="contained">
                                        Trở về
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => createProduct()}
                                >
                                    {loading && <CircularProgress size={20} />}
                                    Tạo mới sản phẩm
                                </Button>
                            </Grid>
                        </Grid>
                    </MyCardActions>
                </MyCard>
            </form>
        </div>
    )
};


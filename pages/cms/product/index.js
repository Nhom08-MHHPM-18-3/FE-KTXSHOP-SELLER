import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doWithLoggedInUser, renderWithLoggedInUser } from "../../../lib/login";
import MyTablePagination from "../../../component/my-pagination/my-pagination";
// import { getProductClient } from "client/product";
import { formatEllipsisText, formatUrlSearch } from "../../../utils/func";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import { MyCard, MyCardActions, MyCardHeader } from "../../../component/my-card/my-card";

const LIMIT = 20;

export async function getServerSideProps(ctx) {
    let start = +new Date()
    let result = await doWithLoggedInUser(ctx, (ctx) => {
        return loadProductData(ctx);
    });
    return result
}

export async function loadProductData(ctx) {
    let data = { props: { data: [] } }
    await fetch(process.env.API_HOST + '/api/products')
        .then(response => response.json())
        .then(res => {
            data.props.count = res.meta.pagination.total
            res.data.map(item => {
                data.props.data.push({ ...item.attributes, id: item.id })
            })
        });
    return data
}

export function getFirstImage(val) {
    if (val && val.length > 0) {
        return val[0];
    }
    return `/default.png`;
}

export default function ProductPage(props) {
    return renderWithLoggedInUser(props, render);
}

function render(props) {
    let router = useRouter();
    let [search, setSearch] = useState("");
    let [data, setData] = useState(props);
    let [page, setPage] = useState(parseInt(router.query.page) || 0);
    let [limit, setLimit] = useState(parseInt(router.query.limit) || LIMIT);
    let q = router.query.search || "";

    useEffect(() => {
        setData(props);
        setSearch(router.query.search || "");
        setPage(parseInt(router.query.page) || 0);
        setLimit(parseInt(router.query.limit) || LIMIT);
    }, [props.data]);

    async function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setSearch(value);
    }

    async function onSearch() {
        q = formatUrlSearch(search);
        router.push(`?search=${q}`);
    }

    async function deleteProduct(id) {
        await fetch(process.env.API_HOST + "/api/products/" + id, {
            method: 'DELETE',
        }).then(response => response.json())
            .then(res => console.log(res));
        let productList = [...data.data]
        setData({ data: productList.filter((v) => v.id != id), count: data.count - 1 })
    }

    return (
        <div select="/cms/product" >
            <Head>
                <title>Danh sách sản phẩm</title>
            </Head>
            <MyCard>
                <MyCardHeader title="Danh sách sản phẩm">
                    <Link href="/cms/product/new">
                        <Button variant="contained" color="primary">
                            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />Thêm sản phẩm
                        </Button>
                    </Link>
                </MyCardHeader>
                <MyCardActions>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Paper className={styles.search}>
                                <InputBase
                                    id="q"
                                    name="q"
                                    className={styles.input}
                                    value={search}
                                    onChange={handleChange}
                                    onKeyPress={(event) => {
                                        if (event.key === "Enter") {
                                            onSearch();
                                        }
                                    }}
                                    autoComplete="off"
                                    placeholder="Nhập tên hoặc mã sản phẩm"
                                />
                                <IconButton className={styles.iconButton} aria-label="search" onClick={onSearch}>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3}></Grid>
                    </Grid>
                </MyCardActions>
            </MyCard>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">

                    <TableHead>
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Hình ảnh</TableCell>
                            <TableCell align="left">Tên sản phẩm</TableCell>
                            <TableCell align="left">Mô tả</TableCell>
                            <TableCell align="left">Loại</TableCell>
                            <TableCell align="left">Giá</TableCell>
                            <TableCell align="center">Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    {data.count <= 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} align="left">
                            </TableCell>
                        </TableRow>
                    ) : (
                            <TableBody>
                                {data.data.map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>
                                            <Image src={row.imageUrl ? row.imageUrl : "/"} title="image" alt="image" width={60} height={60} />
                                        </TableCell>
                                        <TableCell align="left">{formatEllipsisText(row.ProductName)}</TableCell>
                                        <TableCell align="left">{row.description}</TableCell>
                                        <TableCell align="left">{row.category}</TableCell>
                                        <TableCell align="left">{row.Price} vnđ</TableCell>
                                        <TableCell align="center">
                                            <Link href={`/cms/product/edit?productId=${row.id}`}>
                                                <a>
                                                    <Tooltip title="Cập nhật thông tin">
                                                        <IconButton>
                                                            <EditIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </a>
                                            </Link>
                                            <Tooltip title="Xóa sản phẩm">
                                                <IconButton>
                                                    <DeleteIcon onClick={() => deleteProduct(row.id)} fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    {data.count > 0 ? (
                        <MyTablePagination
                            labelUnit="sản phẩm"
                            count={data.count}
                            rowsPerPage={limit}
                            page={page}
                            onChangePage={(event, page, rowsPerPage) => {
                                Router.push(`/cms/product?page=${page}&limit=${rowsPerPage}&search=${search}`);
                            }}
                        />
                    ) : (
                            <div />
                        )}
                </Table>
            </TableContainer>
        </div >
    );
}

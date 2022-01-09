
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import MyTablePagination from "../../../component/my-pagination/my-pagination";
import { useForm } from "react-hook-form";
import {
    Button, Paper, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Tooltip
} from "@material-ui/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import { MyCard, MyCardActions, MyCardHeader } from "../../../component/my-card/my-card";
import { doWithLoggedInUser, renderWithLoggedInUser } from "../../../lib/login";
import styles from "./order.module.css";
import { formatTime } from "../../../utils/func";

export async function getServerSideProps(ctx) {
    return await doWithLoggedInUser(ctx, (ctx) => {
        return loadOrderData(ctx)
    })
}

export async function loadOrderData(ctx) {
    // setup data
    let data = { props: { data: [] } }
    await fetch(process.env.API_HOST + '/api/orders')
        .then(response => response.json())
        .then(res => {
            data.props.count = res.meta.pagination.total
            res.data.map(item => {
                data.props.data.push({ ...item.attributes, id: item.id })
            })
        });
    return data
}

export default function OrderPage(props) {
    return renderWithLoggedInUser(props, render)
}

function render(props) {
    const { register, handleSubmit, errors } = useForm();
    let router = useRouter();
    let [data, setData] = useState(props);
    let [search, setSearch] = useState('');
    useEffect(() => {
        setData(props);
        setSearch(typeof router.query.search === 'undefined' ? '' : q)
    }, [props]);

    let page = parseInt(router.query.page) || 0
    let limit = parseInt(router.query.limit) || 20
    let q = router.query.search || ''

    async function handleChange(event) {
        const value = event.target.value;
        setSearch(value)
    }

    function onSearch(formData) {
        try {
            q = formatUrlSearch(search);
            Router.push(`/cms/order?search=${q}`);
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteOrder(id) {
        await fetch(process.env.API_HOST + "/api/orders/" + id, {
            method: 'DELETE',
        }).then(response => response.json())
            .then(res => console.log(res));
        let orderList = [...data.data]
        setData({ data: orderList.filter((v) => v.id != id), count: data.count - 1 })
    }

    return (
        <div >
            <Head>
                <title>Danh sách hóa đơn</title>
            </Head>
            <MyCard>
                <MyCardHeader title="Danh sách hóa đơn">
                    <Link href="/cms/order/new">
                        <Button variant="contained" color="primary">
                            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />  Thêm hóa đơn
                            </Button>
                    </Link>
                </MyCardHeader>
                <MyCardActions>
                    <Paper className={styles.search}>
                        <InputBase
                            id="q"
                            name="q"
                            className={styles.input}
                            value={search}
                            autoComplete='off'
                            onChange={handleChange}
                            inputRef={register}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    onSearch()
                                }
                            }}
                            placeholder="Nhập tên hóa đơn"
                            inputProps={{ 'aria-label': 'Nhập tên hóa đơn' }}
                        />
                        <IconButton className={styles.iconButton} aria-label="search"
                            onClick={onSearch}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </MyCardActions>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table" style={{ tableLayout: 'fixed' }}>
                        <colgroup>
                            <col width="15%" />
                            <col width="25%" />
                            <col width="35%" />
                            <col width="15%" />
                            <col width="10%" />
                        </colgroup>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Mã</TableCell>
                                <TableCell align="left">Tên hóa đơn</TableCell>
                                <TableCell align="left">Mô tả</TableCell>
                                <TableCell align="left">Thời gian tạo</TableCell>
                                <TableCell align="center">Thao tác</TableCell>
                            </TableRow>
                        </TableHead>
                        {data.data?.length > 0 ? (
                            <>
                                <TableBody>
                                    {data.data?.map((row) => (
                                        <TableRow key={row.code}>
                                            <TableCell align="left">
                                                {row.code}
                                            </TableCell>
                                            <TableCell align="left" className={styles.overflowWrap}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left" className={styles.overflowWrap}>
                                                {row.description}
                                            </TableCell>
                                            <TableCell align="left">{formatTime(row.createdTime)}</TableCell>
                                            <TableCell align="center">
                                                <Link href={`/cms/order/edit?orderId=${row.id}`}>
                                                    <a>
                                                        <Tooltip title="Cập nhật thông tin">
                                                            <IconButton>
                                                                <EditIcon fontSize="small" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </a>
                                                </Link>
                                                <Tooltip title="Xóa hóa đơn">
                                                    <IconButton>
                                                        <DeleteIcon onClick={() => deleteOrder(row.id)} fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            / <MyTablePagination
                                    labelUnit="hóa đơn"
                                    count={data?.count}
                                    rowsPerPage={limit}
                                    page={page}
                                    onChangePage={(event, page, rowsPerPage) => {
                                        Router.push(`/cms/order?page=${page}&limit=${rowsPerPage}&search=${q}`)
                                    }}
                                />
                            </>
                        ) : (
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={3} align="left">{data.message}</TableCell>
                                    </TableRow>
                                </TableBody>
                            )}

                    </Table>
                </TableContainer>
            </MyCard>
        </div >
    )
}
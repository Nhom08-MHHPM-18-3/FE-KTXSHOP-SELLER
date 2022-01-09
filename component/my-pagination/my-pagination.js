import { TableFooter, TablePagination, TableRow } from "@material-ui/core";
import { useEffect } from "react";

export default function MyTablePagination(props) {

    let [page, setPage] = React.useState(props.page)
    let [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage)
    let [isFirstLoad, setIsFirstLoad] = React.useState(props.isFirstLoad)

    useEffect(() => {
        setPage(props.page)
        setRowsPerPage(props.rowsPerPage)
        if (page !== 0) {
            setIsFirstLoad(false)
        }
        if (isFirstLoad === true) {
            setPage(0)
            setRowsPerPage(props.rowsPerPage)
        }
    }, [props])

    function displayLabel(data) {
        data.from = data.page * parseInt(rowsPerPage) + 1
        data.to = data.from + parseInt(rowsPerPage) - 1
        return <span>từ <b>{data.from}</b> đến <b>{Math.min(data.to, data.count)}</b> trong <b>{data.count}</b> {props.labelUnit}</span>
    }

    function handleChangePage(event, newPage) {
        setPage(newPage)
        if (typeof props.onChangePage == 'function') {
            props.onChangePage(event, newPage, rowsPerPage)
        }
    }

    function handleChangeRowsPerPage(event) {
        let rpp = parseInt(event.target.value, 10)
        setPage(0)
        setRowsPerPage(rpp)
        if (typeof props.onChangePage == 'function') {
            props.onChangePage(event, 0, rpp)
        }
    }

    return <TableFooter>
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[20, 50, 100]}
                colSpan={100}
                labelRowsPerPage="Hiển thị mỗi trang"
                labelDisplayedRows={displayLabel}
                count={props.count}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            ></TablePagination>
        </TableRow>
    </TableFooter>

}
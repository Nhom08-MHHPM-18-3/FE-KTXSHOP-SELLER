import React from "react";

import { doWithLoggedInUser, renderWithLoggedInUser } from "../../../lib/login";
import Head from "next/head";
import { MyCardHeader, MyCard } from "../../../component/my-card/my-card";
import styles from "./revenue.module.scss";
import Link from "next/link";
import { sellerApi } from "../../../services";
import moment from "moment";

export default function ProductsPaid(props) {
  return renderWithLoggedInUser(props, render);
}

function render({ listProductsPaid }) {
  return (
    <>
      <div select="/cms/revenue/products-paid">
        <Head>
          <title>Sản phẩm sẽ thanh toán</title>
        </Head>
        <MyCard>
          <MyCardHeader title="Sản phẩm đã thanh toán" />
          <div className="row">
            <div className="col-lg-12 col-xl-12">
              <div className={styles.products}>
                <div className={styles.products__body}>
                  <div className={styles.products__table_responsive}>
                    <div className={styles.products__length}>
                      <label className={styles.products__label}>
                        Hiển thị
                        <select
                          name="products__select"
                          aria-controls="products__select"
                          className={styles.products__select}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.products__filter}>
                      <label className={styles.products__label}>
                        Tìm kiếm:
                        <input
                          type="search"
                          className={styles.products__input}
                          placeholder="Nhập tên sản phẩm"
                          aria-controls="products__input"
                        ></input>
                      </label>
                    </div>
                    <table className={styles.products__table_content}>
                      <thead>
                        <tr>
                          <th>
                            <strong style={{ width: "80px" }}>#</strong>
                          </th>
                          <th>
                            <strong>Tên Sản Phẩm</strong>
                          </th>
                          <th>
                            <strong>Ngày Thanh Toán</strong>
                          </th>
                          <th>
                            <strong>Số Tiền</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {listProductsPaid.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <strong>0{index + 1}</strong>
                              </td>
                              <td>{item.NameProduct}</td>
                              <td>{moment(item.PurchaseDate).format("LL")}</td>
                              <td>
                                <span
                                  className={`${styles.products__paid} ${styles.products__status}`}
                                >
                                  {item.Subtotal}đ
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className={styles.products__info}>
                      Hiển thị 1 đến 10 trong {listProductsPaid.length} sản phẩm
                    </div>
                    <div className={styles.products__paginate}>
                      <div className={styles.products__previous}>
                        Trang Trước
                      </div>
                      <span className={styles.products__rank}>
                        <Link href={"#"}>
                          <a
                            className={`${styles.products__current} ${styles.products__btn}`}
                          >
                            1
                          </a>
                        </Link>
                        <Link href={"#"}>
                          <a className={styles.products__btn}>2</a>
                        </Link>
                        <Link href={"#"}>
                          <a className={styles.products__btn}>3</a>
                        </Link>
                      </span>
                      <div className={styles.products__next}>Trang Sau</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyCard>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const listProducts = await sellerApi.getProducts({});
  const dataProducts = listProducts.data.data;
  const listOrders = await sellerApi.getOrders({});
  const dataOrders = listOrders.data.data;

  const listProductsPaid = [];
  const listProductsID = [];
  const listNameProducts = [];

  dataOrders.map((item) => {
    if (item.attributes.AccountID === 1 && item.attributes.Status === "Paid") {
      listProductsID.push(item.attributes.ProductID);
      listProductsPaid.push(item.attributes);
    }
  });

  dataProducts.map((item, index) => {
    if (listProductsID.includes(item.id)) {
      listNameProducts.push(item.attributes.name);
    }
  });

  listNameProducts.map((item, index) => {
    listProductsPaid[index] = {
      ...listProductsPaid[index],
      ["NameProduct"]: item,
    };
  });

  return {
    props: {
      listProductsPaid,
    },
  };
};

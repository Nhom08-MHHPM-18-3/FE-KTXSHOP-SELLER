import React from "react";

import { doWithLoggedInUser, renderWithLoggedInUser } from "../../../lib/login";
import Head from "next/head";
import { MyCardHeader, MyCard } from "../../../component/my-card/my-card";
import styles from "./revenue.module.scss";

export default function Revenue(props) {
  return renderWithLoggedInUser(props, render);
}

function render({ props }) {
  const listRevenueProductsPaid = [
    {
      title: "Tổng số tiền",
      count: "710 đ",
    },
    {
      title: "Tổng số đơn hàng",
      count: "710",
    },
  ];

  const listRevenueProductsUnpaid = [
    {
      title: "Tổng số tiền",
      count: "710 đ",
    },
    {
      title: "Tổng số đơn hàng",
      count: "710",
    },
  ];

  return (
    <>
      <div select="/cms/revenue">
        <Head>
          <title>Tổng quát doanh thu</title>
        </Head>
        <MyCard>
          <MyCardHeader title="Tổng quan doanh thu" />
          <div className="col-lg-12 col-xl-12">
            <div className={`${styles.view_revenue} mb_30"`}>
              <div className={styles.view_revenue__header}>
                <div className={styles.view_revenue__title}>
                  <h3 className="mb_25">Đơn hàng sẽ thanh toán</h3>
                </div>
              </div>
              <div className={styles.view_revenue__servay}>
                <div className="row">
                  {listRevenueProductsUnpaid.map((item, index) => {
                    return (
                      <>
                        <div className="col-md-6" key={`paid-${index}`}>
                          <div className={styles.view_revenue__count}>
                            <h3>
                              <span className={styles.view_revenue__counter}>
                                {item.count}
                              </span>
                            </h3>
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-12">
            <div className={`${styles.view_revenue} mb_30"`}>
              <div className={styles.view_revenue__header}>
                <div className={styles.view_revenue__title}>
                  <h3 className="mb_25">Đơn hàng đã thanh toán</h3>
                </div>
              </div>
              <div className={styles.view_revenue__servay}>
                <div className="row">
                  {listRevenueProductsPaid.map((item, index) => {
                    return (
                      <>
                        <div className="col-md-6" key={`paid-${index}`}>
                          <div className={styles.view_revenue__count}>
                            <h3>
                              <span className={styles.view_revenue__counter}>
                                {item.count}
                              </span>
                            </h3>
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </MyCard>
      </div>
    </>
  );
}

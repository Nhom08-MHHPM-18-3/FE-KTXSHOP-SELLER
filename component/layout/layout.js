import React, { useEffect, useRef } from "react";
import Header from "../header/header";
import styles from "./layout.module.css";
import Sidebar from "../../sidebar/sidebar";
import UserContext from "../my-context/my-context";
import { useRouter } from "next/router";

export default function Layout(props) {
  let ref = useRef();
  const { children } = props;
  let router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("account");
    if (!isLogin) {
      router.push("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUserInfo: props.loggedInUserInfo }}>
      <div className={styles.layout}>
        <Header sidebar={ref} menu={props.menu} title={props.title} />
        <Sidebar ref={ref} />
        <div className={styles.appContent}>{children}</div>
      </div>
    </UserContext.Provider>
  );
}

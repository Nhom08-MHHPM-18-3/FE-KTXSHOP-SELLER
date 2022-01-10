import { parseBody } from "next/dist/next-server/server/api-utils";
import { APIStatus } from "../../lib/common";
import Head from "next/head";
import { Box, Button, Paper, TextField } from "@material-ui/core";
import styles from "./login.module.css";
import { accountApi } from "../../services/accountApi";
import { useRouter } from "next/router";
import { useEffect } from "react";

/*
Login page that is used on stg/uat/prd is only run from internal-hrm code repo.
'Login.js' file of other repos is only used for local testing.

This file have 2 ways to use:
+ GET method: display login page with login form
+ POST method: receive submitted login data (username/password)
*/
export async function getServerSideProps(ctx) {
  let returnObject = { props: {} };

  if (ctx.req && ctx.req.method === "POST") {
    // read form data
    let body = await parseBody(ctx.req, "1kb");

    // Get account
    const listAccount = (await accountApi.getAccount({})).data.data;
    let isLogin = false;
    let account = {};

    listAccount.map((item) => {
      if (
        item.attributes.Email === body.email &&
        item.attributes.Password === body.password &&
        item.attributes.Authorization === 1
      ) {
        isLogin = true;
        account = item;
      }
    });

    if (isLogin) {
      returnObject.props.loggedInUserInfo = account;
    }

    returnObject.props.url = body.url;
  } else {
    returnObject.props.url = ctx.query.url || "/cms/product";
  }

  return returnObject;
}

/*
A simple login page.
Can customize to display more.
LoginForm has basic inputs of authentication flow:
+ Login label
+ Username / password input
+ Submit button
*/
export default function LoginPage(props) {
  const router = useRouter();
  useEffect(() => {
    if (props.loggedInUserInfo) {
      localStorage.setItem("account", props.loggedInUserInfo);
      router.push("/cms/product");
    }
  }, [props.loggedInUserInfo]);

  if (!props.loggedInUserInfo) {
    return (
      <div>
        <Head>
          <title>Đăng nhập vào hệ thống nội bộ</title>
        </Head>
        <Paper className={styles.loginForm}>
          <h1>Đăng nhập</h1>
          <form method="POST" action="/login">
            <input type="hidden" name="url" value={props.url} />
            <Box>
              <TextField
                id="email"
                label="Tên tài khoản"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ margin: 12, width: 280 }}
                autoFocus={true}
                name="email"
              />
            </Box>
            <Box>
              <TextField
                id="password"
                label="Mật khẩu"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ margin: 12, width: 280 }}
                name="password"
                type="password"
              />
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: 8 }}
              >
                Đăng nhập
              </Button>
            </Box>
          </form>
        </Paper>
      </div>
    );
  } else {
    return <div></div>;
  }
}

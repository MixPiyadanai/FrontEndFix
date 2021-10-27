import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Login = () => {
    return (
    <div>
        <Head>
            <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
            <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
            <link rel="stylesheet" href="dist/css/adminlte.min.css" />
            </div>
        </Head>
        <body class="hold-transition login-page">
        <div className="login-box">
        <div className="login-logo">
            <a href="./"><b></b>Login</a>
        </div>
        {/* /.login-logo */}
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope" />
                    </div>
                </div>
                </div>
                <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock" />
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                    จำรหัสผ่าน
                    </label>
                    </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                {/* /.col */}
                </div>
            </form>
            <Link href='/register'>
            <p className="mb-0">
            <a href="register" className="text-center">สมัครสมาชิก</a>
            </p>
            </Link>
            </div>
            {/* /.login-card-body */}
        </div>
        </div>
        </body>
    </div>
    )
}

export default Login
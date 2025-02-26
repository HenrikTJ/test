import React from "react";
import logo from "@/public/assets/android-chrome-512x512.png";
import Image from "next/image";

export default function Page() {
    return (
        <div
            id="wrapper"
            className="container col-md-5 d-flex flex-column justify-content-around align-items-center border border-success
         bg-light rounded p-5 mt-5"
        >
            <Image src={logo} className="img w-25" alt="logo" />

            <div className="container text-center">
                <p className="display-6 mb-0 fs-2 fw-normal">Velkommen</p>
                <p className="display-12">Its TeeTime</p>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="inpBrukernavn"
                    className="form-control rounded-pill"
                    type="email"
                    placeholder="Brukernavn"
                />
                <label
                    htmlFor="inpBrukernavn"
                    style={{ padding: "calc(var( bs-gutter-x)* .5)" }}
                >
                    Brukernavn
                </label>
            </div>
            <div className="form-floating mb-1">
                <input
                    id="inpPassord"
                    className="form-control rounded-pill"
                    type="password"
                    placeholder="password"
                />
                <label htmlFor="inpPassord">Passord</label>
            </div>

            <button className="btn btn-success btn-lg rounded-pill mt-3 mb-2 col-lg-3">
                LOGIN
            </button>

            <div className="mb-4">
                <a href="#" className="text-decoration-none">
                    Glemt passord?
                </a>{" "}
                {/* Vet ikke om vi vil lage egen side for dette... */}
            </div>

            <div>
                Har du ikke bruker?{" "}
                <a href="/register" className="text-decoration-none">
                    Registrer deg!
                </a>
            </div>
        </div>
    );
}

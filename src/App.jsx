import React from "react";
import "./App.scss";
import Banner from "./components/Banner";
import FormFinal from "./components/FormFinal";
import FormNumber from "./components/FormNumber";
import BtnCloseOver from "./components/BtnCloseOver";
import QrBlock from "./components/QrBlock";
import BannerMain from "./components/BannerMain";

function App() {
    const [display, setDisplay] = React.useState("one");
    let mytime1 = 10;
    let mytime = mytime1;

    const myInterval = setInterval(int, 1000);

    function int() {
        mytime--;
        if (mytime <= 0) {
            setDisplay("one");
            mytime = mytime1;
            clearInterval(myInterval);
        } else if (display === "one") {
            mytime = mytime1;
            clearInterval(myInterval);
        }
    }

    document.addEventListener("mousemove", () => {
        mytime = mytime1;
    });
    document.addEventListener("keydown", (e) => {
        mytime = mytime1;
        if (e.key === "Escape") {
            setDisplay("one");
            clearInterval(myInterval);
        }
    });

    const view = {
        one: (
            <section className="header_conteiner">
                <Banner setDisplay={setDisplay} />
            </section>
        ),
        two: (
            <section className="main_conteiner">
                <BtnCloseOver setDisplay={setDisplay} />
                <QrBlock />
                <BannerMain>
                    <FormNumber setDisplay={setDisplay} />
                </BannerMain>
            </section>
        ),
        three: (
            <section className="main_conteiner">
                <BtnCloseOver setDisplay={setDisplay} />
                <QrBlock />
                <BannerMain>
                    <FormFinal />
                </BannerMain>
            </section>
        ),
    };
    return <>{view[display]}</>;
}

export default App;

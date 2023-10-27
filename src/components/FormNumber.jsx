import React from "react";
import { PropTypes } from "prop-types";
import { verifyPhone } from "../api/checkPhone";

const FormNumber = ({ setDisplay }) => {
    const [tel, setTel] = React.useState("+7(___)___-__-__");
    const [checkTel, setCheckTel] = React.useState(true);
    const [checkInp, setCheckInp] = React.useState(false);
    const telNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, "СТЕРЕТЬ", 0];

    const checkKeyDown = (e) => {
        if (e.code === "Enter") {
            changeTelButton(e.target.textContent);
        }
    };

    const changeTelKey = (e) => {
        setCheckTel(true);
        let faketel = tel.split("");

        if (/[0-9]/.test(e.key)) {
            for (let i = 0; i < tel.length; i++) {
                if (tel[i] === "_") {
                    faketel[i] = e.key;
                    break;
                }
            }
            setTel(faketel.join(""));
        } else if (e.key === "Backspace") {
            const idx = faketel.findLastIndex((e) => /[0-9]/.test(e));
            if (idx === 1) {
                faketel[idx] = "7";
            } else {
                faketel[idx] = "_";
            }

            setTel(faketel.join(""));
        }
    };

    const changeTelButton = (e) => {
        setCheckTel(true);
        let faketel = tel.split("");

        if (/[0-9]/.test(e)) {
            for (let i = 0; i < tel.length; i++) {
                if (tel[i] === "_") {
                    faketel[i] = e;
                    break;
                }
            }
            setTel(faketel.join(""));
        } else if (e === "СТЕРЕТЬ") {
            const idx = faketel.findLastIndex((e) => /[0-9]/.test(e));
            if (idx === 1) {
                faketel[idx] = "7";
            } else {
                faketel[idx] = "_";
            }

            setTel(faketel.join(""));
        }
    };

    const sendForm = async (e) => {
        e.preventDefault();
        const dataTel = tel.replace(/[^0-9]/g, "");
        try {
            const { data } = await verifyPhone(dataTel);
            if (data.valid) {
                setCheckTel(true);
                setDisplay("three");
            } else {
                setCheckTel(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="wrapForm" onSubmit={sendForm}>
            <span className="title">Введите ваш номер мобильного телефона</span>
            <input
                tabIndex={0}
                className="number"
                style={{ color: !checkTel ? "red" : "black" }}
                type="tel"
                value={tel}
                maxLength={16}
                onChange={() => console.log("change")}
                onKeyDown={changeTelKey}
                required
            />
            <span className="text">
                и с Вами свяжется наш менеждер для дальнейшей консультации
            </span>
            <div className="blockNumber">
                {telNum.map((e, i) => (
                    <div
                        tabIndex={0}
                        key={i}
                        onClick={() => changeTelButton(e)}
                        onKeyDown={checkKeyDown}
                        className={e === "СТЕРЕТЬ" ? "numBig" : "num"}
                    >
                        {e}
                    </div>
                ))}
            </div>
            <div className="blockInput">
                {checkTel ? (
                    <>
                        <input
                            tabIndex={0}
                            className="custom-checkbox"
                            onKeyDown={() => setCheckInp(!checkInp)}
                            onChange={() => setCheckInp(!checkInp)}
                            type="checkbox"
                            id="checkbox"
                            checked={checkInp}
                            required
                        />
                        <label className="label" htmlFor="checkbox">
                            Согласие на обработку персональных данных
                        </label>
                    </>
                ) : (
                    <h3>Неверно введён номер</h3>
                )}
            </div>

            <button
                tabIndex={0}
                disabled={!(!tel.includes("_") && checkInp)}
                type="submit"
                className="button"
            >
                Подтвердить номер
            </button>
        </form>
    );
};

FormNumber.propTypes = {
    setDisplay: PropTypes.func,
};

export default FormNumber;

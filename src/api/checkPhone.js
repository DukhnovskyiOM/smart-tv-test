import axios from "axios";
const key = import.meta.env.VITE_ACCESS_KEY;
export const verifyPhone = async (tel) =>
    await axios.get(
        `http://apilayer.net/api/validate?access_key=${key}&number=${tel}&country_code=&format=1`
    );

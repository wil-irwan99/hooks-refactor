import { useState } from "react";
import { UI_STATE_FAILED, UI_STATE_IDDLE, UI_STATE_LOADING, UI_STATE_SUCCESS } from "./constants";

const useAsync = () => {
    const [status, setStatus] = useState(UI_STATE_IDDLE);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const execute = async (asyncFn) => {
        setStatus(UI_STATE_LOADING);
        setValue(null);
        setError(null);
        try {
            const response = await asyncFn();
            console.log('resp', response);
            setValue(response);
            setStatus(UI_STATE_SUCCESS);
        } catch (e) {
            setError(e.message);
            setStatus(UI_STATE_FAILED);
        }
    }
    return {execute, status, value, error}
}

export default useAsync;
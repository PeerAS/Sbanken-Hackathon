const GET_LOANS =  'GET_LOANS';
const GET_LOANS_DONE = `${GET_LOANS}/DONE`;
const ANALYZE_USER = 'ANALYZE';
const ANALYZE_USER_DONE = `${ANALYZE_USER}/DONE`;

const VERIFY_USER = 'VERIFY_USER';

export const getLoans = (text) => {
    return {
        type: GET_LOANS,
        payload: "Hello"
    }
}

export const analyzeUser = (userid) => {
    return {
        type: ANALYZE_USER,
        payload: "START ANALYZER"
    }
}

export const verifyUser = (verified) => {
    return {
        type: VERIFY_USER,
        payload: verified
    }
}

export const actionTypes = {
    GET_LOANS,
    GET_LOANS_DONE,
    ANALYZE_USER,
    ANALYZE_USER_DONE
};
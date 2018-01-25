const GET_LOANS =  'GET_LOANS';
const GET_LOANS_DONE = `${GET_LOANS}/DONE`;


const ANALYZE_USER = 'ANALYZE';
const ANALYZE_USER_DONE = `${ANALYZE_USER}/DONE`;

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

export const ACTIONS = {
    GET_LOANS,
    GET_LOANS_DONE,
    ANALYZE_USER,
    ANALYZE_USER_DONE
};
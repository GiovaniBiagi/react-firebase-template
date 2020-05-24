import { LOGIN_ERROR_CONSTANTS } from '../constants/login';

export const parseErrorMessage = (error) => {
    switch (error.code) {
        case "auth/user-not-found":
            return LOGIN_ERROR_CONSTANTS.USER_NOT_FOUND;
        case "auth/wrong-password":
            return LOGIN_ERROR_CONSTANTS.INCORRECT_PASSWORD;
        case "auth/invalid-email":
            return LOGIN_ERROR_CONSTANTS.BAD_EMAIL;
        default:
            return LOGIN_ERROR_CONSTANTS.UNSPECTED_ERROR;
    }

}
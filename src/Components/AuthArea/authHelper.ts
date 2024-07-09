// authHelper.ts
let loginCallback: (() => void) | null = null;
let logoutCallback: (() => void) | null = null;

export const registerLoginCallback = (callback: () => void) => {
    loginCallback = callback;
};

export const registerLogoutCallback = (callback: () => void) => {
    logoutCallback = callback;
};

export const login = () => {
    if (loginCallback) {
        loginCallback();
    }
};

export const logout = () => {
    if (logoutCallback) {
        logoutCallback();
    }
};

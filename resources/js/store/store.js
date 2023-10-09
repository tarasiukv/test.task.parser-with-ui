import {reactive} from "vue";

const state = reactive({
    access_token: null,
    is_logged_in: false,
    user: null,
    is_loading_page: true
});

const methods = {
    // return access_token !== undefined && access_token !== null;
};

const getters = {
    async isLoggedIn() {
        return typeof state.access_token !== "undefined" && state.access_token !== null;
    }
};

const setters = {
    async setIsLogged(value) {
        state.is_logged_in = value;
    },
    async setIsLoadingPage(value) {
        state.is_loading_page = value;
    },
    async setUser(user) {
        if (user) {
            state.user = user;
        } else {
            state.user = null;
        }
    },
};

/**
 *
 * @returns {Promise<void>}
 */
const checkAuthStatus = async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
        state.is_logged_in = true;
    } else {
        state.is_logged_in = false;
    }
};

export default {
    state,
    methods,
    getters,
    setters,
    checkAuthStatus
};

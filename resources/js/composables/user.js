import {ref, reactive, inject} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default function useUsers() {
    const users = ref([])
    const user = ref({})
    const router = useRouter()
    const store = inject('store')

    /**
     * @returns {Promise<void>}
     */
    const getUsers = async () => {
        try {
            const response = await axios.get('/api/users')
            users.value = response.data.data

        } catch (e) {
            console.log(e)
        }

        return false;
    }

    /**
     * @param id
     * @param way
     * @returns {Promise<void>}
     */
    const getUser = async (id) => {
        try {
            let request_config = {}
            const response = await axios.get('/api/users/' + id, request_config)

            user.value = response.data.data
        } catch (e) {
            console.log(e)
        }
        return false;
    }

    /**
     * @param data
     * @returns {Promise<boolean>}
     */
    const storeUser = async () => {
        try {
            let request_config = {}

            const response = await axios.post('/api/users', user.value, request_config)
        } catch (e) {
            console.log(e)
        }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const updateUser = async (id) => {
        try {
            let request_config = {}
            const response = await axios.patch('/api/users/' + id, user.value, request_config)
        } catch (e) {
            console.log(e)
        }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const destroyUser = async (id) => {
        if (id !== undefined) {
            try {
                let request_config = {}
                const response = await axios.delete('/api/users/' + id, request_config)
            } catch (e) {
                console.log(e)
            }
        }

        return false;
    }

    const loginUser = async () => {
        try {
            let request_config = {}
            const response = await axios.post('/api/auth/login', user.value, request_config)
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                })

        } catch (e) {
            console.log(e)
        }

        return false;
    }


    return {
        getUser,
        getUsers,
        storeUser,
        updateUser,
        destroyUser,
        loginUser,
        users,
        user,
    }
}

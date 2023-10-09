import {inject, ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export default function useAuth() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const store = inject('store')


    const checkUserRole = async () => {
        try {
            const response = await axios.get('/api/users');
            const user = response.data;
            if (user.role === 'admin') {
                await router.push('/admin');
            } else {
                await router.push('/');
            }
        } catch (e) {
            console.error('Error checking user role', e);
        }
    }

    const loginUser = async () => {
        if (store.state.is_logged_in) return true
        else {
            try {
                const {data} = await axios.post('/api/auth/login', {
                    email: email.value,
                    password: password.value
                }, {
                    headers: {
                        'Accept': 'application/json',
                    }
                })
                localStorage.setItem("access_token", data.access_token)
                await store.setters.setIsLogged(true)
                await store.setters.setUser(data.user)
                await checkUserRole();
            } catch (e) {
                console.log('!!!Some error in login', e)
            }
        }

        return false;
    }

    const logOutUser = async () => {
        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            }

            const response = await axios.post('/api/auth/logout', null, request_config)
                .then(response => {
                    localStorage.removeItem('access_token');
                    store.setters.setIsLogged(false)
                    router.push('/').then(() => {
                        window.location.reload()
                    })
                })
        } catch (e) {
            console.log(e)
        }

        return false;
    }


    return {
        loginUser,
        logOutUser,
        email,
        password
    }
}

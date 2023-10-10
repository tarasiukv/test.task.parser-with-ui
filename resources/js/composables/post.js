import {computed, ref} from "vue";
import axios from "axios";


export default function usePosts() {
    const posts = ref([])
    const post = ref({})

    /**
     * @returns {Promise<void>}
     */
    const getPosts = async (page = 1) => {
        try {
            const response = await axios.get('/api/posts');
            posts.value = response.data.data
        } catch (e) {
            console.log(e)
        }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<void>}
     */
    const getPost = async (id) => {
        try {
            let request_config = {}
            const response = await axios.get('/api/posts/' + id, request_config)
            post.value = response.data
        } catch (e) {
            console.log(e)
        }
        return false;
    }

    /**
     * @returns {Promise<boolean>}
     */
    const storePost = async () => {
        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            };
            const response = await axios.post('/api/posts', post.value, request_config)

            return response.data;
        } catch (e) {
            if (e.response && e.response.status === 401) {
                window.alert("Помилка: Ви не автентифіковані");
            } else {
                console.error(e);
            }
        }
    };


    /**
     * @param post
     * @returns {Promise<boolean>}
     */
    const updatePost = async (post) => {
        try {
            let request_config = {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('access_token'),
                    'Accept': 'application/json',                }
            }
            const response = await axios.put('/api/posts/' + post.id, {
                title: post.title,
                description: post.description,
                category: post.category,
                creator: post.creator
            }, request_config)

        } catch (e) {
            if (e.response && e.response.status === 401) {
                window.alert("Помилка: Ви не автентифіковані");
            } else {
                console.error(e);
                window.alert("Помилка: Під час оновлення товару");
            }
        }

        return false;
    }

    /**
     * @param id
     * @returns {Promise<boolean>}
     */
    const destroyPost = async (id) => {
        if (confirm("Ви впевнені, що хочете видалити цей продукт?")) {
            if (id !== undefined) {
                try {
                    let request_config = {
                        headers: {
                            'authorization': 'Bearer ' + localStorage.getItem('access_token')
                        }
                    }
                    await axios.delete('/api/posts/' + id, request_config)
                    await getPosts();
                } catch (e) {
                    if (e.response && e.response.status === 401) {
                        window.alert("Помилка: Ви не автентифіковані");
                    } else {
                        console.error(e);
                    }
                }
            }
        }

        return false;
    }

    const searchPosts = async (text) => {
        try {
            let data = {
                search_text: text,
            };
            const response = await axios.post(`/api/posts/search`, data);
            posts.value = response.data.data;

        } catch (e) {
            console.error(e);
        }
    };

    return {
        getPost,
        getPosts,
        storePost,
        updatePost,
        destroyPost,
        searchPosts,
        posts,
        post,
    }
}

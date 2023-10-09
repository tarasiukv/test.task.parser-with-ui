<script setup>
import {useRouter} from "vue-router";
import useAuth from "@composable/auth.js";

const router = useRouter();

const { email, password, loginUser} = useAuth();
</script>

<template>
    <div class="login-page login-box">
        <div class="login-logo">
            <b>Admin</b>
        </div>
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form method="post">
                    <div class="input-group mb-3">
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            v-model="email"
                        >
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            v-model="password"
                        >
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <button
                                type="submit"
                                class="btn btn-primary btn-block"
                                @click.prevent="loginUser"
                            >Sign In</button>
                        </div>
                    </div>
                </form>

                <div class="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <p class="mb-0">
                        <a href="/register" class="text-center">Register a new membership</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

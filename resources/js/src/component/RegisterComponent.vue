<script setup>
import {useRouter} from "vue-router";
import useUsers from "@composable/user.js";

const router = useRouter();

const {user, storeUser} = useUsers();
</script>

<template>
<div class="register-page register-box">
    <div class="register-logo">
        <b>Admin</b>
    </div>

    <div class="card">
        <div class="card-body register-card-body">
            <p class="login-box-msg">Register a new membership</p>

            <form action="" method="post">
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Full name"
                        v-model="user.name"
                    >
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        v-model="user.email"
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
                        v-model="user.password"
                    >
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Retype password"
                        v-model="user.password_confirmation"
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
                            @click.prevent="storeUser"
                        >Register</button>
                    </div>
                </div>
            </form>

            <div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="/login" class="text-center">I already have a membership</a>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>

</style>

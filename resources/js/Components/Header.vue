<template>
    <header class="header">
        <div class="container">
            <Link :href="route('profile.edit')">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </Link>
            <nav class="nav">
                <NavLink :href="route('board')" method="get" as="button">Board</NavLink>
                <NavLink :href="route('logout')" method="post" as="button">Logout</NavLink>

            </nav>
        </div>
    </header>
</template>

<script>
import NavLink from "../../../vendor/laravel/breeze/stubs/inertia-vue-ts/resources/js/Components/NavLink.vue";
import {Link} from "@inertiajs/vue3";

export default {
    name: 'Header',
    components: {Link, NavLink},
    methods: {
        navigateTo(page) {
            this.$router.push({ name: page });
        },
    },
};
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #373737;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 3);
    z-index: 1000;
}

.container {
    display: flex;
    align-items: center;
    width: 100%;
}

.nav button {
    background: none;
    border: none;
    color: white;
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
}

.nav button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
}
</style>

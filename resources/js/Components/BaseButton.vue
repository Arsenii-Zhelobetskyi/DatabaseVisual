<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <NavLink v-else :href="route(to)" :class="mode">
        <slot></slot>
    </NavLink>
</template>

<script>
import NavLink from "../../../vendor/laravel/breeze/stubs/inertia-vue-ts/resources/js/Components/NavLink.vue";

export default {
    components: { NavLink },
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: "/",
        },
    },
};
</script>

<style scoped>
button,
a {
    background-color: #70984c;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "Arial", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    padding: 0.5rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    user-select: none;
    -webkit-user-select: none;
}

button:hover,
a:hover {
    background-color: #a7c957;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:active,
a:active {
    background-color: #386641;
    transform: translateY(0);
    box-shadow: none;
}

.light {
    border: 2px solid #0a7393;
    background-color: transparent;
    color: black;
}

.light:hover {
    border: 2px solid black;
    background-color: #0a7393;
    color: white;
}

.dialog-no {
    border: 2px solid #a53b3d;
    background-color: transparent;
    color: black;
}

.dialog-no:hover {
    border: 2px solid black;
    background-color: #a53b3d;
    color: white;
}

.long {
    width: 20%;
}
</style>

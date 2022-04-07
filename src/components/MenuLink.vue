<template>
    <router-link :to="link"><span>→ </span>{{ text }}</router-link>
</template>

<script>
export default {
    name: 'HeaderLink',
    props: ["link", "text"]
}
</script>
<style scoped>
    a  {
        text-decoration: none;
        color: #cc40a0;
        font-weight: 500;
        transition: transform .3s ease-in-out;
    }
    a span {
        visibility: hidden;
    }

    a.router-link-exact-active {
                color: #ca8bc3;
    }
    a.router-link-exact-active span {
        visibility:visible;
    }
    a:hover {
        transform: translateY(-1px);
    }
</style>
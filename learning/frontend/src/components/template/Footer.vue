<template>
    <footer class="footer">
        <span>Copyright <strong>Hugo Morais</strong> © 2019</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);

        color: rgb(255, 251, 251);

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>

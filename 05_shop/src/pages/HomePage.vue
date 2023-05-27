<template>
    <TheTwoColumnsLayout
        :leftColumnClass="'col-md-8 bg-vue'"
        :rightColumnClass="'col-md-4'"
        :fullsize="true"
    >
    <template #leftCol>
        <div class="mt-5 text-center">
            <div class="display-1 my-5">Der Shop</div>
            <div class="display-4 my-5">
                Erhalten Sie Zugriff auf exklusive Artikel
            </div>
            <div class="my-5 offset-4 col-4">
                <img src="@/assets/shopping.svg" alt="" class="img-fluid">
            </div>
        </div>
    </template>
    <template #rightCol>
        <Register></Register>
    </template>
    </TheTwoColumnsLayout>
</template>

<script>
// import TheTwoColumnsLayoutVue from "../layouts/TheTwoColumnsLayout.vue";
// Alternative Schreibweise für den o.g. auskommentierten Import (Webpack ermöglicht die Referenz auf root/src mit @)
import TheTwoColumnsLayout from '@/layouts/TheTwoColumnsLayout.vue';
import Register from '@/components/auth/Register.vue';

export default {
    name: "HomePage",
    components: {
        TheTwoColumnsLayout,
        Register,
    }
};
</script>

<style scoped></style>

<template>
    <TheShopLayout>
        <template #default>
            <div class="row">
                <div class="col-12">
                    <h1 class="mt-4">
                        Produktdetails
                        <button
                            class="btn btn-lg bg-vue float-end"
                            @click="$router.go(-1)"
                        >
                            <!-- $router.go(-1) bedeutet, dass wir in der Browser-Historie genau einen Schritt zurück gehen (wie zurück oben links im Browser). -->
                            Zurück
                        </button>
                    </h1>
                    <div class="card mt-4">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img
                                    src="https://dummyimage.com/600x400/34495e/fff"
                                    class="card-img"
                                    alt=""
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-9">
                                            <h5 class="card-title mb-4">
                                                {{ product.title }}
                                            </h5>
                                        </div>
                                        <div class="col-3">
                                            <div class="d-grid">
                                                <button class="btn bg-vue2">
                                                    {{ product.price }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            {{ product.description }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-4">
                        <div class="card-body">
                            <h4>Das könnte Sie auch interessieren...</h4>
                            <router-link
                                :to="{
                                    name: 'ReadProduct',
                                    params: { id: '-NXFH6FQj_Fizozr6wBy' },
                                }"
                            >-NXFH6FQj_Fizozr6wBy</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
export default {
    name: "ReadProductPage",
    components: {
        TheShopLayout,
    },
    data() {
        return {
            id: null,
        };
    },
    computed: {
        product() {
            return this.$store.getters.product(this.id);
        },
    },
    created() {
        // Die Id dieses Produkts setzen bei Erstellung (wird vom Router übergeben)
        this.id = this.$route.params.id;
    },
    beforeRouteUpdate(to) {
        // Wird ausgeführt, wenn die Component gleich bleibt, aber sich die Route ändert.
        this.id = to.params.id;
    },
};
</script>

<style scoped></style>

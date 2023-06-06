<template>
    <TheShopLayout>
        <template #default>
            <div class="row">
                <div class="col-12">
                    <h1 class="mt-4">
                        Neuer Artikel
                        <button class="btn btn-lg bg-vue float-end">
                            Speichern
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
                </div>
            </div>
        </template>
    </TheShopLayout>
</template>

<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
export default {
    name: "CreateProductPage",
    components: {
        TheShopLayout,
    },
    data() {
        return {
            product: {
                title: "Produkt " + Math.ceil(Math.random() * 10000),
                description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ipsum dolorem quod laborum?
                Nulla aliquid minus ipsam ut velit officia voluptatem possimus mollitia tenetur sequi?
                Mollitia nostrum fugiat et cum vero?`,
                price: Math.ceil(Math.random() * 100),
            },
        };
    },
};
</script>

<style scoped></style>

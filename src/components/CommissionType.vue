<template>
    <div class="type">
        <h2>{{ props.name }}</h2>
        <div class="example" :class="{ large: props.examples.size == 'large' }">
            <img
                v-for="example in props.examples.files"
                :src="example.file"
                :class="{ 'desktop-only': example.desktopOnly }"
                alt=""
            >
        </div>
        <p>{{ props.description }}</p>
        <div class="products">
            <div
                v-for="product in props.products"
                class="product-card"
                :class="{ 'wide': (product.size == 'wide') }"
            >
                <h3>{{ product.title }}</h3>
                <ul>
                    <li v-for="feature in product.features">{{ feature }}</li>
                </ul>
                <div class="grow-spacer"></div>
                <div class="prices">
                    <ol v-for="priceName in Object.keys(product.prices)">
                        <li>{{ priceName }}</li>
                        <li>{{ product.prices[priceName] }}</li>
                    </ol>
                </div>
            </div>
        </div>

        <details
            v-for="[name, products] of Object.entries(props.collapsedProducts)">
            <summary>{{ name }}</summary>
            <div class="products">
                <div
                    v-for="product in products"
                    class="product-card"
                    :class="{ 'wide': (product.size == 'wide') }"
                >
                    <h3>{{ product.title }}</h3>
                    <ul>
                        <li v-for="feature in product.features">{{ feature }}</li>
                    </ul>
                    <div class="grow-spacer"></div>
                    <div class="prices">
                        <ol v-for="priceName in Object.keys(product.prices)">
                            <li>{{ priceName }}</li>
                            <li>{{ product.prices[priceName] }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </details>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
    name: String,
    description: String,
    examples: Object,
    products: Array,
    collapsedProducts: Object,
})


</script>

<style scoped></style>
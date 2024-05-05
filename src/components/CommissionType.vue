<template>
    <div class="type">
        <h2>{{ props.name }}</h2>
        <div class="example", :class="{ large: props.examples.size == 'large' }">
            <img
                v-for="example in props.examples.files"
                :src="example.file",
                :class="{ 'desktop-only': example.desktopOnly }">
                alt=""
            >
        </div>
        <p>{{ props.description }}</p>
        <div class="products">
            <div
                v-for="product in props.products"
                class="product-card"
            >
                <h3>{{ product.title }}</h3>
                <ul>
                    <li v-for="feature in product.features">{{ feature }}</li>
                </ul>
                <div class="grow-spacer"></div>
                <div class="prices">
                    <ol v-for="">
                        <li>Sketch</li>
                        <li>$50 USD</li>
                    </ol>
                    <ol>
                        <li>Clean</li>
                        <li>$75 USD</li>
                    </ol>
                </div>
            </div>
            <div class="product-card">
                <h3>Standard Commission</h3>
                <ul>
                    <li>Client gives references/inspirations</li>
                    <li>WIPs for each progress stage</li>
                    <li>3-4 edits allowed</li>
                    <li>Additional edits with a fee</li>
                </ul>
                <div class="grow-spacer"></div>
                <div class="prices">
                    <ol>
                        <li>Sketch</li>
                        <li>$70 USD</li>
                    </ol>
                    <ol>
                        <li>Clean</li>
                        <li>$95 USD</li>
                    </ol>
                </div>
            </div>
            <div class="product-card">
                <h3>Full Input</h3>
                <ul>
                    <li>Client gives references/inspirations</li>
                    <li>WIPs for each progress stage</li>
                    <li>Unlimited input and edits (within reason)</li>
                </ul>
                <div class="prices">
                    <ol>
                        <li>Sketch</li>
                        <li>$100 USD</li>
                    </ol>
                    <ol>
                        <li>Clean</li>
                        <li>$150 USD</li>
                    </ol>
                </div>
            </div>
        </div>

        <details>
            <summary>Add-ons &#11206;</summary>
            <div class="products">
                <div class="product-card">
                    <h3>Complexity Fee</h3>
                    <ul>
                        <li>For very complex designs, an extra fee is added</li>
                        <li>Does not apply to Artist's Choice</li>
                    </ul>
                    <div class="prices">
                        <ol>
                            <li>Sketch</li>
                            <li>20% of total price</li>
                        </ol>
                        <ol>
                            <li>Clean</li>
                            <li>40% of total price</li>
                        </ol>
                    </div>
                </div>
                <div class="product-card">
                    <h3>Clothing Design</h3>
                    <ul>
                        <li>Add clothing to your character, which will be drawn on a copied fullbody by default
                        </li>
                        <li>For a new pose, you must ask for an extra fullbody on top</li>
                    </ul>
                    <div class="prices">
                        <ol>
                            <li>Sketch</li>
                            <li>+$30 USD</li>
                        </ol>
                        <ol>
                            <li>Clean</li>
                            <li>+$45 usd</li>
                        </ol>
                    </div>
                </div>
                <div class="product-card">
                    <h3>Halfbody</h3>
                    <ul>
                        <li>Additional halfbody - drawing from the shouders and up - accompanying your design.
                        </li>
                    </ul>
                    <div class="grow-spacer"></div>
                    <div class="prices">
                        <ol>
                            <li>Sketch</li>
                            <li>+$25 USD</li>
                        </ol>
                        <ol>
                            <li>Clean</li>
                            <li>+$40 usd</li>
                        </ol>
                    </div>
                </div>
                <div class="product-card">
                    <h3>Fullbody</h3>
                    <ul>
                        <li>Additional fullbody accompanying your design.</li>
                    </ul>
                    <div class="prices">
                        <ol>
                            <li>Sketch</li>
                            <li>+$50 USD</li>
                        </ol>
                        <ol>
                            <li>Clean</li>
                            <li>+$75 usd</li>
                        </ol>
                    </div>
                </div>

            </div>
        </details>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    name: String,
    description: String,
    examples: Object,
    products: Array,
})


</script>

<style scoped></style>
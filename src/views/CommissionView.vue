<script setup>
import { ref } from 'vue'
import TabBar from "@/components/TabBar.vue"
import CommissionType from "@/components/CommissionType.vue"

const selectedTab = ref("Commission Info")
const tabs = ["Commission Info", "Terms of Service", "Order"]

const comTypes = [
    {
        name: "Custom Design",
        description: "A custom character, designed under your requests and preferences. Base customs come with one fullbody drawing.",
        examples: {
            size: "large",
            files: [
                {
                    file: "images/poufdesign2.png",
                    desktopOnly: false,
                },
                {
                    file: "images/poufdesign3.png",
                    desktopOnly: true,
                },
                {
                    file: 'images/luminae.png',
                    desktopOnly: true,
                },
            ]
        },
        products: [
            {
                title: "Artist's Choice",
                features: [
                    "Client gives references/inspirations",
                    "No WIPs",
                    "No edits",
                ],
                prices: {
                    "Sketch": "$50 USD",
                    "Clean": "$75 USD",
                },
            },
            {
                title: "Standard Commission",
                features: [
                    "Client gives references/inspirations",
                    "WIPs for each progress stage",
                    "3-4 edits allowed",
                    "Additional edits with a fee",
                ],
                prices: {
                    "Sketch": "$70 USD",
                    "Clean": "$95 USD",
                },
            },
            {
                title: "Full Input",
                features: [
                    "Client gives references/inspirations",
                    "WIPs for each progress stage",
                    "Unlimited input and edits (within reason)",
                ],
                prices: {
                    "Sketch": "$100 USD",
                    "Clean": "$150 USD",
                },
            },
        ],
        collapsedProducts: {
            "Add-ons": [
                {
                    title: "Complexity Fee",
                    features: [
                        "For very complex designs, an extra fee is added",
                        "Does not apply to Artist's Choice",
                    ],
                    prices: {
                        "Sketch": "+20% of total price",
                        "Clean": "+40% of total price",
                    },
                },
                {
                    title: "Clothing Design",
                    features: [
                        "Add clothing to your character, which will be drawn on a copied fullbody by default",
                        "For a new pose, you must ask for an extra fullbody on top",
                    ],
                    prices: {
                        "Sketch": "+$30 USD",
                        "Clean": "+$45 USD",
                    },
                },
                {
                    title: "Halfbody",
                    features: [
                        "Additional halfbody - drawing from the shouders and up - accompanying your design.",
                    ],
                    prices: {
                        "Sketch": "+$25 USD",
                        "Clean": "+$40 USD",
                    },
                },
                {
                    title: "Fullbody",
                    features: [
                        "Additional fullbody accompanying your design.",
                    ],
                    prices: {
                        "Sketch": "+$50 USD",
                        "Clean": "+$75 USD",
                    },
                },
            ],
        }
    }, // end Custom Designs
    {
        name: "Minis",
        description: "A mini drawing of your character. Perfect for icons, pagedolls, decorations, etc. Design will be simplified to fit the style.",
        examples: {
            files: [
                {
                    file: "images/clara.png",
                    desktopOnly: false,
                },
                {
                    file: "images/wisp.png",
                    desktopOnly: true,
                },
                {
                    file: "images/sadbloom.png",
                    desktopOnly: true,
                },
                {
                    file: 'images/will.png',
                    desktopOnly: true,
                },
                {
                    file: "images/minime.png",
                    desktopOnly: true,
                }
            ]
        },
        products: [
            {
                title: "Standard",
                size: "wide",
                features: [
                    "1000x1000 drawing of your character. Can be made smaller/nonsquare.",
                    "One WIP sketch",
                    "Preferred pose/expression allowed with size considerations",
                    "Small edits allowed but new poses have a fee",
                ],
                prices: {
                    "Clean": "$50 USD",
                    "Pose Change": "+$10 USD"
                },
            },
        ],
        collapsedProducts: [],
    },
]

</script>

<template>
    <div class="content commission-content">
        <TabBar v-model="selectedTab" :tabs="tabs"></TabBar>

        <div v-if="selectedTab == 'Commission Info'" id="commission-info" class="gallery">
           <CommissionType
                v-for="comType in comTypes"
                :name="comType.name"
                :description="comType.description"
                :examples="comType.examples"
                :products="comType.products"
                :collapsedProducts="comType.collapsedProducts"
            />
        </div>

        <div v-if="selectedTab == 'Terms of Service'" id="terms-of-service" class="gallery terms-of-service-container">
            <div class="terms-of-service-body">
                <p>By ordering a commission, you agree to the following terms of service, so please read it carefully.
                    Any
                    questions or concerns, email frog.croaks.art@gmail.com, or a private message in any of my active
                    social
                    media!</p>

                <h2>Payment</h2>
                <p>All commissions are in USD, made through PayPal invoices, unless stated otherwise.</p>
                <p>Payment is due upfront before I start the commission. Payment plans are available for commissions
                    equal or
                    above $200 USD on a case by case basis, and terms must be negotiated before purchase.</p>

                <h3>Refunds</h3>
                <p>Refunds value depend on the progress of commission:</p>
                <ul class="tos-list">
                    <li>If the commission wasn't started, 90% will be refunded;</li>
                    <li>After a sketch, 75% will be refunded;</li>
                    <li>After lines, 50% will be refunded;</li>
                    <li> After colors, refunds will no longer be processed.</li>
                </ul>
                <p>If no updates were sent after 3 months, full refunds may be requested. A cancellation on the artist's
                    part
                    will result in a full refund.</p>
                <h2>Process</h2>
                <p>Commission openings will be announced on my social media, and the Order form will be available for up
                    to 2 days to fill. Opening period may vary.</p>
                <p> Emails will be sent to commissioners afterward, containing any extra information requested and your
                    PayPal
                    email for the invoice. Once you (the customer) pay the invoice, work in progress files will be sent
                    for your
                    approval depending on your commission type.</p>
                <h3>Edits</h3>
                <p>Depending on commission type, edits will be available. Please read the commission description
                    properly
                    before requesting edits, as not all commission options offer edits.</p>
                <p>Mistakes and misunderstandings will be adjusted free of charge regardless of commission type and
                    phase.</p>
                <p>Edits are free to request on the concept and sketch phases. I will send multiple options for
                    approval, and
                    the commissioner may ask for edits to refine these options until satisfied</p>
                <p>Beyond sketches, minor edit requests are allowed, but large edits — such as changing pose,
                    background,
                    perspective, outfits and any other major overhauls in the piece — will come with an extra fee. The
                    fee price
                    depends on the scale of the rework.</p>
                <h2>Rights & Permissions</h2>
                <p>I (the artist) retain the right to refuse any commission order. I retain all copyright to my work,
                    which
                    include but are not limited to the right to distribute, reproduce or use the images for
                    self-promotion.
                    Commissioned artwork will not be used for projects or resold.</p>
                <p>To purchase the copyright of a piece, contact me in advance.</p>
                <p>The commissioner may request for the commission to not be posted publicly at no extra charge.</p>
                <p>Commissions may be used for any personal (non-commercial) use without restriction — such as icons,
                    layouts,
                    personal items, etc. Credit when posting to other sites is requested at least once.</p>
                <p>Commercial use must be discussed beforehand, and may come with extra fees depending on the project.
                </p>
                <p>Commissions may not be used for NFT projects.</p>
            </div>
        </div>

        <div v-if="selectedTab == 'Order'" id="order" class="gallery order-container">
            <div class="order-body">
                <p>To purchase a commission, you may fill the form below, if its open for responses.</p>
                <p>Opening for commissions are announced on my Social Media and to those in the mailing list. To join my
                    mailing list, send an email to <a
                        href="mailto:frog.croaks.art@gmail.com">Frog.croaks.art@gmail.com</a>.
                </p>

                <iframe class="google-forms"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdp8ixkUCQT9zKy_prdAGu1_2i1gz0hLeQ_V6Gp4NMsKkbsGQ/viewform?embedded=true"
                    width="100%" height="1882" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    </div>
</template>

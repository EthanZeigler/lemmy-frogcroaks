<script setup>
import { ref } from 'vue'
import TabBar from "@/components/TabBar.vue"

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
                    file: "@/assets/images/poufdesign2.png",
                    desktopOnly: false,
                },
                {
                    file: "@/assets/images/poufdesign3.png",
                    desktopOnly: true,
                },
                {
                    file: '@/assets/images/luminae.png',
                    desktopOnly: true
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
                    "Clean": "$75 USD"
                },
                collapsed: false
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
                    "Clean": "$95 USD"
                },
                collapsed: false,
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
                    "Clean": "150 USD"
                },
                collapsed: false,
            },
            {
                title: "Complexity Fee",
                features: [
                    "For very complex designs, an extra fee is added",
                    "Does not apply to Artist's Choice",
                ],
                prices: {
                    "Sketch": "20% of total price",
                    "Clean": "40% of total price",
                },
                collapsed: "Add-ons"
            }
        ]
    }
]

</script>

<template>
    <div class="content commission-content">
        <TabBar v-model="selectedTab" :tabs="tabs"></TabBar>

        <div id="commission-info" class="gallery">
            <div class="type">
                <h2>Custom Design</h2>
                <div class="example large">
                    <a href="images/poufdesign2.png" data-lightbox="gallery"><img src="@/assets/images/poufdesign2.png"
                            alt=""></a>
                    <a class="desktop-only" href="images/poufdesign3.png" data-lightbox="gallery"><img
                            src="@/assets/images/poufdesign3.png" alt=""></a>
                    <a class="desktop-only" href="images/luminae.png" data-lightbox="gallery">
                        <img src="@/assets/images/luminae.png" alt="">
                    </a>
                </div>
                <p>
                    A custom character, designed under your requests and preferences.
                    Base customs come with one fullbody drawing.
                </p>

                <div class="products">
                    <div class="product-card">
                        <h3>Artist's Choice</h3>
                        <ul>
                            <li>Client gives references/inspirations</li>
                            <li>No WIPs</li>
                            <li>No edits</li>
                        </ul>
                        <div class="grow-spacer"></div>
                        <div class="prices">
                            <ol>
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
            <!-- SCENES -->
            <div class="type">
                <h2>Minis</h2>
                <div class="example">
                    <a href="images/clara.png" data-lightbox="gallery"><img src="@/assets/images/clara.png" alt=""></a>
                    <a class="desktop-only" href="images/wisp.png" data-lightbox="gallery"><img
                            src="@/assets/images/wisp.png" alt=""></a>
                    <a class="desktop-only" href="images/sadbloom.png" data-lightbox="gallery"><img
                            src="@/assets/images/sadbloom.png" alt=""></a>
                    <a class="desktop-only" href="images/will.png" data-lightbox="gallery"><img
                            src="@/assets/images/will.png" alt=""></a>
                    <a class="desktop-only" href="images/minime.png" data-lightbox="gallery"><img
                            src="@/assets/images/minime.png" alt=""></a>
                </div>
                <p>
                    A mini drawing of your character.
                </p>
                <div class="products twosquare">
                    <div class="product-card">
                        <h3>Details</h3>
                        <ul>
                            <li>Fit to square proportions. Non-square minis available upon request</li>
                            <li>Perfect for icons, pagedolls, decorations, etc.</li>
                            <li>Default size is 1000x1000. Smaller sizes given upon request</li>
                            <li>Design will be simplified to fit the style</li>
                        </ul>
                        <div class="grow-spacer"></div>
                        <div class="prices">
                            <ol>
                                <li>Price</li>
                                <li>$50 USD</li>
                            </ol>
                        </div>
                    </div>
                    <div class="product-card">
                        <h3>Edit Fee</h3>
                        <ul>
                            <li>Minis have one WIP stage, being the sketch</li>
                            <li>Client can give prefered pose and expression, but size limitations may override this
                                request</li>
                            <li>Edits to the pose can be asked, but new poses come with the fee</li>
                        </ul>
                        <div class="grow-spacer"></div>
                        <div class="prices">
                            <ol>
                                <li>Price</li>
                                <li>$10 USD</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div id="terms-of-service" class="gallery terms-of-service-container" style="display:none">
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

        <div id="order" class="gallery order-container" style="display:none">
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

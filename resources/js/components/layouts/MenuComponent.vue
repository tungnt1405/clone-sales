<template>
    <v-container>
        <div
            class="bottom-header-inner d-flex align-center justify-content-center"
        >
            <div class="menu-alignment">
                <div class="navbar">
                    <ul class="app-nav-list pl-0">
                        <li class="app-nav-item">
                            <a
                                href="/"
                                class="router-link-exact-active router-link-active active"
                                >Home</a
                            >
                            <!---->
                        </li>
                        <li class="app-nav-item">
                            <a
                                href="/home"
                                class="router-link-exact-active router-link-active"
                                >Shop</a
                            >
                            <ul class="sub-menu">
                                <li>
                                    <a href="/products/men/102" class=""
                                        >Product Details</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/cart" class="">Cart</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/checkout" class="">Checkout</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/checkout/payment" class=""
                                        >Payment</a
                                    ><!---->
                                </li>
                            </ul>
                            <!---->
                        </li>
                        <li class="app-nav-item">
                            <a href="/products/accessories" class=""
                                >Accessories</a
                            ><!----><!---->
                        </li>
                        <li class="app-nav-item">
                            <a
                                href="/home"
                                class="router-link-exact-active router-link-active"
                                >Categories</a
                            ><!---->
                            <ul class="sub-menu mega">
                                <li>
                                    <a>Men</a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a
                                                href="/products/Men?category=T-shirt"
                                                class=""
                                                >T-Shirt</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Men?category=Shirt"
                                                class=""
                                                >Shirt</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Men?category=Jeans"
                                                class=""
                                                >Jean</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Men?category=Jackets"
                                                class=""
                                                >Jackets</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Women</a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a
                                                href="/products/Women?category=Dresses"
                                                class=""
                                                >Dresses</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Women?category=Jean"
                                                class=""
                                                >Jean</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Women?category=Shirt"
                                                class=""
                                                >Shirt</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Women?category=Jackets"
                                                class=""
                                                >Jackets</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Gadgets</a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a
                                                href="/products/Gadgets?category=Headphone"
                                                class=""
                                                >Headphone</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Gadgets?category=Smartphone"
                                                class=""
                                                >Smartphone</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Gadgets?category=Watch"
                                                class=""
                                                >Watch</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Gadgets?category=Speaker"
                                                class=""
                                                >Speaker</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Accessories</a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a
                                                href="/products/Accessories?category=Laptop"
                                                class=""
                                                >Laptop Accessories</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Accessories?category=Belts"
                                                class=""
                                                >Belts</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Accessories?category=Jewellery"
                                                class=""
                                                >Jewellery</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/products/Accessories?category=Purse"
                                                class=""
                                                >Purse</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="app-nav-item">
                            <a
                                href="/home"
                                class="router-link-exact-active router-link-active"
                                >Pages</a
                            >
                            <ul class="sub-menu">
                                <li>
                                    <a href="/about" class="">About</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/term-condition" class=""
                                        >Term and Condition</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/privacy-policy" class=""
                                        >Privacy Policy</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/blog-detail/1" class=""
                                        >Blog Detail</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/faq" class="">FAQ</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/not-found" class="">404 Page</a
                                    ><!---->
                                </li>
                                <li>
                                    <a href="/account/profile" class=""
                                        >User Profile</a
                                    ><!---->
                                </li>
                                <li>
                                    <a
                                        href="/home"
                                        class="router-link-exact-active router-link-active menu-item-has-children"
                                        >Session</a
                                    >
                                    <ul class="sub-menu">
                                        <li>
                                            <a href="/session/signin" class=""
                                                >Sign In</a
                                            >
                                        </li>
                                        <li>
                                            <a href="/session/signup" class=""
                                                >Register</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/session/forgot-password"
                                                class=""
                                                >Forgot Password</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="/session/thank-you"
                                                class=""
                                                >Thank You</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <!---->
                        </li>
                        <li class="app-nav-item">
                            <a href="/contact">Contact Us</a
                            ><!----><!---->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>

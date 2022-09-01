import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    components: {
        VueSlickCarousel,
    },
    methods: {},
    data() {
        return {
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots: false,
                arrows: false,
            },
        };
    },
};

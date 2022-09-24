export default {
    data: () => ({
        isMobile: false,
        isTablet: false,
    }),

    beforeDestroy() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.onResize, {
                passive: true,
            });
        }
    },

    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },

    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 600;
            this.isTablet = window.innerWidth <= 1024;
        },
    },
};

<template>
    <div class="emb-privacy-policy-wrap">
        <div class="page-title-bar">
            <v-container>
                <h1 class="mb-4">Privacy Policy</h1>
                <p class="text-white font-weight-regular">
                    Your Information is fully secure with us.
                </p>
            </v-container>
        </div>
        <div class="section-gap bg-white">
            <v-container>
                <div class="privacy-page">
                    <div
                        class="emb-card mb-12 pa-6"
                        v-for="(content, index) in contents"
                        :key="index"
                    >
                        <h4 class="mb-4">{{ content.title }}</h4>
                        <p>{{ content.content }}</p>
                    </div>

                    <div class="emb-card pa-6">
                        <h4 class="mb-4">
                            If you have any Legal issue or dispute then contact
                            the following:
                        </h4>
                        <h5>Address:</h5>
                        <p>
                            103,Grand Ways Road <br />
                            Necholim City <br />
                            New York
                        </p>
                        <h5>Email:</h5>
                        <p>email@emaillorem.com</p>
                        <h5>Contact No.</h5>
                        <p>
                            123789-839 00 <br />
                            123789-839 00
                        </p>
                    </div>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "PrivacyComponent",
    data() {
        return {
            contents: [
                {
                    title: "What type of information we gathered on our site",
                    content: `Sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.`,
                },
                {
                    title: "Are our payments and cards information secured?",
                    content: `Sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.`,
                },
                {
                    title: "Are we give information of user to ad agenices?",
                    content: `erum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore. dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque labore, fugit, temporibus ab unde necessitatibus, quasi consectetur rerum dolorum incidunt pariatur. Distinctio a unde cum! Possimus sint expedita cupiditate labore.`,
                },
            ],
        };
    },
};
</script>

<style></style>

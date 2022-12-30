<template>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item>
                    <v-list-item-title>Foo</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Bar</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Fizz</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>Buzz</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

    data: () => ({
        group: null,
    }),

    props: ['drawer'],

    watch: {
        group() {
            this.drawer = false
        },
    },

    computed: {
        mode: {
            get() {
                return this.theme
            },
            set(value) {
                this.theme = value
            }
        },
        open: {
            get() {
                return this.drawer
            },
            set(value) {
                this.$emit('drawer:update', value)
            }
        }
    }
}
</script>
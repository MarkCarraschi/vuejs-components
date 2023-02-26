<template>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

    data: () => ({
        group: null,
        items: [
            { title: 'Home', icon: 'mdi-view-dashboard' },
            { title: 'Account', icon: 'mdi-account-box' },
            { title: 'Payment', icon: 'mdi-credit-card-outline' },
            { title: 'Settings', icon: 'mdi-cog' },
        ]
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
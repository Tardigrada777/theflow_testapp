<template>
    <div v-if="!!client.general" class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                    <img :src="client.general.avatar" class="is-rounded" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ fullName }}</p>
                    <p class="subtitle is-6"> {{ client.job.title }} - {{ client.job.company }} </p>
                </div>
            </div>

            <div class="content">
                <h2 class="subtitle">Contacts</h2>
                <p><strong>Email:</strong> {{ client.contact.email }}</p>
                <p><strong>Phone number:</strong> {{ client.contact.phone }}</p>

                <em>
                    {{ client.address.street }} <br/>
                    A City, {{ client.address.city }}, {{ client.address.zipCode }} <br/>
                    {{ client.address.country }}
                </em>
                
            </div>
        </div>
    </div>
    <DefaultClientDetail v-else/>
</template>

<script>
    import DefaultClientDetail from '@/components/DefaultClientDetail'

    export default {
        components: {
            DefaultClientDetail
        },
        props: {
            client: {
                required: true,
                type: Object
            }
        },
        computed:{
            fullName(){
                return `${this.client.general.firstName} ${this.client.general.lastName}`
            }
        },
        beforeUpdate(){
            this.client = this.$store.getters.getCurrentClient
        }
    }
</script>

<style lang="scss" scoped>

</style>
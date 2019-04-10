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
                    <p class="subtitle is-6"> {{ client.contact.email }} </p>
                </div>
            </div>

            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
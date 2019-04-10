<template>
  <div id="app" class="container is-widescreen">
    <div class="columns wrapper">
      

      <ul class="column is-4 clients_list">
        <li @click.prevent="transition(l)" class="item" v-for="(l, index) in listItems" :key="index">
            <article class="media client_item">
              <figure class="media-left ">
                <p class="image is-64x64">
                  <img :src="l.general.avatar" class="client_photo">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong> {{ l.general.firstName }} {{ l.general.lastName }}</strong>
                    <br>
                    <span class="job_title">{{ l.job.title }}</span>
                  </p>
                </div>
              </div>
          </article>
        </li>
      </ul>
      <ClientDetails class="column is-9" :client="currentClient" />
    </div>
  </div>
</template>

<script>
import ClientDetails from '@/components/ClientDetails.vue'

export default {
  name: 'app',
  components: {
    ClientDetails
  },
  computed: {
    listItems(){
      return this.$store.getters.getClientList
    },
    currentClient(){
      return this.$store.getters.getCurrentClient
    }
  },
  methods: {
    transition(item){
      this.$store.commit('SET_CLIENT', item)
    }
  },
  created(){
    this.$store.dispatch('GET_CLIENTS')
  }
}
</script>

<style lang="scss">
html, body {
  overflow: hidden;
}

.item{
  cursor: pointer;

  &:hover{
    .job_title{
      color: green;
    }
  }

  .client_item{
    align-items: center;
    margin-bottom: 10px;
  }

  .client_photo{
    border-radius: 50%;
  }

  .job_title{
    font-size: 14px;
  }
}

.clients_list{
  height: 100vh;
  overflow-y: scroll; 
}




</style>

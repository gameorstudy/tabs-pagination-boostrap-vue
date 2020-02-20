<template>
  <div class="view mt-3">
    <b-nav class="tab" tabs>
      <b-nav-item
        v-for="(item, index) in tabItems"
        :key="index"
        :active="index === initValue"
        @click="updateIndex(index)"
        >{{ item }}</b-nav-item
      >
    </b-nav>

    <div class="box-view mt-3">
      <template v-if="initValue === 0">
        <Product
          :rows="rows"
          :perPage="perPage"
          :currentPage="currentPage"
          :dataset="dataset"
        ></Product>
      </template>
      <template v-if="initValue === 1">
        <Product
          :rows="priceList.length"
          :perPage="perPage"
          :currentPage="currentPage"
          :dataset="priceList"
        ></Product>
      </template>
      <template v-if="initValue === 2">
        <Product
          :rows="storageList.length"
          :perPage="perPage"
          :currentPage="currentPage"
          :dataset="storageList"
        ></Product>
      </template>
    </div>
    <div class="overflow-auto mt-3">
      <p class="mt-3">Current page: {{ currentPage }}</p>
      <b-pagination
        v-model="currentPage"
        :total-rows="lenList[initValue]"
        :per-page="perPage"
        :limit="limitPage"
        align="right"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '@/components/Product.vue'

export default {
  components: {
    Product
  },
  data() {
    return {
      tabItems: ['brand', 'price', 'storage'],
      initValue: 0,
      currentPage: 1,
      perPage: 6,
      limitPage: 5, // This is the default
      priceList: [
        {
          storage: 256,
          brand: 'black',
          price: 2499,
          id: 1
        },
        {
          storage: 128,
          brand: 'red',
          price: 2199,
          id: 2
        },
        {
          storage: 128,
          brand: 'blue',
          price: 2399,
          id: 3
        },
        {
          storage: 256,
          brand: 'black',
          price: 2499,
          id: 1
        },
        {
          storage: 128,
          brand: 'red',
          price: 2199,
          id: 2
        },
        {
          storage: 128,
          brand: 'blue',
          price: 2399,
          id: 3
        },
        {
          storage: 256,
          brand: 'black',
          price: 2499,
          id: 1
        },
        {
          storage: 128,
          brand: 'red',
          price: 2199,
          id: 2
        },
        {
          storage: 128,
          brand: 'blue',
          price: 2399,
          id: 3
        }
      ],
      storageList: [
        {
          storage: 128,
          brand: 'black',
          price: 1799,
          id: 4
        },
        {
          storage: 256,
          brand: 'white',
          price: 1899,
          id: 5
        }
      ]
    }
  },
  computed: {
    ...mapState(['dataset']),
    rows() {
      return this.dataset.length
    },
    lenList() {
      return [this.rows, this.priceList.length, this.storageList.length]
    }
  },
  created() {
    this.$store.dispatch('fetchData')
  },
  methods: {
    updateIndex(index) {
      this.initValue = index
      this.currentPage = 1
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .box-view {
    width: 100%;
    height: auto;
    padding: 10px 10px 0 10px;
    max-height: 760px;
    overflow: hidden;
  }
}

@media screen and (min-width: 769px) {
  .box-view {
    width: 100%;
    height: auto;
    padding: 10px 10px 0 10px;
    max-height: 350px;
    overflow: hidden;
  }

  /* .items-view {
    width: 100%;
    float: left;
  } */
}

.view {
  width: 600px;
  height: auto;
  margin: 0 auto;
}
</style>

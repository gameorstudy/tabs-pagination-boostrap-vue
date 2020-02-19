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
        <div
          class="items-view"
          v-for="index in Math.ceil(rows / perPage)"
          :key="index"
        >
          <template v-if="index === currentPage">
            <div
              class="item"
              v-for="(item, secIndex) in dataset.slice(
                perPage * (index - 1),
                perPage * index
              )"
              :key="secIndex"
            >
              <p class="storage">{{ item.storage }}GB</p>
              <p class="brand">{{ item.brand }}</p>
              <p class="price">
                ￥ <small>{{ item.price }}</small>
              </p>
            </div>
          </template>
        </div>
      </template>
      <template v-if="initValue === 1">
        <div
          class="items-view"
          v-for="index in Math.ceil(priceList.length / perPage)"
          :key="index"
        >
          <template v-if="index === currentPage">
            <div
              class="item"
              v-for="(item, secIndex) in priceList.slice(
                perPage * (index - 1),
                perPage * index
              )"
              :key="secIndex"
            >
              <p class="storage">{{ item.storage }}GB</p>
              <p class="brand">{{ item.brand }}</p>
              <p class="price">
                ￥ <small>{{ item.price }}</small>
              </p>
            </div>
          </template>
        </div>
      </template>
      <template v-if="initValue === 2">
        <div
          class="items-view"
          v-for="index in Math.ceil(storageList.length / perPage)"
          :key="index"
        >
          <template v-if="index === currentPage">
            <div
              class="item"
              v-for="(item, secIndex) in storageList.slice(
                perPage * (index - 1),
                perPage * index
              )"
              :key="secIndex"
            >
              <p class="storage">{{ item.storage }}GB</p>
              <p class="brand">{{ item.brand }}</p>
              <p class="price">
                ￥ <small>{{ item.price }}</small>
              </p>
            </div>
          </template>
        </div>
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

export default {
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

  .item {
    width: 240px;
    height: 240px;
    border: none;
    float: left;
    margin-bottom: 10px;
    background-color: azure;
    cursor: pointer;
  }

  .item:nth-child(2n + 1) {
    margin-right: 50px;
  }

  .item:nth-child(2n) {
    margin-left: 50px;
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

  .items-view {
    width: 100%;
    float: left;
  }

  .item {
    width: 160px;
    height: 160px;
    border: none;
    float: left;
    margin-bottom: 10px;
    background-color: azure;
    cursor: pointer;
  }

  .item:nth-child(3n + 1) {
    margin-right: 25px;
  }

  .item:nth-child(3n + 2) {
    margin-left: 25px;
    margin-right: 25px;
  }

  .item:nth-child(3n) {
    margin-left: 25px;
  }

  .item > p {
    width: 100%;
    /* margin: 0; */
  }
}

.view {
  width: 600px;
  height: auto;
  margin: 0 auto;
}

.item:hover {
  box-shadow: 0 0 10px#ccc;
  transform: translateX(1px);
}

.item p.storage {
  width: auto;
  height: 1.5rem;
  margin-top: 20px;
  margin-right: 30px;
  color: black;
  font-size: 1.2rem;
  line-height: 100%;
  text-align: right;
  font-weight: bold;
}

.item p.brand {
  color: green;
  width: auto;
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
}

.item p.price {
  width: 100%;
  height: 1rem;
  margin-bottom: 10px;
  line-height: 1rem;
  text-align: center;
}

.item p.price small {
  color: tomato;
}
</style>

<template>
  <div class="view">
    <b-nav class="tab" tabs>
      <b-nav-item
        v-for="(item, index) in tabItems"
        :key="index"
        :active="index === initValue"
        @click="updateActive(index)"
        >{{ item }}</b-nav-item
      >
    </b-nav>
    <div class="item-list">
      <p v-for="(item, index) in listItems" :key="index">
        <template v-if="initValue === index">
          {{ item }}
        </template>
      </p>
    </div>
    <div class="overflow-auto pagination-view mt-3">
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
      <p class="mt-3">Current Page: {{ currentPage }}</p>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        first-number
        last-number
        align="center"
      >
      </b-pagination>
      <div class="overflow-auto">
        <b-pagination-nav
          :link-gen="linkGen"
          :number-of-pages="10"
          use-router
        ></b-pagination-nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabItems: ['brand', 'price', 'storage'],
      initValue: 0,
      listItems: [
        "Here's the brand list.",
        "Here's the price list.",
        "Here's the storage list."
      ],
      perPage: 1,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    updateActive(index) {
      this.initValue = index
    },
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
</script>

<style scoped>
.view {
  width: 100%;
  height: auto;
  margin: 0;
  border: 0;
}

.tab {
  width: 600px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.item-list {
  width: 600px;
  height: auto;
  margin: 0 auto;
}

.item-list p {
  margin: 0;
  width: 100%;
  height: auto;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
}

.pagination-view {
  width: 600px;
  margin: auto;
}
</style>

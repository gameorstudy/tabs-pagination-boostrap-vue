<template>
  <div class="products-view">
    <div
      class="item-view"
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
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    dataset: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.products-view {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 768px) {
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
  /* .items-view {
    width: 100%;
    float: left;
  } */

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

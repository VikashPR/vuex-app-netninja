<template>
  <div id="product-list-two">
    <h1>Product List One</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">₹ {{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {};
  },
};
</script>

<style scoped >
#product-list-two {
  margin: 10px;
  padding: 20px;
  background: rgba(248, 244, 192, 0.863);
  width: 50%;
}
h1 {
  font-weight: 400;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  background: rgb(241, 241, 252);
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 200px;
}
.name {
  font-size: 1.4rem;
}
.price {
  color: orange;
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
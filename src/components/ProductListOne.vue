<template>
  <div id="product-list-one">
    <h1>Product List One</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">₹{{ product.price }}</span>
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
#product-list-one {
  margin: 10px;
  padding: 20px;
  background: rgba(183, 211, 243, 0.863);
  width: 50%;
}
h1 {
  font-weight: 400;
}
ul {
  list-style-type: none;
}
li {
  background: rgb(241, 241, 252);
  padding: 20px;
  margin: 10px;
}
.name {
  display: block;
  font-size: 1.4rem;
}
.price {
  color: violet;
  font-size: 1.2rem;
}
</style>
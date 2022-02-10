<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
export default {
  name: "app",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
  },
  data() {
    return {
      products: [
        { name: "Pubg Panda", price: "10" },
        { name: "subji Panda", price: "40" },
        { name: "noobji Panda", price: "50" },
        { name: "IPA Panda", price: "3240" },
        { name: "Apple Panda", price: "140" },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: Ubuntu, "Helvetica";
  color: #555;
}
</style>
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: "Pubg Panda", price: "10" },
            { name: "subji Panda", price: "40" },
            { name: "noobji Panda", price: "50" },
            { name: "IPA Panda", price: "3240" },
            { name: "Apple Panda", price: "140" },
          ],
    }

})
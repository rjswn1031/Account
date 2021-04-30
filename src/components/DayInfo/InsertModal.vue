<template>
  <div>
      <div>
        <b-modal @hidden='hiddenFunction' @ok='okFunction(modalId, content, price, category)' :id="modalId" title="BootstrapVue">
            카테고리 : 
            <select name="" id="" v-model="category" required>
                    <option :value='value' v-for="(name, value) in optionCategory" :key='name'>{{name}}</option>
                </select><br>
            금액 : <input type="number" v-model="price" required><br>
            내용 : <input type="text" v-model="content" required>
            <!-- {{category}}
            {{price}}
            {{content}} -->
        </b-modal>
      </div>
  </div>
</template>

<script>
export default {
    props: {optionCategory:Object, okFunction:Function, modalId:String},
    data(){
        return {
            content: '',
            price: '',
            category: ''
        }
    },
    methods:{
        hiddenFunction() {
            this.content = '';
            this.price = '';
            this.category = '';
        }
    }
}
</script>

<style>

</style>
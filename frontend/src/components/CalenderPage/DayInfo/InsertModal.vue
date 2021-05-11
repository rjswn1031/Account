<template>
  <div>
      <div>
        <b-modal @hidden='hiddenFunction' @ok='okFunction(modalId, content, price, category)' :id="modalId" title="추가하기">
            <b-container fluid>
                <b-row class="mx-auto">
                    <b-col sm="3">
                        <label :for="`type-number`">카테고리</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-select v-model="category" :options="optionCategory"></b-form-select>
                        <!-- <select name="" id="" v-model="category" required>
                            <option :value='value' v-for="(name, value) in optionCategory" :key='name'>{{name}}</option>
                        </select> -->
                    </b-col>
                </b-row>
                <b-row class="mx-auto" v-for="type in types" :key="type">
                    <b-col sm="3">
                        <label :for="`type-number`">{{type.name}}</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="price" :id="`type-number`" :type="type.value"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mx-auto my-auto">
                    <b-col sm="3">
                        <label :for="type-content">내용</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-textarea v-model="content" :id="type-content" rows="3" max-rows="4"></b-form-textarea>
                    </b-col>
                </b-row>
            </b-container>
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
            category: '',
            types: [
                {'value':'number','name':'금액'},
            ]
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
label { text-align: center; }
</style>
<template>
  <div>
      <div>
        <b-modal @hidden='hiddenFunction' @ok='okFunction(modalId, content, price, category)' :id="modalId" title="가계부 작성">
            <b-tabs content-class="mt-3">
                <b-tab title="수입" active><p>I'm the first tab</p></b-tab>
                <b-tab title="지출"><p>I'm the second tab</p></b-tab>
            </b-tabs>
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
                <b-row class="mx-auto">
                    <b-col sm="3">
                        <label :for="`type-number`">금액</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="price" :id="`type-number`" :type='type'></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mx-auto my-auto">
                    <b-col sm="3">
                        <label :for="`type-content`">내용</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-textarea v-model="content" :id="`type-content`" rows="3" max-rows="4"></b-form-textarea>
                    </b-col>
                </b-row>
            </b-container>
        </b-modal>
      </div>
  </div>
</template>

<script>
export default {
    props: {optionCategory:Array, okFunction:Function, modalId:String},
    data(){
        return {
            content: '',
            price: '',
            category: '',
            type: 'number'
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
<template>
  <div class="container mx-auto   mx-auto ">
    <div class="grid grid-cols-3 mx-12 mt-20 ">
      <div class="col-span-1">
        <span><button class="w-44 mb-3 text-white h-10 bg-red-500" @click="onSubmit()">lọc</button></span>
        <form action="">

          <select class="w-96 h-12 border-2 border-rose-600 " v-model="selected">
            <option disabled value="">Vui lòng chọn một option</option>
            <option v-for="(categoryItem, index) in categories.data" :key="index" :value="categoryItem.id">
              {{ categoryItem.name }}
            </option>
          </select>
        </form>

      </div>

      <div class=" flex justify-between col-span-1 gap-10 flex-wrap"
           v-for="(itemCategoryById, index) in categoryById.data" :key="index">
        <div class="bg-amber-500 w-96 h-auto ">
          <div>
            {{ itemCategoryById.name }}
          </div>
          <div>
            {{ itemCategoryById.quantity }}
          </div>
          <div>
            {{ itemCategoryById.short_desc }}
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {categoryServices} from '@/services/categoryServices.js'

export default {
  data() {
    return {
      categories: [],
      selected: '',
      categoryById: ''
    }
  },
  async mounted() {
    try {
      const response = await categoryServices.getCategory()
      this.categories = response.data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await categoryServices.getCategoryById(this.selected)
        this.categoryById = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
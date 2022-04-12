<template>
  <!-- component -->
  <div class="bg-white p-8 rounded-md w-full">
      <select name="" id="" class=" border-2 border-rose-600  rounded-lg w-96 h-12 " v-model="selected">
        <option disabled value="">Vui lòng chọn một option</option>
        <option value="1">Pending</option>
        <option value="2"> processing</option>
        <option value="3">sent</option>
        <option value="4">received</option>
        <option value="5">cancel</option>
      </select>
       <span><button @click="onsubmit()" class="bg-amber-500 w-32 ml-2 h-12">lọc</button></span>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
            <tr>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tên người mua
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tên sản phẩm
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Mã đơn
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Địa chỉ
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Số điện thoại
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tổng tiền
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="( orderItem,orderIndex ) in data.data" :key="orderIndex">
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ orderItem.name }}
                  </p>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap" v-for="( productItem,productIndex ) in orderItem.products"
                   :key="productIndex">
                  {{ productItem.name }} - sl:{{ productItem.quantity }}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ orderItem.id }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ orderItem.address }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ orderItem.phone }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ orderItem.created_at }}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ orderItem.total }} $
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                      class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                       <span aria-hidden class="absolute inset-0 opacity-50 rounded-full" :class="orderItem.status == 1? 'bg-orange-200':
                             orderItem.status == 2?'bg-green-600':
                             orderItem.status== 3?'bg-blue-500':
                             orderItem == 4 ? 'bg-green-300':'bg-red-400'"></span>
									<span class="relative" v-if="orderItem.status==1">Pending</span>
									<span class="relative" v-if="orderItem.status==2">Processing</span>
									<span class="relative" v-if="orderItem.status==3">Sent</span>
									<span class="relative" v-if="orderItem.status==4">Received</span>
									<span class="relative" v-if="orderItem.status==5">Cancel</span>
									</span>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {orderServices} from "@/services/orderServices";

export default {
  name: "listOrder",
  data() {
    return {
      data: [],
      selected: '',

    }
  },
  async mounted() {
    try {
      const resp = await orderServices.listOrders();
      this.data = resp.data
    } catch (e) {
      alert(e.response.data.message);
    }
  },
  methods:{
  async onsubmit(){
     try {
       const resp = await orderServices.listOrdersByStatus(this.selected);
       this.data = resp.data
     } catch (e) {
       alert(e.response.data.message);
     }
   }
  }
}
</script>

<style scoped>

</style>
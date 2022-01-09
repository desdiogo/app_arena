<template>
  <app-layout title="Customers">
    <template #header>
      <div class="flex justify-between">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          Customers
        </h2>
        <jet-button type="button" @click="show = true">
          New
        </jet-button>
      </div>
    </template>
    <div class="py-12">
      <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Document
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit/Delete</span>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="customer in customers.data" :key="customer.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.id }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.document }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ customer.status }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a
                  :href="route('customer.show', customer.id)"
                  class=" pr-2 text-indigo-600 hover:text-indigo-900"
                >
                  Edit
                </a>
                <a
                  href="#"
                  @click="destroy(customer.id)"
                  class=" text-indigo-600 hover:text-indigo-900"
                >
                  Delete
                </a>
              </td>
            </tr>
            </tbody>
          </table>
          <jet-pagination :links="customers.links" class="p-4" />
        </div>
      </div>
    </div>
  </app-layout>
  <dialog-customer :show="show" @close="show = false" />
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetButton from '@/Jetstream/Button.vue'
import JetLink from '@/Jetstream/Link.vue'
import JetPagination from '@/Jetstream/Pagination.vue'
import DialogCustomer from '@/Shared/DialogCustomer.vue'
import {alert} from "@/core/alert";
import { Inertia } from '@inertiajs/inertia'
import { usePage } from "@inertiajs/inertia-vue3";

export default defineComponent({
  components: {
    AppLayout,
    JetButton,
    JetLink,
    DialogCustomer,
    JetPagination
  },

  props: {
    customers: {
      type: Object,
      default: null
    }
  },

  setup(props) {
    const show = ref(false)

    const page = usePage()
    const flash = computed(() => page.props.value.flash)

    function destroy(id) {
      Inertia.delete(route('customer.destroy', id), {
        onSuccess: () => {
          if(flash.value.error) {
            return alert.error(flash.value.error)
          }

          return alert.success(flash.value.success)
        }
      })
    }

    return {
      show,
      destroy
    }
  }
})
</script>

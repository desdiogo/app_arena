<template>
  <app-layout :title="`Customer #${customer.name}`">
    <template #header>
      <div class="flex justify-between">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          #{{ customer.name }}
        </h2>
      </div>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white p-6 overflow-hidden shadow-xl sm:rounded-lg">
          <div class="flex justify-between">
            <h6 class="font-semibold pb-4 text-xl text-gray-800 leading-tight">
              Customer
            </h6>
            <div>
              <jet-button
                @click="show.customer = true"
                type="button"
                class="mr-2"
              >
                Edit
              </jet-button>
              <jet-button @click="destroyCustomer" type="button">Delete</jet-button>
            </div>
          </div>
          <div class="border-t-2 border-gray-400 pt-2">
            <p>
              <span class="font-semibold">Name: </span>
              <span>{{ customer.name }}</span>
            </p>
            <p>
              <span class="font-semibold">Document: </span>
              <span>{{ customer.document }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white p-6 overflow-hidden shadow-xl sm:rounded-lg">
          <div class="flex justify-between">
            <h6 class="font-semibold pb-4 text-xl text-gray-800 leading-tight">
              Numbers
            </h6>
            <div>
              <jet-button @click="newNumber" type="button">New</jet-button>
            </div>
          </div>
          <template v-for="number in numbers" :key="number.id">
            <div class="pb-2">
              <div class="flex justify-end border-t-2 border-gray-400 pt-2">
                <jet-button @click="showDialogNumber(number)" type="button" class="mr-2">Edit</jet-button>
                <jet-button @click="destroyCustomer(number)" type="button">Delete</jet-button>
              </div>
              <details>
                <summary>
                  <span class="font-semibold">Number: </span>
                  <span>{{ number.number }}</span>
                </summary>
                <p class="font-semibold py-2"><strong>Preferences</strong></p>
                <template v-for="preference in number.preference" :key="preference.id">
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        :checked="preference.value"
                        @change="changePreferences($event, preference, number)"
                      >
                      <span class="ml-2">{{ startCase(preference.name) }}</span>
                    </label>
                  </div>
                </template>
              </details>
            </div>
          </template>
        </div>
      </div>
    </div>
  </app-layout>
  <dialog-customer :show="show.customer" :customer="customer" @close="show.customer = false"/>
  <dialog-number :show="show.number" :number="number" :customer="customer" @close="hideDialogNumber"/>
</template>

<script>
import {computed, defineComponent, ref } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import JetButton from '@/Jetstream/Button.vue'
import DialogCustomer from '@/Shared/DialogCustomer.vue'
import DialogNumber from '@/Shared/DialogNumber.vue'
import {useForm, usePage} from "@inertiajs/inertia-vue3";
import {alert} from "@/core/alert";
import { toast } from "@/core/toast";
import _ from 'lodash'

export default defineComponent({
  components: {
    AppLayout,
    JetButton,
    DialogCustomer,
    DialogNumber
  },

  props: {
    customer: {
      type: Object,
      required: true
    },
    numbers: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const show = ref({
      customer: false,
      number: false,
    })

    const number = ref(null)

    const page = usePage()
    const flash = computed(() => page.props.value.flash)

    const form = useForm({
      id: props.customer.id
    })

    function newNumber() {
      number.value = null
      show.value.number = true
    }

    function showDialogNumber(item) {
      number.value = item
      show.value.number = true
    }

    function hideDialogNumber() {
      show.value.number = false
      number.value = null
    }

    function destroyCustomer(number) {
      const formNumber = useForm({
        customer_id: props.customer.id
      })
      formNumber.delete(route('number.destroy', number.id), {
        onSuccess: () => {
          if (flash.value.error) {
            return alert.error(flash.value.error)
          }

          return alert.success(flash.value.success)
        }
      })
    }

    function destroyNumber() {
      form.delete(route('customer.destroy', props.customer.id), {
        onSuccess: () => {
          if (flash.value.error) {
            return alert.error(flash.value.error)
          }

          return alert.success(flash.value.success)
        }
      })
    }

    function startCase(string) {
      return _.startCase(string)
    }

    function changePreferences(event, preference, number) {
      const formPrerence = useForm({
        customer_id: props.customer.id,
        number_id: number.id,
        name: preference.name,
        value: event.target.checked
      })

      formPrerence.put(route('number_preference.update', preference.id), {
        onSuccess: () => {
          if (flash.value.error) {
            return toast.error(flash.value.error)
          }

          return toast.success(flash.value.success)
        }
      })
    }

    return {
      show,
      number,
      newNumber,
      destroyCustomer,
      startCase,
      changePreferences,
      showDialogNumber,
      hideDialogNumber
    }
  }
})
</script>

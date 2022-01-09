<template>
  <jet-dialog-modal :show="show">
    <template #title>
      {{ !customer ?  'New Customer' : 'Edit Customer'}}
    </template>
    <template #content>
      <form>
        <div>
          <jet-label for="name" value="Name" />
          <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
          <jet-label-error :error="form.errors.name" />
        </div>
        <div class="mt-4">
          <jet-label for="document" value="Document" />
          <jet-input id="document" type="text" class="mt-1 block w-full" v-model="form.document" required />
          <jet-label-error :error="form.errors.document" />
        </div>
      </form>
    </template>
    <template #footer>
      <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click.prevent="submit" type="submit" class="w-full inline-flex justify-center uppercase rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
          Save
        </button>
        <button @click="$emit('close')" type="button" class="mt-3 w-full inline-flex justify-center uppercase rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </template>
  </jet-dialog-modal>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
import JetDialogModal from '@/Jetstream/DialogModal.vue'
import JetLabel from '@/Jetstream/Label.vue'
import JetLabelError from '@/Jetstream/LabelError.vue'
import JetInput from '@/Jetstream/Input.vue'
import { useForm, usePage } from '@inertiajs/inertia-vue3'
import { alert } from "@/core/alert";

export default defineComponent({
  components: {
    JetDialogModal,
    JetLabel,
    JetLabelError,
    JetInput
  },

  props: {
    customer: {
      type: Object,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  emits: ['close'],

  setup(props, { emit }) {
    const customer = props.customer
    const page = usePage()
    const flash = computed(() => page.props.value.flash)

    const form = useForm({
      name: customer ? customer.name : '',
      document: customer ? customer.document :  '',
    })

    function newCustomer() {
      form.post(route('customer.store'), {
        onSuccess: () => {
          if(flash.value.success) {
            form.reset()
            alert.success(flash.value.success)
          }
        }
      })
    }

    function updateCustomer() {
      form.put(route('customer.update', props.customer.id), {
        onSuccess: () => {
          if(flash.value.error) {
            return alert.error(flash.value.error)
          }

          emit('close')
          return alert.success(flash.value.success)
        }
      })
    }

    function submit() {
      if(!customer) {
        return newCustomer()
      }

      return updateCustomer()
    }

    return {
      form,
      submit
    }
  }
})
</script>

<style scoped>

</style>

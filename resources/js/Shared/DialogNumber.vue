<template>
  <jet-dialog-modal :show="show">
    <template #title>
      {{ !number ?  'New Number' : 'Edit Number'}}
    </template>
    <template #content>
      <form>
        <div>
          <jet-label for="number" value="Number" />
          <jet-input id="number" type="text" class="mt-1 block w-full" v-model="form.number" required autofocus autocomplete="name" />
          <jet-label-error :error="form.errors.number" />
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
import { computed, defineComponent, watch } from 'vue'
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
    number: {
      type: Object,
      default: null
    },
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
      id: customer.id,
      number: null,
    })

    function newCustomer() {
      form.post(route('number.store'), {
        onSuccess: () => {
          if(flash.value.success) {
            form.reset()
            emit('close')
            alert.success(flash.value.success)
          }
        }
      })
    }

    function updateCustomer() {
      form.put(route('number.update', props.number.id), {
        onSuccess: () => {
          if(flash.value.error) {
            return alert.error(flash.value.error)
          }

          emit('close')
          form.reset()
          return alert.success(flash.value.success)
        }
      })
    }

    function submit() {
      if(props.number) {
        return updateCustomer()
      }

      return newCustomer()
    }

    watch(() => props.number, (number) => {
      if(number) {
        return form.number = number.number
      }

      form.reset()
    })

    return {
      form,
      submit
    }
  }
})
</script>

<style scoped>

</style>

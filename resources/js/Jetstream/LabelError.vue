 <template>
  <div v-if="error">
    <span class="mt-3 text-sm text-red-600">
      {{ error }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    error: {
      type: String,
      default: null
    }
  }
})
</script>

<button type={type}
  class={`inline-flex items-center justify-center px-5 py-3 border-b-4 leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out ${classes}`}
>
  <slot></slot>
</button>

<script>
  export let type;
  export let classes;
</script>

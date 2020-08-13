<Button
  {...props}
  classes="
    text-white
    bg-indigo-500
    hover:bg-indigo-700
    border-indigo-700
    hover:border-indigo-900
  "
>
  <slot></slot>
</Button>

<script>
  export let props;
  import Button from "./button.svelte";
</script>

<script>
  import Checkout from './Checkout.svelte'
  import {Modal} from '../Modal'
  import {product} from '../../stores/cart'

  export let multiple = true
  export let item;
  let checkout = false

  const addToCart = () => {
    if(item){
      product.set(item)
      if(!multiple) checkout = true
    }
  }
</script>

<style>
  .cart {
    @apply mt-10 text-center;
  }

  .add {
    @apply p-4 rounded-full bg-primary text-white inline-block cursor-pointer;
  }
</style>

<div class="cart">
  <div class="add" on:click={addToCart} aria-label="Clicca per acquistare">Acquista</div>
</div>
<Modal open={checkout} on:close={() => checkout = false}>
  <Checkout />
</Modal>

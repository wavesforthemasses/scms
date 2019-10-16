<script>
  import { product, stripe } from '../../stores/cart'
  import { Form, Input, Button, Textarea } from "../../ui/Form"

  const setStripe = () => {
    if(!$stripe) stripe.set(Stripe(customVars.stripe.pk))
  }

  let attendi = false
  let fatto = false
  let isEmailSet = true

  const submit = async (e) => {
    if(!e.detail.email){
      isEmailSet = false
      return;
    }
    attendi = true
    let response = await fetch('/pay', {
      method: 'POST',
      body: JSON.stringify({product: $product, email: e.detail.email, name: e.detail.nome, message: e.detail.messaggio}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(response){
      attendi = false
      fatto = true
      let data = await response.json()
      if(data && data.status == 'ok'){
        const {error} = await $stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: data.sid.id
        })
      }
    }
    attendi = false
  }
</script>

<style>
  .checkout{
    @apply flex flex-col text-black items-center justify-center p-6 w-full;
  }
  .checkout :global(form){
    @apply w-full max-w-lg;
  }
  .checkout :global(input){
    @apply relative appearance-none block w-full bg-gray-400 text-black rounded py-3 px-4 mb-3 leading-tight;
  }
  .checkout :global(textarea){
    @apply relative appearance-none block w-full bg-gray-400 text-black rounded py-3 px-4 mb-3 leading-tight;
  }
  .checkout :global(.btn){
    @apply bg-secondary mt-6 p-4 rounded-lg uppercase font-body font-bold mx-auto flex;
  }
  .checkout :global(.btn:hover){
    @apply bg-primary;
  }
  h3{
    @apply text-xl mt-0 mb-2 text-center;
  }
  @screen md {
    h3{
      @apply text-2xl;
    }
  }

</style>

{#if $product}
  <div class="checkout">
  {#if fatto}
    <h3>Reindirizzamento al pagamento..</h3>
  {:else}
    {#if attendi}
      <h3>Stiamo salvando la tua richiesta..</h3>
    {:else}
      <Form on:save={submit}>
        <Input name="nome" label="Nome" />
        {#if !isEmailSet} Compila il campo email per proseguire {/if}
        <Input name="email" label="E-Mail" />
        <Textarea name="messaggio" label="Messaggio" />
        <Button pulse={true}>Procedi al pagamento</Button>
      </Form>
    {/if}
  {/if}
  </div>
{:else}
  Devi selezionare almeno un servizio.
{/if}
{#if !$stripe}
  <script src="https://js.stripe.com/v3/" on:load={setStripe}></script>
{/if}

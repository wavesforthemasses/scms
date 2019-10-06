<script>
  import { Form, Input, Button, Textarea } from "../ui/Form"
  let sending = false
  let done = false

  const submit = async (e) => {
    sending = true
    const message = `Name: ${e.detail.name}\n
                     E-Mail: ${e.detail.email}\n
                     Phone: ${e.detail.phone}\n
                     Message: ${e.detail.message}`
    fetch('https://us-central1-carlo-feb6a.cloudfunctions.net/sendMail', {
      method: 'POST',
      body: JSON.stringify({from: e.detail.email, name: e.detail.name, txt: message}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => {
      sending = false
      done = true
    })
    .catch(err => {
      sending = false
    })
  }
</script>

<style>
  .contatto{
    @apply flex flex-col text-black items-center justify-center p-6 w-full min-h-screen;
    background-image: linear-gradient(45deg, #e9e9e9, #f9f9f9);
  }
  .contatto :global(form){
    @apply w-full max-w-lg;
  }
  .contatto :global(input), .contatto :global(textarea){
    @apply relative appearance-none block w-full bg-gray-400 text-black rounded py-3 px-4 mb-3 leading-tight;
  }
  .contatto :global(.btn){
    @apply bg-secondary mt-6 h-16 w-16 rounded-full uppercase font-body font-bold mx-auto block;
  }
  .contatto :global(.btn:hover){
    @apply bg-primary;
  }
  h2{
    @apply text-2xl my-0 mb-2 text-center;
  }
  h3{
    @apply text-lg mt-0 mb-2 text-center;
  }
  @screen md {
    h2{
      @apply text-4xl;
    }
    h3{
      @apply text-2xl;
    }
  }
</style>

<div class="contatto">
{#if done}
  <h2>Thanks!</h2>
  <h3>We'll contact you asap</h3>
{:else}
  {#if sending}
    <h3>Sending..</h3>
  {:else}
    <h2>Contacts us</h2>
    <h3>+1 123 456 78</h3>
    <Form on:save={submit}>
      <Input name="name" label="Name" />
      <Input name="email" label="E-Mail" />
      <Input name="phone" label="Phone" />
      <Textarea name="message" label="Message" />
      <Button pulse={true}>Send</Button>
    </Form>
  {/if}
{/if}
</div>

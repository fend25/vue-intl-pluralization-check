<template>
<div id="app">

  <p>{{$formatDate(new Date(), { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</p>
  <p>{{$formatNumber(7.5, { currency: 'rub' })}}</p>
  <p>{{JSON.stringify(list)}}</p>
  <span v-for="n in list">
			{{$formatMessage({id: 'things'}, {n})}}<br/>
		</span>
</div>
</template>

<script>
const list = new Array(30).fill().map((e, i) => i) //array of numbers from 0 to 29
console.log(list.map(i => [i, typeof i]))

export default {
  name: 'app',
  data() {
    return {
      list
    }
  }
}
</script>

<style lang="scss">

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  text-align: center;
  margin-top: 3rem;
}
</style>

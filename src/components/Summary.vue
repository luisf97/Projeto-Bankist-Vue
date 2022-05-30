<template>
  <div class="summary">
    <p class="summary__label">In</p>
    <p class="summary__value summary__value--in">0000€</p>
    <p class="summary__label">Out</p>
    <p class="summary__value summary__value--out">0000€</p>
    <p class="summary__label">Interest</p>
    <p class="summary__value summary__value--interest">0000€</p>
    <button class="btn--sort">&downarrow; SORT</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.summary {
  grid-row: 5 / 6;
  display: flex;
  align-items: baseline;
  padding: 0 0.3rem;
  margin-top: 1rem;
}

.summary__label {
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 0.8rem;
}

.summary__value {
  font-size: 2.2rem;
  margin-right: 2.5rem;
}

.summary__value--in,
.summary__value--interest {
  color: #66c873;
}

.summary__value--out {
  color: #f5465d;
}

.btn--sort {
  margin-left: auto;
  border: none;
  background: none;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
}
</style>

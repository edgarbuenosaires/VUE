<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h2 class="text-center">Hello, World!</h2>
          </div>
          <div class="card-body">
            <p class="text-center">Welcome to my Vue 2 project with Bootstrap!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.card {
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
}

.card-body {
  padding: 20px;
}

.text-center {
  text-align: center;
}
</style>


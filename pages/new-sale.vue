<template>
  <div class="container my-4">
    <h1>New Sale Setup</h1>
    <div class="alert alert-danger" v-if="currentTrackedSale">
      <strong>Warning:</strong> You have a current sale already being tracked.
      Creating a new sale will delete all currently tracked data. Please
      download your data before starting a new sale.
    </div>
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="startNewSale">
          <div class="bg-light p-3 rounded">
            <div class="form-group mb-4">
              <h2>Sale Name</h2>
              <label for="sale-name" class="sr-only col-form-label"
                >Sale Name</label
              >
              <input
                type="text"
                class="form-control"
                id="sale-name"
                placeholder="Bake Sale"
                v-model="saleInfo.name"
                required
              />
            </div>
            <h2>Categories</h2>
            <div
              v-for="(category, index) in saleInfo.categories"
              :key="index"
              class="d-flex mb-3"
              style="border-bottom: 1px solid var(--secondary)"
            >
              <div style="flex: 1 1 auto">
                <div class="form-group row mb-2">
                  <label
                    :for="`sale-name${index}`"
                    class="col-md-3 col-form-label text-right"
                    >Category Name</label
                  >
                  <div class="col-md-9">
                    <input
                      type="text"
                      class="form-control"
                      :id="`sale-name${index}`"
                      v-model="category.name"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    :for="`category-color${index}`"
                    class="col-md-3 col-form-label text-right"
                    >Color</label
                  >
                  <div class="col-md-9">
                    <input
                      type="color"
                      class="form-control"
                      :id="`category-color${index}`"
                      placeholder="Bake Sale"
                      v-model="category.color"
                    />
                  </div>
                </div>
              </div>
              <button
                class="btn btn-danger align-self-start ml-3"
                @click.prevent="removeCategory(index)"
                v-if="saleInfo.categories.length > 1"
              >
                Delete
              </button>
            </div>
            <button
              @click.prevent="newCategory"
              class="btn btn-outline-secondary"
            >
              <i class="fas fa-plus"></i> Add Category
            </button>
          </div>
          <button type="submit" class="btn btn-dark mt-3">Start Sale</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSale',
  data: function() {
    return {
      currentTrackedSale: false,
      saleInfo: {
        name: '',
        categories: [
          {
            name: '',
            color: '#1C7CD5'
          },
          {
            name: '',
            color: '#5CB85C'
          },
          {
            name: '',
            color: '#F0AD4E'
          },
          {
            name: '',
            color: '#D9534F'
          }
        ]
      }
    }
  },
  methods: {
    newCategory: function() {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16)
      this.saleInfo.categories.push({ name: '', color: `#${randomColor}` })
    },
    removeCategory: function(i) {
      this.saleInfo.categories.splice(i, 1)
    },
    startNewSale: function() {
      new Promise((resolve, reject) => {
        localStorage.setItem('saleName', JSON.stringify(this.saleInfo.name))
        localStorage.setItem('categories', JSON.stringify(this.saleInfo.categories))
        localStorage.setItem('completedTransactions', '[]')
        resolve()
      }).then(() => {
        this.$router.push('/app')
      }).catch(err => {
        alert(err)
      })
    }
  },
  mounted: function() {
    if (localStorage.getItem('completedTransactions')) {
      this.currentTrackedSale = true
    }
  }
}
</script>

<style></style>
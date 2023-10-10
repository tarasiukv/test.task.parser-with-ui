<script setup>

import usePosts from "@composable/post.js";
import SidebarComponent from "@component/SidebarComponent.vue";

const {post, storePost} = usePosts();

</script>

<template>
  <div class="sidebar-mini wrapper">
    <SidebarComponent />
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Quick Example</h3>
                </div>
                <form method="POST">
                  <div class="card-body">
                    <div class="form-group">
                      <label>Title</label>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Title"
                          v-model="post.title"
                      >
                    </div>
                    <div class="form-group">
                      <label>Description</label>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Description"
                          v-model="post.description"
                      >
                    </div>
                    <div class="form-group">
                      <label>Category</label>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Category"
                          v-model="post.category"
                      >
                    </div>
                    <div class="form-group">
                      <label>Creator</label>
                      <input
                          type="text"
                          class="form-control"
                          placeholder="Creator"
                          v-model="post.creator"
                      >
                    </div>
                  </div>
                  <div class="card-footer">
                    <button
                        type="submit"
                        class="btn btn-primary"
                        @click.prevent="storePost"
                    >Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>

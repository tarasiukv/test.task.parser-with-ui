<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
import usePosts from "@composable/post.js";
import SidebarComponent from "@component/SidebarComponent.vue";

const router = useRouter();
const {post, getPost, updatePost} = usePosts();

const post_id = router.currentRoute.value.params.id;

const submitForm = async () => {
  await updatePost(post.value);
  await router.push('/');
}

onMounted(() => {
  getPost(post_id);
})
</script>

<template>
  <div class="sidebar-mini wrapper">
    <SidebarComponent />
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Edit post with ID:</h3>
                </div>
                <form>
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
                      <textarea
                          class="form-control"
                          placeholder="Description"
                          v-model="post.description"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label>Category</label>
                      <textarea
                          class="form-control"
                          placeholder="Category"
                          v-model="post.category"
                      ></textarea>
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
                        @click.prevent="submitForm"
                    >
                      Submit
                    </button>
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

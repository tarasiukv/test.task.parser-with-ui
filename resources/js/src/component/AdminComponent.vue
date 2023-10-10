<script setup>
import {computed, onMounted, ref} from "vue";
import usePosts from "@composable/post.js";
import SidebarComponent from "@component/SidebarComponent.vue";

const {posts, getPosts, searchPosts, destroyPost} = usePosts();
const search_text = ref('');
let searchTimeout = null;

const sortByUpdatedAt = () => {
  posts.value.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    return titleA.localeCompare(titleB);
  });
};

const performSearch = () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchPosts(search_text.value);
  }, 500);
};

onMounted(() => {
    getPosts();
})

const sortedPosts = computed(() => {
  return [...posts.value];
});
</script>

<template>
  <div class="sidebar-mini wrapper">
    <SidebarComponent />
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <h3 class="text-center display-4">POSTS</h3>
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <form action="">
                <div class="input-group">
                  <input
                      type="search"
                      class="form-control form-control-lg"
                      placeholder="What you want?"
                      v-model="search_text"
                  >
                  <div class="input-group-append">
                    <button
                        type="submit"
                        class="btn btn-lg btn-default"
                        @click.prevent="performSearch"
                    >Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                    <button
                        type="submit"
                        class="btn btn-sm btn-default"
                        @click.prevent="sortByUpdatedAt"
                    >Sort by title
                    </button>
                </div>
                <div class="card-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Creator</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="post in sortedPosts"
                        :key="post.id"
                    >
                      <td><a :href="post.link">{{ post.title }}</a></td>

                      <td>{{ post.description }}</td>
                      <td>{{ post.category }}</td>
                      <td>{{post.creator }}</td>
                      <td><button
                          @click.prevent="destroyPost(post.id)"
                      >Del</button>
                        <a :href="'/edit/' + post.id"><button
                        ></button>Edit</a></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
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

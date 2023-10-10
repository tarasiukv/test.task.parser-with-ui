<script setup>
</script>

<template>
  <div class="sidebar-mini wrapper">
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <div class="sidebar">

        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="@img/Admin.png" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="/login" class="d-block">Login</a>
          </div>
        </div>

        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <a href="/" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Posts
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/create" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Create post
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<style scoped>
</style>

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
            <a href="#" class="d-block">Hello, Admin!</a>
          </div>
        </div>

        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Posts
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>DataTables</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Posts</li>
              </ol>
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
                  <h3 class="card-title">DataTable with default features</h3>
                </div>
                <div class="card-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Creator</th>
                    </tr>
                    </thead>
                    <tbody>
<!--                    <tr-->
<!--                        v-for="post in posts"-->
<!--                        :key="post.id"-->
<!--                    >-->
<!--                      <td><a :href="post.link">{{ post.title }}</a></td>-->

<!--                      <td>{{ post.description }}</td>-->
<!--                      <td>{{ post.category }}</td>-->
<!--                      <td>{{post.creator }}</td>-->
<!--                    </tr>-->
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <aside class="control-sidebar control-sidebar-dark">
    </aside>
  </div>
</template>

<style scoped>

</style>

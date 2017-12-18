<template>
    <div>
        <div v-for="category in categories" :key="category.oid">
            <h2>{{ category.name }}</h2>
            <div class="line"></div>
            <el-row :gutter="32">
                <el-col :span="6" v-for="entry in category.object.entries" :key="entry.oid" v-if="entry.type === 'blob'">
                    <el-tooltip class="item" effect="dark"
                                :content="entry.name.replace(/\.(md|MD)$/, '')" placement="top">
                        <router-link :to="`/content/${category.name}/${entry.oid}`" class="el-router-link">
                            <el-card class="box-card">
                                <div class="ellipsis-title">
                                    {{ entry.name.replace(/\.(md|MD)$/, '') }}
                                </div>
                            </el-card>
                        </router-link>
                    </el-tooltip>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
  import utils from './utils'

  export default {
    data() {
      return {
        categories: []
      };
    },
    created() {
      this.getAllData()
    },
    methods: {
      getAllData() {
        const token = this.$store.state.token
        if (token) {
          utils.getAllRes(token).then((res) => {
            const data = res.data
            this.categories = data.repository.object.entries.filter((entry) => entry.type === 'tree')
            this.$store.commit('updateLoadingStatus', { isLoading: false })
          })
        } else {
          utils.getGithubToken().then((data) => {
            utils.getAllRes(data).then((res) => {
              const data = res.data
              this.categories = data.repository.object.entries.filter((entry) => entry.type === 'tree')
              this.$store.commit('updateLoadingStatus', { isLoading: false })
            })
            this.$store.commit('updateToken', {token: data})
          })
        }
      }
    }
  };
</script>
<style scoped>
    .el-router-link {
        text-decoration: none;
    }
    .el-col {
        margin-bottom: 8px;
    }
    .box-card {
        border-left: 3px solid rgba(0, 37, 60, 0.84);
        max-height: 64px;
    }
    .ellipsis-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

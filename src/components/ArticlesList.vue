<template>
  <div>
    <ArticleItem
      v-if="article.urlToImage"
      v-for="article in articles"
      :key="article.publishedAt"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem";
import axios from 'axios';

export default {
  name: "ArticlesList",
  data() {
    return { 
      articles: [],
    };
  },
  components: {
    ArticleItem,
  },
  async mounted() {
    try {
      const { data } = await axios.get('?country=us&category=business&apiKey=065703927c66462286554ada16a686a1')
      this.articles = data.articles;
    } catch (error) {
      throw(error)
    }
  },
};
</script>

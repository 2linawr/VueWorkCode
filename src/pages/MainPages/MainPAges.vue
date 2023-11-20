<template>
   <div className="Main">
      <div class="block_text">
      <span class="text_1">Жилфонд</span>
      <span class="text_2">Пользователь</span>
      </div>
      <div class="block_components">
        <SideBar/>
        <ProfilePages/>
        </div>
    </div>
</template>

<script>
import '/style.scss';
import { mapGetters, mapActions } from "vuex";
import SideBar from '../../components/SideBar/SideBar';
import ProfilePages from '../../components/ProfilePages/ProfilePages';

export default {
  name: "MainPages",
  computed: mapGetters(["allPosts"]),
  methods: mapActions(["fetchPosts"]),
  components:{SideBar,ProfilePages},
};
</script>
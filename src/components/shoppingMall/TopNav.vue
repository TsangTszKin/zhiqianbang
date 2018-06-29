<template>
    <ul class="header_menu fl clearfix">
      	<li>
      		<a href="javascript:void(0);" @click="goPage('/')">职前帮首页</a>
		</li>
    </ul>
</template>

<script>

export default {
    methods: {
        goPage(path) {
            window.location.href = "http://"+ window.location.host + '/#'+ path
        }
    }
};
</script>

<template>
	<div class="test">
		<!-- <network></network> -->
		<div @click='aaa()'>1</div>
		<input type="text" v-model='text'>
		{{vv}}
	</div>
</template>

<script>
	import network from '@/components/netWorkErr'
	import hello from '@/components/Hello'
	export default {
		data () {
			return{
				network:true,
				text:'123',
				a:2
			}
		},
		created () {
			console.log(1);
		},
		methods:{
			aaa:()=>{
				alert('test')
			}
		},
		mounted:()=>{
			console.log($('body'))
		},
		watch:{
		    text:(value)=>{
		        console.log()
		    }
		},
		computed:{
			vv:function(){
				return Number(this.text)+1
			}
		},
		components:{
			network,
			hello
		}
	}
</script>

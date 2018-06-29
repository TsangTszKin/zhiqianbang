<template>
<tr>
	<td class="td1 cate-key">{{filter.label}}：</td>
	<td class="td2">
		<span :class="{on:allSelected}" class="span-all" @click="selectAll">全部</span>
	</td>
	<td class="td3">
	<span v-for="item in filter.options" :class="{on:isOn(item.Value)}" @click="change(item)">{{item.Text}}</span>
	</td>
</tr>
</template>
<script>
export default {
	props: {
		filter: {
			type: Object,
			required: true,
		},
		multiple: { //是否多选
			type: Boolean,
			default: true,
		}
	},
	data: function() {
		return {
			selected: [],
		}
	},
	computed: {
		allSelected: function() {
			return this.selected.length == 0;
		}
	},
	created: function() {
		this.$parent.$on('removeListFilterEvent', this.remove);
	},
	methods: {
		isOn: function(value) {
			return this.selected.indexOf(value) != -1;
		},
		add: function(item) {
			if(this.multiple) {
				if(!this.isOn(item.Value)) {
					this.selected.push(item.Value);
					this.$parent.$emit('addListFilterEvent', this.filter, item);
				}
			} else {
				this.selectAll();
				this.selected.push(item.Value);
				this.$parent.$emit('addListFilterEvent', this.filter, item);
			}
		},
		remove: function(filterItem) {
			if(filterItem.filterName === this.filter.name) {
				var index = this.selected.indexOf(filterItem.filterValue);
				if(index > -1) {
					this.selected.splice(index, 1);
				}
			}
		},
		selectAll: function() {
			this.selected = [];
			this.$parent.$emit('clearListFilterEvent', this.filter);
		},
		change: function(item) {
			var index = this.selected.indexOf(item.Value);
			if(index > -1) {
				this.selected.splice(index, 1);
				this.$parent.$emit('deleteListFilterEvent', this.filter, item);
			} else {
				this.add(item);
			}
		}
	}
}
</script>
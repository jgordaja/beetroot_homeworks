<template>
	<div class="wrapper" id="app">
		<CardForm :form-data="formData"/>
	</div>
</template>

<script>
import CardForm from '@/components/CardForm';

export default {
	name: 'app',
	components: {
		CardForm,
	},
	data() {
		return {
			formData: {
				cardName: '',
				cardNumber: '',
				cardMonth: '',
				cardYear: '',
				cardCvv: ''
			}
		}
	},
}
</script>

<style lang="scss">
	@import '../src/assets/style.scss';
</style>

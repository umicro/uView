<template>
	<view class="content">
		<view class="cropper-wrapper" :style="{ height: cropperOpt.height + 'px' }">
			<canvas
				class="cropper"
				:disable-scroll="true"
				@touchstart="touchStart"
				@touchmove="touchMove"
				@touchend="touchEnd"
				:style="{ width: cropperOpt.width, height: cropperOpt.height, backgroundColor: 'rgba(0, 0, 0, 0.8)' }"
				canvas-id="cropper"
			></canvas>
			<canvas
				class="cropper"
				:disable-scroll="true"
				:style="{
					position: 'fixed',
					top: `-${cropperOpt.width * cropperOpt.pixelRatio}px`,
					left: `-${cropperOpt.height * cropperOpt.pixelRatio}px`,
					width: `${cropperOpt.width * cropperOpt.pixelRatio}px`,
					height: `${cropperOpt.height * cropperOpt.pixelRatio}`
				}"
				canvas-id="targetId"
			></canvas>
		</view>
		<view class="cropper-buttons safe-area-padding" :style="{ height: bottomNavHeight + 'px' }">
			<!-- #ifdef H5 -->
			<view class="upload" @tap="uploadTap">选择图片</view>
			<!-- #endif -->
			<!-- #ifndef H5 -->
			<view class="upload" @tap="uploadTap">重新选择</view>
			<!-- #endif -->
			<view class="getCropperImage" @tap="getCropperImage(false)">确定</view>
		</view>
	</view>
</template>

<script>
import WeCropper from './weCropper.js';
export default {
	props: {
		// 裁剪矩形框的样式，其中可包含的属性为lineWidth-边框宽度(单位rpx)，color: 边框颜色，
		// mask-遮罩颜色，一般设置为一个rgba的透明度，如"rgba(0, 0, 0, 0.35)"
		boundStyle: {
			type: Object,
			default() {
				return {
					lineWidth: 4,
					borderColor: 'rgb(245, 245, 245)',
					mask: 'rgba(0, 0, 0, 0.35)'
				};
			}
		}
		// // 裁剪框宽度，单位rpx
		// rectWidth: {
		// 	type: [String, Number],
		// 	default: 400
		// },
		// // 裁剪框高度，单位rpx
		// rectHeight: {
		// 	type: [String, Number],
		// 	default: 400
		// },
		// // 输出图片宽度，单位rpx
		// destWidth: {
		// 	type: [String, Number],
		// 	default: 400
		// },
		// // 输出图片高度，单位rpx
		// destHeight: {
		// 	type: [String, Number],
		// 	default: 400
		// },
		// // 输出的图片类型，如果发现裁剪的图片很大，可能是因为设置为了"png"，改成"jpg"即可
		// fileType: {
		// 	type: String,
		// 	default: 'jpg',
		// },
		// // 生成的图片质量
		// // H5上无效，目前不考虑使用此参数
		// quality: {
		// 	type: [Number, String],
		// 	default: 1
		// }
	},
	data() {
		return {
			// 底部导航的高度
			bottomNavHeight: 50,
			originWidth: 200,
			width: 0,
			height: 0,
			cropperOpt: {
				id: 'cropper',
				targetId: 'targetCropper',
				pixelRatio: 1,
				width: 0,
				height: 0,
				scale: 2.5,
				zoom: 8,
				cut: {
					x: (this.width - this.originWidth) / 2,
					y: (this.height - this.originWidth) / 2,
					width: this.originWidth,
					height: this.originWidth
				},
				boundStyle: {
					lineWidth: uni.upx2px(this.boundStyle.lineWidth),
					mask: this.boundStyle.mask,
					color: this.boundStyle.borderColor
				}
			},
			// 裁剪框和输出图片的尺寸，高度默认等于宽度
			// 输出图片宽度，单位px
			destWidth: 200,
			// 裁剪框宽度，单位px
			rectWidth: 200,
			// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
			fileType: 'jpg'
		};
	},
	onLoad(option) {
		let rectInfo = uni.getSystemInfoSync();
		this.width = rectInfo.windowWidth;
		this.height = rectInfo.windowHeight - this.bottomNavHeight;
		this.cropperOpt.width = this.width;
		this.cropperOpt.height = this.height;
		this.cropperOpt.pixelRatio = rectInfo.pixelRatio;

		if (option.destWidth) this.destWidth = option.destWidth;
		if (option.rectWidth) {
			let rectWidth = Number(option.rectWidth);
			this.cropperOpt.cut = {
				x: (this.width - rectWidth) / 2,
				y: (this.height - rectWidth) / 2,
				width: rectWidth,
				height: rectWidth
			};
		}
		this.rectWidth = option.rectWidth;
		if (option.fileType) this.fileType = option.fileType;
		// 初始化
		this.cropper = new WeCropper(this.cropperOpt)
			.on('ready', ctx => {
				// wecropper is ready for work!
			})
			.on('beforeImageLoad', ctx => {
				// before picture loaded, i can do something
			})
			.on('imageLoad', ctx => {
				// picture loaded
			})
			.on('beforeDraw', (ctx, instance) => {
				// before canvas draw,i can do something
			});
		// 设置导航栏样式，以免用户在page.json中没有设置为黑色背景
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#000000'
		});
		uni.chooseImage({
			count: 1, // 默认9
			sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			success: res => {
				let src = res.tempFilePaths[0];
				//  获取裁剪图片资源后，给data添加src属性及其值
				this.cropper.pushOrign(src);
			}
		});
	},
	methods: {
		touchStart(e) {
			this.cropper.touchStart(e);
		},
		touchMove(e) {
			this.cropper.touchMove(e);
		},
		touchEnd(e) {
			this.cropper.touchEnd(e);
		},
		getCropperImage(isPre = false) {
			let cropper_opt = {
				destHeight: Number(this.destWidth), // uni.canvasToTempFilePath要求这些参数为数值
				destWidth: Number(this.destWidth),
				fileType: this.fileType
			};
			this.cropper.getCropperImage(cropper_opt, (path, err) => {
				if (err) {
					uni.showModal({
						title: '温馨提示',
						content: err.message
					});
				} else {
					if (isPre) {
						uni.previewImage({
							current: '', // 当前显示图片的 http 链接
							urls: [path] // 需要预览的图片 http 链接列表
						});
					} else {
						uni.$emit('uAvatarCropper', path);
						this.$u.route({
							type: 'back'
						});
					}
				}
			});
		},
		uploadTap() {
			const self = this;
			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					const src = res.tempFilePaths[0];
					//  获取裁剪图片资源后，给data添加src属性及其值

					self.cropper.pushOrign(src);
				}
			});
		}
	}
};
</script>

<style scoped>
.content {
	background: rgba(255, 255, 255, 1);
}

.cropper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99999999999999;
}

.cropper-buttons {
	background-color: #000000;
	color: #eee;
}

.cropper-wrapper {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: #000;
}

.cropper-buttons {
	width: 100vw;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	font-size: 28rpx;
}

.cropper-buttons .upload,
.cropper-buttons .getCropperImage {
	width: 50%;
	text-align: center;
}

.cropper-buttons .upload {
	text-align: left;
	padding-left: 50rpx;
}

.cropper-buttons .getCropperImage {
	text-align: right;
	padding-right: 50rpx;
}
</style>

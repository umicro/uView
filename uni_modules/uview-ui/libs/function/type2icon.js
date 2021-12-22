/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon(type = 'success', fill = false) {
	// 如果非预置值,默认为success
	if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
	let iconName = '';
	// 目前(2019-12-12),info和primary使用同一个图标
	switch (type) {
		case 'primary':
			iconName = 'info-circle';
			break;
		case 'info':
			iconName = 'info-circle';
			break;
		case 'error':
			iconName = 'close-circle';
			break;
		case 'warning':
			iconName = 'error-circle';
			break;
		case 'success':
			iconName = 'checkmark-circle';
			break;
		default:
			iconName = 'checkmark-circle';
	}
	// 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
	if (fill) iconName += '-fill';
	return iconName;
}

export default type2icon

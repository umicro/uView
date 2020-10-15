/**
 * html 解析器
 * @tutorial https://github.com/jin-yufeng/Parser
 * @version 20201014
 * @author JinYufeng
 * @listens MIT
 */
const cfg = require('./config.js'),
	blankChar = cfg.blankChar,
	CssHandler = require('./CssHandler.js'),
	windowWidth = uni.getSystemInfoSync().windowWidth;
var emoji;

function MpHtmlParser(data, options = {}) {
	this.attrs = {};
	this.CssHandler = new CssHandler(options.tagStyle, windowWidth);
	this.data = data;
	this.domain = options.domain;
	this.DOM = [];
	this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0;
	options.prot = (this.domain || '').includes('://') ? this.domain.split('://')[0] : 'http';
	this.options = options;
	this.state = this.Text;
	this.STACK = [];
	// 工具函数
	this.bubble = () => {
		for (var i = this.STACK.length, item; item = this.STACK[--i];) {
			if (cfg.richOnlyTags[item.name]) return false;
			item.c = 1;
		}
		return true;
	}
	this.decode = (val, amp) => {
		var i = -1,
			j, en;
		while (1) {
			if ((i = val.indexOf('&', i + 1)) == -1) break;
			if ((j = val.indexOf(';', i + 2)) == -1) break;
			if (val[i + 1] == '#') {
				en = parseInt((val[i + 2] == 'x' ? '0' : '') + val.substring(i + 2, j));
				if (!isNaN(en)) val = val.substr(0, i) + String.fromCharCode(en) + val.substr(j + 1);
			} else {
				en = val.substring(i + 1, j);
				if (cfg.entities[en] || en == amp)
					val = val.substr(0, i) + (cfg.entities[en] || '&') + val.substr(j + 1);
			}
		}
		return val;
	}
	this.getUrl = url => {
		if (url[0] == '/') {
			if (url[1] == '/') url = this.options.prot + ':' + url;
			else if (this.domain) url = this.domain + url;
		} else if (this.domain && url.indexOf('data:') != 0 && !url.includes('://'))
			url = this.domain + '/' + url;
		return url;
	}
	this.isClose = () => this.data[this.i] == '>' || (this.data[this.i] == '/' && this.data[this.i + 1] == '>');
	this.section = () => this.data.substring(this.start, this.i);
	this.parent = () => this.STACK[this.STACK.length - 1];
	this.siblings = () => this.STACK.length ? this.parent().children : this.DOM;
}
MpHtmlParser.prototype.parse = function() {
	if (emoji) this.data = emoji.parseEmoji(this.data);
	for (var c; c = this.data[this.i]; this.i++)
		this.state(c);
	if (this.state == this.Text) this.setText();
	while (this.STACK.length) this.popNode(this.STACK.pop());
	return this.DOM;
}
// 设置属性
MpHtmlParser.prototype.setAttr = function() {
	var name = this.attrName.toLowerCase(),
		val = this.attrVal;
	if (cfg.boolAttrs[name]) this.attrs[name] = 'T';
	else if (val) {
		if (name == 'src' || (name == 'data-src' && !this.attrs.src)) this.attrs.src = this.getUrl(this.decode(val, 'amp'));
		else if (name == 'href' || name == 'style') this.attrs[name] = this.decode(val, 'amp');
		else if (name.substr(0, 5) != 'data-') this.attrs[name] = val;
	}
	this.attrVal = '';
	while (blankChar[this.data[this.i]]) this.i++;
	if (this.isClose()) this.setNode();
	else {
		this.start = this.i;
		this.state = this.AttrName;
	}
}
// 设置文本节点
MpHtmlParser.prototype.setText = function() {
	var back, text = this.section();
	if (!text) return;
	text = (cfg.onText && cfg.onText(text, () => back = true)) || text;
	if (back) {
		this.data = this.data.substr(0, this.start) + text + this.data.substr(this.i);
		let j = this.start + text.length;
		for (this.i = this.start; this.i < j; this.i++) this.state(this.data[this.i]);
		return;
	}
	if (!this.pre) {
		// 合并空白符
		var flag, tmp = [];
		for (let i = text.length, c; c = text[--i];)
			if (!blankChar[c]) {
				tmp.unshift(c);
				if (!flag) flag = 1;
			} else {
				if (tmp[0] != ' ') tmp.unshift(' ');
				if (c == '\n' && flag == void 0) flag = 0;
			}
		if (flag == 0) return;
		text = tmp.join('');
	}
	this.siblings().push({
		type: 'text',
		text: this.decode(text)
	});
}
// 设置元素节点
MpHtmlParser.prototype.setNode = function() {
	var node = {
			name: this.tagName.toLowerCase(),
			attrs: this.attrs
		},
		close = cfg.selfClosingTags[node.name];
	if (this.options.nodes.length) node.type = 'node';
	this.attrs = {};
	if (!cfg.ignoreTags[node.name]) {
		// 处理属性
		var attrs = node.attrs,
			style = this.CssHandler.match(node.name, attrs, node) + (attrs.style || ''),
			styleObj = {};
		if (attrs.id) {
			if (this.options.compress & 1) attrs.id = void 0;
			else if (this.options.useAnchor) this.bubble();
		}
		if ((this.options.compress & 2) && attrs.class) attrs.class = void 0;
		switch (node.name) {
			case 'a':
			case 'ad': // #ifdef APP-PLUS
			case 'iframe':
				// #endif
				this.bubble();
				break;
			case 'font':
				if (attrs.color) {
					styleObj['color'] = attrs.color;
					attrs.color = void 0;
				}
				if (attrs.face) {
					styleObj['font-family'] = attrs.face;
					attrs.face = void 0;
				}
				if (attrs.size) {
					var size = parseInt(attrs.size);
					if (size < 1) size = 1;
					else if (size > 7) size = 7;
					var map = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
					styleObj['font-size'] = map[size - 1];
					attrs.size = void 0;
				}
				break;
			case 'embed':
				// #ifndef APP-PLUS
				var src = node.attrs.src || '',
					type = node.attrs.type || '';
				if (type.includes('video') || src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8'))
					node.name = 'video';
				else if (type.includes('audio') || src.includes('.m4a') || src.includes('.wav') || src.includes('.mp3') || src.includes(
						'.aac'))
					node.name = 'audio';
				else break;
				if (node.attrs.autostart)
					node.attrs.autoplay = 'T';
				node.attrs.controls = 'T';
				// #endif
				// #ifdef APP-PLUS
				this.bubble();
				break;
				// #endif
			case 'video':
			case 'audio':
				if (!attrs.id) attrs.id = node.name + (++this[`${node.name}Num`]);
				else this[`${node.name}Num`]++;
				if (node.name == 'video') {
					if (this.videoNum > 3)
						node.lazyLoad = 1;
					if (attrs.width) {
						styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
						attrs.width = void 0;
					}
					if (attrs.height) {
						styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
						attrs.height = void 0;
					}
				}
				if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T';
				attrs.source = [];
				if (attrs.src) {
					attrs.source.push(attrs.src);
					attrs.src = void 0;
				}
				this.bubble();
				break;
			case 'td':
			case 'th':
				if (attrs.colspan || attrs.rowspan)
					for (var k = this.STACK.length, item; item = this.STACK[--k];)
						if (item.name == 'table') {
							item.flag = 1;
							break;
						}
		}
		if (attrs.align) {
			if (node.name == 'table') {
				if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';
				else styleObj['float'] = attrs.align;
			} else styleObj['text-align'] = attrs.align;
			attrs.align = void 0;
		}
		// 压缩 style
		var styles = style.split(';');
		style = '';
		for (var i = 0, len = styles.length; i < len; i++) {
			var info = styles[i].split(':');
			if (info.length < 2) continue;
			let key = info[0].trim().toLowerCase(),
				value = info.slice(1).join(':').trim();
			if (value[0] == '-' || value.includes('safe'))
				style += `;${key}:${value}`;
			else if (!styleObj[key] || value.includes('import') || !styleObj[key].includes('import'))
				styleObj[key] = value;
		}
		if (node.name == 'img') {
			if (attrs.src && !attrs.ignore) {
				if (this.bubble())
					attrs.i = (this.imgNum++).toString();
				else attrs.ignore = 'T';
			}
			if (attrs.ignore) {
				style += ';-webkit-touch-callout:none';
				styleObj['max-width'] = '100%';
			}
			var width;
			if (styleObj.width) width = styleObj.width;
			else if (attrs.width) width = attrs.width.includes('%') ? attrs.width : parseFloat(attrs.width) + 'px';
			if (width) {
				styleObj.width = width;
				attrs.width = '100%';
				if (parseInt(width) > windowWidth) {
					styleObj.height = '';
					if (attrs.height) attrs.height = void 0;
				}
			}
			if (styleObj.height) {
				attrs.height = styleObj.height;
				styleObj.height = '';
			} else if (attrs.height && !attrs.height.includes('%'))
				attrs.height = parseFloat(attrs.height) + 'px';
		}
		for (var key in styleObj) {
			var value = styleObj[key];
			if (!value) continue;
			if (key.includes('flex') || key == 'order' || key == 'self-align') node.c = 1;
			// 填充链接
			if (value.includes('url')) {
				var j = value.indexOf('(');
				if (j++ != -1) {
					while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) j++;
					value = value.substr(0, j) + this.getUrl(value.substr(j));
				}
			}
			// 转换 rpx
			else if (value.includes('rpx'))
				value = value.replace(/[0-9.]+\s*rpx/g, $ => parseFloat($) * windowWidth / 750 + 'px');
			else if (key == 'white-space' && value.includes('pre') && !close)
				this.pre = node.pre = true;
			style += `;${key}:${value}`;
		}
		style = style.substr(1);
		if (style) attrs.style = style;
		if (!close) {
			node.children = [];
			if (node.name == 'pre' && cfg.highlight) {
				this.remove(node);
				this.pre = node.pre = true;
			}
			this.siblings().push(node);
			this.STACK.push(node);
		} else if (!cfg.filter || cfg.filter(node, this) != false)
			this.siblings().push(node);
	} else {
		if (!close) this.remove(node);
		else if (node.name == 'source') {
			var parent = this.parent();
			if (parent && (parent.name == 'video' || parent.name == 'audio') && node.attrs.src)
				parent.attrs.source.push(node.attrs.src);
		} else if (node.name == 'base' && !this.domain) this.domain = node.attrs.href;
	}
	if (this.data[this.i] == '/') this.i++;
	this.start = this.i + 1;
	this.state = this.Text;
}
// 移除标签
MpHtmlParser.prototype.remove = function(node) {
	var name = node.name,
		j = this.i;
	// 处理 svg
	var handleSvg = () => {
		var src = this.data.substring(j, this.i + 1);
		node.attrs.xmlns = 'http://www.w3.org/2000/svg';
		for (var key in node.attrs) {
			if (key == 'viewbox') src = ` viewBox="${node.attrs.viewbox}"` + src;
			else if (key != 'style') src = ` ${key}="${node.attrs[key]}"` + src;
		}
		src = '<svg' + src;
		var parent = this.parent();
		if (node.attrs.width == '100%' && parent && (parent.attrs.style || '').includes('inline'))
			parent.attrs.style = 'width:300px;max-width:100%;' + parent.attrs.style;
		this.siblings().push({
			name: 'img',
			attrs: {
				src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
				style: node.attrs.style,
				ignore: 'T'
			}
		})
	}
	if (node.name == 'svg' && this.data[j] == '/') return handleSvg(this.i++);
	while (1) {
		if ((this.i = this.data.indexOf('</', this.i + 1)) == -1) {
			if (name == 'pre' || name == 'svg') this.i = j;
			else this.i = this.data.length;
			return;
		}
		this.start = (this.i += 2);
		while (!blankChar[this.data[this.i]] && !this.isClose()) this.i++;
		if (this.section().toLowerCase() == name) {
			// 代码块高亮
			if (name == 'pre') {
				this.data = this.data.substr(0, j + 1) + cfg.highlight(this.data.substring(j + 1, this.i - 5), node.attrs) + this.data
					.substr(this.i - 5);
				return this.i = j;
			} else if (name == 'style')
				this.CssHandler.getStyle(this.data.substring(j + 1, this.i - 7));
			else if (name == 'title')
				this.DOM.title = this.data.substring(j + 1, this.i - 7);
			if ((this.i = this.data.indexOf('>', this.i)) == -1) this.i = this.data.length;
			if (name == 'svg') handleSvg();
			return;
		}
	}
}
// 节点出栈处理
MpHtmlParser.prototype.popNode = function(node) {
	// 空白符处理
	if (node.pre) {
		node.pre = this.pre = void 0;
		for (let i = this.STACK.length; i--;)
			if (this.STACK[i].pre)
				this.pre = true;
	}
	var siblings = this.siblings(),
		len = siblings.length,
		childs = node.children;
	if (node.name == 'head' || (cfg.filter && cfg.filter(node, this) == false))
		return siblings.pop();
	var attrs = node.attrs;
	// 替换一些标签名
	if (cfg.blockTags[node.name]) node.name = 'div';
	else if (!cfg.trustTags[node.name]) node.name = 'span';
	// 处理列表
	if (node.c && (node.name == 'ul' || node.name == 'ol')) {
		if ((node.attrs.style || '').includes('list-style:none')) {
			for (let i = 0, child; child = childs[i++];)
				if (child.name == 'li')
					child.name = 'div';
		} else if (node.name == 'ul') {
			var floor = 1;
			for (let i = this.STACK.length; i--;)
				if (this.STACK[i].name == 'ul') floor++;
			if (floor != 1)
				for (let i = childs.length; i--;)
					childs[i].floor = floor;
		} else {
			for (let i = 0, num = 1, child; child = childs[i++];)
				if (child.name == 'li') {
					child.type = 'ol';
					child.num = ((num, type) => {
						if (type == 'a') return String.fromCharCode(97 + (num - 1) % 26);
						if (type == 'A') return String.fromCharCode(65 + (num - 1) % 26);
						if (type == 'i' || type == 'I') {
							num = (num - 1) % 99 + 1;
							var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
								ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
								res = (ten[Math.floor(num / 10) - 1] || '') + (one[num % 10 - 1] || '');
							if (type == 'i') return res.toLowerCase();
							return res;
						}
						return num;
					})(num++, attrs.type) + '.';
				}
		}
	}
	// 处理表格
	if (node.name == 'table') {
		var padding = parseFloat(attrs.cellpadding),
			spacing = parseFloat(attrs.cellspacing),
			border = parseFloat(attrs.border);
		if (node.c) {
			if (isNaN(padding)) padding = 2;
			if (isNaN(spacing)) spacing = 2;
		}
		if (border) attrs.style = `border:${border}px solid gray;${attrs.style || ''}`;
		if (node.flag && node.c) {
			// 有 colspan 或 rowspan 且含有链接的表格转为 grid 布局实现
			attrs.style = `${attrs.style || ''};${spacing ? `;grid-gap:${spacing}px` : ';border-left:0;border-top:0'}`;
			var row = 1,
				col = 1,
				colNum,
				trs = [],
				children = [],
				map = {};
			(function f(ns) {
				for (var i = 0; i < ns.length; i++) {
					if (ns[i].name == 'tr') trs.push(ns[i]);
					else f(ns[i].children || []);
				}
			})(node.children)
			for (let i = 0; i < trs.length; i++) {
				for (let j = 0, td; td = trs[i].children[j]; j++) {
					if (td.name == 'td' || td.name == 'th') {
						while (map[row + '.' + col]) col++;
						var cell = {
							name: 'div',
							c: 1,
							attrs: {
								style: (td.attrs.style || '') + (border ? `;border:${border}px solid gray` + (spacing ? '' :
									';border-right:0;border-bottom:0') : '') + (padding ? `;padding:${padding}px` : '')
							},
							children: td.children
						}
						if (td.attrs.colspan) {
							cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + parseInt(td.attrs.colspan));
							if (!td.attrs.rowspan) cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + 1);
							col += parseInt(td.attrs.colspan) - 1;
						}
						if (td.attrs.rowspan) {
							cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + parseInt(td.attrs.rowspan));
							if (!td.attrs.colspan) cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + 1);
							for (var k = 1; k < td.attrs.rowspan; k++) map[(row + k) + '.' + col] = 1;
						}
						children.push(cell);
						col++;
					}
				}
				if (!colNum) {
					colNum = col - 1;
					attrs.style += `;grid-template-columns:repeat(${colNum},auto)`
				}
				col = 1;
				row++;
			}
			node.children = children;
		} else {
			attrs.style = `border-spacing:${spacing}px;${attrs.style || ''}`;
			if (border || padding)
				(function f(ns) {
					for (var i = 0, n; n = ns[i]; i++) {
						if (n.name == 'th' || n.name == 'td') {
							if (border) n.attrs.style = `border:${border}px solid gray;${n.attrs.style || ''}`;
							if (padding) n.attrs.style = `padding:${padding}px;${n.attrs.style || ''}`;
						} else f(n.children || []);
					}
				})(childs)
		}
		if (this.options.autoscroll) {
			var table = Object.assign({}, node);
			node.name = 'div';
			node.attrs = {
				style: 'overflow:scroll'
			}
			node.children = [table];
		}
	}
	this.CssHandler.pop && this.CssHandler.pop(node);
	// 自动压缩
	if (node.name == 'div' && !Object.keys(attrs).length && childs.length == 1 && childs[0].name == 'div')
		siblings[len - 1] = childs[0];
}
// 状态机
MpHtmlParser.prototype.Text = function(c) {
	if (c == '<') {
		var next = this.data[this.i + 1],
			isLetter = c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
		if (isLetter(next)) {
			this.setText();
			this.start = this.i + 1;
			this.state = this.TagName;
		} else if (next == '/') {
			this.setText();
			if (isLetter(this.data[++this.i + 1])) {
				this.start = this.i + 1;
				this.state = this.EndTag;
			} else this.Comment();
		} else if (next == '!' || next == '?') {
			this.setText();
			this.Comment();
		}
	}
}
MpHtmlParser.prototype.Comment = function() {
	var key;
	if (this.data.substring(this.i + 2, this.i + 4) == '--') key = '-->';
	else if (this.data.substring(this.i + 2, this.i + 9) == '[CDATA[') key = ']]>';
	else key = '>';
	if ((this.i = this.data.indexOf(key, this.i + 2)) == -1) this.i = this.data.length;
	else this.i += key.length - 1;
	this.start = this.i + 1;
	this.state = this.Text;
}
MpHtmlParser.prototype.TagName = function(c) {
	if (blankChar[c]) {
		this.tagName = this.section();
		while (blankChar[this.data[this.i]]) this.i++;
		if (this.isClose()) this.setNode();
		else {
			this.start = this.i;
			this.state = this.AttrName;
		}
	} else if (this.isClose()) {
		this.tagName = this.section();
		this.setNode();
	}
}
MpHtmlParser.prototype.AttrName = function(c) {
	if (c == '=' || blankChar[c] || this.isClose()) {
		this.attrName = this.section();
		if (blankChar[c])
			while (blankChar[this.data[++this.i]]);
		if (this.data[this.i] == '=') {
			while (blankChar[this.data[++this.i]]);
			this.start = this.i--;
			this.state = this.AttrValue;
		} else this.setAttr();
	}
}
MpHtmlParser.prototype.AttrValue = function(c) {
	if (c == '"' || c == "'") {
		this.start++;
		if ((this.i = this.data.indexOf(c, this.i + 1)) == -1) return this.i = this.data.length;
		this.attrVal = this.section();
		this.i++;
	} else {
		for (; !blankChar[this.data[this.i]] && !this.isClose(); this.i++);
		this.attrVal = this.section();
	}
	this.setAttr();
}
MpHtmlParser.prototype.EndTag = function(c) {
	if (blankChar[c] || c == '>' || c == '/') {
		var name = this.section().toLowerCase();
		for (var i = this.STACK.length; i--;)
			if (this.STACK[i].name == name) break;
		if (i != -1) {
			var node;
			while ((node = this.STACK.pop()).name != name) this.popNode(node);
			this.popNode(node);
		} else if (name == 'p' || name == 'br')
			this.siblings().push({
				name,
				attrs: {}
			});
		this.i = this.data.indexOf('>', this.i);
		this.start = this.i + 1;
		if (this.i == -1) this.i = this.data.length;
		else this.state = this.Text;
	}
}
module.exports = MpHtmlParser;

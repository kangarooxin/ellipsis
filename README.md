# ellipsis

### Useage:

```javascript
$('.ellipsis').ellipsis();
```
### Options:

```javascript
$('.ellipsis').ellipsis({
    len_attr : 'max-len',  //最大长度属性(优先)
    def_len : 20, //默认最大长度
    set_tit : true,//设置title
    tit_attr : 'title', 
    ignore_chinese_char: false,//是否中文计算2个字符
    end_text : '...'
});
```

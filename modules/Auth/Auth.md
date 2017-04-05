####  登录

|  Tables  |  说明  |
| :------: | :--: |
|   URL    |      |
| HTTP请求方式 | POST |
|  是否需要登录  |  需要  |
|  授权访问限制  |      |
|  授权范围()  |  暂无  |
|   支持格式   | JSON |



表头参数:

|   Tables    | 类型及其范围 |   说明    |
| :---------: | :----: | :-----: |
| devicetoken | string | 设备token |
|    cmos     | string |  系统信息   |
|   cmuuid    | string | 设备唯一识别码 |
|  cmversion  | string |   版本号   |

请求字段说明:

|          |   类型   |  说明  |
| :------: | :----: | :--: |
| username | string | 用户名  |
| password | string |  密码  |

请求参数(默认JSON):

```json
{
   username:"",
   password:""
}
```





返回字段说明:

|   类型   |         |    说明    |
| :----: | :-----: | :------: |
| number | result  | 0成功 1 失败 |
| string | message |   报错信息   |

返回参数(默认JSON):

```json
{	
  	result:0,
  	message:""
}
```

  
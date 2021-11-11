上节课我们学习了如何检测当下的环境变量，一个一同出现的课题，就是如何保存应用的配置数据，并且在不同环境复写对应配置，比如在测试环境，你可以需使用一个与在生产环境不同的数据库或者邮件服务器。这节课我们来看看如何保存应用的配置，并在不同的环境复写它。有非常多实现应用配置管理的包，最受欢迎的就是RC了，但我们发现了一个更好用的包

```bash
$npm i config
```

 创建一个文件夹config，在这个文件夹中可以轻松的查看默认配置以及对应环境的配置：

在config文件夹里先创建一个默认配置文件default.json，这里可以用一个JSON对象来保存配置信息 

```json
{
	"name":"My Express App"
}
```

在config文件夹中创建另一个文件 `development.json`，这个文件可以保存特定给开发环境的配置信息，这里的配置会复写default文件中的对应配置

```js
{
	"name":"My Express App - Development",
  "mail":{
    "host":"dev-mail-server"
  }
}
```

同样的我可以再创建另外一个配置文件production.json

```js
{
	"name":"My Express App - Production",
  "mail":{
    "host":"prod-mail-server"
  }
}
```

回到index.js文件中

```js
const config = require('config')
```

这样就可以得到多种配置信息了  

```js
console.log('Application Name:'+config.get('name'))
console.log('Mail Server:'+config.get('mail.host'))
```

利用这个模块可以轻松的设置不同环境的配置，但是，不能将应用的机密信息保存在这里，例如，不能将数据库密码或者邮件服务器密码存在这里，因为当你在仓库查看源代码时，有权查看源代码的所有人都能看到这些机密信息，事实上，一个非常有名的金融公司应用被黑，因为有人查看了软件仓库的源代码。所以当我们处理这些机密的时候，我们应该将它们保存在环境变量中，我来演示给你看：

 我们来设置一个保存邮件服务器密码的环境变量：

 为了将不同应用的变量区分开，最好在前面前置应用名称，我们假设这里的应用名称为app 

```bash
$export app_password=1234
```

好的，在开发环境中，我们手工设置这些变量，在生产环境中，很可能有个操作面板来操作这些变量，我们将所有的密码和机密保存在环境变量中，然后用config包提供的模块来读取他们。

回到config文件夹中，我们要创建一个新文件 `custom-environment-variables.json` 确保拼写正确，这非常重要，这个文件中映射环境变量和应用配置的关系

password属性要映射我们刚刚在终端控制台里设置的环境变量的值：

```json
{
  "mail":{
    "password":"app_password"
  }
}
```

在 `custom-environment-variables.json` 文件中，只有映射关系，这里只有password到app_password的映射关系

回到index.js文件中，从mail对象的password属性获取环境变量app_password的值：

```js
console.log('Mail Password:' + config.get('mail.password'))
```

### 总结

利用config包提供的接口可以非常方便的得到配置信息，信息源可以是一个JSON文件，也可以是环境变量，甚至是命令行的值，你需要自己看文档研究了
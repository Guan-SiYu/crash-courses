在更加复杂的应用中，我们需要知道应用运行在什么环境中，到底是开发环境还是生产环境，也许你想依照环境类型决定是否开关某功能， 例如，我们只打算在开发环境中开启对HTTP请求的日志记录，只在开发机器中，而非生产机器中。

之前介绍过process对象，它是node的全局对象，通过它可以访问当前的进程，这个对象有一个env属性，它提供我们环境变量的值，有一个标准的环境变量是NODE_ENV，这个值返回的是当前node所在环境的值，如果没有设置，它会返回未定义，同样，我们可以在外部设置它，可以设置为开发/转场/生产。这个例子中我们先打印在控制台中。

```js
console.log(`NODE_ENV:${process.env.NODE_ENV}`)
```

还有另一种获得当前环境变量的方法，它是app对象的一个方法，app对象有个方法是get，它可以活动当前系统的多个设定值，其中一个设定值就是env，这个方法内部就是调用了process.env.NODE_ENV，但是，如果这个值未定义，这个方法默认返回开发环境的值

```js
console.log(`app:${app.get('env')}`)
```

上面两句在控制台的结果为：

```js
NODE_ENV:undefined
app:development
```

这个例子中我们只想在开发环境使用日志，我们将NODE_ENV设置为production：

```js
$export NODE_ENV=production
```

```js
if(app.get('env')==='development'){
	app.use(morgan('tiny'))
	console.log('Morgan enabled')
}
```


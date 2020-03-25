Expected output of `npm start`:

```
A created
B created, will now call this.a.method()
a: method
Main injected b:  B {
  a:
   A { __BuildContext: ContainerBuildContext { context: Map {} } },
  __BuildContext: ContainerBuildContext { context: Map {} } }
```

Actual output:

If `some-lib` is used as linked repository `npm link some-lib` then `a: A` cannot be injected in the library:

```
B created, will now call this.a.method()
[my-projects]\dist\b.js:21
        this.a.method();
               ^

TypeError: Cannot read property 'method' of undefined
    at new B (C:\data\workspaces\some-lib\dist\b.js:21:16)
    at factory (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container-binding-config.js:21:63)
    at iocFactory (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container-binding-config.js:36:30)
    at LocalScope.resolve (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\scopes.js:10:16)
    at IoCBindConfig.getInstance (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container-binding-config.js:71:30)
    at IoCBindConfig.get [as instanceFactory] (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container.js:46:23)
    at paramTypes.map.paramType (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container-binding-config.js:88:29)
    at Array.map (<anonymous>)
    at IoCBindConfig.getParameters (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container-binding-config.js:84:36)
    at factory (C:\data\workspaces\some-app\node_modules\typescript-ioc\dist\container\container-binding-config.js:19:37)
```

# matrix

### 构建

```
pnpm build
```

### 提交代码

```
pnpm commit
```

### ESLint 校验

```
pnpm eslint
```

### link

```bash
# 链接 package 到全局的 node_modules 中，使其可以被另一个使用 pnpm link --global <pkg> 的 package 引用。
cd packages/framework
pnpm link --global

# 将指定的包（<pkg>）从全局 node_modules 链接到 package 的 node_modules，从该 package 中执行或通过 --dir 选项指定。
pnpm link --global matrix-web
```

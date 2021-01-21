## リポジトリ作成〜git にプッシュするまでのコマンド

…or create a new repository on the command line
echo "# react-hooks-02" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:knfjed/react-hooks-02.git
git push -u origin main

## コマンド

- 削除　 git rm src/App.css

## Spread Attributes

参考:https://yami-beta.hateblo.jp/entry/2016/09/06/112330

子の Component へ props を渡す場合，Spread Attributes を用いると，以下のように書き換えられる。

- 1 つずつ渡す場合
  `const props = { foo: "foo", bar: "bar" };`
  `render() {`
  `return <Child foo={props.foo} bar={props.bar} />`
  `}`

- Spread Attributes を用いて渡す場合
  `const props = { foo: "foo", bar: "bar" };`
  `render() {`
  `return <Child {...props} />`
  `}`

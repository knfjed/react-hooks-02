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

# GitHub PR Links New Tab

GitHub Pull Request ページの全てのリンクを新しいタブで開くようにする Chrome 拡張機能です。

## 機能

- PR ページ内の全リンクに `target="_blank"` を付与
- GitHub の動的な DOM 更新にも対応（MutationObserver で監視）
- `rel="noopener noreferrer"` を自動付与しセキュリティを確保

## インストール

1. このリポジトリをクローン
   ```
   git clone https://github.com/kei-kimura/gh-pr-links-newtab.git
   ```
2. Chrome で `chrome://extensions` を開く
3. 右上の「デベロッパーモード」を ON にする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. クローンしたフォルダを選択

## 対象ページ

`https://github.com/*/pull/*` にマッチする全てのページで動作します。

## 技術仕様

- Manifest V3
- 追加の権限不要（`permissions: []`）
- Content Script のみで動作

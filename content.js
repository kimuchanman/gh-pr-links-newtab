// GitHub PR ページの全リンクを新しいタブで開くようにする
function openLinksInNewTab() {
  const links = document.querySelectorAll('a[href]');
  links.forEach((link) => {
    // 既に target="_blank" が設定されているリンクはスキップ
    if (link.target === '_blank') return;

    // ページ内アンカー（#のみ）やjavascript:リンクはスキップ
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript:')) return;

    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

// 初回実行
openLinksInNewTab();

// GitHub は SPA 的に DOM を動的に更新するため、MutationObserver で監視
const observer = new MutationObserver(() => {
  openLinksInNewTab();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

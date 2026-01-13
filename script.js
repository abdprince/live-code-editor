// جلب عنصر المحرر
const editor = document.getElementById("editor");

// إعادة تلوين الأكواد عند أي تعديل
editor.addEventListener("input", () => {
  Prism.highlightElement(editor);
});

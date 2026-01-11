// جلب عناصر المحرر
const htmlInput = document.getElementById("html-code");
const cssInput = document.getElementById("css-code");
const jsInput = document.getElementById("js-code");

// جلب iframe لعرض النتيجة
const resultFrame = document.getElementById("result");


function updatePreview() {
    // محتوى المستخدم
    const html = htmlInput.value;
    const css = cssInput.value;
    const js = jsInput.value;

    // دمج الأكواد في مستند واحد
    const output = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `;

    // عرض النتيجة داخل iframe
    resultFrame.srcdoc = output;
}

htmlInput.addEventListener("input", updatePreview);
cssInput.addEventListener("input", updatePreview);
jsInput.addEventListener("input", updatePreview);

updatePreview();


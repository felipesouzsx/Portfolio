const COPY_BUTTONS = Array.from(document.getElementsByClassName('copy-button'));
const COPY_FIELDS = Array.from(document.getElementsByClassName('copy-field'));


// 'navigator.clipboard.writeText(text)' only works in secure contexts(https)
if (!window.isSecureContext) {
    COPY_BUTTONS.forEach((copyButton) => {
        copyButton.style.display = 'none';
    })
    COPY_FIELDS.forEach((copyField) => {
        copyField.classList.add('centered-text');
    })
}

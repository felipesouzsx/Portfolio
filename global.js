function copyToClipboard(text) {
    try {
        navigator.clipboard.writeText(text);
    } catch (error) {
        alertError(error);
    }
}
function goToPage(url) {
    window.location.href = url;
}
function scrollToBottom() {
    window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'});
}
function alertError(error) {
    window.alert(`An error occurred!\nOops! You shouldn't be seeing this!\n\n${error}`);
}


function handleProjectsButtonClick() { goToPage("/") };
function handleMinecraftButtonClick() { goToPage("/minecraft") }
function handlePixelArtButtonClick() { goToPage("/pixelart") }
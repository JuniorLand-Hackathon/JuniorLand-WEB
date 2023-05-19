export function extractVideoIDFromURL(url) {
    const regExp =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))(?<videoId>(\w|-){11})(?:\S+)?$/;
    return regExp.test(url) ? regExp.exec(url).groups.videoId : null;
}

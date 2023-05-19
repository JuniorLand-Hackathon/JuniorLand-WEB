export function extractVideoIDFromURL(url) {
    const regExp =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))(?<videoId>(\w|-){11})(?:\S+)?$/;
    return regExp.test(url) ? regExp.exec(url).groups.videoId : null;
}

let giftIndex = 0;
let educationIndex = 0;

export function mapResolver(data, giftsSize, educationsSize) {
    const { location } = window;
    const params = new URLSearchParams(location.search);

    const randNum = Math.floor(Math.random() * 4);

    switch (randNum) {
        case 1:
            if (giftIndex <= giftsSize)
                return {
                    ...data,
                    link: `/present/${giftIndex++}?${params.toString()}`,
                };
            else {
                return { ...data, link: '/404' };
            }
        case 2:
            if (educationIndex <= educationsSize)
                return {
                    ...data,
                    link: `/education/${educationIndex++}?${params.toString()}`,
                };
            else {
                return { ...data, link: '/404' };
            }

        default:
            return { ...data, link: `/404` };
    }
}

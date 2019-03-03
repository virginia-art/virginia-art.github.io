const numImgs = 12;

const gallery = $('#gallery');

for (let i = 0; i < numImgs; i++) {
    const img = $(`<img id=img-${i} />`);
    img.attr('src', `images/gallery/${i}.png`);
    img.attr('width', gallery.width() / 4);
    gallery.append(img);
}

$(window).on('resize', () => {
    for (let i = 0; i < numImgs; i++) {
        $(`#gallery img#img-${i}`).attr('width', gallery.width() / 4);
    }
});
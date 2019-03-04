const numImgs = 12;

const gallery = $('#gallery');
const previewContainer = $('#img-preview');

for (let i = 0; i < numImgs; i++) {
    const img = $(`<img id="img-${i}"
                        class="gallery-img"
                        src="images/gallery/${i}.png"
                        width="${gallery.width() / 4}" />`);
    gallery.append(img);
}

$(window).on('resize', () => {
    for (let i = 0; i < numImgs; i++) {
        $(`#gallery img#img-${i}`).attr('width', gallery.width() / 4);
    }
});

$('.gallery-img').on('click', e => {
    const imgNum = $(e.target).attr('id').split('-')[1];
    const preview = $(`<img src="images/gallery/${imgNum}.png" />`);
    previewContainer.append(preview);
    previewContainer.show();
})

$(previewContainer).on('click', () => {
    previewContainer.hide();
    previewContainer.empty();
});
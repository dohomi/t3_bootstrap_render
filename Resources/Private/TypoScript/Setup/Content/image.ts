
# image rendering
tt_content.image.20 {
    border >
    addClassesImage =
    addClassesImage.override.cObject = CASE
    addClassesImage.override.cObject {
        key.field = imageborder
        1 = TEXT
        1.value = img-rounded-wrap
        2 = TEXT
        2.value = img-circle-wrap
        3 = TEXT
        3.value = img-thumbnail-wrap
        4 = TEXT
        4.value = img-responsive-wrap

    }

    layout {
        # above-center
        default.value = <div class="textpic-image-above###CLASSES###">###IMAGES######TEXT###</div>
        # above-right
        1 < .default
        # above-left
        2 < .default

        # below-center
        8.value = <div class="textpic-image-below###CLASSES###">###TEXT######IMAGES###</div>
        # below-right
        9 < .8
        # below-left
        10 < .8

        # intext-right
        17.value = <div class="media media-inline###CLASSES###"><div class="pull-right">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
        # intext-left
        18.value = <div class="media media-inline###CLASSES###"><div class="pull-left">###IMAGES###</div><div class="media-body">###TEXT###</div></div>

        # intext-right-nowrap
        25.value = <div class="media###CLASSES###"><div class="pull-right">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
        # intext-left-nowrap
        26.value = <div class="media###CLASSES###"><div class="pull-left">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
    }

    rendering {
        singleNoCaption {
            allStdWrap {
                wrap >
                innerWrap.cObject {
                    default = TEXT
                    default.value = <div class="image-wrap">|</div>
                    0 = TEXT
                    0.value = <div class="image-wrap text-center">|</div>
                    1 = TEXT
                    1.value = <div class="image-wrap text-right">|</div>
                    8 = TEXT
                    8.value = <div class="image-wrap text-center">|</div>
                    9 = TEXT
                    9.value = <div class="image-wrap text-right">|</div>
                }
            }

            singleStdWrap {
                wrap.override = <figure class="image-figure###CLASSES###"> | </figure>
            }
        }

        noCaption {
            rowStdWrap.wrap = <div class="row image-row"> | </div>
            noRowsStdWrap.wrap = <div class="row image-row"> | </div>
            lastRowStdWrap.wrap = <div class="row image-row"> | </div>
            columnStdWrap.wrap = <div class="image-column###CLASSES###"> | </div>
            columnStdWrap.wrap.override.cObject = CASE
            columnStdWrap.wrap.override.cObject {
                key.field = imagecols
                1 = TEXT
                1.value = <div class="image-column col-sm-1###CLASSES###"> | </div>
                2 = TEXT
                2.value = <div class="image-column col-sm-2###CLASSES###"> | </div>
                3 = TEXT
                3.value = <div class="image-column col-sm-3###CLASSES###"> | </div>
                4 = TEXT
                4.value = <div class="image-column col-sm-4###CLASSES###"> | </div>
                5 = TEXT
                5.value = <div class="image-column col-sm-5###CLASSES###"> | </div>
                6 = TEXT
                6.value = <div class="image-column col-sm-6###CLASSES###"> | </div>
            }

        }

        splitCaption {
            rowStdWrap.wrap < tt_content.image.20.rendering.noCaption.rowStdWrap.wrap
            noRowsStdWrap.wrap < tt_content.image.20.rendering.noCaption.noRowsStdWrap.wrap
            lastRowStdWrap.wrap < tt_content.image.20.rendering.noCaption.lastRowStdWrap.wrap
            columnStdWrap < tt_content.image.20.rendering.noCaption.columnStdWrap.wrap
        }
        globalCaption {
            rowStdWrap.wrap < tt_content.image.20.rendering.noCaption.rowStdWrap.wrap
            noRowsStdWrap.wrap < tt_content.image.20.rendering.noCaption.noRowsStdWrap.wrap
            lastRowStdWrap.wrap < tt_content.image.20.rendering.noCaption.lastRowStdWrap.wrap
            columnStdWrap < tt_content.image.20.rendering.noCaption.columnStdWrap.wrap
        }
    }
}


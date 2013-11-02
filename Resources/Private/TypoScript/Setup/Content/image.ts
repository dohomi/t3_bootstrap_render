

# image stuff
tt_content.image.20 {
    layout {
        default.value = <div class="textpic-image-above###CLASSES###">###IMAGES######TEXT###</div>
        1.value = <div class="textpic-image-above###CLASSES###">###IMAGES######TEXT###</div>
        2.value = <div class="textpic-image-above###CLASSES###">###IMAGES######TEXT###</div>
        1 < .default
        2 < .default

        8.value = <div class="textpic-image-below###CLASSES###">###TEXT######IMAGES###</div>
        9 < .8
        10 < .8

        17.value = <div class="media media-inline###CLASSES###"><div class="pull-right">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
        18.value = <div class="media media-inline###CLASSES###"><div class="pull-left">###IMAGES###</div><div class="media-body">###TEXT###</div></div>

        25.value = <div class="media###CLASSES###"><div class="pull-right">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
        26.value = <div class="media###CLASSES###"><div class="pull-left">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
    }

    rendering {
        noCaption {
            rowStdWrap.wrap = <div class="row image-row"> | </div>
            noRowsStdWrap.wrap = <div class="row image-row"> | </div>
            lastRowStdWrap.wrap = <div class="row image-row"> | </div>
            columnStdWrap.wrap = <div class="csc-textpic-imagecolumn###CLASSES###"> | </div>
            columnStdWrap.wrap.override.cObject = CASE
            columnStdWrap.wrap.override.cObject {
                key.field = imagecols
                1 = TEXT
                1.value = <div class="image-column col-md-1###CLASSES###"> | </div>
                2 = TEXT
                2.value = <div class="image-column col-md-2###CLASSES###"> | </div>
                3 = TEXT
                3.value = <div class="image-column col-md-3###CLASSES###"> | </div>
                4 = TEXT
                4.value = <div class="image-column col-md-4###CLASSES###"> | </div>
                5 = TEXT
                5.value = <div class="image-column col-md-5###CLASSES###"> | </div>
                6 = TEXT
                6.value = <div class="image-column col-md-6###CLASSES###"> | </div>
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


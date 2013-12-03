
# image rendering
tt_content.image.20 {

    imgObjNum.1{
        params = class="wursti"
        override.dataWrap = class="wursti" aria-describedby="csc-longdesc-{field:uid}-{register:IMAGE_NUM_CURRENT}"
    }


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
        default.value = <div class="textpic-image-above">###IMAGES######TEXT###</div>
        # above-right
        1 < .default
        # above-left
        2 < .default

        # below-center
        8.value = <div class="textpic-image-below">###TEXT######IMAGES###</div>
        # below-right
        9 < .8
        # below-left
        10 < .8

        # intext-right
        17.value = <div class="media media-inline"><div class="pull-right">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
        # intext-left
        18.value = <div class="media media-inline"><div class="pull-left">###IMAGES###</div><div class="media-body">###TEXT###</div></div>

        # intext-right-nowrap
        25.value = <div class="media"><div class="pull-right">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
        # intext-left-nowrap
        26.value = <div class="media"><div class="pull-left">###IMAGES###</div><div class="media-body">###TEXT###</div></div>
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
                wrap.override = <figure class="image-figure###CLASSES###">|</figure>
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
                12 = TEXT
                12.value = <div class="image-column col-sm-12###CLASSES###"> | </div>
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

tt_content.textpic {
    20.layout {
        # intext-right-nowrap
        25 = COA
        25 {
            10 = TEXT
            10 {
                insertData = 1
                data = field:tx_t3bootstrap_column
                stdWrap.wrap = 12 - |
                prioriCalc = intval
                wrap = <div class="row"><div class="col-sm-|">###TEXT###</div>
            }
            20 = TEXT
            20 {
                insertData = 1
                data = field:tx_t3bootstrap_column
                wrap = <div class="col-sm-|">###IMAGES###</div></div>
            }
        }
        # intext-left-nowrap
        26 = COA
        26 {
            10 = TEXT
            10 {
                insertData = 1
                data = field:tx_t3bootstrap_column
                wrap = <div class="row"><div class="col-sm-|">###IMAGES###</div>
            }
            20 = TEXT
            20 {
                insertData = 1
                data = field:tx_t3bootstrap_column
                stdWrap.wrap = 12 - |
                prioriCalc = intval
                wrap = <div class="col-sm-|">###TEXT###</div></div>
            }
        }

    }
}
[globalVar = LIT:1 = {$plugin.t3_bootstrap_render.enableImgResponsive}]
tt_content.image.20.rendering.singleNoCaption.singleStdWrap.wrap.override = <figure class="image-figure img-responsive-wrap###CLASSES###">|</figure>
[global]
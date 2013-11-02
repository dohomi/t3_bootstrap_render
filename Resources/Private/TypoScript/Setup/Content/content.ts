lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >



tt_content {

    stdWrap.prefixComment >

    # header.20.if.negate = 0
    # header.20.if.negate = 1

    # Every content element is wrapped inside a div
    #stdWrap.outerWrap = <div class="element">|</div>
    stdWrap.outerWrap = |
    stdWrap.outerWrap.override {
            if {
                    value = 30,31,32,33,34,35,36,37,38,39
                    isInList.field = section_frame
            }

            # responsive hide/show classes
            cObject = CASE
            cObject {
                    #stdWrap.noTrimWrap = |<div class="element |">|</div>|
                    key.field = section_frame

                    30 = TEXT
                    30.value = <div class="element visible-xs">|</div>
                    31 = TEXT
                    31.value = <div class="element visible-sm">|</div>
                    32 = TEXT
                    32.value = <div class="element visible-md">|</div>
                    33 = TEXT
                    33.value = <div class="element visible-lg">|</div>
                    34 = TEXT
                    34.value = <div class="element hidden-xs">|</div>
                    35 = TEXT
                    35.value = <div class="element hidden-sm">|</div>
                    36 = TEXT
                    36.value = <div class="element hidden-md">|</div>
                    37 = TEXT
                    37.value = <div class="element hidden-lg">|</div>
                    38 = TEXT
                    38.value = <div class="element visible-print">|</div>
                    39 = TEXT
                    39.value = <div class="element hidden-print">|</div>
            }
    }


    stdWrap.innerWrap.cObject {
        /*
        default.20.40 = CASE
        default.20.40 {
            key.field = layout

            21 = TEXT
            21.value = alert alert-success
            22 = TEXT
            22.value = alert alert-info
            23 = TEXT
            23.value = alert alert-warning
            24 = TEXT
            24.value = alert alert-danger

            31 = TEXT
            31.value = jumbotron

            41 = TEXT
            41.value = well
            41 = TEXT
            41.value = well well-lg
            42 = TEXT
            42.value = well well-sm

            51 = TEXT
            51.value = panel panel-default
            52 = TEXT
            52.value = panel panel-primary
            53 = TEXT
            53.value = panel panel-info
            54 = TEXT
            54.value = panel panel-warning
            55 = TEXT
            55.value = panel panel-danger

            61 = TEXT
            61.value = bordered-box

            62 = TEXT
            62.value = bordered-box bordered-box-special
        }
        */
        default.30.cObject.default.cObject = CASE
        default.30.cObject.default.cObject {
            key.field = layout

            default = TEXT
            default.value = >|</div>

            21 = TEXT
            21.value = ><div class="alert alert-success">|</div></div>
            22 = TEXT
            22.value = ><div class="alert alert-info">|</div></div>
            23 = TEXT
            23.value = ><div class="alert alert-warning">|</div></div>
            24 = TEXT
            24.value = ><div class="alert alert-danger">|</div></div>

            31 = TEXT
            31.value = ><div class="jumbotron">|</div></div>

            41 = TEXT
            41.value = ><div class="well">|</div></div>
            42 = TEXT
            42.value = ><div class="well well-lg">|</div></div>
            43 = TEXT
            43.value = ><div class="well well-sm">|</div></div>

            # if panel body tag of header must be closed
            51 = TEXT
            51.value = ><div class="panel panel-default">|</div></div></div>
            52 = TEXT
            52.value = ><div class="panel panel-primary">|</div></div></div>
            53 = TEXT
            53.value = ><div class="panel panel-info">|</div></div></div>
            54 = TEXT
            54.value = ><div class="panel panel-warning">|</div></div></div>
            55 = TEXT
            55.value = ><div class="panel panel-danger">|</div></div></div>

            61 = TEXT
            61.value = ><div class="bordered-box">|</div></div>

            62 = TEXT
            62.value = ><div class="bordered-box bordered-box-special">|</div></div>

        }
    }

    # add bootstrap image class
    image.20 {
        border >
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
    }
}

# wrap the rte content into csc-text wrap
tt_content.text.wrap = <div class="csc-text-only">|</div>
TCEFORM.tt_content {



    # section_frame.disabled = 1
    # header_position.disabled = 1
    # layout.disabled = 1
    # colPos.disabled = 1
    date.disabled = 1
    linkToTop.disabled = 1
    image_noRows.disabled = 1

    # Header
    header_layout.altLabels {
        1 = Heading 1 (H1)
        2 = Heading 2 (H2)
        3 = Heading 3 (H3)
        4 = Heading 4 (H4)
        5 = Heading 5 (H5)
    }

    # Header layout
    header_position {
        addItems {
            h1 = .h1
            h2 = .h2
            h3 = .h3
            h4 = .h4
            h5 = .h5
            h6 = .h6
        }
    }

    # imgorient remove items
    imageorient {
        #removeItems = 0,1,8,9
    }

    # remove last items because it changed to col-sm-*
    imagecols {
        label.default = Column grid of each image
        label.de = Grid für jedes Bild
        altLabels {
            1 = col-sm-1
            2 = col-sm-2
            3 = col-sm-3
            4 = col-sm-4
            5 = col-sm-5
            6 = col-sm-6
        }
        addItems {
            12 = col-sm-12
        }
        removeItems = 7,8
    }

    # Sections
    section_frame {
        # removeItems = 1,5,6,10,11,12,20,21
        removeItems = 11,12,20,21,66


        altLabels {
            #0 = Default
            #66 = No Frame - with Jumplist
        }

        addItems {
            # 100 = Default TYPO3 csc-default
            30 = Visible X-Small
            31 = Visible Small
            32 = Visible Medium
            33 = Visible Large
            34 = Hidden X-Small
            35 = Hidden Small
            36 = Hidden Medium
            37 = Hidden Large
            38 = Visible Print
            39 = Hidden Print
        }
    }

    # Change layouts
    layout {
        removeItems = 1,2,3
        addItems {
                21 = Box Success
                22 = Box Info
                23 = Box Warning
                24 = Box Danger
                31 = Jombotron
                41 = Well
                42 = Well Large
                43 = Well Small
                51 = Panel - Default
                52 = Panel - Primary
                53 = Panel - Success
                54 = Panel - Info
                55 = Panel - Warning
                56 = Panel - Danger
                61 = Bordered Box
                62 = Bordered Box special
                71 = Page Header

        }
    }

    # Gridlements remove children in list view
    #tx_gridelements_backend_layout {
    #    removeChildrenFromList = 1
    #}

}


TCEFORM.pages {
    alias.disabled = 1
    categories.disabled = 1
    shortcut_mode.removeItems = 0
    keywords.disabled = 1

    # Backend Layouts
    # backend_layout.PAGE_TSCONFIG_ID >
    # backend_layout_next_level.PAGE_TSCONFIG_ID >


}

tx_news.templateLayouts {
        1 = Slider
        2 = TEST
}

#-------------------------------------------------------------------------------
#        Permissions
#-------------------------------------------------------------------------------
TCEMAIN.permissions {
        # owner
        #userid = 1
        # group
        # groupid < lib.constants.permissions.groupid
        # all rights for group
        #group = 31
}

## you want special styling and classes to show up in the RTE
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3_bootstrap_render/Resources/Private/TsConfig/RteConfig.ts">

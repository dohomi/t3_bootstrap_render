RTE.classes {
    align-left {
        name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyleft
        value = text-align: left;
    }
    align-center {
        name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifycenter
        value = text-align: center;
    }
    align-right {
        name = LLL:EXT:rtehtmlarea/htmlarea/locallang_tooltips.xml:justifyright
        value = text-align: right;
    }
}


RTE.default.buttons.link.properties.class.allowedClasses {
        internalLink {
                class = internal-link
                type = page
                image >
        }
        externalLink {
                class = external-link
                type = url
                image >
        }
        externalLinkInNewWindow {
                class = external-link-new-window
                type = url
                image >
        }
        internalLinkInNewWindow {
                class = internal-link-new-window
                type = page
                image >
        }
        download {
                class = download
                type = file
                image >
        }
        mail {
                class = mail
                type = mail
                image >
        }
}


## RTE Configuration
RTE.default {

    RTEHeightOverride = 500
    RTEWidthOverride = 800

    # RTE Stylesheet for bootstrap css
    # IMPORTANT: adjust path to point to your bootstrap css file
    contentCSS = typo3conf/ext/dmf_template/Resources/Public/styles/css/bt_rte.css

    enableWordClean = 1
    removeTrailingBR = 1
    removeComments = 1
    removeTags = center, sdfield
    removeTagsAndContents = style,script

    hidePStyleItems = article,aside,footer,header,container,section,nav
    buttons.formatblock.removeItems = article,aside,footer,header,container,section,nav

    # Buttons show / hide
    showButtons = formatblock, blockstyle, blockstylelabel, textstyle, textstylelabel, bold, italic,underline, left, center, right, orderedlist, unorderedlist, link, insertcharacter, removeformat, findreplace, undo, redo, outdent, indent,chMode, inserttag,table, tableproperties, rowproperties, rowAinsertabove, rowinsertunder, rowdelete, rowsplit, columninsertbefore, columninsertafter, columndelete, columnsplit, cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, toggleborders, cellmerge
    hideButtons = image,line, insertparagraphafter, insertparagraphbefore, fontstyle, fontsize,strikethrough, lefttoright, righttoleft, bgcolor, textindicator, emoticon, user, spellcheck, subscript, superscript, acronym, about, showhelp, copy, cut, paste, justifyfull, textcolor

    keepButtonGroupTogether = 1

    # show/hide status bar
    showStatusBar =  1

    # use css of contentCSS
    useCSS = 1

    ## Add styles Left, center and right alignment of text in paragraphs and cells.
    inlineStyle.text-alignment (
        p.align-left, h1.align-left, h2.align-left, h3.align-left, h4.align-left, h5.align-left, h6.align-left, td.align-left { text-align: left; }
        p.align-center, h1.align-center, h2.align-center, h3.align-center, h4.align-center, h5.align-center, h6.align-center, td.align-center { text-align: center; }
        p.align-right, h1.align-right, h2.align-right, h3.align-right, h4.align-right, h5.align-right, h6.align-right, td.align-right { text-align: right; }
    )

    ## Use stylesheet file rather than the above mainStyleOverride and inlineStyle properties to style the contents (htmlArea RTE only)
    ignoreMainStyleOverride = 1

    # Classes: block
    buttons.blockstyle.tags.div.allowedClasses = h1,h2,h3,h4,h5,h6,small,text-muted
    buttons.blockstyle.tags.p.allowedClasses < RTE.default.buttons.blockstyle.tags.div.allowedClasses

    # Classes: inline
    buttons.textstyle.tags.span.allowedClasses < RTE.default.buttons.blockstyle.tags.div.allowedClasses
    buttons.image.properties.class.allowedClasses = rte_image


    # Classes for links (These classes should also be in the list of allowedClasses)
    buttons.link.page.properties.class.default =
    buttons.link.url.properties.class.default =
    buttons.link.file.properties.class.default =
    buttons.link.mail.properties.class.default =

    # enable query parameters for links
    buttons.link.queryParametersSelector.enabled = 1
    buttons.link.relAttribute.enabled = 1
    buttons.link.pageIdSelector.enabled = 1


    # show all classes inside of CSS file
    buttons.blockstyle.showTagFreeClasses = 1
    buttons.textstyle.showTagFreeClasses = 1

    # Do not allow insertion of the following tags
    hideTags = font

    # table enable
    hideTableOperationsInToolbar = 0
    keepToggleBordersInToolbar = 1

    # table edit options (cellspacing/ cellpadding / border)
    disableSpacingFieldsetInTableOperations = 1
    disableAlignmentFieldsetInTableOperations = 1
    disableColorFieldsetInTableOperations = 1
    disableLayoutFieldsetInTableOperations = 1
    disableBordersFieldsetInTableOperations = 0

    tags.p.allowedAttribs = class, style, align

    proc {
            # allowed tags
            allowTags = font,table, thead, tbody, tr, th, td, h1, h2, h3, h4, h5, h6, div, p, br, span, ul, ol, li, re, blockquote, strong, em, b, i, u, sub, sup, strike, a, img, nobr, hr, tt, q, cite, abbr, acronym, center
            denyTags =

            # don't convert br to p
            dontConvBRtoParagraph = 1

            # tags outside of div / p allowed
            allowTagsOutside = img,hr,span

            # tags inside of div / p
            keepPDIVattribs = align,class,style,id,span

            # List all class selectors that are allowed on the way to the database
            allowedClasses < RTE.default.buttons.blockstyle.tags.div.allowedClasses
            #allowedClasses = text-right,text-left,text-center

            # html parser einstellungen
            HTMLparser_rte {

                    # allow / deny tags
                    allowTags < RTE.default.proc.allowTags
                    denyTags < RTE.default.proc.denyTags

                    # remove tags
                    #removeTags = font

                    # remove html comments
                    removeComments = 1

                    # handler if tag is unknown (protect / 1 / 0)
                    keepNonMatchedTags = 0
            }


            # Content to database
            entryHTMLparser_db = 1
            entryHTMLparser_db {

                    # allow / deny tags
                    allowTags < RTE.default.proc.allowTags
                    denyTags < RTE.default.proc.denyTags

                    # clean tags
                    noAttrib = b, i, u, strike, sub, sup, strong, em, quote, blockquote, cite, tt, br, center

                    # span,div,font
                    rmTagIfNoAttrib = span,div,font

                    # htmlSpecialChars = 1

                    tags {
                            p.fixAttrib.align.unset >
                            p.allowedAttribs = class,style,align

                            div.fixAttrib.align.unset >

                            hr.allowedAttribs = class

                            # b und i changed to strong and em
                            b.remap = strong
                            i.remap = em

                            ## allow img tag
                            #img >

                            # color fix for firefox
                            span.fixAttrib.style.unset = 1

                            font.allowedAttribs = color, face, size
                    }
            }

    }
}

# Use same processing as on entry to database to clean content pasted into the editor
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db

# FE RTE configuration (htmlArea RTE only)
RTE.default.FE < RTE.default
RTE.default.FE.userElements >
RTE.default.FE.userLinks >

# width of the editor
TCEFORM.tt_content.bodytext.RTEfullScreenWidth= 80%

RTE.default.proc {
        entryHTMLparser_db.tags {
                span.fixAttrib.style.unset >
        }
}

RTE.config {
    ## show classes in the frontend
    tt_content.bodytext.proc.allowedClasses < RTE.default.buttons.blockstyle.tags.div.allowedClasses
    tt_news.bodytext.proc.allowedClasses < RTE.default.buttons.blockstyle.tags.div.allowedClasses
}

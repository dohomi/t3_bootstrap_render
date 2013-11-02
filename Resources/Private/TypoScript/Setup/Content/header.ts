# Remove TYPO3 markup
lib.stdheader.5.prefixComment >
lib.stdheader.stdWrap.prefixComment >

# for bootstrap panels two additional classes included. The closing panel-tag is included in the tt_content wrap
lib.stdheader.stdWrap.outerWrap = <div class="panel-heading">|</div><div class="panel-body">
lib.stdheader.stdWrap.outerWrap.if {
    value = 51,52,53,54,55
    isInList.field = layout
}

# adjust header alignment
lib.stdheader.3.headerClass.cObject.10.noTrimWrap = | | |

# remove firstHeader secondHeader etc. class
lib.stdheader.3.headerClass.cObject.20 >

# add panel-heading if layout panel
lib.stdheader.3.headerClass.cObject.30 = TEXT
lib.stdheader.3.headerClass.cObject.30 {
    value = panel-title
    if {
         value = 51,52,53,54,55
         isInList.field = layout
    }
}

# include page-header if used in layout
lib.stdheader.stdWrap.wrap = <div class="page-header">|</div>
lib.stdheader.stdWrap.wrap.if {
    value = 71
    equals.field = layout
}
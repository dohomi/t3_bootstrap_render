t3_bootstrap_render
===================

TYPO3 extension which enables Twitter Bootstrap 3 elements in backend / frontend

## What is this extension about?
Rendering of Twitter Bootstrap 3 content elements through adjustments of css_styled_content, TsConfig and RTE configuration.

## Installation
Include static TypoScript into your root page. At the moment TYPO3 6.1 is supported and should work as long no other extension are making adjustments on the same objects.
To make sure that this extension overwrites settings of other extensions, place the static TypoScript after all other extensions.

## Usage
The layout of each content element is giving you the choice of several Twitter Bootstrap content elements.
* layout includes several content style wrapper for each content element
* section_frames include visibility section for show/hiding content element through CSS media queries
![section and layouts for content elements](https://raw.github.com/dohomi/t3_bootstrap_render/master/Documentation/Images/layout_section_frame.png)

The image and text/image element is getting hooked to give responsive ratio between text and picture.
* Each picture can get wrapped into a row with specified column grid
* Image to text ratio can get choosed with "Beside Text, Right", "Beside Text, Left"
![image ratio for images](https://raw.github.com/dohomi/t3_bootstrap_render/master/Documentation/Images/image_ratio_grid.png)

## HTMLArea configuration
This extension ships RTE configuration with. You need to point to your local twitter bootstrap CSS file with adjusting your
TSConfig of the page.
![section and layouts for content elements](https://raw.github.com/dohomi/t3_bootstrap_render/master/Documentation/Images/rte_css_pagets.png)

Your RTE would add Twitter styles for "Block styles", "Text style" and "Block format". Your rte could look like this in your backend:
![section and layouts for content elements](https://raw.github.com/dohomi/t3_bootstrap_render/master/Documentation/Images/htmlarea.png)

## Less adjustments
To make all styles work some CSS/LESS adjustments are necessary. Here an example with placing some LESS code after the Twitter less files.

    // image borders
    .img-rounded-wrap img:extend(.img-rounded){}
    .img-circle-wrap img:extend(.img-circle){}
    .img-thumbnail-wrap img:extend(.img-thumbnail){}
    .img-responsive-wrap img:extend(.img-responsive){}

    // extend header styles
    .right:extend(.text-right){}
    .center:extend(.text-center){}
    .left:extend(.text-left){}
    .p-head:extend(.page-header){}

    // inline content text/image
    .media-inline .media-body {
      display: inline;
    }

    // extend align for htmlarea
    .align-left:extend(.text-left){}
    .align-right:extend(.text-right){}
    .align-center:extend(.text-center){}


## Important
This extension is created and written with TYPO3 6.1.5. As css_styled_content is changing between each version I can't guarantee that
all features do their job as expected in other versions. But I plan to adjust the rendering for TYPO3 LTS 6.2 and maybe even later on.

## Links
* Check out the usage of content elements and grids: http://getbootstrap.com/
* Project page of the Twitter framework: https://github.com/twbs/bootstrap



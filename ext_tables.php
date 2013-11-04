<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/6.1', 'T3 Bootstrap 6.1');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/TsConfig/PageTS.ts">');

// change imageborder for bootstrap class
$TCA['tt_content']['columns']['imageborder']['config']['type'] = 'select';
$TCA['tt_content']['columns']['imageborder']['config']['items'] = array(
	array('No border', 0),
	array('Rounded', 1),
	array('Circle', 2),
	array('Thumbnail', 3),
	array('Responsive', 4),
);

// extend tt_content for the ratio between text and image
$tmp_column = array(
	'tx_t3bootstrap_column' => array(
		'exclude' => 1,
		'label' => 'Ratio grid of image to text',
		'config' => array(
			'type' => 'select',
			'items' => array(
				array('Disable responsive', 0),
				array('col-sm-1', 1),
				array('col-sm-2', 2),
				array('col-sm-3', 3),
				array('col-sm-4', 4),
				array('col-sm-5', 5),
				array('col-sm-6', 6),
				array('col-sm-7', 7),
				array('col-sm-8', 8),
				array('col-sm-9', 9),
				array('col-sm-9', 9),
				array('col-sm-10', 10),
				array('col-sm-11', 11),
			),
		)
	)
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tmp_column, 1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content', 'imageblock', 'tx_t3bootstrap_column', 'after:imagecols');

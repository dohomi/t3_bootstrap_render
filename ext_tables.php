<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Production', 'Template main production');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Development', 'Template main develop');


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

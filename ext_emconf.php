<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "t3_bootstrap_render".
 *
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Twitter Bootstrap render',
	'description' => 'Overwrites css_styled_content to match bootstrap elements and formats the output.',
	'category' => 'misc',
	'shy' => 0,
	'version' => '0.1',
	'dependencies' => '',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'alpha',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearcacheonload' => 0,
	'lockType' => '',
	'author' => 'Dominic Garms',
	'author_email' => 'djgarms@gmail.com',
	'author_company' => 'DMFmedia GmbH',
	'CGLcompliance' => NULL,
	'CGLcompliance_note' => NULL,
	'constraints' =>
		array(
			'depends' =>
				array(
					'typo3' => '6.1.0-6.1.99',
					'php' => '5.3.7-0.0.0',
				),
			'conflicts' =>
				array(),
			'suggests' =>
				array(),
		),
);

?>

# enable meta robots
[globalVar = LIT:1 = {$plugin.t3_bootstrap_render.enableMetaRobots}]
page.meta.robots = index, follow
[end]
[globalVar = TSFE:page|tx_t3bootstrap_crawler = 1] && [globalVar = LIT:1 = {$plugin.t3_bootstrap_render.enableMetaRobots}]
page.meta.robots = index, nofollow
[end]
[globalVar = TSFE:page|tx_t3bootstrap_crawler = 2] && [globalVar = LIT:1 = {$plugin.t3_bootstrap_render.enableMetaRobots}]
page.meta.robots = noindex, follow
[end]
[globalVar = TSFE:page|tx_t3bootstrap_crawler = 3] && [globalVar = LIT:1 = {$plugin.t3_bootstrap_render.enableMetaRobots}]
page.meta.robots = noindex, nofollow
[end]

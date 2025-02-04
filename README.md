# Dungeon Boots
***A framework for making grid-based Dungeon Crawler web games using [Three.js](https://threejs.org/).***

## Design Goals

1. Provide a framework to make quick games for jams such as annual The Dungeon Crawlers Jam
	- Be web/JavaScript-based
	- Be easy to modify, easily extendable
2. Satisfy the Definition of a "Dungeon Crawler", aka. DRPG, as outlined here: https://www.dungeoncrawlers.org/definition/
	- First-person exploration
	- Grid-based
		- Instant step movement
		- 90 degree turns
	- Stats
	- At least one character (perferrably allow for a "blob")
	- An end-of-game mechanic, such as a death condition
	- Combat or a similar mechanic for determining outcomes

## Try it out

### Online

Example: https://rocket-boots.github.io/dungeon-boots/

### Locally

1. Download the repo or git clone it
2. `npm i`
3. `npm run serve`
4. Open in your browser (e.g., `http://192.168.1.162:8080/`)
5. If you're making code changes, then build with `npm run watch` or `npm run build`

## Credits

Graphics from https://opengameart.org/content/dungeon-crawl-32x32-tiles-supplemental (https://github.com/crawl/tiles)

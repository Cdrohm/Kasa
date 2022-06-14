//direction + distance + time for swipe/scroll
let swipedir, distX, elapsedTime;
const threshold = 150, //min to swipe
	allowedTime = 300; // max time to swipe

/**
 * Set the startX and startTime variables to the current pageX and current time
 */
export function swipeIn(e, setStartX, setStartTime) {
	let touchObj = e.changedTouches[0];
	setStartX(touchObj.pageX);
	setStartTime(new Date().getTime());
}

/**
 * If swipe left or right min 150 px in < 300 milliseconds
 * consider it 's a swipe
 * @returns Nothing.
 */
export function swipeOut(e, startX, startTime, setStartX, setStartTime, navig) {
	if (!startX || !startTime) return;
	let touchObj = e.changedTouches[0];
	distX = touchObj.pageX - startX;
	elapsedTime = new Date().getTime() - startTime;
	if (elapsedTime <= allowedTime) {
		if (Math.abs(distX) >= threshold) {
			swipedir = distX < 0 ? "R" : "L";
		} else {
			return
		}
	} else {
		return
	}
	// nav launch and reboot startX and startTime
	navig(swipedir);
	swipeReset(setStartX, setStartTime);
}

/**
 * This function resets the startX and startTime variables to null
 */
export function swipeReset(setStartX, setStartTime) {
	setStartX(null);
	setStartTime(null);
}
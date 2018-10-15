// SET CANVAS ELEMENT IN HTML TO VARIABLE
let canvas = document.querySelector('canvas')
// SET WIDTH AND HEIGHT OF CANVAS WITH JAVASCRIPT
canvas.width = innerWidth
canvas.height = innerHeight
// GET CONTEXT OF CANVAS AND SET TO VARIABLE C
let c = canvas.getContext('2d')


// COUNTER
let counter = 3
// CREATE COUNTER FOR IMG NAMES AND PATH
let picNum = 3

// FUNCTION THAT ANIMATES ALL THINGS ON CANVAS
animate = () => {
	// CREATE ANIMATION LOOP BY CALLING ANIMATE INSIDE ITSELF
	requestAnimationFrame(animate)

	// CREATE NEW IMAGE AND SET TO VARIABLE
	let testImg = new Image()
	// ADD SOURCE PATH TO NEW IMAGE WITH A VARIABLE
	// TO BE USED AS A COUNTER TO SWITCH IMAGES
	testImg.src = `images/Microgreen Mix Test Wed${picNum}.jpeg`
	// DRAW IMAGE
	c.drawImage(testImg, 400, 100, 400, 400)
	// INCREASE COUNTER EVERY FRAME
	counter++
	// SWITCH IMAGES IF COUNTER DIVIDED BY 3 IS 0 (EVERY THIRD FRAME)
	if (counter % 3 === 0) {
		picNum++
	}

}
// CALL FUNCTION TO ANIMATE
animate()





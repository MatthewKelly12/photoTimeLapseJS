## JavaScript Photo Time Lapse
Intended for use with a collection of photos to make a timpe lapse video.
### Getting Started

1. 	Clone the repo

		https://github.com/MatthewKelly12/photoTimeLapseJS.git

2. 	Copy all your images to the images folder

3.	Make sure images have the same name and are numbered in succession starting with the number 1

		ex. MicrogreenGrow1.jpeg, MicrogreenGrow2.jpeg, MicrogreenGrow3.jpeg, ect

4.	On line 15, replace the value of the variable pic with the name of your images. ***Note the pic number should not be in the variable, only in the name of your image in image folder

		repo
		// PIC
		let pic = 'Microgreen Mix Test Wed'

		ex.
		//PIC
		let pic = 'myDog'

5.	On line 17, replace the value of the variable picType with the type of file of your images. ***If your file type is already jpeg then there's no need to change it.

		repo
		// PICTYPE
		let picType = 'jpeg'

		ex.
		//PICTYPE
		let picType = 'png'

6. 	Adjust the Height and Width of the Photos.
	On line 19 and line 20, replace the value of the variables imgWidth and imgHeight with new values. Values are pre set to 400.

		repo
		// IMAGE WIDTH AND HEIGHT
		let imgWidth = '400'
		let imgHeight = '400'

		ex.
		// IMAGE WIDTH AND HEIGHT
		let imgWidth = '600'
		let imgHeight = '600'

7. 	Adjust the Location of Photos.
	On line 22 and line 23, replace the value of the variables imgX and imgY with new values.  X coordinate is pre set to 100 and Y coordinate is pre set to 400.

		repo
		// IMG X AND Y COORDINATES
		let imgX = '400'
		let imgY = '100'

		ex.
		// IMG X AND Y COORDINATES
		let imgX = '200'
		let imgY = '200'




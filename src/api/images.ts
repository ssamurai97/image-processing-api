import express from 'express'
import path from 'path'
import fs from 'fs'
import convert_image from '../utilities/convert_images'
import imageExists from '../utilities/check_image'

const images = express.Router()

const displayMessage = `Please choose from these images:
    1. encenadaport 
    2. fjord  
    3. icelandwaterfall 
    4. palmtunnel 
    5. santamonica 
    You will have to pass the query parameters in url: filename(without its extension), width and height separated by an &.

     http://localhost:3000/api/images?filename=santamonica&width=400&height=200
     `

console.log(displayMessage)

const thumbPath = path.join(__dirname, '../../thumb/')

images.get('/', async (req: express.Request, res: express.Response) => {
  const width = Number(req.query.width)
  const height = Number(req.query.height)
  const name: string = req.query.filename as unknown as string
  const digits: RegExp = /[0-9]/
  if (
    digits.test(width.toString()) &&
    digits.test(height.toString()) &&
    width < 10000 &&
    height < 10000
  ) {
    if (Object.keys(req.query).length === 0) {
      //If no parameters provided
      res.send(displayMessage)
    } else if (imageExists(name, width, height, 'thumb')) {
      //If the image already exists in the thumb folder
      res.sendFile(thumbPath + name + '_' + width + '_' + height + '.jpg')
    } else if (imageExists(name, width, height, 'full_images')) {
      //If the image exists in the original full_images folder
      await convert_image(name, width, height)
      res.sendFile(thumbPath + name + '_' + width + '_' + height + '.jpg')
    } else {
      //the image that is being requested does not exist
      res.send(
        `The image that you have requested does not exist.  ${displayMessage}`
      )
    }
  } else {
    res.send(
      'please enter numbers in range [20---500] the width and height field. ^_^'
    )
  }
})

export default images

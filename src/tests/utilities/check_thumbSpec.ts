import path from 'path' 
import imageExists from '../../utilities/check_image' 

const fullimagesPath = path.join(__dirname, '../../../full_images/') 
const thumbPath = path.join(__dirname, '../../../thumb/') 

describe('check if image exist', () => {
  it('expects imageExists function to return false when the image does not exist in the full_images folder', async () => {
    expect(
      imageExists(fullimagesPath + 'no_image.jpg', 200, 200, 'full_images')
    ).toEqual(false) 
  }) 
  it('expects imageExists function to return false when the image does not exist in the thumb folder', async () => {
    expect(imageExists(thumbPath + 'santamonica_400_200.jpg', 400, 200, 'thumb')).toEqual(false
    ) 
  }) 
}) 


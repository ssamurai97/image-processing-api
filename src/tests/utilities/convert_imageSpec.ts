import path from 'path'
import convert from '../../utilities/convert_images'

const fullimagesPath = path.join(__dirname, '../../../full_images/')

describe('check if convert function handles the error', () => {
  it('expects async convert function to throw an error when the image does not exist', async () => {
    const message = await convert(fullimagesPath + 'abc.jpg', 200, 200)
    expect(message).toEqual('error')
  })
})

describe('test promise', () => {
  it('expects async convert function to be resolved', async () => {
    expect(
      convert(fullimagesPath + 'santamonica_400_200.jpg', 400, 200)
    ).toBeTruthy()
  })
})

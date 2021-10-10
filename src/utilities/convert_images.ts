import sharp from 'sharp'
import path from 'path'

let fullimagesPath = path.join(__dirname, '../../full_images/')
const out_path= path.join(__dirname,'../../thumb/')
console.log(`------ full_images path is: ${fullimagesPath}------------\n\n`)

async function convert_image(
  name: string,
  width: number,
  height: number
): Promise<string> {
  let fullPath = fullimagesPath + name + '.jpg'
  try {
    await sharp(fullPath)
      .resize(width, height)
      .toFile(out_path + name + '_' + width + '_' + height + '.jpg')
    return 'success'
  } catch (error) {
    return 'error'
  }
}

export default convert_image

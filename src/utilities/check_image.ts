import fs from 'fs'
import path from 'path'

function imageExists(
  name: string,
  width: number,
  height: number,
  folder: string
): boolean {
  const folderPath = '../../' + folder + '/'
  const filePath = path.join(__dirname, folderPath)
  let fileName = ''
  console.log('file path', filePath)
  if (folder === 'thumb') {
    fileName = name + '_' + width + '_' + height + '.jpg'
  } else if (folder === 'full_images') {
    fileName = name + '.jpg'
    const imagePath = path.join(__dirname, '../../full_images/')
  }
  // returns true if the file exists
  if (fs.existsSync(filePath + fileName)) {
    return true
  }
  fs.access(filePath + fileName, (err) => {
    return !err
  })
  return false
}

export default imageExists

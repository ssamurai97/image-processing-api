import * as shell from 'shelljs'


shell.cp("-R", "src/views", "dist/src")
shell.cp("-R","full_images", "dist/")
shell.cp("-R","thumb", "dist/")


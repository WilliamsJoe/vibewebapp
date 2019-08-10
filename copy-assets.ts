import * as shell from 'shelljs';

shell.mkdir('-p', 'src/assets/libs');
shell.mkdir('-p', 'src/assets/fonts');
shell.mkdir('-p', 'src/assets/images');
shell.mkdir('-p', 'src/assets/styles');
shell.mkdir('-p', 'src/assets/scripts');
shell.cp('-R', 'src/assets/libs', 'dist/assets/libs');
shell.cp('-R', 'src/assets/fonts', 'dist/assets/fonts');
shell.cp('-R', 'src/assets/images', 'dist/assets/images');
shell.cp('-R', 'src/assets/scripts', 'dist/assets/scripts');

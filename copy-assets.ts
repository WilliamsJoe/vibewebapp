import * as shell from 'shelljs';

shell.cp('-R', 'src/assets/libs', 'dist/assets/libs');
shell.cp('-R', 'src/assets/fonts', 'dist/assets/fonts');
shell.cp('-R', 'src/assets/images', 'dist/assets/images');
shell.cp('-R', 'src/assets/styles', 'dist/assets/styles');
shell.cp('-R', 'src/assets/scripts', 'dist/assets/scripts');

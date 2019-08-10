import * as shell from 'shelljs';

shell.cp('-R', 'src/assets/libs', 'dist/assets');
shell.cp('-R', 'src/assets/fonts', 'dist/assets');
shell.cp('-R', 'src/assets/images', 'dist/assets');
shell.cp('-R', 'src/assets/scripts', 'dist/assets');

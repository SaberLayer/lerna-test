#!/usr/bin/env node

'use strict';

import cli from '../src/cli.js';
import a from '@saber-cli-dev/saber-a';
import b from '@saber-cli-dev/saber-b';

console.log(a());
console.log(b());

cli().parse(process.argv.slice(2));
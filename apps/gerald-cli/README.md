@gerald/cli
===========

Gerald CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@gerald/cli.svg)](https://npmjs.org/package/@gerald/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@gerald/cli.svg)](https://npmjs.org/package/@gerald/cli)
[![License](https://img.shields.io/npm/l/@gerald/cli.svg)](https://github.com/TylerGarlick/gerald/blob/master/package.json)

<!-- toc -->

* [Usage](#usage)
* [Commands](#commands)

<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @gerald/cli
$ gerald COMMAND
running command...
$ gerald (-v|--version|version)
@gerald/cli/1.0.0 darwin-x64 node-v14.16.0
$ gerald --help [COMMAND]
USAGE
  $ gerald COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

* [`gerald hello [FILE]`](#gerald-hello-file)
* [`gerald help [COMMAND]`](#gerald-help-command)

## `gerald hello [FILE]`

describe the command here

```
USAGE
  $ gerald hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gerald hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/TylerGarlick/gerald/blob/v1.0.0/src/commands/hello.ts)_

## `gerald help [COMMAND]`

display help for gerald

```
USAGE
  $ gerald help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->

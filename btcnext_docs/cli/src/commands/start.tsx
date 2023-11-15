import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';

const internalConfig = require.resolve('../docusaurus/config/start.js');

export class Start extends Command {
  static paths = [[`start`], [`tutorial`, `start`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Preview the provided directory (the current working directory by default).`,
  });

  async execute() {
    const directory = this.directory || '.';

    return await shell(
      'npx docusaurus start --config',
      [internalConfig, directory],
      {
        env: {
          IOTA_WIKI_DIRECTORY: directory,
          ...process.env,
        },
      },
    );
  }
}

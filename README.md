### How to

#### Prerequisites

- Emulator running locally
- `npm install -g appium@next && appium` - in a separate terminal
- `.env` file or environment vars
    - `LOG_LEVEL`
    - `APPIUM_HOST`
    - `APPIUM_PORT`

1. `yarn install`
2. `yarn test`
3. Report located at `./mochawesome-report/index.html`


#### Github actions
1. Workflow can be dispatched manually and on new commits
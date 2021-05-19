require('dotenv').config();
const fs = require('fs');
const { AutotaskClient } = require('defender-autotask-client');
const { DEFENDER_API_KEY, DEFENDER_SECRET_KEY } = process.env;
const client = new AutotaskClient({ apiKey: DEFENDER_API_KEY, apiSecret: DEFENDER_SECRET_KEY });

async function deploy() {
  const autotask = {
    foo: {
      id: "FOO_AUTOTASK_ID",
      path: "dist/foo.js"
    },
  }[process.argv[2]];

  try {
    const foo = await client.updateCodeFromSources(autotask.id, {
      'index.js': fs.readFileSync(autotask.path, 'utf-8')
    });

    console.log(foo);
  } catch (e) {
    console.error(e);
  }
}

deploy();

import { DefenderRelaySigner, DefenderRelayProvider } from 'defender-relay-client/lib/ethers';
import { Relayer, RelayerParams } from 'defender-relay-client/lib/relayer';

export async function handler(event: AutotaskEvent) {
  // Access Autotask secrets
  // --
  // const { mySecret } = event.secrets;

  // Access webhook request properties
  // --
  // const { body } = event.request;
  // const { myParam } = body;

  // Using vanilla Relay
  // --
  // const relayer = new Relayer(event);
  // const tx = await relayer.sendTransaction({
  //   to, value, data, gasLimit, speed: 'fast'
  // });
  // const erc20 = new ethers.Contract(ERC20_ADDRESS, ERC20_ABI, signer);

  // Using Relay + ethers.js
  // --
  // const provider = new DefenderRelayProvider(event);
  // const signer = new DefenderRelaySigner(event, provider, { speed: 'fast' });

  return ":)";
}


type WebhookRequest = {
  body?: object;
  queryParameters?: { [name: string]: string };
  headers?: { [name: string]: string };
}

type Secrets = {
  [name: string]: string
}

type AutotaskEvent = RelayerParams & {
  secrets?: Secrets;
  request?: WebhookRequest;
}

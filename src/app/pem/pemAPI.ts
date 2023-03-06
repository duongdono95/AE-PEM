export const connect = async () => {
  const res = await fetch('/negotiate');
  const data = await res.json();
  const ws = new WebSocket(data.url, 'json.webpubsub.azure.v1');
  const ackId = 0;
  ws.onopen = () => {
    console.log(ws);
    console.log('connected');
  };
  ws.onerror = evt => {
    console.error(`WebSocket error ${evt}`);
  };
  ws.onclose = evt => {
    console.error(`WebSocket closed, code: ${evt.code}`);
  };
  // ws.onmessage = eventHandler;
};

export async function getUserInfo() {
  const response = await fetch('/.auth/me');

  const payload = await response.json();
  console.log(payload);
  const { clientPrincipal } = payload;
  return clientPrincipal;
}

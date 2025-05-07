const worker = new Worker('./dnssec.worker.js');
worker.postMessage({ response });
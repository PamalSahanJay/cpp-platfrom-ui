import base from './base';
import dev from './dev';
// import qa from './qa';
// import uat from './uat';
// import prod from './prod';
import debug from 'debug';

let environment: typeof base;
const log = debug('testbank admin:env');

switch (window.location.hostname) {
  case 'local.admin.testbank.wiley.host':
    log('local env loaded');
    environment = { ...base, ...dev };
    break;
//   case 'dev.admin.testbank.wiley.host':
//     log('dev env loaded');
//     environment = { ...base, ...dev };
//     break;
//   case 'qa.admin.testbank.wiley.host':
//     log('qa env loaded');
//     environment = { ...base, ...qa };
//     break;
//   case 'uat.admin.testbank.wiley.host':
//     log('uat env loaded');
//     environment = { ...base, ...uat };
//     break;
//   case 'admin.testbank.wiley.host':
//     log('prod env loaded');
//     environment = { ...base, ...prod };
//     break;
  default:
    log(`${window.location.hostname} not a recognized host - dev loaded`);
    environment = { ...base };
}

const env = environment;
export default env;

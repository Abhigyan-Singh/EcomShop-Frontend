import { local } from './environment';
import { dev} from './environment.dev';
import { test } from './environment.test';
import { prod } from './environment.prod';
import { stage } from './environment.stage';

let config = local
if (process.env.REACT_APP_ENV === 'dev') {
    config = dev;
} else if (process.env.REACT_APP_ENV === 'stage') {
    config = stage;
} else if (process.env.REACT_APP_ENV === 'test') {
    config = test;
} else if (process.env.REACT_APP_ENV === 'prod') {
    config = prod;
}

export default config;